import 'emoji-log';
import browser from 'webextension-polyfill';

browser.runtime.onInstalled.addListener((): void => {
  console.emoji('🦄', 'Cookie Sync extension installed');
});
