
/*
 * GET home page.
 */

var data = {};

//data.key = value;

data.led1 = 200;
data.led2 = 300;
data.message = "Hi, Good Morning";

exports.index = function(req, res){

  console.log(data.led1 + ' ' + data.led2);
  res.json(data);

};
