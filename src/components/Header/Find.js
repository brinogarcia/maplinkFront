import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import ImageFind from '../images/ic_search_white_24px.png';

export default class Find extends React.Component{

    render(){
        return(
            <div id="divBusca">                                
                <input type="text" id="txtBusca" placeholder="Buscar..."/>
                <Link to="/Search"><button id="btnBusca"><img src= {ImageFind} id="ImageFind" height="18px"/></button></Link>
            </div>

        );      
    }
}