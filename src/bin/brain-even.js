#!/usr/bin/env node
import { hello, gameOne } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no"');
console.log('');
gameOne(3, hello());
