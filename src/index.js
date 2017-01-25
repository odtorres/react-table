import React from 'react';
import ReactDOM from 'react-dom';
import Table from './TablePagSortSearchUI';
//import SegmentDivider from './SegmentDivider';

//Table
const headers = ["Name", "Age", "Job"];
const elements = [
  { name: "Oscar", age: 27, job: "Software Engineer" },
  { name: "Ariadna", age: 15, job: "Student" },
  { name: "Elsa", age: 40, job: "Teacher" },
  { name: "Roger", age: 100, job: "Software Engineer" },
  { name: "Rober", age: 100, job: "Teacher" },
  { name: "Daniel", age: 10, job: "Student" },
  { name: "Johan", age: 29, job: "Teacher" },
  { name: "Maira", age: 80, job: "Teacher" },
  { name: "Reinier", age: 80, job: "Teacher" },
  { name: "Matilde", age: 68, job: "Teacher" },
  { name: "Armando", age: 28, job: "Teacher" },
  { name: "Rolando", age: 26, job: "Teacher" },
  { name: "Daimel", age: 26, job: "Teacher" },
  { name: "Ary", age: 26, job: "Software Engineer" }
];

function onRowCLick(element, i) {//
  elements.splice(i, 1);//removing the element at i
  ReactDOM.render(//updating the view
    <Table headers={headers} elements={elements} onRowCLick={onRowCLick} />,
    document.getElementById('tableUI')
  );

}

function rowClassName(e) {
  return e.age > 28 ? "positive" : "negative";
}

ReactDOM.render(
  <Table
    headers={headers}
    elements={elements}
    onRowCLick={onRowCLick}
    rowClassName={rowClassName}
    />,
  document.getElementById('tableUI')
);

/*ReactDOM.render(
  <SegmentDivider>
    
  </SegmentDivider>,
  document.getElementById('section1')
);*/
