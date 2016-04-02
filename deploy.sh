pm2 stop CodeShare
git reset --hard origin/master  
git clean -f  
git pull  
git checkout master
npm install
pm2 start app.js -i 0 --name CodeShare