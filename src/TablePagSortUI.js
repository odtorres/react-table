import React, { Component } from 'react';
import TablePagUI from './TablePagUI';

class TablePagSortUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnSort: '',
            asc: true
        };
        this.columnSort = this.columnSort.bind(this);
        this.elements = this.props.elements;
        this.asc = true;
    }

    columnSort(e) {
        const sortColumn = Object.values(e.target)[0]._hostNode.attributes["name"].value;
        if (sortColumn !== this.state.columnSort) {
            this.setState({ columnSort: sortColumn, asc: true});
            this.asc = true;
        } else {
           this.setState((e,i)=>{ return {asc: !e.asc}});
           this.asc = !this.asc;
        }

        this.elements = this.elements.sort((e1, e2) => {
            if (e1[sortColumn] > e2[sortColumn])
                return this.asc?-1:1;
            if (e1[sortColumn] < e2[sortColumn])
                return this.asc?1:-1;;
            if (e1[sortColumn] === e2[sortColumn])
                return 0;
            return 0;
        });     
    }
    
    render() {        
        this.elements = this.props.elements;

        const thead = this.props.elements &&
            this.props.headers &&
            this.props.elements.length > 0 &&
            this.props.headers.length > 0 && <tr>{
            Object.keys(this.elements[0]).map((key, pos) => {
                return <th key={key + pos} onClick={this.columnSort} name={key}>
                    {this.props.headers[pos]}
                    {
                        this.state.columnSort === key && this.state.asc && <i className="angle up icon" name={key}></i>
                    }
                    {
                        this.state.columnSort === key && !this.state.asc && <i className="angle down icon" name={key}></i>
                    }
                </th>
            })}</tr>;

        return (
            <TablePagUI 
                className="ui table"
                headers={this.props.headers}
                elements={this.elements}
                thead={thead}
                tbody={this.props.tbody}
                upLeft={this.props.upLeft}
                onRowCLick={this.props.onRowCLick}
                rowClassName={this.props.rowClassName}
                />
        );
    }
}

export default TablePagSortUI;