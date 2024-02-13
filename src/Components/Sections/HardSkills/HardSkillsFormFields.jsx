export default function HardSkillsFormFields(props) {
    const convertToReadableName = (key) => {
        return key.split(/(?=[A-Z])/).join(' ').toLowerCase()
    }

    const convertToClassName = (key) => {
        return key.split(/(?=[A-Z])/).join('-').toLowerCase()
    }

    return (
        <ul>
            {Object.keys(props.temporaryData).map((key, index) => {
                return (
                    <ul key={index} className="form-fields">
                        <h3 htmlFor={key}>{convertToReadableName(key)}</h3>

                        {props.temporaryData[key].map((skill, index) => {
                            return (
                                <li key={index} >
                                    <label htmlFor={`${key}-${index}`}>{`skill ${index + 1}`}</label>
                                    <input type="text" name={key} id={`${key}-${index}`} value={skill} onChange={(e) => props.handleTemporaryDataChange(e, index)} />
                                </li>
                            )
                        })}
                    </ul>
                )
            })}
        </ul>
    )
}