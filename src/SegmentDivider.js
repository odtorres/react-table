import React, { Component } from 'react';

class SegmentDivider extends Component {

    render() {


        return (
            <div className="ui segment">
                <h2 className="ui floated header">{this.props.title}</h2>
                <div className="ui clearing divider"></div>
                {this.props.children}
            </div>
        );

    }
}

export default SegmentDivider;