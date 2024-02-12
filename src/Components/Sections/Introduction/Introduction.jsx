import { useState } from "react";

export default function Introduction(props) {
    const [data, setData] = useState('I am a web developer with 5 years of experience. I am passionate about my work and I am always looking for new challenges. I am a team player')
    
    return (
        <>
            <div className="preview">
                <h2>Introduction</h2>
                <p>{data}</p>
            </div>
        </>
    )
}