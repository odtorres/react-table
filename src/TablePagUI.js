import React, { Component } from 'react';
import TableUI from './TableUI';

class TablePagUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pagSize: 10,
            currentPag: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.pagRight = this.pagRight.bind(this);
        this.pagLeft = this.pagLeft.bind(this);
    }

    handleChange(e) {
        this.setState({ pagSize: e.target.value, currentPag: 0 });
    }

    pagRight(e) {
        if (this.pageArray.length-1 > this.state.currentPag)
            this.setState((prevState, props) => {
                return { currentPag: prevState.currentPag + 1 };
            });
    }

    pagLeft(e) {
         if (this.state.currentPag > 0)
            this.setState((prevState, props) => {
                return { currentPag: prevState.currentPag -1 };
            });
    }

    handleClick(e) {
        const currentPag = parseInt(Object.values(e.target)[0]._hostNode.text, 10) - 1;
        this.setState({ currentPag: currentPag });
    }

    render() {
        let cantPag = 0;
        this.pageArray = [""];
        if (this.props.elements && this.props.elements.length)
            for (cantPag = this.props.elements.length - this.state.pagSize; cantPag > 0; cantPag -= this.state.pagSize) {
                this.pageArray.push("");
            }

        const elements = this.props.elements && this.props.elements.slice(
            this.state.currentPag * this.state.pagSize,
            (this.state.currentPag + 1) * this.state.pagSize)
        return (

            <TableUI
                headers={this.props.headers}
                elements={elements}
                thead={this.props.thead}
                upLeft={this.props.upLeft}
                upRight={
                    <select className="ui dropdown" value={this.state.pagSize} onChange={this.handleChange}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                    </select>
                }
                tfoot={
                    <tr><th colSpan="3">
                        <div className="ui right floated pagination menu">
                            <a className="icon item" onClick={this.pagLeft}>
                                <i className="left chevron icon"></i>
                            </a>
                            {
                                this.pageArray.map((e, i) => {
                                    if (this.state.currentPag === i)
                                        return <a className="item active" key={i} >{i + 1}</a>
                                    return <a className="item" key={i} onClick={this.handleClick}
                                        value={i}> {i + 1} </a>
                                })
                            }

                            <a className="icon item" onClick={this.pagRight}>
                                <i className="right chevron icon" ></i>
                            </a>
                        </div>
                    </th>
                    </tr>
                }
                onRowCLick={this.props.onRowCLick}
                rowClassName={this.props.rowClassName}
                />
        );
    }
}

export default TablePagUI;