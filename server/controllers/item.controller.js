

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var db = require("../database-mysql");
// var Item = require('../database-mongo/Item.model.js');

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
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

module.exports = { AddUser,selectAll,selectAJE1,selectAJE2,selectEPPE};
