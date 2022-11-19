
<br>

[![Badge Commit]][GitHub]   
[![Badge License]][License]   
[![Badge Stars]][GitHub]

<br>

# HSL

*Convert colors to RGB.*

<br>

[![Button Documentation]][GitHub]

<br>
<br>

## Preview

<br>

```js
import * as RGB from 'https://deno.land/x/rgb/mod.ts';
```

</div>

<br>

### Hex

```js
const hex = '#0000FF'; // Blue

const rgb = RGB.fromHex(hex);

console.log(rgb); // [ 0 , 0 , 255 ]
```

<br>

### HSL

```js
const hsl = [ 0 , 100 , 50 ]; // Red

const rgb = RGB.fromHSL(hsl);

console.log(rgb); // [ 255 , 0 , 0 ]
```

<br>


<!----------------------------------------------------------------------------->

[Examples]: https://github.com/OmegaTools/RGB/tree/main/Examples
[License]: https://github.com/OmegaTools/RGB/blob/main/LICENSE
[GitHub]: https://github.com/OmegaTools/RGB


<!---------------------------------[ Badges ]---------------------------------->

[Badge License]: https://img.shields.io/badge/License-AGPL3-015d93.svg?style=for-the-badge&labelColor=blue
[Badge Stars]: https://img.shields.io/github/stars/OmegaTools/RGB?style=for-the-badge&logoColor=white&logo=Trustpilot&labelColor=FF66AA&color=cf538b
[Badge Commit]: https://img.shields.io/github/last-commit/OmegaTools/RGB?style=for-the-badge&logoColor=white&logo=Git&labelColor=64bc4b&color=539a3e


<!---------------------------------[ Buttons ]--------------------------------->

[Button Documentation]: https://img.shields.io/badge/Documentation-blue?style=for-the-badge&logoColor=white&logo=BookStack
