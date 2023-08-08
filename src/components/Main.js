import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


const Main = () => {
    const [data, setData] = useState([]);

    const FetchData = () => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
        .then(res => res.data)
        .then(data => {
            setData(data); 
        });
    }

    useEffect(() => {
        FetchData();
    }, [])

    return (
        <div className="container mt-5">
            <center><h1>Show Details</h1></center>
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Show Name</th>
                        <th>Type</th>
                        <th>Language</th>
                        <th>Total Time</th>
                        <th>View More Details</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.show.id}>
                            <td>{item.show.id}</td>
                            <td>{item.show.name}</td>
                            <td>{item.show.type}</td>
                            <td>{item.show.language}</td>
                            <td>{item.show.runtime}</td>
                            <td>
                                <Link to={`/show/${item.show.id}`} className="btn btn-primary">
                                    View More Details
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Main;
