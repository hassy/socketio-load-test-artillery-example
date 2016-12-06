'use strict';

module.exports = {
  setMessage: setMessage
};

const MESSAGES = [
  'what a nice day',
  'how\'s everybody?',
  'how\'s it going?',
  'what a lovely socket.io chatroom',
  'to be or not to be, that is the question',
  'thanks for all the fish',
  'hack the plane'
];

function setMessage(context, events, done) {
  const index = Math.floor(Math.random() * MESSAGES.length);
  context.vars.message = MESSAGES[index];
  return done();
}
