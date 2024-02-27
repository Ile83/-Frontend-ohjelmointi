// Import useState from react
import { useState } from "react";



function TodoList() {

    // Declare states
const [desc, setDesc] = useState("");
const [todos, setTodos] = useState([]);
const [date, setDate] = useState("");

const handleDescChange = (event) => {

    setDesc(event.target.value);    

};

const handleDateChange = (event) => {

    setDate(event.target.value);    

};

const handleDeleteChange = (index) => {
    
    setTodos(todos.filter((todo, i) => i !== index));

    }



const handleSubmit = (event) => {
    event.preventDefault();
      // Remember to call preventDefault() if using form
     
        setTodos([...todos,{ desc, date }]);
        setDesc("");
        setDate("");
    
   
    };
    return(
      <>
    <form onSubmit={handleSubmit}>
    <h3>Todo List</h3>
    <h3>Kuvaus</h3>
  <input type="text" onChange={handleDescChange} value={desc}/>
  <h3>Päivämäärä</h3>
  <input type="text" onChange={handleDateChange} value={date}/>
  <input type="submit" value="Add"/>
</form>
     
      <table>
        <thead>
            <tr>
            <th>Päivämäärä</th>
            <th>Kuvaus</th>
            </tr>
        </thead>

      <tbody>
        {todos.map((todo, index) => (
          <tr key={index}>
           
            <td>{todo.date}</td>
           
         
            <td>{todo.desc}</td>
           
            <td><button onClick={() => {handleDeleteChange(index) } }>Poista</button></td>
         
          </tr>
        ))}
      </tbody>
    </table>
      </>
    );
  }
  
  export default TodoList