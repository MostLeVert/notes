# My Notes

This is the web site I use for compiling and distributing my notes.

## How it works

I write my notes in Markdown inside of VSCode from a personal documents folder. I've hardlinked my long-running single page notes for each class I'm taking into my development/projects directory. I have written a NodeJS script to compile my markdown notes using Marked & my HTML template. Math rendering is provided by KaTeX.

### The node script

The node script is pretty simple. It copies the /src/ dir to /dist/ and then it will transpile the markdown to html with [marked](https://marked.js.org/) using the `template.html`. 
