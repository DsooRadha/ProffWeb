export const Register = () => {

    //Header pasarlo a un componente aparte
    return (
        <>
            <section>
                <header>
                    <button>REGRESAR</button>
                    <p>Proff</p>
                </header>
                <div>
                    <h2>¡Qué increíble que quieras enseñar!</h2>
                    <p>El primer paso es rellenar este formulario de inscripción.</p>
                </div>
            </section>


            <form action="">
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
                <article>
                    <div>
                        <p>¡Importante! </p>
                        <p>  Relleno todos los datos</p>
                    </div>
                    <input type='submit'></input>
                </article>
            </form>
        </>

    )
}