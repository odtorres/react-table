import React, { Component } from 'react';
import TableSort from './TableSort';

class TableSearch extends Component {
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
        const elements = this.elements.filter(
            (e, i) => Object.values(e).some(
                (e) => (e + "").toLowerCase().indexOf(search.toLowerCase()) !== -1)
        );

        return (
            <div className="ui grid">
                <div className="four column row">
                    <div className="left floated column">hola</div>
                    <div className="right floated column">
                        <input
                            className=""
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={this.inputChange}
                            />
                    </div>
                    
                </div>
                <TableSort
                    className={this.props.className}
                    headers={this.props.headers}
                    elements={elements}
                    />
            </div>
        );
    }
}

export default TableSearch;