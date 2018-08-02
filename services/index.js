const path = require('path');
const glob = require('glob');

glob('services/*.js', (err, files) => {
  if (err) {
    console.log(err);
  } else {
    files.forEach(file => {
      if (file.indexOf('index') === -1) {
        require(path.join(__dirname, path.basename(file)));
      }
    });
  }
});

module.exports = seneca;
