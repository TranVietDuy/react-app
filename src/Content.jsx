import AddItem from "./AddItem"
import ItemList from "./ItemList"


const Content = ({
	items,
	handleCheck,
	handleDelete,
	handleSubmit,
	newItem,
	setNewItem,
}) => {
	return (
		<main>
			<AddItem
				className="child"
				newItem={newItem}
				setNewItem={setNewItem}
				handleSubmit={handleSubmit}
			/>
			<div className="child">
				{items.length > 0 ? (
					<ItemList
						items={items}
						handleCheck={handleCheck}
						handleDelete={handleDelete}
					/>
				) : (
					<p style={{ marginTop: "2rem" }}>No items in the list.</p>
				)}
			</div>
		</main>
	)
}

export default Content
