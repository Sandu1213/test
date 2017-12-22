/**
 * Create on 2017/11/06
 * Author : Duke
 * Description: Automation Test entrance
 */
'use strict';
var common = require('../common/common_method');
let driver = common.initWebDriver();
let date = common.getDate();
let time = common.getTime();

module.exports = {driver,date,time};