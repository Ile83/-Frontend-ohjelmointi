import React from "react";

function TodoTable(props) {
  return <>
  <table>
<thead>
    <tr>
    <th>Päivämäärä</th>
    <th>Kuvaus</th>
    </tr>
</thead>

<tbody>
{props.todos.map((item, index) => (
  <tr key={index}>
   
    <td>{item.date}</td>
   
 
    <td>{item.desc}</td>
   
    <td><button onClick={() => {props.handleDeleteChange(index) } }>Poista</button></td>
 
  </tr>
))}
</tbody>
</table>
  </>;
}

export default TodoTable;

