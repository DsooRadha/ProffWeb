import { useNavigate} from 'react-router-dom';
import './header.css'

export const Header = () => {
    const navigate = useNavigate();

    return (
        <header>
            <button className='return-btn' onClick={()=>navigate('/')}></button>
            <div className='header-content--img'>
            <img className='logo' src='https://user-images.githubusercontent.com/101679628/213553684-9dc3398f-77ec-40b0-b951-7b74db0abb21.png' alt="logo" />
            </div>
        </header>
    )
}