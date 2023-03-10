import { FormRegister } from './FormRegister/FormResgister'
import { Header } from '../Header/Header'
import './register.css'

export const Register = () => {

    return (
        <>
            <section className='content-gray'>
                <Header />
                <div className='content--welcome'>
                    <h2>¡Qué increíble que quieras enseñar!</h2>
                    <p>El primer paso es rellenar este formulario de inscripción.</p>
                </div>
            </section>
            <FormRegister />
        </>
    )
}