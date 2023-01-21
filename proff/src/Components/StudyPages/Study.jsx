import { Professor } from '../../Professor/Professor'
import { Header } from '../Header/Header'
import './study.css'

export const Study = () => {
    return (
        <main className='study-main'>
            <Header />
            <section className='welcomeStudents'>
                <h2>Estos son los <br /> proffs disponibles.</h2>
            </section>
            <section className='menu-filtering'>
                <label className='' htmlFor="course">
                    <span>Materia</span>
                    <select id='course' required>
                        <option disabled selected className='placeholder'>Selecciona lo que deseas enseñar</option>
                        <option>Artes</option>
                        <option>Biología</option>
                        <option>Ciencias</option>
                        <option>Educación Fisica</option>
                        <option>Física</option>
                        <option>Geografía</option>
                        <option>Matemática</option>
                        <option>Portugués</option>
                        <option>Química</option>
                    </select>
                </label>
                <label>
                    <p>Día de la Semana</p>
                    <select name="weekday" id="weekday" required>
                        <option value="" disabled selected className='placeholder'>Selecciona un día</option>
                        <option value="Lunes">Lunes</option>
                        <option value="Martes">Martes</option>
                        <option value="Miercoles">Miercoles</option>
                        <option value="Jueves">Jueves</option>
                        <option value="Viernes">Viernes</option>
                    </select>
                </label>
                <div>
                    <p>Horario</p>
                    <select name="" id=""></select>
                </div>
            </section>
            <Professor />
        </main>
    )
}