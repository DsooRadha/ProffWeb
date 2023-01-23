import { useState, useEffect } from 'react'
import { Professor } from './Professor/Professor'
import { Header } from '../Header/Header'
import { NoMatch } from './NoMatch/NoMatch'
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
        const resultSearch = allCourses.filter((item) => {
            if ((item.course).includes(e.target.value)) {
                return item
            }
        });
        setCourses(resultSearch);
    };

    const handleWeekDayChange = (e) => {

        if (e.target.value === '') {
            return getAllCourses()
        };

        const daysCourses = [];

        allCourses.forEach((element) => {
            const daysClass = element.availableTimes
            daysClass.forEach((day) => {
                if (day.weekday === e.target.value) {

                    daysCourses.push(element)
                };
            });
        });
        setCourses(daysCourses)
    };

    const hoursRange = (valueUser) => {
        const range = []
        const result = []
        allCourses.forEach((element) => {
            const daysClass = element.availableTimes
            const rangeAvailableClass = daysClass.map((day) => {
                const start = parseInt(day.startClass) - 1
                const end = parseInt(day.endClass) - 1
                range.push({ element, rangeHour: [start, end] });
            });
            return rangeAvailableClass
        });

        const hoursAvailable = []
        range.forEach((item) => {
            const start = item.rangeHour.shift()
            const end = item.rangeHour.pop()
            let numbersHours = start;
            for (let i = start; i < end; i++) {
                numbersHours++
                hoursAvailable.push(numbersHours);
            };
            // console.log(hoursAvailable)
            // const result= hoursAvailable.filter(hour=>hour===valueUser)
            // console.log(result,'ll')
            // });
            if ([numbersHours].includes(parseInt(valueUser))) {
                console.log(item.element, 'gfd')
                result.push(item.element)
                return item.element
            }
        });
        return result
    };

    const handleScheduleChange = (e) => {
        if (e.target.value === '') {
            getAllCourses()
        };
        setCourses(hoursRange(e.target.value));
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
                    <select onChange={(e) => handleScheduleChange(e)} className='menu-filtering--select' name="schedule" id="schedule" required>
                        <option value=''></option>
                        <option value="6">6 hrs</option>
                        <option value="7">7 hrs</option>
                        <option value="8">8 hrs</option>
                        <option value="9">9 hrs</option>
                        <option value="10">10 hrs</option>
                        <option value="11">11 hrs</option>
                        <option value="12">12 hrs</option>
                        <option value="13">13 hrs</option>
                        <option value="14">14 hrs</option>
                        <option value="15">15 hrs</option>
                        <option value="16">16 hrs</option>
                        <option value="17">17 hrs</option>
                        <option value="18">18 hrs</option>
                        <option value="19">19 hrs</option>
                        <option value="20">20 hrs</option>
                        <option value="21">21 hrs</option>
                    </select>
                </label>
            </section>
            <Professor courses={courses} />
            {courses.length === 0 && <NoMatch />}
        </main>
    );
}