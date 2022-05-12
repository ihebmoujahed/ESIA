

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var db = require("../database-mysql");
// var Item = require('../database-mongo/Item.model.js');

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
const selectid=function(req, res) {
  var params = req.params.id
  var sel = "SELECT * FROM Users WHERE id_User=?"
  db.query(sel,[params], (err, result) => {
    if(err) {
      console.log(err)
    }else{
      res.send(result)
    }
  })
}
var selectAll = function (req, res) {
  db.query("SELECT * FROM Users", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
var selectAJE1 = function (req, res) {
  db.query("SELECT * FROM Users where etude_level ='AJE 1' ", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
var selectAJE2 = function (req, res) {
  db.query("SELECT * FROM Users where etude_level ='AJE 2' ", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
var selectEPPE = function (req, res) {
  db.query("SELECT * FROM Users where etude_level ='EPPE 1' ", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
var AddUser = function (req, res) {
    var insert = "INSERT INTO Users SET ?"
    var params = {

        first_name: req.body.first_name,
        last_name: req.body.last_name,
        birthday: req.body.birthday,
        card_id: req.body.card_id,
        etude_level: req.body.etude_level,
        place: req.body.place,
        leveleducation:req.body.leveleducation,
        // image_user: req.body.image_user
    }
    db.query(insert, params,(err,result) => {
        if(err) {
            console.log(err)
        }else{
            res.send(result)
        }
    })
}
const Payment = function (req, res) {
  var insert = "INSERT INTO Payment SET ?"
  var params = {
    student: req.body.student,
    dbt: req.body.dbt,
    price: req.body.price,
    id_User: req.body.id_User,
  }
  db.query(insert, params,(err, result)=>{
    if(err) {
      console.log(err)
    }else{
      console.log(result)
    }
  })
}
const userpay = function (req, res) {
  var selectAll = "SELECT * FROM Payment"
  db.query(selectAll, (err, result) => {
    if(err) {
      console.log(err)
    }else{
      res.send(result)
    }
  })
}
const selectuserpay = function (req, res) {
  var params = req.params.id
  var sql ="SELECT Payment.price,Payment.dbt, Users.first_name FROM (Payment INNER JOIN Users ON Payment.id_User = Users.id_User) Where Payment.id_User=?"
  db.query(sql, [params], (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};

// UNCOMMENT IF USING MONGOOSE WITH PROMISES
// var selectAll = function (req, res) {
//   Item.find({})
//     .then((items) => {
//       res.status(200).send(items);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
// var selectAll = async function (req, res) {
//   try {
//     const items = await Item.find({});
//     res.status(200).send(items);
//   } catch (error) {
//     res.status(200).send(error);
//   }
// };

module.exports = { AddUser,selectAll,selectAJE1,selectAJE2,selectEPPE,Payment,userpay,selectuserpay,selectid};
