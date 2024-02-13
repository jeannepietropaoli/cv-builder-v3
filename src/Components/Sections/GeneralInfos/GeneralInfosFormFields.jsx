export default function GeneralInfosFormFields(props) {
    const convertToReadableName = (key) => {
        return key.split(/(?=[A-Z])/).join(' ').toLowerCase()
    }

    return (
        <ul className="form-fields">
            {Object.keys(props.temporaryData).map((key, index) => {
                return (
                    <li key={index}>
                        <label htmlFor={key}>{convertToReadableName(key)}</label>
                        <input type="text" name={key} id={key} value={props.temporaryData[key]} onChange={(e) => props.handleTemporaryDataChange(e)} />
                    </li>
                )
            })}
        </ul>
    )
}