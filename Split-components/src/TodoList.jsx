// Import useState from react
import { useState } from "react";
import TodoTable from "./TodoTable";




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
<TodoTable todos={todos} handleDeleteChange={handleDeleteChange}/> 

      </>
    );
  }
  
  export default TodoList

  //käytin työssäni apuna luentomateriaaleja. aikaisempia tehtäviä, github copilottia /explain ja chatgpt:tä bugien etsintää. Vaatisi hieman .css tiedoston muokkausta. Ei ole nätin näköinen, mutta toimii
  /* tekoäly ehdottaa <TodoTable todos={this.state.todos} handleDeleteChange={this.handleDeleteChange} mitä eroa tällä käytännössä on kun toimii kuitenkin tekemälläni tavalla, jonka luin luentomateriaaleista? Olen miettinyt tätä this sanaa aikaiseeminkin koodauksessa mutta se ei ole täysin auennut*/