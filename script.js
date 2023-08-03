function updateTime() {
  var dateInfo = new Date();

  // time
  var hr = dateInfo.getHours(),
    _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
    sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
    ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";

  // replace 0 with 12 at midnight, subtract 12 from hour if 13-23
  if (hr == 0) {
    hr = 12;
  } else if (hr > 12) {
    hr = hr - 12;
  }

  var currentTime = hr + ":" + _min + ":" + sec;

