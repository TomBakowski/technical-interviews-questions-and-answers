const fs = require('fs');
const path = require('path');
const data = require('../constants/questions-js.ts');

// Your array of objects
const items = [
  // ... your objects here
];

// Directory containing your files
const directoryPath = `${__dirname}/JS/`;

console.log('tomek--- dirname', directoryPath);
console.log('tomek--- data', data);

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  files.forEach(file => {
   const filename = file.split(".")[0]
   const record = data.find((record) => record.slug === filename);


   if (record) {
    const newPath = path.join(directoryPath, record.slug + '.md');

    let yamlFrontMatter = `---\ntitle: "${record.question}"\ndescription: "${record.shortDescription}"\ndate: 2023-11-15T11:32:41\ncategory: "${record.category}"\ntags: [${record.tags.map(tag => `"${tag}"`).join(', ')}]\nurls:\n${record.mdnUrls.map(url => `  - label: "${url.label}"\n    url: "${url.url}"`).join(`\n`)}\n---
     `;

    // Read the existing content of the file
  fs.readFile(newPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    // Append the YAML Front Matter to the top of the file
    const newContent = yamlFrontMatter + data;

    console.log('tomek--- NEW CONTENT', newContent);

   // Write the new content back to the file
    fs.writeFile(newPath, newContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log(`Updated file: ${newPath}`);
      }
    });

  });

    console.log('tomek--- newPath', newPath, yamlFrontMatter);

    //  fs.rename(path.join(directoryPath, file), newPath, function (err) {
    //       if (err) {
    //         console.error('Error renaming file:', err);
    //       } else {
    //         console.log(`Renamed ${file} to ${newPath}`);
    //       }
    //     });


   }

    // items.forEach(item => {
    //   const expectedFileName = path.basename(item.markupFilePath);

    //   if (file === expectedFileName) {
    //     const newPath = path.join(directoryPath, item.slug + '.md');
    //     fs.rename(path.join(directoryPath, file), newPath, function (err) {
    //       if (err) {
    //         console.error('Error renaming file:', err);
    //       } else {
    //         console.log(`Renamed ${file} to ${newPath}`);
    //       }
    //     });
    //   }
    // });
  });
});