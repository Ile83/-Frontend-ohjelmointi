import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css"; // Material Design theme

import "./custom.css"; // Your custom styles

import { useRef} from 'react'

function TodoTable(props) {
  return <>
  <div className="ag-theme-material" style={{width: 700, height: 500}}>
  <AgGridReact
        ref={props.gridRef}
        onGridReady={params => props.gridRef.current = params.api}
        rowData={props.todos}
        columnDefs={props.columnDefs}
        rowSelection="single" 
      />
    </div>
  </>
}

export default TodoTable;

