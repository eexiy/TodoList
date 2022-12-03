import React from 'react'
import "./ToDoModal.scss";

const ToDoModal = ({ handleCloseModal, text, showModal, title, setTitle, content, setContent, addListItem, }) => {

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleContentChange = (e) => {
        setContent(e.target.value)
    }

    return (
        <div className={showModal ? 'modal active' : 'modal'}>
            <div className="modal__wrapper">
                <h2 className="modal__title">{text}</h2>
                <form className="modal__form">
                    <div className="modal__group">
                        <input onChange={handleTitleChange} value={title} type="text" required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Title</label>
                    </div>
                    <div className="modal__group">
                        <input onChange={handleContentChange} value={content} type="text" required />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Content</label>
                    </div>
                </form>
                <div className="modal__buttons">
                    <button onClick={handleCloseModal} className="modal__cancel">Отмена</button>
                    <button onClick={addListItem} className="modal__add">{text}</button>
                </div>
            </div>
        </div>
    )
}

export default ToDoModal