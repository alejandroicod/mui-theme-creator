#!/bin/bash
rm -rf ./public
yarn build
git add .
git commit -m "Hosting update"
git push origin master
ssh codenify << EOF
  cd mui-theme-creator;
  git pull origin master;
EOF