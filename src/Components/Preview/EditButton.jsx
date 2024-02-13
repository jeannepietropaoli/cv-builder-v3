import '../../style/EditButton.css'
import pencilLogo from '../../assets/pencil.png'

export default function EditButton(props) {
    return (
        <button className="edit-button" onClick={props.switchToEditMode}>
            <img src={pencilLogo} alt="Edit" />
        </button>
    )
}