/**
 *  create by Duke (2018/01/15)
 */
'use strict';
const dev = require('../common/dev');
//const com = require('../common/common_method');
const extend_method = require('../common/extend_method');
const driver_method = require('../common/driver_method');
let td = new driver_method(dev.driver);
let ext = new extend_method(dev.driver);
const page_config = require('./config/data/page_elements');
const testdata = require('./config/data/test_data');

module.exports = async function userCenterTest() {
    describe('usercenter validate', async function () {
        this.timeout(0);
        before(async function () {
           
        });
        
       
        step('#5.1 verify xxxx', async function () {

        });

        step('#5.2 the ', async function () {

        });

        step('#5.3 the ', async function () {

        });

        after(async function () {
            // await td.waitpage(1000);
            // await ext.logout();
        });
    });
};



