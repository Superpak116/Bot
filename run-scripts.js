const { exec } = require('child_process');

const runScript = (scriptPath) => {
  const child = exec(`node ${scriptPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error running ${scriptPath}: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error output from ${scriptPath}: ${stderr}`);
      return;
    }
    console.log(`Output from ${scriptPath}:\n${stdout}`);
  });

  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);
};

runScript('RoleManagement/register-commands.js');

runScript('RoleManagement/index.js');