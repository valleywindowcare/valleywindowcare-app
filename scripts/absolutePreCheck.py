import os
import sys
import json
import shutil
import glob
import time

SCRATCH_DIR = '/Users/james/.gemini/antigravity/scratch/organized-media'
PUBLIC_GALLERY = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../public/gallery')

BLOG_JSON = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../src/data/blogContent.json')
IMAGE_MAP_JSON = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../src/data/imageMap.json')
SERVICE_CONTENT_TS = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../src/data/serviceContent.ts')

PHONE_NUMBER = "920-609-7085"

# Due to Antigravity's tooling model, generating images via API directly from an independent Node script is not natively available to the JS environment (only the LLM core). 
# However, we can track our deficit explicitly! 
# We need 21 cities. 2 max uses means we need exactly 11 valid unique images per category to cover all 21 iterations.
# We will flag which categories lack 11 images, generate them exactly via AI, then complete the node script.

wisconsinCities = [
    'green bay', 'appleton', 'oshkosh', 'de pere', 'howard', 'suamico', 
    'ashwaubenon', 'bellevue', 'neenah', 'menasha', 'kaukauna', 'little chute', 
    'kimberly', 'wrightstown', 'hobart', 'fond du lac', 'manitowoc', 
    'sheboygan', 'sturgeon bay', 'door county', 'fox valley'
]

def get_mapped_folder(serviceName):
    if not serviceName: return None
    s = serviceName.lower().strip()
    if 'commercial pressure' in s: return 'commercial-pressure-wash'
    if 'commercial window' in s: return 'commercial-window-clean'
    if 'window' in s: return 'window-cleaning'
    if 'roof' in s: return 'roof-cleaning'
    if 'gutter guard' in s: return 'gutter-guard'
    if 'gutter' in s: return 'gutter-cleaning'
    if 'pressure' in s: return 'pressure-washing'
    if 'house' in s: return 'house-wash'
    if 'concrete' in s or 'paver' in s: return 'concrete-cleaning'
    if 'driveway' in s: return 'driveway-cleaning'
    if 'christmas' in s or 'holiday' in s: return 'christmas-lighting'
    if 'apartment' in s or 'hoa' in s or 'multi-unit' in s: return 'apartment-cleaning'
    return None

services_to_map = [
    'window-cleaning', 'roof-cleaning', 'pressure-washing', 'gutter-cleaning',
    'house-washing', 'concrete-cleaning', 'commercial-window-clean', 
    'driveway-cleaning', 'gutter-guard', 'christmas-lighting', 'apartment-cleaning',
    'commercial-pressure-wash'
]

def run_pre_check():
    print("== Initiating Full-Site Global Overwrite Pre-Check ==")
    
    pools = {get_mapped_folder(s): [] for s in services_to_map if get_mapped_folder(s)}
    
    # 1. Clean Gallery
    if os.path.exists(PUBLIC_GALLERY):
        shutil.rmtree(PUBLIC_GALLERY)
    os.makedirs(PUBLIC_GALLERY, exist_ok=True)
    
    # 2. Index Scratches
    if os.path.exists(SCRATCH_DIR):
        for d in os.listdir(SCRATCH_DIR):
            if os.path.isdir(os.path.join(SCRATCH_DIR, d)):
                clean_cat = d.replace(':', '')
                if clean_cat in pools:
                    for f in os.listdir(os.path.join(SCRATCH_DIR, d)):
                        fpath = os.path.join(SCRATCH_DIR, d, f)
                        if os.path.isfile(fpath) and f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
                            if os.path.getsize(fpath) > 150 * 1024:
                                pools[clean_cat].append(fpath)
                                
    # 3. Calculate Deficit based on Strict 2-Use rule limits for 21 iterations (21/2 = 11 unique assets req)
    deficit_map = {}
    for cat, assets in pools.items():
        count = len(assets)
        print(f"[Indexed] {cat}: {count} >150KB assets loaded.")
        if count < 11:
            deficit_map[cat] = 11 - count
            
    if len(deficit_map) > 0:
        print("\\n[CRITICAL]: To satisfy the MAX TWO USES rule across 21 cities, we need 11 unique images per service.")
        for cat, deficit in deficit_map.items():
            print(f" -> {cat} needs {deficit} additional unique photorealistic AI assets generated natively.")
        print("\\nHALTING EXECUTION. AGENT MUST GENERATE THESE VIA NATIVE API TOOLING BEFORE CONTINUING.")
        with open('deficit.json', 'w') as f:
            json.dump(deficit_map, f)
        sys.exit(200)
    else:
        print("\\n[OK] All categories possess 11+ unique >150KB assets. We can complete the 2-use distribution.")
        sys.exit(0)

if __name__ == "__main__":
    run_pre_check()
