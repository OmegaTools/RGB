
import { HexSingleChannel , HexDoubleChannel } from './Regex.js'


const toNumber = ( string ) =>
    parseInt(string,16);

const isPresent = ( value ) =>
    value;


/*
 *  Input : (#)RRGGBB(AA) or (#)RGB(A)
 *  Output : [ R , G , B , (A) ] or null
 */

export default function fromHex ( string ){
    
    const matches = findHex(string);
    
    return ( matches )
        ? parse(matches)
        : null ;
}


/*
 *  Attempt to find a hex color string.
 */

function findHex ( string ){
    return string.match(HexDoubleChannel)
        ?? string.match(HexSingleChannel) ;
}


/*
 *  Parse matched hex color channels.
 */

function parse ( matches ){
    
    const channels = matches
        .slice(1)
        .filter(isPresent)
        .map(toNumber);

    return channels;
}
