var chai = require('chai');
let expect = chai.expect;

describe("hello", function(){
    step('test111111111111', async function () {
     await   expect('33').to.contain('3');
    //    await expect('12').to.contain('3');
    //    await expect('13').to.include('3');
    });
    step('test2222222',async function () {
       
    await   expect('10').to.include('3');
        //    await expect('13').to.include('3');
    });
    step('test33333333333', async function () {
        // await expect('33').to.contain('3');
        //    await expect('12').to.contain('3');
         await  expect('3').not.to.eql('3');
    }); 
});

