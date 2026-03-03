import os
import sys
import json
import urllib.request
import urllib.parse
import re

def scrape_duckduckgo(query, max_results, dest_folder):
    print(f"Scraping DDG for: '{query}' -> {dest_folder}")
    if not os.path.exists(dest_folder):
        os.makedirs(dest_folder)
        
    url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(query)}"
    req = urllib.request.Request(
        url, 
        data=None, 
        headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    )
    
    try:
        response = urllib.request.urlopen(req)
        html = response.read().decode('utf-8')
        
        # In the html version of DDG, images are typically in the vqd token request or just embedded as thumbnails
        # Actually DuckDuckGo requires a vqd token for the image endpoint.
        # It's easier to just use Yahoo Images or Bing Images.
    except Exception as e:
        print(f"Error fetching DDG html: {e}")
        pass

# Let's use Yahoo Image Search as it's very easy to scrape without API keys
def scrape_yahoo(query, max_results, dest_folder):
    print(f"Scraping Yahoo for: '{query}' -> {dest_folder}")
    if not os.path.exists(dest_folder):
        os.makedirs(dest_folder)
        
    url = f"https://images.search.yahoo.com/search/images?p={urllib.parse.quote(query)}"
    req = urllib.request.Request(
        url, 
        headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
        }
    )
    
    try:
        response = urllib.request.urlopen(req)
        html = response.read().decode('utf-8')
        
        # Yahoo stores hi-res image URLs in a data-attribute or json string
        # Match imgurl="http..."
        urls = re.findall(r'imgurl=&quot;(http[^&]+)&quot;', html)
        if not urls:
            urls = re.findall(r'"imgurl":"([^"]+)"', html)
        
        # Decode urls if needed and filter out ones that don't look like images
        valid_urls = []
        for u in urls:
            u_clean = u.replace('\\/', '/')
            if '.jpg' in u_clean or '.jpeg' in u_clean or '.png' in u_clean or '.webp' in u_clean:
                if u_clean not in valid_urls:
                    valid_urls.append(u_clean)
                    
        print(f"Found {len(valid_urls)} image URLs.")
        downloaded = 0
        for i, img_url in enumerate(valid_urls):
            if downloaded >= max_results:
                break
            try:
                dest_path = os.path.join(dest_folder, f"scraped_{query.replace(' ', '_')}_{i}.jpg")
                urllib.request.urlretrieve(img_url, dest_path)
                
                # Check size > 150KB
                if os.path.getsize(dest_path) > 150 * 1024:
                    downloaded += 1
                    print(f" Downloaded [OK]: {dest_path}")
                else:
                    os.remove(dest_path) # Too small
                    
            except Exception as e:
                pass
                
        print(f"Successfully downloaded {downloaded} >150KB images for {query}")
        
    except Exception as e:
        print(f"Error fetching Yahoo: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 4:
        print("Usage: python script.py <query> <count> <dest_folder>")
        sys.exit(1)
    scrape_yahoo(sys.argv[1], int(sys.argv[2]), sys.argv[3])
