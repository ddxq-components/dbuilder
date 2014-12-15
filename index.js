// 配置模板引擎
var fs = require('fs');
var util = require('./lib/util');
var template = require('art-template');
template.config('base', __dirname+'/templates/');

// 读取模型
var model = require('./models/model');
// 替换模板
var output = template('index', {data:model});

//保存输出
fs.readdir('./models/',function(err,fileNameArray){
  console.log(fileNameArray);

  util.mkdirs('./g/test/abc');

  fs.writeFile('./g/test/output.html',output,'UTF-8',function(){
    console.log('ok');
  });

});
