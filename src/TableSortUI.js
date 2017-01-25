import React, { Component } from 'react';
import TableSort from './TableSort';

class TableSortUI extends Component {

    render() {
        return (
            <div className="ui form">
                <div className="ui grid">
                    <div className="four column row">
                        <div className="left floated column">
                            {this.props.upLeft}
                        </div>
                        <div className="right floated column">
                            {this.props.upRight}
                        </div>

                    </div>
                    <TableSort
                        className="ui table"
                        headers={this.props.headers}
                        elements={this.props.elements}
                        tfoot={this.props.tfoot}
                        />
                </div>
            </div>
            
        );
    }
}

export default TableSortUI;