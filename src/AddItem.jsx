 import { FaPlus } from "react-icons/fa"
 
 const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
		<form className="addForm" onSubmit={handleSubmit}>
			<label htmlFor="item">Add Item</label>
			<input
				type="text"
				id="item"
				placeholder="Add item"
				autoFocus
				required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)} 
			/>
			<button type="submit" aria-label="Add item">
				<FaPlus />
			</button>
		</form>
  )
}

export default AddItem