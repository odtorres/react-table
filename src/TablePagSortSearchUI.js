import React, { Component } from 'react';
import TablePagSortUI from './TablePagSortUI';

class TablePagSortSearchUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
        this.inputChange = this.inputChange.bind(this);
        this.valid = this.props.elements &&
            this.props.headers &&
            this.props.elements.length > 0 &&
            this.props.headers.length > 0;
        this.elements = this.props.elements;
        this.asc = true;
    }

    inputChange(e) {
        this.setState({ search: e.target.value });
    }

    render() {
        const search = this.state.search;
        const elements = this.props.elements && this.props.elements.filter(
            (e, i) => Object.values(e).some(
                (e) => (e + "").toLowerCase().indexOf(search.toLowerCase()) !== -1)
        );
        return (
            <TablePagSortUI
                headers={this.props.headers}
                elements={elements}
                upLeft={
                    <div className="ui search selection">
                        <input type="hidden" />
                        <div className="ui icon input">
                            <input
                                className="prompt"
                                type="text"
                                placeholder="Search"
                                value={search}
                                onChange={this.inputChange}
                                />
                            <i className="search icon"></i>
                            
                        </div>
                        <div className="results"></div>
                    </div>

                }
                upRight={this.props.upRight}
                tfoot={this.props.tfoot}
                onRowCLick={this.props.onRowCLick}
                rowClassName={this.props.rowClassName}
                />
        );
    }
}

export default TablePagSortSearchUI;