import { readFile } from 'node:fs';


readFile('dictionary.json', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});