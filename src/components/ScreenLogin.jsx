'use strict'

import React from 'react';
import { inject, observer } from "mobx-react"
import Logger from 'cpclog';


const logger = Logger.createWrapper('ScreenLogin', Logger.LEVEL_DEBUG);

@inject("user")
@observer 
class ScreenLogin extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        logger.debug('props:', this.props);
    }

    handleUsernameChange(event) {
        this.props.user.setInfo('username', event.target.value);
    }

    handlePasswordChange(event) {
        this.props.user.setInfo('password', event.target.value);
    }

    handleSubmit(event) {
        //this.props.history.push(`/home`);
        this.props.history.push({
            pathname:'/home',
            state: {
                fromScreen: 'ScreenLogin',
            },
        });
    }

    render() {
        const {user} = this.props;
        return (
            <div style={ ss.box }>
                <div style={ ss.formContainer }>
                    <label>
                        Name: <input type="text" style={ ss.formInput } onChange={ this.handleUsernameChange.bind(this) } />
                    </label>

                    <label>
                        Password: <input type="text" style={ ss.formInput } onChange={ this.handlePasswordChange.bind(this) } />
                    </label>

                    <input type="submit" value="Submit" onClick={ this.handleSubmit.bind(this) }/>
                </div>
                <p> username: { user.info.username } </p>
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

    formContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    formInput: {
        width: 150,
    },
}

export default ScreenLogin;
