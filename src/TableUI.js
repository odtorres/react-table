import React, { Component } from 'react';
import Table from './Table';

class TableUI extends Component {

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
                    <Table
                        className="ui table"
                        headers={this.props.headers}
                        elements={this.props.elements}
                        thead={this.props.thead}
                        tfoot={this.props.tfoot}
                        onRowCLick={this.props.onRowCLick}
                        rowClassName={this.props.rowClassName}
                        />

                </div>
            </div>
        );
    }
}

export default TableUI;