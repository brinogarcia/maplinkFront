import React from 'react';
import Find from './Header/Find';
import LogoPng from './images/logo_apontador.png';

export default class Header extends React.Component{

    render(){
        return(
            <div className="headerclass">
                <div className="imageLog">
                    <img src={LogoPng}/> 
                </div>
                <div className="find">
                    <Find />
                </div>
            </div>
        );      
    }
}