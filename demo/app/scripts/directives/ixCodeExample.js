'use strict';

angular.module('demoApp')
  .directive('code', function () {
    return {
      restrict: 'A',
      link: function postLink(/*scope, element, attrs*/) {
        // element.text(element.html());
      }
    };
  });


angular.module('demoApp')
  .directive('ixExample', function () {
    return {
      restrict: 'A',
      // priority: 999000,
      link: function postLink(scope, element, attrs) {
        var content = element.html(),
            lang = element.is('script') ? 'javascript' : 'html',
            indentation,
            container,
            method;

        if (/ix-example-start/.test(content)) {
          content = content.replace(/(.|\n)*ix-example-start.*\n/m, '');
        }

        if (/ix-example-end/.test(content)) {
          content = content.replace(/\n.*ix-example-end(.|\n)*$/m, '');
        }

        content = content.replace(/^(\n *\n|( *\n))*/g, '');
        indentation = content.search(/[^ ]/);

        if (attrs.ixExample) {
          container = angular.element(attrs.ixExample);
          method = 'append';
        }
        else {
          container = element;
          method = 'before';
        }

        if (indentation > 0) {
          content = content.replace(new RegExp('(^|\n)[ ]{1,' + indentation + '}', 'gm'), '$1');
        }

        container[method]('<pre><code data-language="' + lang + '">' + content + '</code></pre>');
      }
    };
  });
