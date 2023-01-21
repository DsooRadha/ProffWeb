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
                <label htmlFor="course">
                    <span>Materia</span>
                    <select className='menu-filtering--select' id='course' required>
                        <option></option>
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
                    <span>Día de la Semana</span>
                    <select className='menu-filtering--select' name="weekday" id="weekday" required>
                        <option value=""></option>
                        <option value="Lunes">Lunes</option>
                        <option value="Martes">Martes</option>
                        <option value="Miercoles">Miercoles</option>
                        <option value="Jueves">Jueves</option>
                        <option value="Viernes">Viernes</option>
                    </select>
                </label>
                <label>
                    <span>Horario</span>
                    <input  className='menu-filtering--select' type="time" />
                </label>
            </section>
            <Professor />
        </main>
    )
}