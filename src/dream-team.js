const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members) {

  let arr2=[];
  let arr3='';
  if (Array.isArray(members)){
    if (members.indexOf(toString())){
      for (let i = 0; i <members.length ; i++) {
        if (typeof members[i] === "string"){
          arr2= members[i].trim().toUpperCase().split('');
          arr3 += arr2[0];
        }
      }
      return arr3.split('').sort().join('');
    }
  }
  return false;
};
