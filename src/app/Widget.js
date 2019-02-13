import React, { Component } from 'react';

export default class Widget extends Component {
    render() {
        console.log("Props", this.props);
        return (
            <div>Widget</div>
        )
    }
}