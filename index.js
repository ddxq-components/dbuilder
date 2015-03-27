// 配置模板引擎
var fs = require('fs');
var util = require('./lib/util');
var template = require('art-template');
template.config('base', __dirname+'/templates/');

// 读取模型
var moduleName = 'user';
var model = require('./models/'+moduleName);
var moduleOutputDir = './g/'+moduleName+'/';
var type = 'view';

// 替换模板
var output = template('index', {
  data:model
});

//保存输出
util.mkdirs(moduleOutputDir);
fs.writeFile(moduleOutputDir+type+'.html',output,'UTF-8',function(){
  console.log('ok');
});
