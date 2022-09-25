

import { fromHex , fromHSL } from 'RGB'
import { assertEquals } from 'Assert'


export function assertHexIsRGB(input,output){
    assertEquals(fromHex(input),output);
}


export function assertHSLIsRGB(input,output){
    assertEquals(fromHSL(input),output);
}
