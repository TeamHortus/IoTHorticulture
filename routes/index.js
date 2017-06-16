
/*
 * GET home page.
 */

var data = {};

//data.key = value;

data.led1 = 100;
data.led2 = 150;
data.led3 = 200;


exports.index = function(req, res){

  console.log(data.led1 + ' ' + data.led2);
  res.json(data);

};
