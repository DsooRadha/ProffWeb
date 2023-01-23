import { useState } from 'react'
import { ConfirmSendInfo } from '../../ConfirmSendInfo/ConfirmSendInfo';
import './formRegister.css'

export const FormRegister = () => {
    const [inputList, setInputList] = useState([{}]);
    const [dataUser, setDataUser] = useState({});
    const [showConfirm, setShowConfirm] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        let data = {
            name: e.target.name.value,
            profilePicture: e.target.profilePicture.value,
            whatsapp: e.target.whatsapp.value,
            biography: e.target.biography.value,
            course: e.target.course.value,
            price: e.target.price.value,
            availableTimes: inputList
        }
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({ ...dataUser, availableTimes: inputList })
            body: JSON.stringify(data)
        };
        await fetch('https://63ca2143d0ab64be2b4cd856.mockapi.io/userData', config);
        setShowConfirm(true)


        setDataUser({

        });
        console.log(dataUser, 'data user')
        // sendUser(dataUser);

    };

    const sendUser = async (user) => {
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...dataUser, availableTimes: inputList })
        };
        console.log(config, 'config')
        await fetch('https://63ca2143d0ab64be2b4cd856.mockapi.io/userData', config);
        setShowConfirm(true)
        // e.target.reset();
    };

    const handleScheduleAdd = () => setInputList([...inputList, {}]);

    const handleScheduleAddRemove = (i) => {
        const list = [...inputList];
        list.splice(i, 1)
        setInputList(list)
    };

    const handleScheduleChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list)
    };

    const showModal = () => setShowConfirm(false)

    return (
        <>
            <form className='register-Form' onSubmit={(e) => handleSubmit(e)} autoComplete='on'>
                <h2>Tus datos</h2>
                <label className='register-Form--labelNormal' htmlFor="name">
                    <span>Nombre Completo</span>
                    <input type="text" id="name" required autoComplete='name' />
                </label>
                <label className='register-Form--labelNormal' htmlFor="profilePicture">
                    <span>Link de tu foto    (comience con http//)</span>
                    <input type="url" id="profilePicture" required />
                </label>
                <label className='register-Form--labelNormal' htmlFor="whatsapp">
                    <span>Whatsapp    (solamente números)</span>
                    <input type="tel" id="whatsapp" required />
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
                    <input type="number" id="price" required min="0" />
                </label>
                <h2>Horarios Disponibles</h2>
                {inputList.map((element, i) => {
                    return (
                        <section key={i}>
                            {(inputList.length - 1 === i && inputList.length < 5) && (<button className='schedulea-btn' onClick={() => handleScheduleAdd()}>+ Nuevo horario</button>)}
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
                                    <select name='startClass' value={element.startTime} onChange={(e) => handleScheduleChange(e, i)} id="startTime" required >
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
                                <label className='register-Form--labelSchedule-day' htmlFor="endTime">
                                    <span>Hasta</span>
                                    <select name='endClass' value={element.endTime} id="endTime" onChange={(e) => handleScheduleChange(e, i)} required>
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
                            </div>
                            {inputList.length > 1 && (<div className='content--schedulea-btn-delete'><button onClick={() => handleScheduleAddRemove(i)} className='schedulea-btn-delete'>- Eliminar horario</button></div>)};
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
            {showConfirm && <ConfirmSendInfo showModal={showModal} />}
        </>
    )
};