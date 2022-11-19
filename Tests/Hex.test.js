
import { assertHexIsRGB } from 'AssertColor'


Deno.test('Hex string conversion retains alpha',() => {
    
    assertHexIsRGB('#00000040',[ 0 , 0 , 0 , 64 ]);
    
})


Deno.test('Hex String Conversion',() => {
    
    //  Black
    
    assertHexIsRGB('#000000',[ 0 , 0 , 0 ]);

    
    //  White
    
    assertHexIsRGB('#FFFFFF',[ 255 , 255 , 255 ]);
    
    
    //  Red
    
    assertHexIsRGB('#FF0000',[ 255 , 0 , 0 ]);
    
    
    //  Green
    
    assertHexIsRGB('#00FF00',[ 0 , 255 , 0 ]);
    
    
    //  Blue
    
    assertHexIsRGB('#0000FF',[ 0 , 0 , 255 ]);


    //  Invalid
    
    assertHexIsRGB('',null);
    assertHexIsRGB('#XXXXXX',null);
    assertHexIsRGB('#00000000XX',null);

})
