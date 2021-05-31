var express = require('express');

var db = require("../Models/MySQL");
var crypto = require('crypto');

var algorithm = 'aes-128-cbc';
var key = Buffer.from('6R41239k1O337k16', 'utf8');
var iv = Buffer.from('1z14E9v70V5042c7', 'utf8');

var router = express();
function encrypt(src) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    return cipher.update(src, 'utf8', 'hex') + cipher.final('hex');
} function decrypt(src) {
    const cipher = crypto.createDecipheriv(algorithm, key, iv);
    return cipher.update(src, 'hex', 'utf8') + cipher.final('utf8');
}

const makeid = ((length) => {
    var result = "";
    var number = "0123456789";
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < length; i++) {
        var numorchars = Math.floor(Math.random() * 2);
        if (numorchars === 0)
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        else (numorchars === 1)
        result += number.charAt(Math.floor(Math.random() * number.length));
    }
    return result;
});
const onTime = () => {
    const date = new Date();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    const hh = date.getHours();
    const mi = date.getMinutes();
    const ss = date.getSeconds();

    return [date.getFullYear(), "-" +
        (mm > 9 ? '' : '0') + mm, "-" +
        (dd > 9 ? '' : '0') + dd, " " +
        (hh > 9 ? '' : '0') + hh, ":" +
        (mi > 9 ? '' : '0') + mi, ":" +
        (ss > 9 ? '' : '0') + ss
    ].join('');
}
router.post("/register", function (req, res) {
    const reqdata = {
        userName: req.body.userName,
        emAil: req.body.email,
        passWord: req.body.password,
        cpassWord: req.body.cpassword,
    }
    const resdata = {
        status: 0,
        WuserName: "",
        WemAil: "",
        WpassWord: "",
        WcheckPassWord: "",
    }
    if (!reqdata.userName) {
        resdata.WuserName = "請填入名稱";
    } else if (reqdata.userName !== "") {
        resdata.WuserName = "";
    }
    if (!reqdata.emAil) {
        resdata.WemAil = "請填入信箱";
    } else if (reqdata.emAil.search('@') === -1) {
        resdata.WemAil = '並未正確電子信箱';
    } else if (reqdata.emAil.search('.com') === -1) {
        resdata.WemAil = '並未正確電子信箱';
    } else if (reqdata.emAil !== "") {
        resdata.WemAil = "";
    }
    if (!reqdata.passWord) {
        resdata.WpassWord = "請填入密碼";
    } else if (reqdata.passWord.length < 6) {
        resdata.WpassWord = "密碼太短(至少六位)";
    } else if (reqdata.passWord !== "") {
        resdata.WpassWord = "";
    }
    if (!reqdata.cpassWord) {
        resdata.WcheckPassWord = "請填入重複密碼";
    } else if (reqdata.cpassWord !== reqdata.passWord) {
        resdata.WcheckPassWord = "密碼不同";
    } else if (reqdata.cpassWord !== "") {
        resdata.WcheckPassWord = "";
    }
    if (resdata.WuserName !== "" || resdata.WemAil !== "" || resdata.WpassWord !== "" || resdata.WcheckPassWord !== "") {
        res.json(resdata);
        return;
    }
    const Data = {
        uid: encrypt(makeid(10)),
        name: reqdata.userName,
        email: reqdata.emAil,
        password: encrypt(reqdata.passWord),
        create_date: onTime()
    }
    register(Data)
        .then(result => {
            req.session.uid = Data.uid;
            resdata.status = result.status;
            res.json(resdata);
        }, (err) => {
            resdata.WemAil = err.erremail;
            res.json(resdata);
        }
        )

});
const register = (data) => {
    let result = {};
    return new Promise((resolve, reject) => {
        db.query('SELECT email FROM members WHERE email = ?', data.email, function (err, rows) {
            if (err) {
                console.log(err);
                result.err = "伺服器錯誤，請稍後在試！"
                reject(result);
                return;
            }
            // 如果有重複的email
            if (rows.length >= 1) {
                result.erremail = "已有重複的Email";
                reject(result);
            } else {
                db.query('INSERT INTO members SET ?', data, function (err) {
                    if (err) {
                        console.log(err);
                        result.err = "伺服器錯誤，請稍後在試！";
                        reject(result);
                        return;
                    }
                    result.status = 1;
                    resolve(result);
                });
            }
        });

    });
}
router.post("/login", function (req, res) {
    const reqdata = {
        emAil: req.body.email,
        passWord: req.body.password,
    }
    const resdata = {
        status: 0,
        WemAil: "",
        WpassWord: "",
    }
    if (!reqdata.emAil) {
        resdata.WemAil = "請填入信箱";
    } else if (reqdata.emAil.search('@') === -1) {
        resdata.WemAil = '並未正確電子信箱';
    } else if (reqdata.emAil.search('.com') === -1) {
        resdata.WemAil = '並未正確電子信箱';
    } else if (reqdata.emAil !== "") {
        resdata.WemAil = "";
    }
    if (!reqdata.passWord) {
        resdata.WpassWord = "請填入密碼";
    } else if (reqdata.passWord.length < 6) {
        resdata.WpassWord = "密碼太短(至少六位)";
    } else if (reqdata.passWord !== "") {
        resdata.WpassWord = "";
    }
    if (resdata.WemAil !== "" || resdata.WpassWord !== "") {
        res.json(resdata);
        return;
    }
    login(reqdata)
        .then(result => {
            req.session.uid = result.uid;
            resdata.status = result.status; 
            res.json(resdata);
        }, (err) => {
            resdata.WemAil = err.erroremail;
            resdata.WpassWord = err.errorpassword;
            res.json(resdata);
        }
        )
});
const login = (data) => {
    let result = {};
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM members WHERE email = ? ', data.emAil, function (err, snapshot) {
            if (err) {
                console.log(err);
                result.err = "伺服器錯誤，請稍後在試！"
                reject(result);
                return;
            }
            // 如果有重複的email
            if(!snapshot[0]){
                console.log(err);
                result.erroremail = "無此帳號"
                reject(result);
                return;
            }
            if(decrypt(snapshot[0].password)!==data.passWord){
                console.log(err);
                result.errorpassword = "密碼錯誤";
                reject(result);
                return;
            }
            result.status = 1;
            result.uid = encrypt(snapshot[0].uid);
            resolve(result);
        });

    });
}
router.get("/", function (req, res) {
    if(!req.session.uid){
        res.json({
            islogin:false
        })
    }else{
        res.json({
            islogin:true
        })
    }
});
router.get("/signout", function (req, res) {
    req.session.destroy();
 });
router.get("/oauth",function(req,res){

})
module.exports = router;