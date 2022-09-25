
const { min , max , round } = Math;


const offsets = [ 0 , 8 , 4 ];


function toRGB([ Hue , Saturation , Lightness ]){
    
    Saturation *= 0.01;
    Lightness *= 0.01;

    //  To Degree

    Hue *= 1 / 30;

    const a = Saturation * min(Lightness,1 - Lightness);

    return offsets.map((offset) => {

        offset += Hue;

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
}


/*
 *  [ H , S , L , (A) ] -> [ R , G , B , (A) ]
 */

export default function fromHSL(colors){

    if(colors.length === 1 || (typeof colors[2] !== 'number'))
        colors = colors[0];

    const rgb = toRGB(colors);

    const alpha = colors[3];

    if(alpha)
        rgb.push(alpha);

    return rgb;
}
