class Validator {
  isEmail(em) {
    let reg =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (reg.test(em) === true) {
      return true;
    } else {
      return false;
    }
  }
  isPhone(ph) {
    let reg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    if (reg.test(ph) === true) {
      return true;
    } else {
      return false;
    }
  }
  isDate(date) {
    let reg = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

    if (reg.test(date) === true) {
      return true;
    } else {
      return false;
    }
  }
}
class ValidatorStatic {
  static isEmail(em) {
    let reg =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (reg.test(em) === true) {
      return true;
    } else {
      return false;
    }
  }
  static isPhone(ph) {
    let reg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    if (reg.test(ph) === true) {
      return true;
    } else {
      return false;
    }
  }
  static isDate(date) {
    let reg = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

    if (reg.test(date) === true) {
      return true;
    } else {
      return false;
    }
  }
}
var validator = new Validator();
console.log(validator.isEmail("alismail.ru"));
console.log(validator.isDate("12.05.2"));
console.log(validator.isPhone("+7(910-45-67"));

console.log(ValidatorStatic.isEmail("almail.ru"));
console.log(ValidatorStatic.isDate("105.2021"));
console.log(ValidatorStatic.isPhone("+7(910)123-45-67"));
