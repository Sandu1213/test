/**
 * Create on 2017/11/06
 * Author : Duke
 * Description:  EmailServer setup
 */
'use strict';

var nodemailer = require('nodemailer');
var mailgun = require('nodemailer-mailgun-transport');


function setMailServer(from, to, subject, context, files, attfiles) {

    //mailgun邮件服务配置
    var auth = {
        auth: {
            api_key: 'key-b1ebfb84934e7140000dfa41d27e9184',
            domain: 'bindo.com'
        }
    };

    var transport = nodemailer.createTransport(mailgun(auth));
    /*  //smtp邮件服务配置
    var smtpTransport = require('nodemailer-smtp-transport');
    // 开启一个 SMTP 连接池
    var transport = nodemailer.createTransport(smtpTransport({
        host: "smtp.163.com",       // 主机 smtp.163.com
        secureConnection: true,     // 使用 SSL
        port: 465,                  // SMTP 端口 465
        auth: {
         user: "dslhmily@163.com",  // 账号
         pass: "Test138528"         // 授权码         
        }
    }));

    */

    // 设置邮件相关信息
    var mailOptions = {
        from: from,
        to: to,
        subject: subject,
        // text:context,
        html: context
        // attachments: [
        //     {
        //         filename: 'testReport.html',
        //         path: files
        //     },
        //     {
        //         filename: 'assert.zip',
        //         path: attfiles
        //     }
        // ]
    };


    // 发送邮件
    transport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.error(error);
        } else {
            console.log(response);
        }
        transport.close();
    });

}


module.exports = setMailServer;