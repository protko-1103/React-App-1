import { useState, useCallback } from "react"


/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */



export default function Sidebar({ initialMenuItems }) {
  let [newMenuItem, setNewMenuItem] = useState("")
  let [menuItems, setMenuItems] = useState(initialMenuItems)
  

  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
  // let [menuItems, setMenuItems] = useState(initialMenuItems)

  let [filter, setFilter] = useState("")

  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.

  let addMenuItem = useCallback(() => { //we have to type something in the input box

    setMenuItems([newMenuItem, ...menuItems])
    setNewMenuItem("") //make it blank after to keep using it with other inputs

    console.log("Added menu item")
    
    //   // TODO: 3. Add a new menu item to the correct variable associated with this class.
    //   // This involves adding a parameter and changing a class instance variable (props).
    //   setMenuItems([item, ...menuItems])

  }, [menuItems, newMenuItem])

  // TODO: 4. Display ONLY the menu items that contain the filter element value
  // "term" in them. Each menu item should be an unordered list item wrapped in an unordered list (ul) element.




  // TODO: 1 Render inside the outer div an unordered list of the menu items, with each string in the array
  // its own item.
  return (
    <div>
      <ul>
        {menuItems.map(item => (
        <li>{item}</li>
      ))}
      </ul>

      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      
      <button
        onClick={() => {
          
          addMenuItem(newMenuItem)
          /* TODO: 3
          this is supposed to add the new menu item */
        }}
      >
        Add Item
      </button>



      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>
    </div>
  )
}

//My understanding of the logic:
/*

Props = can’t change (thinking of it like someone else’s opinion)

State = can change (you can change your opinion, this is "our" thing)

InitialMenuItems is a prop because it is given to us. We can’t change it. This is the list with all the funny bird names.

menuItems is our copy of the initial items that we can change for ourselves (sort of like how we forked the directory for the assignment?)
We have to use this with map since this is what we are allowed to change.

setMenuItems is the tool we use when we write the new menu item, this automatically updates what happens onscreen?

addMenuItems and newMenuItem are self explanatory.

useCallback is just instructions to do something when a certain condition happens, in this case when we put something in the input box?

*/

//todo list: condition 4, fix bug where new inputs dont show
//Condition 4 logic: loop through the existing menu items and find a match with what gets put in the filter box. If there's a match then display it.

/*for(the list of menuItems){

  if(regex to check whatever letter is inputted in the filter box){
  
  display whatever matches and don't show whatever doesn't match
}
}


*/