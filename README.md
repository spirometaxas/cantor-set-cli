# cantor-set-cli
Print the [Cantor Set](https://en.wikipedia.org/wiki/Cantor_set) to the console!

![What cantor-set-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/cantor-set-cli/main/img/cantor-set-banner.png)

[![npm version](https://img.shields.io/npm/v/cantor-set-cli)](https://www.npmjs.com/package/cantor-set-cli)
[![bundle size](https://img.shields.io/bundlephobia/min/cantor-set-cli)](https://bundlephobia.com/package/cantor-set-cli)
[![downloads](https://img.shields.io/npm/dy/cantor-set-cli)](https://www.npmjs.com/package/cantor-set-cli)
[![license](https://img.shields.io/npm/l/cantor-set-cli)](https://github.com/spirometaxas/cantor-set-cli/blob/main/LICENSE)

Why the console?  Because it's the *cool* way.  

[See All Fractals](https://spirometaxas.com/projects/fractals-cli) in the [fractals-cli](https://www.npmjs.com/package/fractals-cli) project.

## Usage
### Via `npx`:
```
$ npx cantor-set-cli <n>
$ npx cantor-set-cli <n> [size] [options]
```
where `n >= 0` and `size >= n` (if provided).

### Via Global Install
```
$ npm install --global cantor-set-cli
$ cantor-set-cli <n>
$ cantor-set-cli <n> [size] [options]
```
where `n >= 0` and `size >= n` (if provided).

### Via Import
```
$ npm install cantor-set-cli
```
then:
```
const cantor_set = require('cantor-set-cli');
console.log(cantor_set.create(<n>);
console.log(cantor_set.create(<n>, { 
    size: <number>, 
    line: <bold|double|full|block|standard> 
});
```
The config params are optional. 

## Options
### Recursive Step  
```
$ cantor-set-cli <n>
```
The first param `<n>` is the recursive step.  `<n>` should be an integer greater than or equal to 0.

#### Examples:
```
$ cantor-set-cli 3
```
![What cantor-set-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/cantor-set-cli/main/img/cantor-set-3.png)

```
$ cantor-set-cli 4
```
![What cantor-set-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/cantor-set-cli/main/img/cantor-set-4.png)

### Size
```
$ cantor-set-cli <n> [size]
```
The optional `[size]` param allows the Cantor Set to be drawn at larger sizes.  `[size]` should be an integer greater than or equal to `<n>`.  Including size will draw a Cantor Set of `<n>` recursive steps the size of a Cantor Set fractal with `[size]` recursive steps.  

#### Example:
```
$ cantor-set-cli 2 4
```
![What cantor-set-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/cantor-set-cli/main/img/cantor-set-2-4.png)

### Line Type
```
$ cantor-set-cli <n> --line=<bold|double|full|block|standard>
```
The optional `--line` param draws the Cantor Set using different line types.  Supported values:

- `bold`: Draw using bold lines
- `double`: Draw using double lines
- `full`: Draw using full blocks (ANSI inverse codes: `\u001b[7m`) **
- `block`: Draw using block characters (unicode block characters) **
- `standard`: Draw using standard lines (default)


** May look better/worse on certain terminals

#### Examples:
```
$ cantor-set-cli 4 --line=bold
```
![What cantor-set-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/cantor-set-cli/main/img/cantor-set-4-line_bold.png)

```
$ cantor-set-cli 4 --line=double
```
![What cantor-set-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/cantor-set-cli/main/img/cantor-set-4-line_double.png)

```
$ cantor-set-cli 4 --line=full
```
![What cantor-set-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/cantor-set-cli/main/img/cantor-set-4-line_full.png)

## Related

#### Main Project
- [fractals-cli](https://www.npmjs.com/package/fractals-cli) - Print 22 Fractals to the console

#### Fractal Shapes
- [sierpinski-triangle-cli](https://www.npmjs.com/package/sierpinski-triangle-cli) - Print the Sierpinski Triangle to the console
- [sierpinski-carpet-cli](https://www.npmjs.com/package/sierpinski-carpet-cli) - Print the Sierpinski Carpet to the console
- [sierpinski-hexagon-cli](https://www.npmjs.com/package/sierpinski-hexagon-cli) - Print the Sierpinski Hexagon to the console
- [hexaflake-cli](https://www.npmjs.com/package/hexaflake-cli) - Print the Hexaflake Fractal to the console
- [koch-snowflake-cli](https://www.npmjs.com/package/koch-snowflake-cli) - Print the Koch Snowflake to the console
- [koch-antisnowflake-cli](https://www.npmjs.com/package/koch-antisnowflake-cli) - Print the Koch Anti-Snowflake to the console
- [triflake-cli](https://www.npmjs.com/package/triflake-cli) - Print the Triflake Fractal to the console

#### Fractal Patterns
- [cantor-dust-cli](https://www.npmjs.com/package/cantor-dust-cli) - Print the Cantor Dust Fractal to the console
- [h-tree-cli](https://www.npmjs.com/package/h-tree-cli) - Print the H-Tree Fractal to the console
- [minkowski-sausage-cli](https://www.npmjs.com/package/minkowski-sausage-cli) - Print the Minkowski Sausage to the console
- [t-square-cli](https://www.npmjs.com/package/t-square-cli) - Print the T-Square Fractal to the console
- [vicsek-fractal-cli](https://www.npmjs.com/package/vicsek-fractal-cli) - Print the Vicsek Fractal to the console
- [v-tree-cli](https://www.npmjs.com/package/v-tree-cli) - Print the V-Tree Fractal to the console

#### Space Filling Curves
- [dragon-curve-cli](https://www.npmjs.com/package/dragon-curve-cli) - Print the Dragon Curve to the console
- [hilbert-curve-cli](https://www.npmjs.com/package/hilbert-curve-cli) - Print the Hilbert Curve to the console
- [moore-curve-cli](https://www.npmjs.com/package/moore-curve-cli) - Print the Moore Curve to the console
- [peano-curve-cli](https://www.npmjs.com/package/peano-curve-cli) - Print the Peano Curve to the console
- [greek-cross-cli](https://www.npmjs.com/package/greek-cross-cli) - Print the Greek Cross Fractal to the console
- [gosper-curve-cli](https://www.npmjs.com/package/gosper-curve-cli) - Print the Gosper Curve to the console
- [sierpinski-arrowhead-cli](https://www.npmjs.com/package/sierpinski-arrowhead-cli) - Print the Sierpinski Arrowhead Curve to the console
- [sierpinski-curve-cli](https://www.npmjs.com/package/sierpinski-curve-cli) - Print the Sierpinski "Square" Curve to the console

## License
- [MIT](https://github.com/spirometaxas/cantor-set-cli/blob/main/LICENSE) &copy; [Spiro Metaxas](https://spirometaxas.com)