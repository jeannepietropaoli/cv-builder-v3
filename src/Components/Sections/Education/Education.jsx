import { useState } from "react";

export default function Education(props) {
    const [data, setData] = useState([
        {
            school: 'University of Montreal',
            degree: 'Bachelor in Computer Science',
            startDate: '2012',
            endDate: '2015',
            description: 'I studied computer science at the University of Montreal. I learned a lot about programming and I also learned how to work in a team.'
        },
        {
            school: 'University of Montreal',
            degree: 'Master in Computer Science',
            startDate: '2015',
            endDate: '2017',
            description: 'I continued my studies at the University of Montreal. I learned a lot about programming and I also learned how to work in a team.'
        }
])

    return (
        <>
            <div className="preview">
                <h2>Education</h2>
                {data.map(course => {
                    return (
                        <div key={course.id} className="course">
                            <h3>{`${course.degree} - ${course.school}`}</h3>
                            <p>{`${course.startDate} - ${course.endDate}`}</p>
                            <p>{course.description}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}