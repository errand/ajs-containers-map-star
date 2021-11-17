import Settings from './Settings';

const settings = new Settings();
/* eslint-disable no-console */
settings.set('theme', 'gray');
console.log(settings.getSettings());
