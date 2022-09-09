import { useState } from "react"
import { FaTrashAlt } from "react-icons/fa"

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "One bag of Salmiakki",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ])
  const handleCheck = (id) => {
    const itemList = items.map((item)=>
    item.id === id ? {...item, checked: !item.checked} : item
    )
    setItems(itemList)
    localStorage.setItem("items", JSON.stringify(itemList))
  }
  const handleDelete = (id) => {
    const itemList = items.filter((item) => item.id !== id)
    setItems(itemList)
    localStorage.setItem("items", JSON.stringify(itemList))
  }

  return (
    <main>
      {items.length > 0 ? ( 
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label
              style={(item.checked) ? {textDecoration: "line-through"} : {textDecoration: "none"}}
              onDoubleClick={() => handleCheck(item.id)}
            >{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0" 
            onClick={() => handleDelete(item.id)} 
            />
          </li>
        ))}
      </ul>
      ) : (
        <p style={{marginTop :"2rem"}}>
          No items in the list. 
        </p>) }
    </main>
  )
}

export default Content
