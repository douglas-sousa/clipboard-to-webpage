const events = require('events');
const clipboardEvent = new events.EventEmitter();

const cp = require('./cp-config');
const { hasJapaneseText } = require('../util');

let content = '';

setInterval(async () => {
  const newContent = await cp.paste();
  if (hasJapaneseText(newContent) && content !== newContent) {
    content = newContent;
    clipboardEvent.emit('new-content', content);
  }
}, 1000);

module.exports = {
  clipboardEvent
};