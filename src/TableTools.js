
class TableTools {     
    
    static valid(Table){
        return Table.props.elements &&
            Table.props.headers &&
            Table.props.elements.length > 0 &&
            Table.props.headers.length > 0;
    }
    static headerValid(Table){
        return Table.props.headers && Table.props.headers.length > 0;
    }
}

export default TableTools;