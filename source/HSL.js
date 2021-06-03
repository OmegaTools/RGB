/*
    Copyright (c) 2021 JDK.FHWS@gmail.com
*/


const { min , max , round } = Math;


const
  angle = 1 / 30,
  offsets = [ 0 , 8 , 4 ];


/*
    [ H , S , L ] -> [ R , G , B ]
*/

module.exports = (...colors) => {

  if(colors.length === 1 || typeof colors[1] !== 'Number')
    colors = colors[0];

  const [ Hue , Saturation , Lightness , Alpha ] = colors;

  const
    hue = Hue * angle;
    a = Saturation * min(Lightness,1 - Lightness);

  const RGB = offsets.map((offset) => {

    offset += hue;

    //  Sector -> Sector Index

    offset %= 12;

    //  Nearest Sector

    offset = min(offset - 3,9 - offset,1);

    //  Limit Sectors

    offset = max(-1,offset);

    //  To Color

    offset *= a;

    //  Correct

    offset = Lightness - offset;

    //  To 265

    offset *= 255;

    //  To Int

    return round(offset);
  });

  if(Alpha)
    RGB.push(Alpha);

  return RGB;
}
