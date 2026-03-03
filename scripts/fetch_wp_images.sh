#!/bin/bash
URLS=(
    "https://valleywindowcare.com/wp-content/uploads/2022/02/window-cleaning-8-scaled.jpeg"
    "https://valleywindowcare.com/wp-content/uploads/2022/02/window-cleaning-6-scaled.jpeg"
    "https://valleywindowcare.com/wp-content/uploads/2022/02/window-cleaning-5-scaled.jpeg"
    "https://valleywindowcare.com/wp-content/uploads/2022/02/window-cleaning-2-scaled.jpeg"
    "https://valleywindowcare.com/wp-content/uploads/2022/02/Window_cleaning_company-scaled.jpeg"
    "https://valleywindowcare.com/wp-content/uploads/2022/02/roof-cleaning-1-scaled.jpeg"
    "https://valleywindowcare.com/wp-content/uploads/2022/02/roof-cleaning-5-scaled.jpeg"
    "https://valleywindowcare.com/wp-content/uploads/2022/02/Roof-soft-washing-company-wi-scaled.jpeg"
    "https://valleywindowcare.com/wp-content/uploads/2022/10/Christmas-light-installers-green-bay-1.jpg"
    "https://valleywindowcare.com/wp-content/uploads/2022/10/Christmas-light-company-green-bay.jpg"
    "https://valleywindowcare.com/wp-content/uploads/2022/10/Permanent-holiday-lights-scaled.jpg"
    "https://valleywindowcare.com/wp-content/uploads/2022/02/house-washing-green-bay-1-1-scaled.jpeg"
    "https://valleywindowcare.com/wp-content/uploads/2022/02/house-washing-green-bay-8-1-scaled.jpeg"
    "https://valleywindowcare.com/wp-content/uploads/2022/02/house-washing-1-scaled.jpeg"
    "https://valleywindowcare.com/wp-content/uploads/2022/02/Soft_Washing_company-scaled.jpeg"
    "https://valleywindowcare.com/wp-content/uploads/2022/02/concrete-cleaning-2-scaled.jpeg"
    "https://valleywindowcare.com/wp-content/uploads/2022/02/concrete-power-washing-scaled.jpeg"
    "https://valleywindowcare.com/wp-content/uploads/2022/02/concrete-cleaning-4-scaled.jpeg"
    "https://valleywindowcare.com/wp-content/uploads/2022/02/Concrete-cleaning-company-1-scaled.jpeg"
    "https://valleywindowcare.com/wp-content/uploads/2022/02/gutter-cleaning-3-scaled.jpeg"
    "https://valleywindowcare.com/wp-content/uploads/2022/02/gutter-cleaning-5-scaled.jpeg"
)
for url in "${URLS[@]}"; do
    filename=$(basename "$url")
    curl -s -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)" -o "public/gallery/authentic/wp/$filename" "$url"
done
ls -lh public/gallery/authentic/wp
