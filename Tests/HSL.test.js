
import { assertHSLIsRGB } from 'AssertColor'


Deno.test('HSL array conversion retains alpha',() => {

    assertHSLIsRGB([ 0 , 0 , 0 , 64 ],[ 0 , 0 , 0 , 64 ]);
    
})


Deno.test('HSL array conversion works',() => {
    
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
