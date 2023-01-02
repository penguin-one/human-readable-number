module.exports = function toReadable (number) {
  const numStr = number.toString();
  const numLength = numStr.length;
  const arrNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const arrUnit = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const arrDoz = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let result;

  if (numLength === 1) {
	  switch (number) {
      case 0:
        result = 'zero';
        break;
      case 1:
        result = 'one';
        break;
      case 2:
        result = 'two';
        break;
      case 3:
        result = 'three';
        break;
      case 4:
        result = 'four';
        break;
      case 5:
        result = 'five';
        break;
      case 6:
        result = 'six';
        break;
      case 7:
        result = 'seven';
        break;
      case 8:
        result = 'eight';
        break;
      case 9:
        result = 'nine';
  		  break;
    }
	} else if (numLength === 2 && number < 21) {
  		switch (number) {
      	case 10:
        	result = 'ten';
          break;
       	case 11:
        	result = 'eleven';
          break;
        case 12:
        	result = 'twelve';
          break;
        case 13:
        	result = 'thirteen';
          break;
        case 14:
        	result = 'fourteen';
          break;
        case 15:
        	result = 'fifteen';
          break;
        case 16:
        	result = 'sixteen';
          break;
        case 17:
        	result = 'seventeen';
          break;
        case 18:
        	result = 'eighteen';
          break;
        case 19:
        	result = 'nineteen';
          break;
        case 20:
        	result = 'twenty';
          break;
      }
  } else if (numLength === 2 && number >= 21) {
  		for (let i = 0; i < numLength; i++) {
      	let pos = arrNum.indexOf(numStr[i]);
      	if (pos !== -1 && i === 0) {
        	result = `${arrDoz[pos]}`;
        } else {
        	result += ` ${arrUnit[pos]}`;
        }
      }
  } else if (numLength === 3) {
  		for (let i = 0; i < numLength; i++) {
      	let pos = arrNum.indexOf(numStr[i]);
        if (pos !== -1 && i === 0) {
        	result = `${arrUnit[pos]} hundred`;
        } else if (pos !== -1 && i === 1 && arrNum[pos] === '0') {
        	result += '';
        } else if (pos !== -1 && i === 1 && arrNum[pos] === '1') {
          let substr = numStr.slice(1);
          if(+substr < 20) {
            switch(substr) {
              case '10':
                result += ' ten';
                break;
              case '11':
                result += ' eleven';
                break;
              case '12':
                result += ' twelve';
                break;
              case '13':
                result += ' thirteen';
                break;
              case '14':
                result += ' fourteen';
                break;
              case '15':
                result += ' fifteen';
                break;
              case '16':
                result += ' sixteen';
                break;
              case '17':
                result += ' seventeen';
                break;
              case '18':
                result += ' eighteen';
                break;
              case '19':
                result += ' nineteen';
                break;
            }
            break;
          }
        } else if (pos !== -1 && i === 1 && arrNum[pos] !== '1') {
        		result += ` ${arrDoz[pos]}`;
        } else if (pos !== -1 && i === 2) {
        	  result += ` ${arrUnit[pos]}`;
        }
      }
    }
	return result.trim();
}
