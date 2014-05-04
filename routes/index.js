var express = require('express');
var router = express.Router();
var fs = require('fs');
var uuid = require('node-uuid');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res) {
	var uid = req.param('uid');
	var kml_data = req.param('kml_data');

	if (!uid || !kml_data) {
		return res.json({error: 'Missing UID or kml data'});
	}

	var file_name = uid + "_" + uuid.v1().substr(0, 12) + ".kml";
	file_name = file_name.split(' ').join('_');

	var error = false;
	fs.writeFileSync("./public/kml/"+file_name, kml_data, 'utf-8', function (error) {
		if (error) {
			console.log(error);
			error = true;
		}
	});

	if (error) {
		return res.json({error: "Error while writing file"});
	}

	return res.json({url: "kml/"+file_name});
});

module.exports = router;
