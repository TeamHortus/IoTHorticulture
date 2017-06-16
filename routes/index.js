
/*
 * GET home page.
 */

var data = {};

//data.key = value;

data.led1 = 200;
data.led2 = 300;

exports.index = function(req, res){
  res.json(data);
};
