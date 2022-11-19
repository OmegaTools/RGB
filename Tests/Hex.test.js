
import { assertHexIsRGB } from 'AssertColor'


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

})
