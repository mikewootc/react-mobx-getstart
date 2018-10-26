import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import { observable, autorun, computed, configure } from 'mobx';
import { Provider } from 'mobx-react';

import ScreenLogin              from './components/ScreenLogin.jsx';
import ScreenHome               from './components/ScreenHome.jsx';
import RootStore                from './stores/RootStore.js';


configure({enforceActions: 'always'});

const store = new RootStore();

render(
    <Provider {...store}>
        <HashRouter>
            <div style={{width: '100%', height: '100%', backgroundColor: '#bbb'}} >
                <Route exact path="/" component={ ScreenLogin }/>
                <Route path="/home" component={ ScreenHome }/>
            </div>
        </HashRouter>
    </Provider>
    , document.getElementById('content')
);

