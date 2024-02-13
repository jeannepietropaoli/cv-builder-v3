import { useState } from "react";
import Preview from "../../Preview/Preview";
import ExperiencesFormFields from "./ExperiencesFormFields";
import Form from "../../EditMode/Form";
import locationLogo from '../../../assets/location.svg'

export default function Experiences() {
    const [data, setData] = useState([
        {
            id: 1,
            title: 'Junior Web Developer',
            company: 'UBX',
            startDate: 2017,
            endDate: 2020,
            description: 'I worked as a junior web developer at UBX. I learned a lot about programming and I also learned how to work in a team.'
        },
        {
            id: 2,
            title: 'Web Developer and UI Designer',
            company: 'UBX',
            startDate: 2020,
            endDate: 2024,
            description: 'I evolved as a web developer and UI designer at UBX. I learned how to design user interfaces.'
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
        setTemporaryData(temporaryData.map(experience => {
                return e.target.parentNode.parentNode.id == experience.id
                    ? {...experience, [e.target.name]: e.target.value}
                    : {...experience}
            })
        )
    }

    return (
        <>
            <Preview switchToEditMode={() => setEditMode(true)} sectionName="experiences" >
                <h2 className="section-title">Experiences</h2>
                {data.map(experience => {
                    return (
                        <div key={experience.id} className="experience">
                            <h3>• {experience.title}</h3>
                            <h4 className="detailed-subtitle">
                                <img className="illustrative-logo" src={locationLogo} alt="pin location logo" />
                                {experience.company}
                            </h4>
                            <span> | {`${experience.startDate} - ${experience.endDate}`}</span>
                            <p className="description">➤ {experience.description}</p>
                        </div>
                    )
                })}
            </Preview>

            {editMode &&
                <Form saveDataChange={saveDataChange} cancelChanges={cancelChanges} >
                    <ExperiencesFormFields temporaryData={temporaryData} handleTemporaryDataChange={handleTemporaryDataChange} />
                </Form>
            }
        </>
    )
}