window.Todo = window.Todo || {};        
window.Todo.AppView = 
(function(){
            "use strict";
var toDoItems = {};	      													  				//object to store items and status
	window.toDoItems = toDoItems;
var store=new Todo.Store();
var Items = new Todo.ItemsView();	
	function AppView() {
                   
				return this;
    }
          
    AppView.prototype.init = function() {
            var ulElement = document.querySelector("#itemContainer");
			var itemText = document.querySelector("#todoTextBox");
			var clrbutton = document.querySelector("#clrButton");
			
			itemText.addEventListener("keydown" ,this.add, false);       				//textbox eventlistener
			clrbutton.addEventListener("click",Items.clearScreen);        				//clear screen button eventlistener
			ulElement.addEventListener("click",Items.assignListeners);  				//checkbutton and deletebutton eventlistener
			
			var items = store.init();											  				//call to load preloadeditems  init (AppView-->Store)
			
			Items.init();																//init (AppView-->ItemsView)
			this.display(items);
	};  
	
	AppView.prototype.display=function($items){
	for(var i=0;i<$items.length;i++){
				//var Items=new Todo.ItemsView();
				Items.display($items[i]);												// display  (AppView-->ItemsView)
			}
	};
	AppView.prototype.add=function(){
		var itemText = document.querySelector("#todoTextBox");
			if(event.keyCode === 13){
				console.log('textbox input taken');
				if (itemText.value.length < 1 || itemText.value == " "){
					alert("enter proper input");
				}
				else{  	
					//var Items=new Todo.ItemsView();
					Items.display(itemText.value);					  				//call to display new entered item  display(AppView--ItemsView)
				}
			}
	};
 
                 
			   return AppView; 
})();
 