#!/usr/bin/env sh
yarn build
rm -Rf gh-pages/*
cp -rf dist/* gh-pages
cd gh-pages
git add .
git commit -am 'deploy'
git push
cd -