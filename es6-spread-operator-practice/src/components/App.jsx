import React, { useState } from "react";

function App() {

  const [inputText, setInputText] = useState("") //*the state change must be invoked
  //** Keep track of what the user is writing within an array
  const [items, setItems] = useState([]); //**the empty array means there will not be any bulletpoints
  //**You're providing the value of what it requires, then giving a name for the function and setting it (hooks)


  //*Where the inputText can be used must be located
  //*When do we want to change/call the function, add onChange 
  
  function handleChange(event) {
  
    //*event is passed through
    //*Create const that will keep hold of the new value of the input

    const newValue = event.target.value;
    setInputText(newValue);
    //*this corresponds to what the user is going to input in the text box
    //*this achieves part.1
  }

  function addItem() {
      setItems (prevItems => {
        return [...prevItems, inputText]; //use the ...spread operator 
      });
      setInputText(""); //this empties and resets the add input box
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={ handleChange }
               type="text"
               value={ inputText }
                />
        <button onClick={addItem}> 
        {/* Once adding a function, it must be created like the other functions */}
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem =>  <li>{todoItem}</li>)}
          {/* in order to list the item of arrays inside, the map function must be used */}
        </ul>
      </div>
    </div>
  );
}

export default App;
