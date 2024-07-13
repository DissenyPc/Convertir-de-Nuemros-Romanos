function convertToRoman(num) {
  var str = num.toString();
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(parseInt(str[i], 10));
  }
  let arrFinal = [];
  switch (arr[arr.length-1]) {
    case 1: {
    arrFinal.unshift("I");
    break;
    }
    case 2: {
    arrFinal.unshift("II");
    break;
    }
    case 3: {
    arrFinal.unshift("III");
    break;
    }
    case 4: {
    arrFinal.unshift("IV");
    break;
    }
    case 5: {
    arrFinal.unshift("V");
    break;
    }
    case 6: {
    arrFinal.unshift("VI");
    break;
    }
    case 7: {
    arrFinal.unshift("VII");
    break;
    }
    case 8: {
    arrFinal.unshift("VIII");
    break;
    }
    case 9: {
    arrFinal.unshift("IX");
    break;
    }
  }
  if (arr.length > 1) {
  
   switch (arr[arr.length-2]) {
    case 1: {
    arrFinal.unshift("X");
    break;
    }
    case 2: {
    arrFinal.unshift("XX");
    break;
    }
    case 3: {
    arrFinal.unshift("XXX");
    break;
    }
    case 4: {
    arrFinal.unshift("XL");
    break;
    }
    case 5: {
    arrFinal.unshift("L");
    break;
    }
    case 6: {
    arrFinal.unshift("LX");
    break;
    }
    case 7: {
    arrFinal.unshift("LXX");
    break;
    }
    case 8: {
    arrFinal.unshift("LXXX");
    break;
    }
    case 9: {
    arrFinal.unshift("XC");
    break;
    }
  }
 }
  if  (arr.length > 2) {
   switch (arr[arr.length-3]) {
    case 1: {
    arrFinal.unshift("C");
    break;
    }
    case 2: {
    arrFinal.unshift("CC");
    break;
    }
    case 3: {
    arrFinal.unshift("CCC");
    break;
    }
    case 4: {
    arrFinal.unshift("CD");
    break;
    }
    case 5: {
    arrFinal.unshift("D");
    break;
    }
    case 6: {
    arrFinal.unshift("DC");
    break;
    }
    case 7: {
    arrFinal.unshift("DCC");
    break;
    }
    case 8: {
    arrFinal.unshift("DCCC");
    break;
    }
    case 9: {
    arrFinal.unshift("CM");
    break;
    }
  }
  }
   if (arr.length > 3) {
   switch (arr[arr.length-4]) {
    case 1: {
    arrFinal.unshift("M");
    break;
    }
    case 2: {
    arrFinal.unshift("MM");
    break;
    }
    case 3: {
    arrFinal.unshift("MMM");
    break;
    }
   }
   }
let strFinal = arrFinal.toString().replaceAll('""', '').replaceAll(",", "")
  //console.log(arr);
 return strFinal;
}

console.log(convertToRoman(1327));