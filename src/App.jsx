import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import Container from "./components/Container/Container";
import ListItem from "./components/ListItem/ListItem";
import ToDoHeader from "./components/ToDoHeader/ToDoHeader";
import ToDoNav from "./components/ToDoNav/ToDoNav";
import addIcon from "./assets/icons/edit.svg";
import ToDoModal from "./components/ToDoModal/ToDoModal";

const date = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

function App() {
  const [openSearch, setOpenSearch] = useState(false)
  const [gridToList, setGridToList] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [toDoList, setTodoList] = useState(getLocalStorage)
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(toDoList))
  }, [toDoList])

  const toggleButton = () => {
    setGridToList(!gridToList)
  }

  const handleShowModal = () => {
    setShowModal(true)
  }

  const addListItem = () => {

    if (title && content) {
      const newList = {
        id: Math.random().toString(36).substring(2, 9),
        title,
        date,
        content
      }
      setTodoList([...toDoList, newList])
      setShowModal(false)
      setTitle('')
      setContent('')

    } else {
      alert('Заполните все поля')
    }
  }

  const handleDelete = (id) => {
    setTodoList([...toDoList.filter(item => item.id !== id)])
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const onEditMode = (id, title, content) => {
    setTodoList([...toDoList.map(item => {
      if (item.id === id) {
        item.title = title
        item.date = date
        item.content = content
      }
      return item
    })])
  }

  return (
    <div className="App">
      <ToDoHeader
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <Container>
        <ToDoNav
          openSearch={openSearch}
          toggleButton={toggleButton}
          gridToList={gridToList}
        />
        <div className={gridToList ? 'lists' : 'grid'}>
          {
            toDoList
              .filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase()))
              .map(item => <ListItem
                key={item.id}
                item={item}
                gridToList={gridToList}
                handleDelete={handleDelete}
                onEditMode={onEditMode} />)
          }
        </div>
      </Container>
      <div className="App-addBtn">
        <Button showModal={showModal} onClick={handleShowModal}>
          <img src={addIcon} alt="" />
        </Button>
      </div>
      <ToDoModal
        handleCloseModal={handleCloseModal}
        text='Добавить'
        showModal={showModal}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        addListItem={addListItem}
      />
    </div>
  );
}

export default App;
