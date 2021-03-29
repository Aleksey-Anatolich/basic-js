const CustomError = require("../extensions/custom-error");
module.exports = function transform( arr ) {
  if(Array.isArray(arr)) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {

      if (typeof arr[i]==='undefined'){
        if (i === arr.length-1 || arr.length === 1){
          return arr2;
        }else {
          i++
        }
      }

      if (arr[i] === '--discard-next') {
        if (i === arr.length - 1 || arr.length === 1) {
          return arr2;
        }
        else if (i === arr.length - 2){
          i++;
          return arr2;
        }
        else {
          i = i + 2;
        }
        if (arr[i] === '--double-prev' || arr[i] === '--discard-prev') {
          i++;
        }
        else if (arr[i] === '--discard-next' || arr[i] === '--double-next') {

          i++;
          arr2.push(arr[i]);
        }
      }

      if ( arr[i] ==='--discard-prev'){
        if (i===0){
          i++;
        }else {
          arr2.pop();
          i++
        }
      }

      if( arr[i] ==='--double-next'){
        if (i === arr.length-1 || arr.length === 1) {
          return arr2;
        }
        else {
          arr2.push(arr[i+1]);
          i++
        }
      }

      if( arr[i] ==='--double-prev'){
        if (i===0){
          i++;
        }
        else if(i < arr.length-1) {
          arr2.push(arr[i-1]);
          i++;
        }else {
          arr2.push(arr[i - 1]);
          break;
        }
      }
      arr2.push(arr[i]);
    }
    return arr2;
  }
  return err;
};

