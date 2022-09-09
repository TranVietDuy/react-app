import ItemList from "./ItemList"

const Content = ({ items, handleCheck, handleDelete }) => {
	return (
		<main>
			{items.length > 0 ? (
				<ItemList
					items={items}
					handleCheck={handleCheck}
					handleDelete={handleDelete}
				/>
			) : (
				<p style={{ marginTop: "2rem" }}>No items in the list.</p>
			)}
		</main>
	)
}

export default Content
