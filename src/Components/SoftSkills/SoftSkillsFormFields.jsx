export default function SoftSkillsFormFields(props) {
    return (
        <ul>
            {props.temporaryData.map((skill, index) => {
                return (
                    <li key={index} >
                        <label htmlFor={`soft-skill-${index}`}>{`skill ${index + 1}`}</label>
                        <input type="text" name="soft-skills" id={`soft-skill-${index}`} value={skill} onChange={(e) => props.handleTemporaryDataChange(e, index)} />
                    </li>
                )
            })}
        </ul>
    )
}