import React, { Component } from 'react';
import TablePagUI from './TablePagUI';

class TableAllUI extends Component {

    render() {
        return (
            
            <TablePagUI
                headers={this.props.headers}
                elements={this.props.elements}
                />
        );
    }
}

export default TableAllUI;