import fs from 'fs';
import path from 'path';

const pagesPath = path.join('src', 'pages');
const files = fs.readdirSync(pagesPath);

for (const file of files) {
  if (!file.endsWith('.jsx')) continue;
  
  const filePath = path.join(pagesPath, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace max-w-[1200px] with w-full to allow content to expand
  if (content.includes('max-w-[1200px]')) {
    content = content.replace(/max-w-\[1200px\]/g, 'w-full');
  }

  fs.writeFileSync(filePath, content);
  console.log(`Expanded width in ${file}`);
}
