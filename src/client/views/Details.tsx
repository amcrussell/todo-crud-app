import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { ITodo } from '../types';
import { fetchData } from '../services/fetchData';

interface DetailsProps { }

const Details = (props: DetailsProps) => {

    const { id } = useParams();
    const [data, setData] = useState<ITodo | null>(null);

    useEffect(() => {
        fetchData(`/api/todos/${id}`).then(data => setData(data));
    }, []);

    return <>
        <main className="container mt-6">
            <section className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className="card-title">Todo Item #{id}</h2>
                            <p className="card-text">{data?.description}</p>
                            <Link to='/todos' className='btn btn-outline-info'>Go Back</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>

}

export default Details;