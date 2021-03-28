const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  let result = Math.pow(2 ,disksNumber)-1;
  let time =Math.floor(result/(turnsSpeed/3600));
  return {turns : result,
    seconds : time
  }
};
