import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Reports() {
    const [report, setReport] = useState([]);
    const {id} = useParams();

    console.log(id)

    // let id = parseInt(idObjStr["id"].slice(1));

    // console.log(id)

    const getReport = () => {
        let url = `http://localhost:3000/reports/${id}`
        
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    }


    useEffect(() => {
        getReport();
    }, []);

    return (
        <div>
            Reports

        </div>
    )
}

export default Reports