'use strict';

angular.module('nodesoftApp')
  .directive('markdownEditor', ['$window', 'Language', function ($window, Language) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var hiddenButtons = attrs.mdHiddenButtons ? attrs.mdHiddenButtons.split(","): new Array();
        Language.getCurrent().then(function (language) {
	        element.markdown({
	            language: language,
	            hiddenButtons: hiddenButtons,
	            additionalButtons: [
	                [{
	                    name:"groupCustom",
	                    data: [{
	                        name: "cmdHelp",
	                        toggle: true,
	                        title: "Help",
	                        icon: "glyphicon glyphicon-question-sign",
	                        callback: function(e){
	                            $window.open("http://daringfireball.net/projects/markdown/syntax", "_blank");
	                        }
	                    }]
	
	                }]
	            ]
	        });
        });
      }
    };
  }]);
