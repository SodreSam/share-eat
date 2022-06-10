import '../../styles/global.css'
import './register.css'

import {Header} from '../../components/Header'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'; 



export function Register(){

    const [name, setName ] = useState('');
    const [price, setPrice ] = useState('');
    const [description, setDescription ] = useState('');


    // Const para pegar o parâmetro/nome do estabelecimento de acordo com o que foi clicado na home/menu
    const { estName } = useParams();

    async function handleRegister(){
        
        
       const data = {
        name,
        price,
        description,
       };          
        try{
            const response = await api.post('/register', data)
            alert(`O prato '${response.data.name}' foi cadastrado com sucesso.`)
        } catch{
          alert('Erro no cadastro do produto, tente novamente.')
        }
        
        console.log(data); 
    }


    const navigate = useNavigate();

    return(
       
        <div>
            
        <header>
           <button className="previousBtn" onClick={() => navigate(-1)} >
                <FiArrowLeft size={20} color="#FFF" />
            </button>
            <Header />
        </header>
        <div className="box-container">
        
        <form onSubmit={handleRegister}>
        <div className="place-headline">
            <h1>{estName}</h1>
        </div>
            <div className='input-container'>

                <span>Prato</span>
                    <input type="text" 
                    placeholder="Prato"
                    value={name} 
                    onChange={e => setName(e.target.value)}
                    required
                    />
                
                <span>Valor</span>
                <input type="text" 
                placeholder="R$0,00" 
                value={price} 
                onChange={e => setPrice(e.target.value)}
                required
                />

                <span>Descrição do prato</span>
                <textarea
                 value={description} 
                 onChange={e => setDescription(e.target.value)}
                 required
                />

                <span>*A descrição deve conter até 200 caracteres.</span>
            </div>
        <button type="submit">Salvar</button>
        </form>
        </div>
        </div>
    )
}