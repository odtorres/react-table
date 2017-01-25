import React, { Component } from 'react';
import TableTools from './TableTools';

class Table extends Component {   
    constructor(props) {
        super(props);        

        this.rowHandleClick = this.rowHandleClick.bind(this);
        this.rowClassName = this.rowClassName.bind(this);
    }

    rowHandleClick(e){
        const id = Object.values(e.target)[0]._hostNode.id.split("-")[0];        
        this.props.onRowCLick && this.props.onRowCLick(this.props.elements[id],id);
    }

    rowClassName(e){
        return this.props.rowClassName && this.props.rowClassName(e);
    }

    render() {  
            /*const thead = this.props.thead || <tr>{
                Object.keys(this.props.elements[0]).map((key, pos) => {
                    return <th key={key + pos} name={key}>
                        {this.props.headers[pos]}
                    </th>
                })}</tr>;*/
        if(TableTools.headerValid(this)){
            const thead = this.props.thead || <tr>{
                this.props.headers.map((key, pos) => {
                    return <th key={key + pos} name={key}>
                        {key}
                    </th>
                })}</tr>;
            


            const tbody = this.props.tbody ||
                this.props.elements.map((e, i) => {
                    return (
                        <tr id={i} key={i} onClick={this.rowHandleClick} className={this.rowClassName(e)}>
                            {
                                Object.keys(e).map(key => {
                                    return <td id={i+"-"+key} key={key + i} >{e[key]}</td>
                                })
                            }
                        </tr>
                    )
                });

            return (
                <table className={this.props.className}>
                    <thead>
                        {
                            thead
                        }
                    </thead>
                    <tbody>
                        {
                            tbody
                        }
                    </tbody>
                    <tfoot>
                        {
                            this.props.tfoot
                        }
                    </tfoot>
                </table>
            );
        }
        return (<table></table>);
    }
}

export default Table;