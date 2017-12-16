var shell = require('shelljs');
let toCopy = [
  { src: './public', dest: './dist/public',  type: '*' },
  { src: './client', dest: './dist/client', type: '*' }
];

function test() {
  for (let c of toCopy) {
    if (fs.existsSync(c.dest)) {
      shell.rm('-rf', c.dest);
    }
    shell.mkdir('-p', c.dest)  

    let _types = c.type.split(',').map((v) => v.trim());
    let files = fs.readdirSync(c.src);
    
    for (let file of files) {
      _type = file.split('.')[1];
      if (_types.includes(_type) || _types.includes('*')) {
        shell.cp('-R', c.src + '/' + file, c.dest + '/' + file);  
      }
    }
  }
}

exports.test = test;