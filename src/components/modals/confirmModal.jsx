const ConfirmModal = ({ person, deleteEvent }) => {
    return (
        <div className="confirm-delete">
            <div className="confirm-delete__modal modal">
                <h2 className="modal__title">
                    Are you Sure ?
                </h2>
                <p className="modal__text">
                    You want to delete {person.name} from {person.department} department! <br/>
                    Are you sure ? 
                </p>
                <div className="modal__buttons">
                    <span className="modal__buttons--item" onClick = {() => {deleteEvent(true)}}>Yes</span>
                    <span className="modal__buttons--item" onClick = {() => {deleteEvent(false)}}>No</span>
                </div>
            </div>
            <div className="modal__bg"></div>
        </div>
    )
}

export default ConfirmModal;