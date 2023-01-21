import { useState, useEffect } from "react"
import './professor.css'

export const Professor = () => {
    const [courses, setCourses] = useState([]);

    const getAllCourses = async () => {
        const config = {
            method: "GET",
            headers: { "Content-type": "application/json;charset=UTF-8" }
        };
        const response = await fetch('https://63ca2143d0ab64be2b4cd856.mockapi.io/userData', config)
        const allCourses = await response.json();
        setCourses(allCourses)

    };

    useEffect(() => {
        getAllCourses()
    }, []);

    return (
        <>
            {courses.length > 0 && courses.map((item, index) => {
                return (
                    <article className="info-professor" key={index}>
                        <section className="content-info-professor">
                            <div className="info-professor--profile">
                                <img src={item.profilePicture} alt={item.name} />
                                <div className="info-professor-data">
                                <h2>{item.name}</h2>
                                <h4>{item.course}</h4>
                                </div>
                            </div>
                            <p>{item.biography}</p>
                        </section>
                        <div className="info-contactAndPrice">
                            <p>Precio/hora <span>$ {item.price}</span></p>
                            <button>Entrar en contacto</button>
                        </div>
                    </article>
                )
            })}
        </>
    )
};