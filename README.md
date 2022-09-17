# cantor-set-cli
Print the Cantor Set to the console!

## Usage
### Via `npx`:
```
$ npx cantor-set-cli <n>
$ npx cantor-set-cli <n> <size>
```

### Via Global Install
```
$ npm install --global cantor-set-cli
$ cantor-set-cli <n>
$ cantor-set-cli <n> <size>
```

### Via Import
```
$ npm install cantor-set-cli
```
then:
```
const cantor_set = require('cantor-set-cli');
console.log(cantor_set.create(<n>);
console.log(cantor_set.create(<n>, { size: <number>, line: <bold|double|full|block|standard> });
```
The config params are optional. 