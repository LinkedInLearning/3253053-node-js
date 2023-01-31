const { spawn } = require('node:child_process');

const child = spawn('type', [__filename], { shell: true });

child.stdout.on('data', data => {
    console.log('stdout: \n\t'+ data.toString());
});

child.stderr.on('data', data => {
    console.log('stderror: '+ data);
});

child.on('error', err => console.log(`Error: ${err}`));
child.on('close', code => console.log(`Exited with code: ${code}`));