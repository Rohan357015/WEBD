import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard() {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch('http://localhost:4002/data');
            const res = await response.json();
            setData(res.msg);
        }
        getData();
    }, []);

    return (
        <>
            <div className="container py-5">

                <h1 className="text-center text-primary fw-bold mb-5">
                    Dashboard
                </h1>

                {/* 🔥 GRID */}
                <div className="row gx-4 gy-5">

                    {data.map((item, index) => (
                        <div key={index} className="col-lg-4 col-md-6">

                            <div className="card h-100 border-0 shadow-lg rounded-4">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="card-img-top rounded-top-4"
                                    style={{ height: "220px", objectFit: "cover" }}
                                />

                                <div className="card-body text-center">
                                    <h5 className="fw-bold text-dark">{item.title}</h5>
                                    <p className="text-muted small">{item.description}</p>

                                    <div className="d-grid gap-2 mt-3">
                                        <button className="btn btn-primary">Add to Cart</button>
                                        <button className="btn btn-outline-secondary">Buy</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </>
    )
}