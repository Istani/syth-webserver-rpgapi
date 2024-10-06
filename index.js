var debug = require("@istani/debug")(require('./package.json').name);
var db = require("@syth/database");
debug.log('Imported');

const express = require('express');
const router = express.Router({ mergeParams: true })

// Pruefen ob die Channel ID existiert! Und Merken welcher User das ist!
router.use(async (req, res, next) => {
  if (typeof(req.params.channel) == "undefined") {
    res.send({ error: 'Missing Channel ID' });
    return;
  }

  var channels = await db.User_Channel.query().where("channel_id",req.params.channel);
  if (channels.length!=1) {
    res.send({ error: 'Wrong Channel ID' });
    return;
  }
  req.custom_data.syth_user=channels[0].user_id;
  next();
});


router.get('/characters', async (req, res) => {
  debug.log("API Getting Chars for " + req.params.channel);
  var data = await db.RPG_Characters.query().where("owner", req.custom_data.syth_user);
  res.send(data);
});

router.get('/monsters', async (req, res) => {
  debug.log("API Getting Monster for " + req.params.channel);
  var data = await db.RPG_Monsters.query().where("owner", req.custom_data.syth_user);
  res.send(data);
});

router.get('/inventories', async (req, res) => {
  debug.log("API Getting Inventories for " + req.params.channel);
  var data = await db.RPG_Inventories.query().where("owner", req.custom_data.syth_user);
  res.send(data);
});

router.get('/logs', async (req, res) => {
  debug.log("API Getting Logs for " + req.custom_data.syth_user);
  var data = await db.RPG_Logs.query().where("owner", req.custom_data.syth_user);
  res.send(data);
});

module.exports = router;