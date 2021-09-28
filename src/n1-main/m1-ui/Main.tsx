import React from 'react';
import Header from './header/Header';
import Routes from './routes/Routes';

function Main() {

    return (
        <div>
            {
                // isLoggedIn
                //     ?
                    <div>
                        <Header/>
                        <Routes/>
                    </div>
                    // : <Login />
            }
        </div>
    );
}

export default Main;
