const { exec } = require('child_process');

exec('npm run build', (err, stdout, stderr) => {
    if (err) {
        console.error(`Error: ${err}`);
        return;
    }
    console.log(stdout);
    console.error(stderr);

    exec('git add dist && git commit -m "adding dist subtree"', (err, stdout, stderr) => {
        if (err) {
            console.error(`Error: ${err}`);
            return;
        }
        console.log(stdout);
        console.error(stderr);

        exec('git subtree push --prefix dist origin gh-pages', (err, stdout, stderr) => {
            if (err) {
                console.error(`Error: ${err}`);
                return;
            }
            console.log(stdout);
            console.error(stderr);
        });
    });
});