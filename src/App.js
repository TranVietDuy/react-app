import { useState } from "react"
import Content from "./Content"
import Footer from "./Footer"

import Header from "./Header"

function App() {
	const [items, setItems] = useState([
		{
			id: 1,
			checked: true,
			item: "One bag of Salmiakki (salt liquorice)",
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
		const itemList = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
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
		<div className="App">
			<Header />
			<Content
				items={items}
				setItem={setItems}
				handleCheck={handleCheck}
				handleDelete={handleDelete}
			/>
			<Footer length={items.length} />
		</div>
	)
}

export default App
