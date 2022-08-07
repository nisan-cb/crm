import React, { useState, useEffect } from 'react';
import './RecordsTable.scss'

function RecordsTable() {
    const [records, setRecords] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/api/records')
            .then(response => response.json())
            .then(data => setRecords(data))
            .catch(error => console.log(error))
    }, []);

    return (
        < table >
            {console.log(records)}

            <tbody>

                <tr>
                    <th>no</th>
                    <th>branch</th>
                    <th>name</th>
                    <th>phone number</th>
                    <th>service</th>
                    <th>actions</th>
                </tr>
                {
                    records.map(record => {
                        return (
                            <tr key={record.number}>
                                <td>{record.number}</td>
                                <td>{record.city}</td>
                                <td>{record.name}</td>
                                <td>{record.phone_number}</td>
                                <td>{record.description}</td>
                                <td>delete - edit</td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </table >
    )
}

export default RecordsTable;