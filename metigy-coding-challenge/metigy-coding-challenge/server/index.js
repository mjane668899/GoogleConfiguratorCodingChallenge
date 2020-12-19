const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'meis9609',
  database: "userSystem",
  muiltipleStatement: true
});

const sql = ""

app.post('/createkeyword', (req, res ) => {
    const keyword = (req.body.keyword);

    db.query(
      'INSERT INTO user_keyword (keyword) VALUES (?)', [keyword],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send("Values Inserted")
      }
    }
  );
});

app.get('/showkeyword', ( req, res ) => {
  db.query("SELECT * FROM user_keyword",
  (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result);
    }
  });
});

app.put("/updatekeyword", (req, res) => {
  const id = req.body.id;
  const keyword = req.body.keyword;
  db.query(
    "UPDATE user_keyword SET keyword =? WHERE id = ?",
    [keyword, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete('/deletekeyword/:id', (req, res) => {
  const id = req.params.id
  db.query("DELETE FROM user_keyword WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result);
    }
  });
});

app.post('/createsites', (req, res ) => {
    const sites = req.body.sites;

    db.query(
      'INSERT INTO user_sites (sites) VALUES (?);', [sites],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send("Values Inserted")
      }
    }
  );
});

app.get('/showsites', ( req, res ) => {
  db.query("SELECT * FROM user_sites",
  (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result);
    }
  });
});



app.delete('/deletesites/:id', (req, res) => {
  const id = req.params.id
  db.query("DELETE FROM user_sites WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result);
    }
  });
});




app.post('/createsetting', (req, res ) => {
    const chrome = req.body.chrome;
    const firefox = req.body.firefox;
    const explorer = req.body.explorer;
    const safari = req.body.safari;
    const opera = req.body.opera;
    const incognito = req.body.incognito;
    const minuteTargetSite = req.body.minuteTargetSite;
    const secondTargetSite = req.body.secondTargetSite;
    const visitPageWithinSite = req.body.visitPageWithinSite;
    const pages = req.body.pages;
    const visitMinute = req.body.visitMinute;
    const visitSecond = req.body.visitSecond;
    const minuteAfterComplete = req.body.minuteAfterComplete;
    const secondAfterComplete = req.body.secondAfterComplete;
    const targetSite = req.body.targetSite;
    const minuteTargetNotFound = req.body.minuteTargetNotFound;
    const autoreset = req.body.autoreset;
    const devicereset = req.body.devicereset;
    const vinnReset = req.body.vinnReset;
    const phoneReset = req.body.phoneReset;
    const mobileData = req.body.mobileData;
    const flymode = req.body.flymode;
    const removeCookies = req.body.removeCookies;
    const changeResolution = req.body.changeResolution;
    const mousetrack = req.body.mousetrack;
    const dataSavingMode = req.body.dataSavingMode;
    const randomGenerate = req.body.randomGenerate;
    const analyticsProtection = req.body.analyticsProtection;
    const removeHistory = req.body.removeHistory;

    db.query(
      'INSERT INTO user_settings (chrome, firefox, explorer, safari, opera, incognito, minuteTargetSite, secondTargetSite, visitPageWithinSite, pages, visitMinute, visitSecond, minuteAfterComplete, secondAfterComplete, targetSite, minuteTargetNotFound, autoreset, devicereset, vinnReset, phoneReset, mobileData, flymode, removeCookies, changeResolution, mousetrack, dataSavingMode, randomGenerate, analyticsProtection, removeHistory) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
      [chrome, firefox, explorer, safari, opera, incognito, minuteTargetSite, secondTargetSite, visitPageWithinSite, pages, visitMinute, visitSecond, minuteAfterComplete, secondAfterComplete, targetSite, minuteTargetNotFound, autoreset, devicereset, vinnReset, phoneReset, mobileData, flymode, removeCookies, changeResolution, mousetrack, dataSavingMode, randomGenerate, analyticsProtection, removeHistory],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send("Values Inserted")
      }
    }
  );
});



app.get('/showsetting', ( req, res ) => {
  db.query("SELECT * FROM user_settings",
  (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result);
    }
  });
});

app.delete('/deletesetting/:id', (req, res) => {
  const id = req.params.id
  db.query("DELETE FROM user_settings WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result);
    }
  });
});


app.listen(3001, () => {
  console.log("Yay, your server is running")
});
