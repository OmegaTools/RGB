
import { assertHSLIsRGB } from 'AssertColor'

const { test } = Deno;


test('HSL Array Conversion',() => {
    
    //  Black
    
    assertHSLIsRGB([ 0 , 0 , 0 ],[ 0 , 0 , 0 ]);

    
    //  White
    
    assertHSLIsRGB([ 0 , 0 , 100 ],[ 255 , 255 , 255 ]);
    
    
    //  Red
    
    assertHSLIsRGB([ 0 , 100 , 50 ],[ 255 , 0 , 0 ]);
    
    
    //  Green
    
    assertHSLIsRGB([ 120 , 100 , 50 ],[ 0 , 255 , 0 ]);
    
    
    //  Blue
    
    assertHSLIsRGB([ 240 , 100 , 50 ],[ 0 , 0 , 255 ]);

})
