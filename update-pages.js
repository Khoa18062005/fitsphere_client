import fs from 'fs';
import path from 'path';

const pagesPath = path.join('src', 'pages');
const files = fs.readdirSync(pagesPath);

for (const file of files) {
  if (!file.endsWith('.jsx') || file === 'WelcomePage.jsx') continue;
  
  const filePath = path.join(pagesPath, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if we need to add the import
  if (!content.includes('useSidebar')) {
    content = content.replace(/(import .*?from 'react-router-dom';)/, `$1\nimport { useSidebar } from '../hooks/useSidebar';`);
  }
  
  // Check if we need to extract isCollapsed
  if (!content.includes('const { isCollapsed }')) {
    content = content.replace(/(const navigate = useNavigate\(\);)/, `$1\n    const { isCollapsed } = useSidebar();`);
  }

  // Update the wrapper div
  if (content.includes('md:ml-72')) {
    content = content.replace(
      /className="([^"]*)md:ml-72([^"]*)"/g, 
      'className={`$1w-full relative z-10 transition-all duration-300 ${isCollapsed ? \'md:ml-20\' : \'md:ml-72\'}`}'
    );
  }

  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${file}`);
}
