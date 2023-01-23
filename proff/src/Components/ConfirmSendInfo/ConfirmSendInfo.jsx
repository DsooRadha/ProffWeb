import './confirmSendInfo.css'

export const ConfirmSendInfo = ({ showModal }) => {
    const closeModal = () => {
        showModal()
    }
    return (
        <section className="modal">
            <div className="modalImage">
                <div className='btnModal'>
                    <button className='closeModal' onClick={() => closeModal()}>X</button>
                </div>
                <h2>¡FELICIDADES!</h2>
                <p>Tus datos han sido guardados correctamente</p>

                <div className='modal--content-img'>
                    <img src="https://i.imgur.com/TtPCMzo.gif" alt="Felicitaciones" />
                </div>
                <div className='modal--message'>
                    <h2>Inscripción Guardada</h2>
                </div>
            </div>
        </section>
    )
}
