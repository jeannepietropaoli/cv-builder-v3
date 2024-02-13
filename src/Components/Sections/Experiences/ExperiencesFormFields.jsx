export default function ExperiencesFormFields(props) {
    return (
        <ul>
            {props.temporaryData.map((experience, index) => {
                return (
                    <ul className="form-fields" key={experience.id} id={experience.id}>
                        <h3>Experience {index + 1}</h3>
                        <li>
                            <label htmlFor={`experience${experience.id}-title`}>Title</label>
                            <input type="text" name="title" id={`experience${experience.id}-title`} value={experience.title} onChange={(e) => props.handleTemporaryDataChange(e)} />
                        </li>
                        <li>
                            <label htmlFor={`experience${experience.id}-company`}>Company</label>
                            <input type="text" name="company" id={`experience${experience.id}-company`} value={experience.company} onChange={(e) => props.handleTemporaryDataChange(e)} />
                        </li>
                        <li>
                            <label htmlFor={`experience${experience.id}-start-date`}>Start date</label>
                            <input type="number" name="startDate" id={`experience${experience.id}-start-date`} value={experience.startDate} onChange={(e) => props.handleTemporaryDataChange(e)} />
                        </li>
                        <li>
                            <label htmlFor={`experience${experience.id}-end-date`}>End date</label>
                            <input type="number" name="endDate" id={`experience${experience.id}-end-date`} value={experience.endDate} onChange={(e) => props.handleTemporaryDataChange(e)} />
                        </li>
                        <li>
                            <label htmlFor={`experience${experience.id}-description`}>Description</label>
                            <textarea type="text" name="description" id={`experience${experience.id}-description`} value={experience.description} onChange={(e) => props.handleTemporaryDataChange(e)} />
                        </li>
                    </ul>
                )
            })}
        </ul>
    )
}