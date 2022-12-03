import React, { useState } from 'react'

import './ListItem.scss'

import editIcon from "../../assets/icons/edit.svg";
import trashIcon from "../../assets/icons/trash.svg";
import ToDoModal from '../ToDoModal/ToDoModal';


const ListItem = ({ gridToList, item, handleDelete, onEditMode }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState(item.title)
    const [descr, setDescr] = useState(item.content)
    const { title, content, date, id } = item


    const handleEdit = (id) => {
        setIsEditing(true)
    }

    const handleCloseModal = () => {
        setIsEditing(false)
    }
    
    const editTodo = () => {
        onEditMode(id, text, descr)
        setIsEditing(false)
    }


    return (
        <>
            <div className="list">
                <div className={gridToList ? "list__wrapper active" : "list__wrapper"} >
                    <h2 className="list__title">{title}</h2>
                    <span className="list__date">{date}</span>
                </div>
                <p className="list__description">{content}</p>
                <div className="list__buttons">
                    <button onClick={handleEdit} className="list__buttons-edit">
                        <img src={editIcon} alt="Edit icon" />
                        <span>РЕДАКТИРОВАТЬ</span>
                    </button>
                    <button onClick={() => handleDelete(id)} className="list__buttons-trash">
                        <img src={trashIcon} alt="Trash icon" />
                        <span>Удалить</span>
                    </button>
                </div>
            </div>
            <ToDoModal
                text='Изменить'
                showModal={isEditing}
                handleCloseModal={handleCloseModal}
                addListItem={editTodo}
                item={item}
                title={text}
                content={descr}
                setTitle={setText}
                setContent={setDescr}
            />
        </>
    )
}

export default ListItem