var express = require('express');
var router = express.Router();
var fs = require('fs');
var uuid = require('node-uuid');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'KML Proxy' });
});

router.post('/', function (req, res) {
	var uid = req.param('uid');
	var kml_data = req.param('kml_data');

	// The payload must have the UID & kml data -- can probably remove the UID later... not really needed.
	if (!uid || !kml_data) {
		return res.json({error: 'Missing UID or kml data format should be {uid: <val>, kml_data: <val>'});
	}

	var file_name = uid + "_" + uuid.v1().substr(0, 12) + ".kml";
	file_name = file_name.split(' ').join('_');

	var file_error = false;
	fs.writeFileSync("./public/kml/"+file_name, kml_data, 'utf-8', function (error) {
		if (error) {
			console.log(error);
			file_error = true;
		}
	});

	if (file_error) {
		return res.json({error: "Error while writing file"});
	}

	return res.json({url: "kml/"+file_name});
});

module.exports = router;
