@echo off

echo ¡°please input the test URL:$1"
echo ¡°the url add is :${1}"

mocha ./lib/tf-test.js ${1} 