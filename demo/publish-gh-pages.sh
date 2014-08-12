
# grunt build

grunt build
cd ..

if [ ! -d "gh-pages" ]; then
  git clone git@github.com:ArnaudD/angular-inputex.git gh-pages
  cd gh-pages
  git co gh-pages
else
  cd gh-pages
fi

git pull
git rm . -r
cp ../demo/dist/* . -R
git add .
git commit . -m "update"
git push
