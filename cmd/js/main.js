// define定义的模块可以返回任何值，不限于对象。
// 加载独立模块
define({
	method1: function(){},
	method2: function(){}
})
// 等价写法，自由度更高，函数体内写一些模块初始化代码
define(function () {
	return {
		method1: function(){},
		method2: function(){}
	}
})

// 非独立模块
// 回调函数必须返回一个对象，这个对象就是你定义的模块。
define(['module1', 'module2'], function(m1, m2){
	//... 这个函数必须返回一个对象
	return {
		method: function(){
			m1.methodA();
			m2.methodB();
		}
	}
})
// 简便写法
define(function(require){
	var dep1 = require('dep1'),
		dep2 = require('dep2'),
		dep3 = require('dep3'),
		...
})

define(['math', 'graph'], function (math, graph) {
	return {
		plot: function(x, y){
			return graph.drawPie(math.randomGrid(x,y));
		}
	}
})

// 通过判断浏览器是否为IE，而选择加载zepto或jQuery。
define(('__proto__' in {}? ['zepto'] : ['jquery']), function($){
	return $;
})

// 调用模块
require(['foo', 'bar'], function(foo, bar){
	// 该回调函数就用来完成具体的任务。
	foo.doSomething();
})

// 首先判断浏览器是否原生支持JSON对象。如果是的，则将undefined传入回调函数，否则加载util目录下的json2模块。
require([window.JSON ? undefined : 'util/json2'], function(JSON){
	JSON = JSON || window.JSON;
	console.log(JSON.parse('{"JSON": "HERE"}'));
});

// require方法也可以用在define方法内部
define(function(require){
	var otherModule = require('otherModule');
});

// 如何动态加载模块
define(function(require){
	var isReady = false, foobar;
	require(['foo', 'bar'], function(foo, bar){
		isReady = true;
		foobar = foo() + bar();
	});
	return {
		isReady: isReady,
		foobar: foobar
	};
});

// 返回promise对象
define(['lib/Deferred'], function(Deferred){
	var defer = new Deferred();
	require(['lib/templates/?index.html', 'lib/data/?stats'], 
	function(template, data){
		defer.resolve({template: template, data: data});
	});
	return defer.promise();
})

// require方法的第三个参数，即处理错误的回调函数
require(['backbone'], function(Backbone){
	return Backbone.View.extend({...})
}, function(err){
	// err
})