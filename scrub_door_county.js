const fs = require('fs');
const path = require('path');

const cdPath = path.join(__dirname, 'src/data/cityData.ts');
let cdText = fs.readFileSync(cdPath, 'utf8');
const cdMatch = cdText.match(/(export const cityContextData = )([\s\S]+?);/);
let cdObj = eval('(' + cdMatch[2] + ')');

const towns = ['fish-creek', 'egg-harbor', 'sturgeon-bay', 'sister-bay', 'ephraim'];
for(let t of towns) delete cdObj[t];

fs.writeFileSync(cdPath, '// THIS FILE IS 100% GENERATED WITH BESPOKE HARDCODED STRINGS. NO STRING INTERPOLATION.\n' + cdMatch[1] + JSON.stringify(cdObj, null, 2) + ';\n');

const ccPath = path.join(__dirname, 'src/data/cityContent.ts');
let ccText = fs.readFileSync(ccPath, 'utf8');
const header = ccText.substring(0, ccText.indexOf('export const cityData: CityContent[] = '));
const ccMatch = ccText.match(/export const cityData: CityContent\[\] = ([\s\S]+?);/);
let ccObj = eval('(' + ccMatch[1] + ')');
ccObj = ccObj.filter(c => !towns.includes(c.id));

fs.writeFileSync(ccPath, header + 'export const cityData: CityContent[] = ' + JSON.stringify(ccObj, null, 4) + ';\n');
console.log('Successfully updated ts files via ast/eval');
