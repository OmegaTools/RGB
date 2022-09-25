/*
    Copyright (c) 2021 JDK.FHWS@gmail.com
*/


const { floor } = Math;



function arrayOf(size){
  return Array(size).fill(0);
}


/*
    #RGB -> #RRGGBB
*/

function decodeShorthand(digits){
  return digits.padStart(2,digits);
}


/*
    Base 16 -> Base 10
*/

function hexToDec(string){
  return parseInt(string,16);
}



/*
    "Hex" -> [ R , G , B ]
*/

module.exports = (string) => {

  const
    { length } = string,
    step = (length > 5) + 1,
    offset = string.startsWith('#'),
    size = floor(length / step) - offset;


  return arrayOf(size)
    .map(calcOffset)
    .map(readDigits)
    .map(decodeShorthand)
    .map(hexToDec);


  /*
      String  "#RRGGBB"
      Offset  -->|GG|
      Step       <-->
  */

  function readDigits(offset){
    return string.substr(offset,step);
  }

  function calcOffset(_,index){
    return offset + index * step;
  }
}
