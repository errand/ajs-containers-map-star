import Settings from './Settings';

const settings = new Settings();

settings.set('theme', 'gray');
settings.set('music', 'pop');
settings.set('difficulty', 'hard');

/* eslint-disable no-console */
console.log(settings.getSettings());
