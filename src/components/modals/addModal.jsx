const AddModal = (props) => {
    return (
        <div className="add-person">
            <div className="add-person__wrapper">
                <h1 className="add-person__title">
                    Add new person !
                </h1>
                <form className="add-person__form form" onSubmit={props.addToList}>
                    <input type="text" className="form__name" value={props.name} onChange={props.handleNameChange} placeholder="name" />
                    <input type="text" className="form__role" value={props.role} onChange={props.handleRoleChange} placeholder="role" />
                    <input type="text" className="form__department" value={props.department} onChange={props.handleDepartmentChange} placeholder="department" />
                    <input type="text" className="form__job" value={props.job} onChange={props.handleJobChange} placeholder="job" />
                    <button type="submit">ADD</button>
                </form>
            </div>
            <div className="modal__bg"></div>
        </div>
    )
}

export default AddModal;