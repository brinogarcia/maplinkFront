import React, {Component} from 'react';
import axios from 'axios';


export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nome:'',
            telefone:'',
            endereco:''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8080/api/cadastro?nome='+ this.state.nome + '&telefone=' + this.state.telefone + '&endereco=' + this.state.endereco, this.state)            
            .then(response =>{
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render(){
        const {nome, telefone, endereco} = this.state
        return(
            <div className="form">
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="nome" id="nome" placeholder="Nome do local" value={nome} onChange={this.changeHandler} required/><br/>
                    <input type="text" name="telefone" id="telefone" placeholder="Telefone" value={telefone} onChange={this.changeHandler} required/><br/>
                    <input type="text" name="endereco" id="endereco" placeholder="Endereco" value={endereco} onChange={this.changeHandler} required/><br/><br/>
                    <input type="submit" value="Cadastrar"/>
                </form>
            </div>
        );      
    }
}