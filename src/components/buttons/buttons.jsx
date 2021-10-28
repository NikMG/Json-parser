const Buttons = ({ fetch, deleteItem, addItem }) => {
    return (
        <div className="json-table__buttons buttons">
            <span className="buttons__item" onClick={fetch}>
                Load list
            </span>
            <span className="buttons__item" onClick={deleteItem}>
                Delete item
            </span>
            <span className="buttons__item" onClick={addItem}>
                Add item
            </span>
        </div>
    );
}

export default Buttons;