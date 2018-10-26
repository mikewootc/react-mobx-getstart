'use strict'

import React from 'react';
import { inject, observer } from "mobx-react"
import Logger from 'cpclog';


const logger = Logger.createWrapper('ScreenHome', Logger.LEVEL_DEBUG);

@inject("user")
@observer 
class ScreenHome extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        console.log('location:', this.props.location);
        return (
            <div style={ss.box}>
                <p>This is { this.props.location.pathname } screen.</p>
                <p>From Screen: { this.props.location.state && this.props.location.state.fromScreen}</p>
                <p>{this.props.user.info.username} has logged in.</p>
            </div>
        )
    }
}

const ss = {
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
}

export default ScreenHome;
