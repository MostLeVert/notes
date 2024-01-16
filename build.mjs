// import { marked } from 'marked';
import fs from 'fs';

if (!fs.existsSync('./dist')) fs.mkdirSync('./dist')

fs.cpSync('./years', './dist/years', { recursive: true })
 