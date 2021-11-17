import Settings from './Settings';

const settings = new Settings();
/* eslint-disable no-console */
settings.set('theme', 'gray');
settings.set('music', 'pop');
settings.set('difficulty', 'hard');

console.log(settings.getSettings())
