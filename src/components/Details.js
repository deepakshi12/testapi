import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


const Details = () => {
    const [showData, setShowData] = useState({});
    const { id } = useParams();

    const FetchData = () => {
        axios.get(`https://api.tvmaze.com/shows/${id}`)
        .then(res => res.data)
        .then(data => {
            setShowData(data);
        });
    }

    useEffect(() => {
        FetchData();
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Show Details</h1>
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">ID: {showData.id}</h2>
                    <h3 className="card-subtitle mb-2 text-muted">Name: {showData.name}</h3>
                    <p className="card-text">Type: {showData.type}</p>
                    <p className="card-text">Language: {showData.language}</p>
                    <p className="card-text">Status: {showData.status}</p>
                    <p className="card-text">Runtime: {showData.runtime} minutes</p>
                    <p className="card-text">Premiered: {showData.premiered}</p>
                </div>
            </div>
        </div>
    );
}

export default Details;
