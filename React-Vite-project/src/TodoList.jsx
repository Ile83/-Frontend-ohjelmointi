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
  <input type="text" onChange={handleDescChange} value={desc}/>
  <input type="text" onChange={handleDateChange} value={date}/>
  <input type="submit" value="Add"/>
</form>
     
      <table>
      <tbody>
        <th>Päivämäärä</th>
        <th>Kuvaus</th>
        {todos.map((todo, index) => (
          <tr key={index}>
            
            <td>{todo.date}</td>
        
            <td>{todo.desc}</td>
         
          </tr>
        ))}
      </tbody>
    </table>
      </>
    );
  }
  
  export default TodoList;