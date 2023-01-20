import { useState } from 'react'
import './formRegister.css'

export const FormRegister = () => {
    const [dataUser, setDataUser] = useState({});

    const handleSubmit =async (e) => {
        e.preventDefault();

            setDataUser({
                name: e.target.name.value,
                profilePicture: e.target.profilePicture.value,
                whatsapp: e.target.whatsapp.value,
                biography: e.target.biography.value,
                course: e.target.course.value,
                price: e.target.price.value,
                weekday:e.target.weekday.value,
                startDay:e.target.startDay.value,
                endDay:e.target.endDay.value
            });

            const config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataUser)
            };
            await fetch('https://63ca2143d0ab64be2b4cd856.mockapi.io/userData', config);
        
    }
   
    return (
        <>
            <form className='register-Form' onSubmit={handleSubmit} autoComplete='on'>
                <h2>Tus datos</h2>
                <label for="name">
                    <span>Nombre Completo</span>
                    <input type="text" id="name" required autoComplete='name'/>
                </label>
                <label for="profilePicture">
                    <span>Link de tu foto    (comience con //http)</span>
                    <input type="url" id="profilePicture" required />
                </label>
                <label for="whatsapp">
                    <span>Whatsapp    (solamente números)</span>
                    <input type="number" id="whatsapp" required />
                </label>
                <label for="biography">
                    <span>Biografía</span>
                    <input type="textarea" id="biography" required />
                </label>

                <h2>Sobre la clase</h2>
                <label for="course">
                    <span>Materia</span>
                    <select id='course' required>
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

                <label for="price">
                    <span>Costo de tu hora por lección (en $ MXN)</span>
                    <input type="number" id="price" required />
                </label>

                <article>
                    <h2>Horarios Disponibles</h2>
                    <button>+ Nuevo horario</button>
                </article>
                <label for="weekday">
                    <span>Día de la Semana</span>
                    <select name="" id="weekday" required>
                        <option value=""></option>
                        <option value="Lunes">Lunes</option>
                        <option value="Martes">Martes</option>
                        <option value="Miercoles">Miercoles</option>
                        <option value="Jueves">Jueves</option>
                        <option value="Viernes">Viernes</option>
                    </select>
                </label>

                <label for="startDay">
                    <span>Desde</span>
                    <input type="date" id="startDay" required />
                </label>
                <label for="endDay">
                    <span>Hasta</span>
                    <input type="date" id="endDay" required />
                </label>
               
                <article className='finalForm'>
                    <div className='warningText'>
                        <p>¡Importante! </p>
                        <p>  Relleno todos los datos</p>
                    </div>
                    <input className='form-btn' type='submit' value="Guardar registro" ></input>
                </article>
            </form>
        </>
    )
}