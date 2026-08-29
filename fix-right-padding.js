import fs from 'fs';
import path from 'path';

const pagesPath = path.join('src', 'pages');
const files = fs.readdirSync(pagesPath);

for (const file of files) {
  if (!file.endsWith('.jsx')) continue;
  
  const filePath = path.join(pagesPath, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Change md:pr-4 to md:pr-7 (28px) to align precisely with the dropdown arrow
  // which is 16px (px-gutter) + 12px (pr-3) = 28px from the right edge.
  if (content.includes('md:pr-4')) {
    content = content.replace(/md:pr-4/g, 'md:pr-7');
  }

  fs.writeFileSync(filePath, content);
  console.log(`Fixed right padding in ${file}`);
}
