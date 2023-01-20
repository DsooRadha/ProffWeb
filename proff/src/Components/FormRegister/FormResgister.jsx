import { useState } from 'react'
import './formRegister.css'

export const FormRegister = () => {
    const [inputList, setInputList] = useState([{}]);
    const [dataUser, setDataUser] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        setDataUser({
            name: e.target.name.value,
            profilePicture: e.target.profilePicture.value,
            whatsapp: e.target.whatsapp.value,
            biography: e.target.biography.value,
            course: e.target.course.value,
            price: e.target.price.value,
            AvailableTimes:inputList,
        });

        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataUser)
        };
        console.log(dataUser)
        await fetch('https://63ca2143d0ab64be2b4cd856.mockapi.io/userData', config);
    };

    const handleScheduleAdd = () => setInputList([...inputList, {}]);

    const handleScheduleAddRemove = (i) => {
        const list = [...inputList];
        list.splice(i, 1)
        setInputList(list)
    }

    const handleScheduleChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list)
    }
    //Extras: message error
    //mensaje de confirmacion de datos enviados
    //reset el form
 
    return (
        <>
            <form className='register-Form' onSubmit={handleSubmit} autoComplete='on'>
                <h2>Tus datos</h2>
                <label className='register-Form--labelNormal' htmlFor="name">
                    <span>Nombre Completo</span>
                    <input type="text" id="name" required autoComplete='name' />
                </label>
                <label className='register-Form--labelNormal' htmlFor="profilePicture">
                    <span>Link de tu foto    (comience con //http)</span>
                    <input type="url" id="profilePicture" required />
                </label>
                <label className='register-Form--labelNormal' htmlFor="whatsapp">
                    <span>Whatsapp    (solamente números)</span>
                    <input type="number" id="whatsapp" required />
                </label>
                <label className='register-Form--labelNormal' htmlFor="biography">
                    <span>Biografía</span>
                    <textarea id="biography" required />
                </label>

                <h2>Sobre la clase</h2>
                <label className='register-Form--labelNormal' htmlFor="course">
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

                <label className='register-Form--labelNormal' htmlFor="price">
                    <span>Costo de tu hora por lección (en $ MXN)</span>
                    <input type="number" id="price" required />
                </label>
                {inputList.map((element, i) => {
                    return (
                        <section key={i}>
                            <article className='schedule'>
                                <h2>Horarios Disponibles</h2>
                                {(inputList.length - 1 === i && inputList.length < 5) && (<button className='schedulea-btn' onClick={() => handleScheduleAdd()}>+ Nuevo horario</button>)}
                            </article>
                            <div className='content--schedule'>
                                <label className='register-Form--labelSchedule' htmlFor="weekday">
                                    <span>Día de la Semana</span>
                                    <select name="weekday" id="weekday" onChange={(e) => handleScheduleChange(e, i)} required>
                                        <option value="" disabled selected className='placeholder'>Selecciona un día</option>
                                        <option value="Lunes">Lunes</option>
                                        <option value="Martes">Martes</option>
                                        <option value="Miercoles">Miercoles</option>
                                        <option value="Jueves">Jueves</option>
                                        <option value="Viernes">Viernes</option>
                                    </select>
                                </label>

                                <label className='register-Form--labelSchedule-day' htmlFor="startTime">
                                    <span>Desde</span>
                                    <input name='startClass' type="time" value={element.startTime} onChange={(e) => handleScheduleChange(e, i)} id="startTime" required />
                                </label>
                                <label className='register-Form--labelSchedule-day' htmlFor="endTime">
                                    <span>Hasta</span>
                                    <input name='endClass' type="time" value={element.endTime} id="endTime" onChange={(e) => handleScheduleChange(e, i)} required />
                                </label>
                            </div>
                            {inputList.length > 1 && (<button onClick={() => handleScheduleAddRemove(i)}>X BORRAR</button>)};

                        </section>
                    )
                })};

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