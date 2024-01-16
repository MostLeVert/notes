import { marked } from 'marked';
import fs from 'fs';
import path from 'path';

if (fs.existsSync('./dist')) {
    fs.rmSync('./dist', { recursive: true })
}
fs.mkdirSync('./dist')
fs.cpSync('./src', './dist/', { recursive: true })

const template = fs.readFileSync('./template.html', 'utf-8')

fs.readdirSync('./dist').forEach(file => {
    if (file.endsWith('.md')) {
    }
});

function recurseDirectory(dirPath) {
    // Read the contents of the current directory
    fs.readdir(dirPath, { withFileTypes: true }, (err, dirents) => {
        if (err) {
            console.error('Error reading directory:', dirPath, err);
            return;
        }

        dirents.forEach((dirent) => {
            const fullPath = path.join(dirPath, dirent.name);
            if (dirent.isDirectory()) {
                recurseDirectory(fullPath);
            } else {
                const content = fs.readFileSync(`./${fullPath}`, 'utf-8')
                const markedContent = marked(content)
                const markedContentHtml = template.replace('{{content}}', markedContent)
                fs.writeFileSync(`./${fullPath}.html`, markedContentHtml)
                fs.rmSync(`./${fullPath}`)
            }
        });
    });
}
recurseDirectory('./dist/pages')