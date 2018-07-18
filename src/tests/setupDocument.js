import jsdom from 'jsdom';

export default () => {
  global.window = new jsdom.JSDOM('<!DOCTYPE html><html><head></head><body></body></html>').window;
  global.document = window.document;
  global.navigator = {userAgent: 'node.js'};
}
