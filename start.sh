#!/bin/bash

#docker stop chrome
docker stop debug
docker stop hub

#docker rm chrome
docker rm debug
docker rm hub

docker run -d -p 4444:4444 --name hub selenium/hub
#docker run -d -P -p 5906:5900 --name chrome --link hub -v /dev/shm:/dev/shm selenium/node-chrome
docker run -d -p 5901:5900 --name debug --link hub -v /dev/shm:/dev/shm selenium/node-chrome-debug
sleep 10s

echo "please input the test URL:$1"
echo "the url add is :${1}"

mocha ./lib/tf-test.js ${1} --require mocha-steps