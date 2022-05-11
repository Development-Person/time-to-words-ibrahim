// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // for now assume valid input - but we can go back to this - assuming no am or pm for now

  const numberConversions = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
  };

  let [hour, minutes] = time.split(':');
  hour = Number(hour);
  minutes = Number(minutes);

  if (minutes === 0) {
    if (hour === 0) {
      return 'midnight';
    }

    if (hour === 12) {
      return 'midday';
    }
    return `${numberConversions[hour]} o'clock`;
  }
  if (minutes === 30) {
    return `half past ${numberConversions[hour]}`;
  }

  if (minutes < 30) {
    if (minutes === 15) {
      return `quarter past ${numberConversions[hour]}`;
    }

    return `${numberConversions[minutes]} past ${numberConversions[hour]}`;
  }

  if (minutes > 30) {
    if (minutes === 45) {
      return `quarter to ${numberConversions[hour + 1]}`;
    }

    return `${numberConversions[60 - minutes]} to ${
      numberConversions[hour + 1]
    }`;
  }

  return 'invalid time!';
}

module.exports = { convertTimeToWords };
