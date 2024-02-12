import { useState } from "react";

export default function GeneralInfos(props) {
    const [data, setData] = useState({
        firstName: 'Johny',
        lastName: 'Doe',
        title: 'Web Developer',
        phone: '581 443-5651',
        email: 'johndoe@gmail.com'
    })

    return (
        <>
            <div className="preview">
                <h2>{`${data.firstName} ${data.lastName}`}</h2>
                <h3>{data.title}</h3>
                <ul> Contact
                    <li>{data.phone}</li>
                    <li>{data.email}</li>
                </ul>
            </div>
        </>
    )
}