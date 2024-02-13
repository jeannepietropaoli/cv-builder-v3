export default function EducationFormFields(props) {
    return (
        <ul className="form-fields">
            {props.temporaryData.map(course => {
                return (
                    <li key={course.id} id={course.id}>
                        <label htmlFor={`course${course.id}-school`}>School</label>
                        <input type="text" name="school" id={`course${course.id}-school`} value={course.school} onChange={(e) => props.handleTemporaryDataChange(e)} />
                        <label htmlFor={`course${course.id}-degree`}>Degree</label>
                        <input type="text" name="degree" id={`course${course.id}-degree`} value={course.degree} onChange={(e) => props.handleTemporaryDataChange(e)} />
                        <label htmlFor={`course${course.id}-start-date`}>Start date</label>
                        <input type="number" name="startDate" id={`course${course.id}-start-date`} value={course.startDate} onChange={(e) => props.handleTemporaryDataChange(e)} />
                        <label htmlFor={`course${course.id}-end-date`}>End date</label>
                        <input type="number" name="endDate" id={`course${course.id}-end-date`} value={course.endDate} onChange={(e) => props.handleTemporaryDataChange(e)} />
                        <label htmlFor={`course${course.id}-description`}>Description</label>
                        <input type="text" name="description" id={`course${course.id}-description`} value={course.description} onChange={(e) => props.handleTemporaryDataChange(e)} />
                    </li>
                )
            })}
        </ul>
    )
}