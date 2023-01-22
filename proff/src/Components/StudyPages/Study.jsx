import { useState, useEffect } from 'react'
import { Professor } from '../../Professor/Professor'
import { Header } from '../Header/Header'
import { NoMatch } from '../NoMatch/NoMatch'
import './study.css'

export const Study = () => {
    const [courses, setCourses] = useState([]);
    const [allCourses, setAllCourses] = useState([]);

    const getAllCourses = async () => {
        const config = {
            method: "GET",
            headers: { "Content-type": "application/json;charset=UTF-8" }
        };
        const response = await fetch('https://63ca2143d0ab64be2b4cd856.mockapi.io/userData', config)
        const allCourses = await response.json();
        setCourses(allCourses)
        setAllCourses(allCourses)
    };

    useEffect(() => {
        getAllCourses()
    }, []);

    const handleCourseChange = (e) => {
        if (e.target.value === '') {
            return getAllCourses()
        }
        const filtering = courses.filter(item => item.course === e.target.value)
        setCourses(filtering)
    };

    const handleWeekDayChange = (e) => {

        if (e.target.value === '') {
            return getAllCourses()
        }
        const daysCourses=[];

      courses.forEach((element) => {
            const daysClass = element.availableTimes
            // console.log(daysClass,'dayClass')
            daysClass.forEach((day) => {
                if (day.weekday === e.target.value) {
                    // console.log(day,'day')
                    if (day === daysClass[0]) {
                        console.log(element)
                        daysCourses.push(element)
                    }
                }
            });
        });
setCourses(daysCourses)
    };

    return (
        <main className='study-main'>
            <Header />
            <section className='welcomeStudents'>
                <h2>Estos son los <br /> proffs disponibles.</h2>
            </section>
            <section className='menu-filtering'>
                <label htmlFor="course">
                    <span>Materia</span>
                    <select onChange={(e) => handleCourseChange(e)} className='menu-filtering--select' id='course' required >
                        <option value=''></option>
                        <option value='Artes'>Artes</option>
                        <option value='Biología'>Biología</option>
                        <option value='Ciencias'>Ciencias</option>
                        <option value='Educación Fisica' >Educación Fisica</option>
                        <option value='Física'>Física</option>
                        <option value='Geografía'>Geografía</option>
                        <option value='Matemática'>Matemática</option>
                        <option value='Portugués'>Portugués</option>
                        <option value='Química'>Química</option>
                    </select>
                </label>
                <label>
                    <span>Día de la Semana</span>
                    <select onChange={(e) => handleWeekDayChange(e)} className='menu-filtering--select' name="weekday" id="weekday" required>
                        <option value=''></option>
                        <option value="Lunes">Lunes</option>
                        <option value="Martes">Martes</option>
                        <option value="Miercoles">Miercoles</option>
                        <option value="Jueves">Jueves</option>
                        <option value="Viernes">Viernes</option>
                    </select>
                </label>
                <label>
                    <span>Horario</span>
                    <input className='menu-filtering--select' type="time" />
                </label>
            </section>
            <Professor courses={courses} />
            {courses.length === 0 && <NoMatch />}
        </main>
    );
}