const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
       const winter ="winter";
    const spring = "spring";
    const summer = "summer";
    const autumn = "autumn";
    if (!date ) {return 'Unable to determine the time of year!'}
    if (Object.prototype.toString.call(date) != '[object Date]'){
      throw new Error('fakeDate')
    }
    let x =date.getMonth();
    if (x === 11|| x ===0||x ===1){
      return winter;
    }
    else if (x === 2||x ===3||x ===4){
      return spring;
    }
    else if (x === 5||x ===6||x ===7){
      return summer;
    }
    else if (x === 8||x ===9||x ===10){
      return autumn;
    }
};
