import { Header } from '../Header/Header'
import './notFound.css'

export const NotFound = () => {
    return (
        <section className='notFound'>
            <Header />
            {/* <div className='messageError'> */}

            <div className='notFound--contentImg'>
                    <img src="https://user-images.githubusercontent.com/101679628/213548809-efe2a84d-5f08-471b-892d-b25e07dda267.png" alt="logo" />
                </div>
                <h1> Not found!</h1>
                
                {/* </div> */}
            </section>
    )
}