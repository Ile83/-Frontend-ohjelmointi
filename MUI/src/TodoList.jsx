// Import useState from react
import { useState } from "react";
import TodoTable from "./TodoTable";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'



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

const handleDateChange = (date) => {
    if (date) {
        setDate(date);
    }
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
    <Stack mt={2} direction="row" spacing={2} justifyContent="center" alignItems="center">    
  <TextField  label="Description" onChange={handleDescChange} value={desc}/>
  <TextField  label="Priority" onChange={handlePriorityChange} value={priority}/>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
<DatePicker value={date} onChange={date => handleDateChange(date)} />
    </LocalizationProvider>
  <Button variant="contained" onClick={handleSubmit}>Add</Button>
  <Button color="error" onClick={handleDeleteChange}>Delete</Button>
  

    </Stack>
    
</form>



<TodoTable todos={todos} columnDefs={columnDefs} gridRef={gridRef} handleDeleteChange={handleDeleteChange}/> 

      </>
    );
  }
  
  export default TodoList
