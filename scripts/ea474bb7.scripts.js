"use strict";angular.module("demoApp",["ngSanitize","ngRoute","ix","ix.templates"]),angular.module("demoApp").directive("code",function(){return{restrict:"A",link:function(){}}}),angular.module("demoApp").directive("ixExample",function(){return{restrict:"A",link:function(a,b,c){var d,e,f,g=b.html(),h=b.is("script")?"javascript":"html";/ix-example-start/.test(g)&&(g=g.replace(/(.|\n)*ix-example-start.*\n/m,"")),/ix-example-end/.test(g)&&(g=g.replace(/\n.*ix-example-end(.|\n)*$/m,"")),g=g.replace(/^(\n *\n|( *\n))*/g,""),d=g.search(/[^ ]/),c.ixExample?(e=angular.element(c.ixExample),f="append"):(e=b,f="before"),d>0&&(g=g.replace(new RegExp("(^|\n)[ ]{1,"+d+"}","gm"),"$1")),e[f]('<pre><code data-language="'+h+'">'+g+"</code></pre>")}}});