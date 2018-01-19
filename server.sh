curpath=$(cd `dirname $0`; pwd)
java -Dwebdriver.chrome.driver="$(curpath)/chromedriver" -jar server/selenium-server-standalone-3.8.1.jar