import React, { Component } from 'react';
import './header.css';


class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div class="container">{this.props.data}</div>);
    }
}

export default Header;