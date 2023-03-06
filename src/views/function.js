import { _URL } from "./const";
export const getData = () =>
  fetch(_URL, {
    method: "POST",
  }).then((response) => response.json());

export const getDetailCoin = (symbol) => {
  const form_data = new FormData();
  form_data.append("symbol", symbol);
  return fetch(_URL, {
    method: "POST",
    body: form_data,
    redirect: "follow",
  }).then((response) => response.json());
};

export function getStatus(status, id) {
  const idx = this.data_table.findIndex((item) => item.id == id);
  if (idx > -1) {
    if (status == true) {
      return "changed";
    }
  }
  return "normal";
}
export function getColor(color_val) {
  if (Number(color_val) >= 0) {
    return "color-green";
  } else {
    return "color-red";
  }
}
export function getScoreColor(color_val) {
  if (Number(color_val) > 70) {
    return "color-green";
  } else if (Number(color_val) < 30) {
    return "color-red";
  } else {
    return "color-orange";
  }
}
export function getPersonChangeColor(color_val) {
  if (Number(color_val) > 70) {
    return "color-green";
  }
  return "color-red";

}


export function getSrc(src) {
  return (
    "https://quantifycrypto.s3-us-west-2.amazonaws.com/pictures/crypto-img/32/icon/" +
    src.toLowerCase() +
    ".png"
  );
}

export function getMACD(macd_hist) {
  if (macd_hist < 0) return "Bearish";
  return "Bullish";
}
export function getBaseLineColor(price , val) {
  if (parseFloat(val) < parseFloat(price)) {
    return "color-green";
  } else {
    return "color-red";
  }
}
export function getSportColor(price , val) {
  if (parseFloat(price) < parseFloat(val)) {
    return "color-green";
  } else {
    return "color-orange";
  }
}
export function getResistanceColor(price , val) {
  if (parseFloat(price) > parseFloat(val)) {
    return "color-red";
  } else {
    return "color-orange";
  }
}
export function getColorBB(value) {
  if (value == "Above") return "color-green";
  if (value == "Below") return "color-red";
  return "color-orange";
}

export function getBB(price, up, low) {
  if (price > up) return "Above";
  if (price < low) return "Below";
  return "Inside";
}
const list_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function checkNumbertoArray(arrar) {
  let tempt = 0;
  arrar.forEach((element) => {
    list_number.includes(Number(element)) && tempt++;
  });
  return tempt;
}

export function flooNumber(number) {
  if (parseFloat(number) > 1) {
    return Math.floor(number * 100) / 100;
  }
  let [arr, _number] = [[], String(number)];
  for (let index = 0; index < _number.length; index++) {
    const element = _number[index];
    if (element == "." || element == "0") {
      arr.push(element);
    } else {
      if (checkNumbertoArray(arr) < 2) {
        arr.push(element);
      } else {
        if (Number(element) >= 5) {
          arr[arr.length - 1] = Number(arr[arr.length - 1]) + 1;
        } else {
          arr[arr.length - 1] = Number(arr[arr.length - 1]) - 1;
        }
        return arr.join("");
      }
    }
  }
}

export function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
export function getRealValue(number) {
  if (Math.abs(number) > 1) {
    return formatter.format(Math.round(number * 100) / 100);
  }
  else if (number == 0) {
    return formatter.format(0);
  }
  else {
    const pos = Math.floor(Math.log10(Math.abs(number))) * -1 + 1;
    return formatter.format(Math.floor(number * Math.pow(10, pos)) / Math.pow(10, pos));
  }
}
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

