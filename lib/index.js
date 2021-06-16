var path = require('path'),
    fs = require('fs');
    
function mover(text = "") {
    let result = ''
    if (text) {
        let textArray = text.split('\n')
        let openFlag = false
        let content = ''
        let frontMatter = ''
        textArray.forEach(line => {
            if (line === '---') {
                openFlag = !openFlag
            } else {

                if (openFlag) {
                    frontMatter = `${frontMatter}\n${line}`
                }
                if (!openFlag) {
                    content = `${content}\n${line}`
                }
            }
        })
        result = `---\n${frontMatter}\n---\n${content}`
    }
    return result
}

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}


module.exports = {
    mover,
    ensureDirectoryExistence
}