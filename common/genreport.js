/**
 * Create on 2018/1/19
 * Author : Duke
 * Description: Generate test report By Allure
 */
'use strict';
var allure = require('allure-commandline');

function getReport(){

    var generation = allure(['generate','-c', 'allure-results']);   //等同命令：allure generate -c reportpath
    generation.on('exit', function (exitCode) {
        console.log('Generation is finished with code:', exitCode);
    });
}

module.exports = getReport;