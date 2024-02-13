import { useState } from "react";
import EditButton from "../../Preview/EditButton";
import Form from "../../EditMode/Form";
import EducationFormFields from "./EducationFormFields";
import Preview from "../../Preview/Preview";
import '../../../style/Education.css'
import locationLogo from '../../../assets/location.svg'

export default function Education() {
    const [data, setData] = useState([
        {
            id: 1,
            school: 'University of Toronto',
            degree: 'Bachelor in Computer Science',
            startDate: 2012,
            endDate: 2015,
            description: 'I studied computer science at the University of Toronto. I learned a lot about programming and I also learned how to work in a team.'
        },
        {
            id: 2,
            school: 'University of Montreal',
            degree: 'Master in Computer Science',
            startDate: 2015,
            endDate: 2017,
            description: 'I continued my studies at the University of Montreal. I learned a lot about programming and I also learned how to work in a team.'
        }
    ])

    const [temporaryData, setTemporaryData] = useState(data)

    const [editMode, setEditMode] = useState(false)

    const saveDataChange = () => {
        setData(temporaryData)
        setEditMode(false)
    }

    const cancelChanges = () => {
        setTemporaryData(data)
        setEditMode(false)
    }

    const handleTemporaryDataChange = (e) => {   
        setTemporaryData(temporaryData.map(course => {
                return e.target.parentNode.id == course.id
                    ? {...course, [e.target.name]: e.target.value}
                    : {...course}
            })
        )
    }

    return (
        <>
            <Preview switchToEditMode={() => setEditMode(true)} sectionName="education" >
                <h2 className="section-title">Education</h2>
                {data.map(course => {
                    return (
                        <div key={course.id} className="course">
                            <h3>• {course.degree}</h3>
                            <h4 className="detailed-subtitle">
                                <img className="illustrative-logo" src={locationLogo} alt="pin location logo" />
                                {course.school}
                            </h4>
                            <span> | {`${course.startDate} - ${course.endDate}`}</span>
                            <p className="description">{`➤ ${course.description}`}</p>
                        </div>
                    )
                })}
            </Preview>

            {editMode &&
                <Form saveDataChange={saveDataChange} cancelChanges={cancelChanges} >
                    <EducationFormFields temporaryData={temporaryData} handleTemporaryDataChange={handleTemporaryDataChange} />
                </Form>
            }
        </>
    )
}