import { useState } from "react";
import Preview from "../../Preview/Preview";
import Form from "../../EditMode/Form";
import HardSkillsFormFields from "./HardSkillsFormFields";

export default function HardSkills() {
    const [data, setData] = useState({
        techStack : ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
        tools : ['Git', 'GitHub', 'VSCode', 'Figma'],
        languages : ['English', 'French']
    })

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

    const handleTemporaryDataChange = (e, skillIndex) => {   
        setTemporaryData({
            ...temporaryData,
            [e.target.name] : temporaryData[e.target.name].map((skill, index) => {
                return skillIndex === index
                    ? e.target.value
                    : skill
            })
        })
    }

    return (
        <>
            <Preview switchToEditMode={() => setEditMode(true)} sectionName="hardSkills" >
                <h2 className="section-title">Hard Skills</h2>
                <div className="tech-stack">
                    <h3>Tech Stack</h3>
                    <ul>
                        {data.techStack.map(tech => <li key={tech} className="blue">{tech}</li>)}
                    </ul>
                </div>
                <div className="tools">
                    <h3>Tools</h3>
                    <ul>
                        {data.tools.map(tool => <li key={tool} className="blue">{tool}</li>)}
                    </ul>
                </div>
                <div className="languages">
                    <h3>Languages</h3>
                    <ul>
                        {data.languages.map(language => <li key={language} className="blue">{language}</li>)}
                    </ul>
                </div>
            </Preview>

            {editMode &&
                <Form saveDataChange={saveDataChange} cancelChanges={cancelChanges} >
                    <HardSkillsFormFields temporaryData={temporaryData} handleTemporaryDataChange={handleTemporaryDataChange} />
                </Form>
            }

        </>
    )
}