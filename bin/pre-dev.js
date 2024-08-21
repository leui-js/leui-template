const fs = require('fs-extra');
const path = require('path');

const templatesDir = path.join(__dirname, 'templates');
const devDir = path.join(__dirname, 'dev-templates');

const fixedValues = {
  projectName: 'le-ui-template'
};

function replaceEjsVars(content) {
  Object.keys(fixedValues).forEach(key => {
    const regex = new RegExp(`<%=\\s*${key}\\s*%>`, 'g');
    content = content.replace(regex, fixedValues[key]);
  });
  return content;
}

function preDev() {
  fs.ensureDirSync(devDir);
  fs.emptyDirSync(devDir);

  const files = fs.readdirSync(templatesDir);

  files.forEach(file => {
    const srcFile = path.join(templatesDir, file);
    const destFile = path.join(devDir, file);

    let content = fs.readFileSync(srcFile, 'utf-8');
    content = replaceEjsVars(content);

    fs.writeFileSync(destFile, content);
  });

  console.log('Development templates prepared successfully.');
}

preDev();
