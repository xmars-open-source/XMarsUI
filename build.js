const chalk = require('chalk');
const execa = require('execa');
const rimraf = require('rimraf');
const cherryPick = require('cherry-pick').default;

const shell = (cmd) =>
  execa.sync(cmd, { stdio: ['pipe', 'pipe', 'inherit'], shell: true });

console.log(chalk.rgb(255, 136, 0).bold('XMars UI'));
console.log(chalk.rgb(255, 136, 0).bold('--------'));
console.log(chalk.yellow('Building'));

console.log(chalk.yellow(':remove old files'));
console.log(chalk.yellow('rm dist'));
rimraf.sync('dist');
console.log(chalk.yellow('rm cjs'));
rimraf.sync('cjs');
console.log(chalk.yellow('rm esm'));
rimraf.sync('esm');
console.log(chalk.yellow('rm types'));
rimraf.sync('types');

function build() {
    console.log(chalk.yellow(':build sources'));

    console.log(chalk.yellow('build:web'));
    shell('npm run build:web');

    console.log(chalk.yellow('build:cjs'));
    shell('npm run build:cjs');

    console.log(chalk.yellow('build:esm'));
    shell('npm run build:esm');

    console.log(chalk.yellow('build:css'));
    shell('npm run build:css');

    console.log(chalk.yellow('chery pick'));
    cherryPick({
      inputDir: './components',
      cjsDir: 'cjs',
      esmDir: 'esm',
      typesDir: 'types'
    })
}

build();
