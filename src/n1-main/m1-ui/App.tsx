import React from 'react';
import './App.css';
import Header from './header/Header';
import Routes from './routes/Routes';
import {HashRouter} from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
        <HashRouter>
            {/*<Provider store={store}>*/}
                <Header/>
                <Routes/>
            {/*</Provider>*/}
        </HashRouter>
    </div>
  );
}

export default App;
