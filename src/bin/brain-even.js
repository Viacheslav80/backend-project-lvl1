#!/usr/bin/env node
import { hello, question } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no"');
console.log('');
question(3, hello());
