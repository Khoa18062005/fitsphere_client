import fs from 'fs';
import path from 'path';

const pagesPath = path.join('src', 'pages');
const files = fs.readdirSync(pagesPath);

for (const file of files) {
  if (!file.endsWith('.jsx')) continue;
  
  const filePath = path.join(pagesPath, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix style attribute using backticks to avoid escaping issues
  content = content.replace(/style="font-variation-settings:\s*'FILL'\s*1;"/g, `style={{ fontVariationSettings: "'FILL' 1" }}`);
  
  // Remove <script> ... </script> completely
  content = content.replace(/<script>[\s\S]*?<\/script>/g, '');
  
  // Remove <style> ... </style> completely
  content = content.replace(/<style>[\s\S]*?<\/style>/g, '');

  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${file}`);
}
