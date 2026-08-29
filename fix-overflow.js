import fs from 'fs';
import path from 'path';

const pagesPath = path.join('src', 'pages');
const files = fs.readdirSync(pagesPath);

for (const file of files) {
  if (!file.endsWith('.jsx')) continue;
  
  const filePath = path.join(pagesPath, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove w-full from the main wrapper to fix overflow
  // The line usually looks like:
  // <div className={`flex-1 flex flex-col h-full w-full relative z-10 transition-all duration-300 ${isCollapsed ? 'md:ml-20' : 'md:ml-72'}`}>
  content = content.replace(/h-full w-full relative z-10/g, 'h-full relative z-10');

  fs.writeFileSync(filePath, content);
  console.log(`Removed w-full in ${file}`);
}
