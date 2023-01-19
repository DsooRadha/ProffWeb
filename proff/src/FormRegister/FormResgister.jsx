import './formRegister.css'

export const FormRegister =()=>{
    return(
        <>
        <form className='register-Form' action="">
                <h2>Tus datos</h2>
                <label htmlFor="">Nombre Completo</label>
                <input type="text" />
                <label htmlFor="">Link de tu foto    (comience con //http)</label>
                <input type="url" />
                <label htmlFor="">Whatsapp    (solamente números)</label>
                <input type="number" />
                <label htmlFor="">Biografía</label>
                <input type="textarea" />
                <h2>Sobre la clase</h2>
                <label>Materia</label>
                <select>
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
                <label>Costo de tu hora por lección (en $ MXN)</label>
                <input type="number" />
                <article>
                    <h2>Horarios Disponibles</h2>
                    <button>+ Nuevo horario</button>
                </article>
                <label htmlFor="">Día de la Semana</label>
                <select name="" id="">
                    <option value=""></option>
                    <option value="">Lunes</option>
                    <option value="">Martes</option>
                    <option value="">Miercoles</option>
                    <option value="">Jueves</option>
                    <option value="">Viernes</option>
                </select>
                <label> Desde</label>
                <input type="date" />
                <label> Hasta</label>
                <input type="date" />
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