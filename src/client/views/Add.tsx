import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../services/fetchData';

interface AddProps { }

const Add = (props: AddProps) => {

    const navigate = useNavigate();

    const [value, setValue] = useState<string>('');

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log();
        fetchData('/api/todos', 'POST', { description: value })
            .then(data => navigate(`/todos/${data.id}`));

    }

    return <>
        <main className="container mt-6">
            <section className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <form className='padding shadow border'>
                        <label htmlFor="description">Todo Item Description</label>
                        <input
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            type="text"
                            className='form-control'
                            placeholder='Do things'
                        />
                        <button onClick={handleSubmit} className='mt-3 btn btn-primary '>Add todo</button>
                    </form>
                </div>
            </section>
        </main>
    </>

}

export default Add;