import './professor.css'

export const Professor = ({ courses }) => {
    

    return (
        <section className="content-info-professors">
            {courses.length > 0 && courses.map((item, index) => {
                return (
                    <article className="info-professor" key={index}>
                        <section className="content-info-professor">
                            <div className="info-professor--profile">
                                <div className="info-professor--profile-content-img">
                                    <img src={item.profilePicture} alt={item.name} />
                                </div>
                                <div className="info-professor-data">
                                    <h2>{item.name}</h2>
                                    <h4>{item.course}</h4>
                                </div>
                            </div>
                            <p>{item.biography}</p>
                        </section>
                        <div className="info-contactAndPrice">
                            <p>Precio/hora <span>$ {item.price}.00</span></p>
                            <button>Entrar en contacto</button>
                        </div>
                    </article>
                )
            })}
        </section>
    )
};