# abort on errors 
set -e 
# build 
npm run build
git add -A
git commit -m 'Commit to master'
git push -f https://github.com/dbaweb/Portfolio.git master
# deploy
cd dist
git add -A
git commit -m 'deploy'
git push -f https://github.com/dbaweb/Portfolio.git master:gh-pages
cd -