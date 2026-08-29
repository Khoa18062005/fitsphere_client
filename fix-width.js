import fs from 'fs';
import path from 'path';

const pagesPath = path.join('src', 'pages');
const files = fs.readdirSync(pagesPath);

for (const file of files) {
  if (!file.endsWith('.jsx')) continue;
  
  const filePath = path.join(pagesPath, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace flex-1 with exact width calculations to prevent overflow
  content = content.replace(
    /className=\{\`flex-1 flex flex-col h-full relative z-10 transition-all duration-300 \$\{isCollapsed \? 'md:ml-20' : 'md:ml-72'\}\`\}/g,
    'className={`flex flex-col h-full relative z-10 transition-all duration-300 ${isCollapsed ? \'md:ml-20 w-full md:w-[calc(100%-5rem)]\' : \'md:ml-72 w-full md:w-[calc(100%-18rem)]\'}`}'
  );

  fs.writeFileSync(filePath, content);
  console.log(`Fixed exact width in ${file}`);
}
