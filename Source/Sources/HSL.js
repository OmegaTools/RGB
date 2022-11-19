
const { min , max , round } = Math;

const offsets = [ 0 , 8 , 4 ];


function toRGB([ Hue , Saturation , Lightness ]){
    
    //  [ 0 - 100 ] -> [ 0 - 1 ]
    
    Saturation *= 0.01;
    Lightness *= 0.01;

    //  To Degree

    Hue *= 1 / 30;

    const a = Saturation * min(Lightness,1 - Lightness);

    return offsets
        .map(toChannel);
    
    
    function toChannel ( offset ){

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
    }
}


/*
 *  [ H , S , L , (A) ] -> [ R , G , B , (A) ]
 */

export default function fromHSL ( colors ){
    return toRGB(colors)
        .concat(colors.splice(3,1));
}
