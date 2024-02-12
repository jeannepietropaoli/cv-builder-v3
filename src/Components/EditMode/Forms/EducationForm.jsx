export default function EducationForm(props) {
    return (
        <ul>
            {props.temporaryData.map((education, index) => {
                return (
                    <li key={education.id} id={education.id}>
                        <label htmlFor={`education-section-${index}-title`}>Title</label>
                        <input id={`education-section-${index}-title`} name="title" value={education.title} onChange={(e) => props.handleTemporaryDataChange(e)}></input>

                        <label htmlFor={`education-section-${index}-school`}>School</label>
                        <input id={`education-section-${index}-school`} name="school" value={education.school} onChange={(e) => props.handleTemporaryDataChange(e)}></input>

                        <label htmlFor={`education-section-${index}-date`}>Date</label>
                        <input id={`education-section-${index}-date`} name="date" value={education.date} onChange={(e) => props.handleTemporaryDataChange(e)}></input>
                    </li>
                )
            })}
        </ul>
    )
}