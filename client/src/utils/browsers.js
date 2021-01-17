import { chrome, firefox, opera } from './imgImport';

export const browsers = [
  {
    name: 'Chrome',
    logo: chrome,
    minVersion: 62,
    linkUrl:
      'https://chrome.google.com/webstore/detail/teamsync-bookmarks/bcopfejjlalhckdkmofjciemgnjkffhj?hl=en-US',
  },
  {
    name: 'Firefox',
    logo: firefox,
    minVersion: 55,
    linkUrl:
      'https://addons.mozilla.org/en-US/firefox/addon/webext-private-bookmarks/?src=search',
  },
  {
    name: 'Opera',
    logo: opera,
    minVersion: 46,
    linkUrl: 'https://addons.opera.com/en/extensions/details/bookmarks-2/',
  },
];
