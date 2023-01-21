import { useNavigate} from 'react-router-dom';
import './Welcome.css'

export const Welcome = () => {
        const navigate = useNavigate();
    
    return (
        <section className='welcome'>
            <div className='intro'>
                <article>
                <img src="https://user-images.githubusercontent.com/101679628/213553684-9dc3398f-77ec-40b0-b951-7b74db0abb21.png" alt="TitleAppProff" />
                <h6>Tu plataforma de estudio en Linea</h6>
                </article>
                <div className='intro-content--img'>
                <img src="https://user-images.githubusercontent.com/101679628/213548809-efe2a84d-5f08-471b-892d-b25e07dda267.png" alt="logo" />
                </div>
            </div>

            <nav className='menu'>
                <div>
                <button className='menu-btn-study' onClick={()=>navigate('/study')}>Estudiar</button>
                <button className='menu-btn-class' onClick={()=>navigate('/register')}>Dar Clases</button>
                </div>
                <p>285 conexiones realizadas 💙</p>
            </nav>
        </section>

    );
};