import timeago from 'timeago.js';

exports.formatTime = (value) => {
  if (!value) return '';
  let timeagoInstance = new timeago();
  return timeagoInstance.format(value);
};
