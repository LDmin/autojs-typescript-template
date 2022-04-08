const fs = require('fs')
const path = require('path')

let layouts = {
  length: 0
}

module.exports = function (content, map, meta) {
  return content.replace(/(\$ui\.layout\(.*?\))/sg, function (word) {
    word = word.replace(/\n/g, '')
    layouts.length += 1
    layouts[layouts.length] = word
    return `"AutoJsUILayout_${layouts.length}"`
  });
};

class AutoUIPlugin {
  // Define `apply` as its prototype method which is supplied with compiler as its argument
  apply(compiler) {
    // Specify the event hook to attach to
    compiler.hooks.done.tapAsync(
      'AutoUIPlugin',
      (compilation, callback) => {
        const dist = path.join(__dirname, '../dist')
        fs.readdir(dist, (err, files) => {
          files.map(file => {
            if (file.indexOf('bundle.js') > -1) {
              const filePath = path.join(dist, file)
              let data = fs.readFileSync(filePath, 'utf8')
              if (data.indexOf("ui;") !== 0) {
                data = '"ui";' + data;
              }
              data = data.replace(/\"AutoJsUILayout_(\d+)\"/gm, function (word) {
                const length = Number(word.replace(/\"/g, '').split('_')[1])
                return layouts[length]
              })
              fs.writeFileSync(filePath, data, 'utf8')
              console.log('autoui rewrite: ' + file)
            }
          });

          layouts = {
            length: 0
          }
        });
        callback()
      }
    );
  }
}

module.exports.AutoUIPlugin = AutoUIPlugin
