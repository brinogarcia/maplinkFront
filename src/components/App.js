import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Search from './Search/Search';


export default class App extends React.Component{
    
    render(){
        return(       
            <BrowserRouter>            
            <div>
                <div className="App">
                    <Header />
                <Route path = "/index">
                    <div className="main" align="center">
                        <Main />
                    </div>
                </Route>
                <Route path = "/Search">
                    <div className="search" align="center">
                        <Search />
                    </div>
                </Route>
                </div> 

            </div>
            
            

            </BrowserRouter>     
        );
    }
}