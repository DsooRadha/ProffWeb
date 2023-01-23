import { useState, useEffect } from 'react'
import { Professor } from './Professor/Professor'
import { Header } from '../Header/Header'
import { NoMatch } from './NoMatch/NoMatch'
import './study.css'

export const Study = () => {
    const [courses, setCourses] = useState([]);
    const [allCourses, setAllCourses] = useState([]);
    const [allFilter, setAllFilter] = useState([]);

    let course = '';
    let hour = '';
    let day = '';

    const getAllCourses = async () => {
        const config = {
            method: "GET",
            headers: { "Content-type": "application/json;charset=UTF-8" }
        };
        const response = await fetch('https://63ca2143d0ab64be2b4cd856.mockapi.io/userData', config)
        const allCourses = await response.json();
        setCourses(allCourses)
        setAllCourses(allCourses)
        setAllFilter(allCourses)
    };

    useEffect(() => {
        getAllCourses()
    }, []);

    const valueHour = (e) => {
        hour = e.target.value
        console.log(hour, 'H')
    };
    const valueWeekDay = (e) => {
        day = e.target.value;
        console.log(day, 'D')
    }
    const valueCourse = (e) => {
        course = e.target.value;
        console.log(course, 'C')
        console.log(globalFilter(allCourses, '', '', course))
    }

    const globalFilter = (data, valueDay, valueHour, valueCourse) => {
        let filterData = data

        console.log(handleCourse('Quimica'))
        if (valueDay !== '') {
            filterData = handleWeekDay(valueDay)
        }
        if (valueCourse !== '') {
            filterData = handleCourse(valueCourse)
        }
        if (valueHour !== '') {
            filterData = hoursRange(valueHour)
        }
        return filterData
    }

    const handleCourse = (courseUser) => {
        const resultSearch = allCourses.filter((item) => {
            if ((item.course).includes(courseUser)) {
                return item
            };
        });
        setCourses(resultSearch);
    };

    const handleWeekDay = (dayUser) => {

        // if (e.target.value === '') {
        //     return getAllCourses()
        // };

        const daysCourses = [];

        courses.forEach((element) => {
            const daysClass = element.availableTimes
            daysClass.forEach((day) => {
                if (day.weekday === dayUser) {
                    daysCourses.push(element)
                };
            });
        });
        setCourses(daysCourses)
    };

    const hoursRange = (valueUser) => {
        const range = []
        const result = []

        courses.forEach((element) => {
            const daysClass = element.availableTimes
            daysClass.forEach((day) => {
                const start = parseInt(day.startClass)
                const end = parseInt(day.endClass)
                if (valueUser >= start && valueUser < end) {
                    range.push(element);
                };
            });
        });

        for (let professor of range) {
            if (!result.includes(professor)) {
                result.push(professor);
            }
        };

        return result
    };

    const handleSchedule = (e) => {
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
                    <select
                        onChange={(e) => valueCourse(e)}
                        // onChange={(e) => handleCourse(e)} 
                        className='menu-filtering--select' id='course' required >
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
                    <select
                        onChange={(e) => valueWeekDay(e)}
                        // onChange={(e) => handleWeekDay(e)} 
                        className='menu-filtering--select' name="weekday" id="weekday" required>
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
                    <select
                        onChange={(e) => valueHour(e)}
                        // onChange={(e) => handleSchedule(e)} 
                        className='menu-filtering--select' name="schedule" id="schedule" required>
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