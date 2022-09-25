
import HSL from './Sources/HSL.js'
import Hex from './Sources/Hex.js'


/**
 *  Convert a Hex color string to RGB
 *  
 *  Alpha channel can be included and won't be altered.
 *
 *  @param color (#)RRGGBB(AA) or (#)RGB(A)
 *  @return An RGB(A) color array 
 */

export function fromHex (
    color : string
) : number [] {
    return Hex( color ) as number [];
}


/**
 *  Convert an HSL color to RGB
 *  
 *  Alpha channel can be included and won't be altered.
 *
 *  @param color Either ( H , S , L , (A) ) or ([ H , S , L , (A) ])
 *  @return A HSL(A) color array 
 */

export function fromHSL ( 
    ... color : number [] | number[][] 
) : number [] {
    return HSL( color ) as number [];
}
