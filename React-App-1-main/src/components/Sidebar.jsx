import { useState, useCallback } from "react"
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems }) {
  let [menuItems, setMenuItems] = useState(initialMenuItems);


  let [newMenuItem, setNewMenuItem] = useState("")
  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
  // let [menuItems, setMenuItems] = useState(initialMenuItems)

  return (
    <ul>
      {menuItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

let [filter, setFilter] = useState("")
// Adds a single string passed in as parameter to the state element
// "menuItems" that holds the set of current menu items.
let addMenuItem = useCallback(() => {
  console.log("Added menu item")
  setMenuItems([...menuItems, item]);
  //   // TODO: 3. Add a new menu item to the correct variable associated with this class.
  //   // This involves adding a parameter and changing a class instance variable (props).
  //   setMenuItems([item, ...menuItems])
}, [])


let [newItem, setNewItem] = useState('');
let handleAddItem = () => {
  if (newItem) {
    addMenuItem(newItem);
    setNewItem('');//clear input after adding the input
  }
};

return (
  <div>
    <input

      type="text"
      value={newItem}
      onChange={(e) => setNewItem(e.target.value)}>

    </input>
    <button
      onClick={handleAddItem}> Add Item
    </button>

    <ul>
      {menuItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>

);




// TODO: 4. Display ONLY the menu items that contain the filter element value
// "term" in them. Each menu item should be an unordered list item wrapped in an unordered list (ul) element.


let [filterText, setFilterText] = useState('');

let filteredMenuItems = menuItems.filter((item) =>
  item.toLowerCase().includes(filterText.toLowerCase())
);

return (
  <div>
    <input
      type="text"
      placeholder="Filter menu items"
      value={filterText}
      onChange={(e) => setFilterText(e.target.value)}
    />
    <ul>
      {filteredMenuItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

// TODO: 1 Render inside the outer div an unordered list of the menu items, with each string in the array
// its own item.

return (

  <div>


    <ul>
      {initialMenuItems.map((item, index) => (
        <li key={index}>{item}</li>
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
        /* TODO: 3 */
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
