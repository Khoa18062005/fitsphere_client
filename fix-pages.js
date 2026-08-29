import fs from 'fs';
import path from 'path';

const pagesPath = path.join('src', 'pages');
const files = ['AdminPage.jsx', 'PersonnelPage.jsx', 'EventDetailPage.jsx'];

for (const file of files) {
  const filePath = path.join(pagesPath, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes('import { useSidebar }')) {
    content = content.replace(/(import React.*?from 'react';)/, `$1\nimport { useSidebar } from '../hooks/useSidebar';`);
  }
  
  if (!content.includes('const { isCollapsed }')) {
    content = content.replace(/(export default function .*?\(\) \{)/, `$1\n    const { isCollapsed } = useSidebar();`);
  }

  // Check if EventDetailPage has ml-72 and fix it if it wasn't fixed
  if (file === 'EventDetailPage.jsx' && content.includes('md:ml-72') && !content.includes('isCollapsed ?')) {
    content = content.replace(
      /className="([^"]*)md:ml-72([^"]*)"/g, 
      'className={`$1w-full relative z-10 transition-all duration-300 ${isCollapsed ? \'md:ml-20\' : \'md:ml-72\'}`}'
    );
  }

  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${file}`);
}
