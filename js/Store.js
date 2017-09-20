window.Todo = window.Todo || {};        
window.Todo.Store =
(function(window){
                // private methods
               
                //Store constructor
                function Store() {
                               
								return this;
                }
 
                // Store public methods
        Store.prototype.init = function() {
                 var preloadedItems = ["Eat","sleep"];
				return preloadedItems;															// return back (Store-->AppView)
				console.log("preloaded items are loaded"); 
            }
 
		Store.prototype.save = function (insertedItems) {
				console.log("New todo item stored.  id : "+insertedItems.id+", name : "+insertedItems.name+", status : "+insertedItems.state);
				idOfTheItem = insertedItems.id;
				toDoItems[idOfTheItem] = insertedItems;
				console.log("Stored items summary :");
				console.log(toDoItems);
			}
        Store.prototype.remove = function (id) {
				delete toDoItems[id];
				console.log(toDoItems);
					
			}
 
         return Store;           
})(window);
 