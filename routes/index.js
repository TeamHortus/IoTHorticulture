
/*
 * GET home page.
 */

var data = {};

//data.key = value;

<<<<<<< HEAD
data.led1 = 100;
data.led2 = 150;
data.led3 = 200;

||||||| merged common ancestors
data.led1 = 200;
data.led2 = 300;
data.message = "Hi, Good Morning";
=======
data.led1 = 200;
data.led2 = 300;
data.led3 = 150;

data.message = "Hi, Good Morning";
>>>>>>> c7e234f8bb65f75e455584ce55f579b3bfd45ef5

exports.index = function(req, res){

  console.log(data.led1 + ' ' + data.led2);
  res.json(data);

};
