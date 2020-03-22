import { isOverflown, createElem, appendElem, getTimestamp } from './utils.mjs';

window.addEventListener('DOMContentLoaded', () => {
  const connectionStatus = document.querySelector('.connection-status');
  const clipboardContent = document.querySelector('.clipboard-content');

  const socket = io();
  socket.on('connect', () => {
    connectionStatus.innerText = 'Socket connection established!';
    connectionStatus.style.visibility = 'unset';
    connectionStatus.style.opacity = 0;
  });

  socket.on('disconnect', () => {
    connectionStatus.innerText = 'Socket connection lost!';
    connectionStatus.style.opacity = 1;
  });

  socket.on('new-message', (msg) => {
    const { data } = msg;

    const timestampSpan = createElem('span', getTimestamp());
    const contentSpan = createElem('span', data);
    const p = createElem('p');

    appendElem(p, timestampSpan);
    appendElem(p, contentSpan);
    appendElem(clipboardContent, p);

    if (isOverflown(clipboardContent)) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  });
});
