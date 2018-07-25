import React, { Component } from 'react';
import axios from "axios";
import { ObterClasse, ListarUsuario } from "../../api/Usuario"

export class Usuario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usuarios: [],
            loading: true
        };
                

        //axios
        //    .get('api/usuarios/index')
        //    .then(response => {
        //        this.setState({
        //            usuarios: response.data,
        //            loading: false,
        //        });
        //    }).catch(response => {
        //        console.log(response)
        //    });
    }

    componentDidMount = async () => {
        let response = await ObterClasse();
        this.setState({
            usuarios: response.data,
            loading: false,
        });
    }


    render = () =>{

        let contents = this.state.loading ?
            (<p><em>Carregando...</em></p>) : this.tabelaUsuario();

        return (
            <div>
                <h1>Usuario</h1>
                {contents}
            </div>
        );
    }

    tabelaUsuario() {
        return (
            <h1>Minha lista aqui</h1>
        );
    }

};

