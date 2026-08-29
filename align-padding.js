import fs from 'fs';
import path from 'path';

const pagesPath = path.join('src', 'pages');
const files = fs.readdirSync(pagesPath);

for (const file of files) {
  if (!file.endsWith('.jsx')) continue;
  
  const filePath = path.join(pagesPath, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace md:p-8 with precise padding to match TopNavBar exactly
  if (content.includes('md:p-8')) {
    content = content.replace(/md:p-8/g, 'md:pl-8 md:pr-4 md:py-8');
  }
  
  if (content.includes('px-gutter md:px-container-margin')) {
    content = content.replace(/px-gutter md:px-container-margin/g, 'px-gutter md:pl-8 md:pr-4');
  }

  fs.writeFileSync(filePath, content);
  console.log(`Aligned padding in ${file}`);
}
