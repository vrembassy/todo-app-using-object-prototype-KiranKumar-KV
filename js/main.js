window.Todo = window.Todo || {};        
window.Todo.main = 
(function() {
	'use strict';
 document.addEventListener("DOMContentLoaded", function(event){
	console.log("DOM is loaded");
                //instantiate AppView
				var app=new Todo.AppView();
				app.init();
 });	           
})();