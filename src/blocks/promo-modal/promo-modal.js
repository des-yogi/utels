document.addEventListener('DOMContentLoaded', function () {

  const modalEl = document.getElementById('promoModal');
  if (!modalEl) { return; }
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  const dateTimeOut = modalEl.dataset.timeout;
  const dateExpired = modalEl.dataset.expired;
  //console.log(dateTimeOut);

  //modal.show();
  const convertToNum = function (num) {
    //console.log(Number.isNaN(num));
    if (!num || num < 0 || isNaN(num)) { return 30; }
    return parseInt(num, 10);
  };

  const convertTimeoutToNum = function (num) {
    //console.log(Number.isNaN(num));
    if (!num || num < 0 || isNaN(num)) { return 30000; }
    return parseInt(num, 10);
  };

  //console.log(convertToNum(dateExpired));

  const setNewDate = function () {
    const nowDate = new Date();
    //console.log(nowDate);
    nowDate.setDate( nowDate.getDate() + convertToNum(dateExpired) );
    //console.log(nowDate);
    return nowDate;
  };

  function executeOnce () {
    var argc = arguments.length, bImplGlob = typeof arguments[argc - 1] === "string";
    if (bImplGlob) { argc++; }
    if (argc < 3) { throw new TypeError("executeOnce - not enough arguments"); }
    var fExec = arguments[0], sKey = arguments[argc - 2];
    if (typeof fExec !== "function") { throw new TypeError("executeOnce - first argument must be a function"); }
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { throw new TypeError("executeOnce - invalid identifier"); }
    if (decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) === "1") { return false; }
    fExec.apply(argc > 3 ? arguments[1] : null, argc > 4 ? Array.prototype.slice.call(arguments, 2, argc - 2) : []);
    document.cookie = encodeURIComponent(sKey) + `=1; expires=${setNewDate()}` + (bImplGlob || !arguments[argc - 1] ? "; path=/" : ""); //Fri, 31 Dec 9999 23:59:59 GMT
    return true;
  }
  //console.log(setNewDate());
  //console.log(document.cookie);

  function promoShow (timeout) {
    timeout = convertTimeoutToNum(timeout);

    window.setTimeout(function () {
      modal.show();
    }, timeout);
  }

  executeOnce(promoShow, null, dateTimeOut, "promo_show");
  //executeOnce(callback, null, callback's argument, identifier (string));
  //identifier - is a name of the cookie
});
