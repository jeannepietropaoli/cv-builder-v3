export default function HardSkillsFormFields(props) {
    const convertToReadableName = (key) => {
        return key.split(/(?=[A-Z])/).join(' ').toLowerCase()
    }

    const convertToClassName = (key) => {
        return key.split(/(?=[A-Z])/).join('-').toLowerCase()
    }

    return (
        <div className="form-fields">
            {Object.keys(props.temporaryData).map((key, index) => {
                return (
                    <div key={index} className={convertToClassName(key)}>
                        <h3 htmlFor={key}>{convertToReadableName(key)}</h3>

                        {props.temporaryData[key].map((skill, index) => {
                            return (
                                <li key={index} >
                                    <label htmlFor={`${key}-${index}`}>{`skill ${index + 1}`}</label>
                                    <input type="text" name={key} id={`${key}-${index}`} value={skill} onChange={(e) => props.handleTemporaryDataChange(e, index)} />
                                </li>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}