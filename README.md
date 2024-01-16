# My Notes

This is the web site I use for compiling and distributing my notes.

## How it works

I write my notes in Markdown inside of VSCode from a personal documents folder. I've hardlinked my long-running single page notes for each class I'm taking into my development/projects directory. I have written a NodeJS script to compile my markdown notes using Marked & my HTML template. Math rendering is provided by KaTeX. I have a watcher setup with [entr](https://eradman.com/entrproject/), which will run `watcher.sh` when a file changes. This way the entire thing is end-to-end automated. I used Cloudflare pages as a server. It will update if the repository is updated.

## The node script

The node script is pretty simple. It copies the /src/ dir to /dist/ and then it transpiles the markdown to html with [marked](https://marked.js.org/) using the `template.html`. 

## Updating on file change

The project will commit new changes as they happen using `watcher.sh` in combination with [entr](https://eradman.com/entrproject/). It will write all Markdown files to `TEMP-FILES-LIST` for entr to watch.
