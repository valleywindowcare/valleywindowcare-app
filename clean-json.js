const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'serviceAreasContent.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Exact match matrix from previous updates
const imageMapping = {
  // Commercial wildcard fallbacks
  'Apartment / HOA Exterior Cleaning': '/images/portfolio/building-wash-copy.webp',
  'Building Washing': '/images/portfolio/building-wash-copy.webp',
  'Commercial Roof Cleaning': '/images/portfolio/building-wash-copy.webp',
  'HOA Services': '/images/portfolio/building-wash-copy.webp',
  
  // Specific Commercial Outliers
  'Drive-Thru Cleaning': '/images/portfolio/commercial-cleaning.webp',
  'Dumpster Pad Cleaning': '/images/portfolio/commercial-cleaning.webp',
  'Gas Station Cleaning': '/images/portfolio/commercial-cleaning.webp',
  'Graffiti Removal': '/images/portfolio/commercial-cleaning.webp',
  'Parking Lot & Garage Cleaning': '/images/portfolio/commercial-cleaning.webp',
  'Rust Removal': '/images/portfolio/commercial-cleaning.webp', // Assuming commercial for now, can adjust
  'Chewing Gum Removal': '/images/portfolio/commercial-cleaning.webp',
  
  // Specific Services Mapped
  'Driveway Cleaning': '/images/portfolio/commercial-cleaning.webp', // As instructed previously
  'Solar Panel Cleaning': '/images/portfolio/roof-cleaning-copy-2.webp', // As instructed previously
  'Professional Awning Cleaning': '/images/portfolio/awning-cleaning.webp', // As instructed previously
  'Awning Cleaning': '/images/portfolio/awning-cleaning.webp',

  // Standard category matches (from public/images/portfolio/)
  'Roof Cleaning': '/images/portfolio/roof-cleaning.webp',
  'House Washing': '/images/portfolio/house-wash-before-after.webp', // The provided asset in the json was this usually, but let's see what's in portfolio
  'Gutter Cleaning': '/images/portfolio/gutter-cleaning.webp',
  'Concrete Cleaning': '/images/portfolio/concrete-cleaning.webp',
  'Window Cleaning': '/images/portfolio/window-cleaning-before-after.JPG.webp', // Was used in JSON, let's keep it or swap to window-cleaning.webp
  'Permanent LED Lighting': '/images/portfolio/permanent-lights.webp',
  'Christmas Lighting': '/images/portfolio/permanent-lights.webp',
  'Fence Cleaning': '/images/portfolio/fence-cleaning.webp',
  'Deck Cleaning': '/images/portfolio/deck-cleaning.webp'
};

let changes = 0;

data.forEach(item => {
  if (item.headerImage === '/images/portfolio/valley-window-care-truck.webp' || 
      item.headerImage === '/images/portfolio/commercial-cleaning.webp' && item.category !== 'Concrete Cleaning') {
      
      let newImage = null;
      
      // 1. Try mapping the exact service name first (highest priority)
      if (item.service) {
         // Some services have "in City, WI" attached in their title, so we use the base service name
         const rootService = item.service.replace(/ in .*/, '').trim();
         
         if (imageMapping[rootService]) {
             newImage = imageMapping[rootService];
         }
      }
      
      // 2. Fallback to category mapping
      if (!newImage && item.category && imageMapping[item.category]) {
          newImage = imageMapping[item.category];
      }
      
      // 3. Absolute wildcard fallback for anything still unmapped
      if (!newImage) {
           newImage = '/images/portfolio/house-wash-before-after.webp'; // ultimate fallback
      }

      if (newImage && item.headerImage !== newImage) {
          item.headerImage = newImage;
          changes++;
      }
  }
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
console.log(`Successfully updated ${changes} duplicate logic entries.`);
