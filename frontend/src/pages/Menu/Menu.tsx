import { useNavigate} from 'react-router-dom';
import { Header } from '../../components/Header'
import { Recepies } from '../../components/Recepies';
import { FiArrowLeft } from 'react-icons/fi'



import './Menu.css';

export function Menu(){

    const navigate = useNavigate();

    return (
        <div>
            <header>
            <button className="previousBtn" onClick={() => navigate(-1)} >
                <FiArrowLeft size={20} color="#FFF" />
            </button>
                <Header />
            </header>
            
            <section>
                <Recepies />
            </section>
            
        </div>
    )

    
}