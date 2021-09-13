import React from 'react';
import './App.css';
import Header from './header/Header';
import Routes from './routes/Routes';
import {HashRouter} from 'react-router-dom';
import {store} from '../m2-bll/store';
import {Provider} from 'react-redux';
import {Test} from '../../n2-features/f0-test/Test';


const App = () => {
  return (
    <div className="App">
        <HashRouter>
            <Provider store={store}>
                <Header/>
                <Routes/>
                <Test />
            </Provider>
        </HashRouter>
    </div>
  );
}

export default App;
