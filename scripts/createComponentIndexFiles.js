#!/usr/bin/env node

const { join } = require("path");
const fs = require("fs");

const srcFolder = join(__dirname, "..", "src");
const componentsFolder = join(srcFolder, "components");
const componentNames = fs.readdirSync(componentsFolder);

const createIndexPath = name => join(componentsFolder, name, "index.js");

// Create index.js file in every component folder
componentNames.forEach(component => {
  const indexPath = createIndexPath(component);
  const indexContent = `import ${component} from "./${component}";\nexport { ${component} };\n`;

  fs.writeFileSync(indexPath, indexContent);
});

const createComponentPath = name => join(componentsFolder, name);

// Create components.js file in src folder
const componentsContent = componentNames.reduce((content, component) => {
  const exportComponentLine = `export * from "./components/${component}";\n`;

  return content.concat(exportComponentLine);
}, "");

fs.writeFileSync(join(srcFolder, "components.js"), componentsContent);
// console.log(componentsContent);
