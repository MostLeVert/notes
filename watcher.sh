rm TEMP-FILES-LIST
find ./src/ -type f -name "*.md" > TEMP-FILES-LIST
git add -A
git commit -m "Auto commit"
git push
