import axios from 'axios';

const util = {
  APIURL: 'https://ruby-china.org/api/v3/',

  getLocalStorage(key) {
    if (window.localStorage) {
      return JSON.parse(localStorage.getItem(key));
    }
  },
  setLocalStorage(key, data) {
    if (window.localStorage) {
      localStorage.setItem(key, JSON.stringify(data));
    }
  },
  fetch(options) {
    if (!arguments[0] && typeof arguments[0] === "object") {
      return;
    }
    axios({
        method: options.method || 'GET',
        url: options.url,
        data: options.data,
        params: options.params,
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + util.readCookie('fe_token')
        }
      })
      .then((res) => {
        options.successCallback && options.successCallback(res);
      })
      .catch((error) => {
        alert(error.response.data.error_description);
      });
  },
  getUrlParam(name, url) {
    if (!name) {
      return '';
    }
    url = url || location.search;
    name = name.replace(/(?=[\\^$*+?.():|{}])/, '\\');
    var reg = new RegExp('(?:[?&]|^)' + name + '=([^?&#]*)', 'i');
    var match = url.match(reg);
    return !match ? '' : match[1];
  },

  createCookie(name, value, days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
  },

  readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },

  eraseCookie(name) {
    createCookie(name, "", -1);
  },
}

export default util;
