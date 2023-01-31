const { exec } = require('node:child_process');

const e = exec('dir', (err, stdout, stderr) => {
    if (err) {
        console.log(`Error: ${err}`);
        return;
    }

    if (stderr) {
        console.log(`StdErr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);

});