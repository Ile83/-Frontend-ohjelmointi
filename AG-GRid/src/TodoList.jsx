// Import useState from react
import { useState } from "react";
import TodoTable from "./TodoTable";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css"; // Material Design theme

import { useRef} from 'react'




function TodoList() {

    // Declare states
const [desc, setDesc] = useState("");
const [todos, setTodos] = useState([]);
const [date, setDate] = useState("");
const [priority, setPriority] = useState([]);
const gridRef = useRef();

const handleDescChange = (event) => {

    setDesc(event.target.value);    

};

const handleDateChange = (event) => {

    setDate(event.target.value);    

};

const handlePriorityChange = (event) => {

  setPriority(event.target.value);    

};

const handleDeleteChange = () => {
    
  if (gridRef.current.getSelectedNodes().length > 0) {
    setTodos(todos.filter((todo, index) => 
      index != gridRef.current.getSelectedNodes()[0].id))
  }
  else {
    alert('Select a row first!');
  }
    }



const handleSubmit = (event) => {
    event.preventDefault();
      // Remember to call preventDefault() if using form
     
        setTodos([...todos,{ desc, priority, date }]);
        setDesc("");
        setDate("");
        setPriority("");
    
   
    };

    const [columnDefs, setColumnDefs] = useState([
      {field: 'desc', sortable: false, filter: true, floatingFilter: true},
      {field: 'priority', filter: true, floatingFilter: true, cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}},
      {field: 'date', filter: true, floatingFilter: true},
    ]);

    return(
      <>
    <form onSubmit={handleSubmit}>
  <input  placeholder="Description"  type="text" onChange={handleDescChange} value={desc}/>
  <input  placeholder="Priority" type="text" onChange={handlePriorityChange} value={priority}/>
  <input  placeholder="Date" type="date" onChange={handleDateChange} value={date}/>
  <input  type="submit" value="Add"/>
  <input   type="button" onClick={() => {handleDeleteChange() } } value="Delete"/>
</form>




<TodoTable todos={todos} columnDefs={columnDefs} gridRef={gridRef} handleDeleteChange={handleDeleteChange}/> 

      </>
    );
  }
  
  export default TodoList

  //Toteutin tämän tehtävän vanhan tehtävän pohjalle ja minulla oli käytetty formia ja inputteja. 
  //En keksi miten saisin delete napin oikeaan paikkaan muuta, kuin koodaamalla sen divin sisään ja määritelemällä css:llä sen paikkaa. 
  //En myöskään esittämään tapaa täysin osaa ulkomuistista ja en tiedä onko se hyvä tapa menetellä.
  //Työssäni on slitatut komponentit ja en ollut työtä tehdessä aivan varma, mihin tiedostoon ag-grid pitäisi importata, 
  //joten importtasin sen molempiin tiedostoihin, sama .Css tiedostojen kanssa.
  //käytin työssäni apuna luentomateriaaleja, AG-gridin dokumentaatiota, aikaisempia tehtäviä ja github copilotia.