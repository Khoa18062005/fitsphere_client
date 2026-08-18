import fs from 'fs';
import path from 'path';

const stitchPath = path.join('..', 'stitch_uni_youth_union_hub');
const pagesPath = path.join('src', 'pages');

if (!fs.existsSync(pagesPath)) {
  fs.mkdirSync(pagesPath, { recursive: true });
}

const map = {
  'trang_ch_qu_n_l_o_n_h_i': 'HomePage',
  'nh_n_s_o_n_h_i': 'PersonnelPage',
  'qu_n_tr_h_th_ng': 'AdminPage',
  'trang_c_nh_n': 'ProfilePage',
  'ch_o_m_ng_qu_n_l_o_n_h_i': 'WelcomePage',
};

const folders = fs.readdirSync(stitchPath);

for (const folder of folders) {
  if (!map[folder]) continue;
  
  const componentName = map[folder];
  const htmlPath = path.join(stitchPath, folder, 'code.html');
  if (!fs.existsSync(htmlPath)) continue;

  let content = fs.readFileSync(htmlPath, 'utf8');

  // Extract body tag and its content
  const bodyMatch = content.match(/<body([^>]*)>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) continue;
  
  let bodyAttr = bodyMatch[1];
  let body = bodyMatch[2];

  // Extract class from bodyAttr
  let bodyClasses = '';
  const classMatch = bodyAttr.match(/class="([^"]*)"/i);
  if (classMatch) {
    bodyClasses = classMatch[1];
  }

  // Convert HTML to JSX
  body = body.replace(/class="/g, 'className="');
  body = body.replace(/viewbox="/gi, 'viewBox="');
  body = body.replace(/for="/g, 'htmlFor="');
  body = body.replace(/stroke-width/g, 'strokeWidth');
  body = body.replace(/stroke-linecap/g, 'strokeLinecap');
  body = body.replace(/stroke-linejoin/g, 'strokeLinejoin');
  body = body.replace(/fill-rule/g, 'fillRule');
  body = body.replace(/clip-rule/g, 'clipRule');
  body = body.replace(/tabindex/g, 'tabIndex');
  
  // Self close tags
  const tagsToClose = ['img', 'br', 'hr', 'input', 'meta', 'link'];
  for (const tag of tagsToClose) {
    const regex = new RegExp(`(<${tag}\\b[^>]*)(?<!/)>`, 'gi');
    body = body.replace(regex, '$1 />');
  }

  // Remove comment inside SVG or things that might break JSX
  body = body.replace(/<!--[\s\S]*?-->/g, (match) => {
    return `{/* ${match.replace(/<!--|-->/g, '').trim()} */}`;
  });

  const jsxCode = `import React from 'react';

export default function ${componentName}() {
  return (
    <div className="${bodyClasses}">
      ${body}
    </div>
  );
}
`;

  fs.writeFileSync(path.join(pagesPath, `${componentName}.jsx`), jsxCode);
  console.log(`Converted ${folder} to ${componentName}.jsx`);
}
