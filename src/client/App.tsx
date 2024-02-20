import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Todos from './views/todos';
import Add from './views/Add';
import Details from './views/Details';
import NotFound from './views/NotFound';

interface AppProps { }

const App = (props: AppProps) => {


	return (
		<BrowserRouter>
		<div className="p-5">
			<Link to='/'>Home</Link>
			<Link to='/todos'>Todos</Link>
			<Link to='/todos/new'>add</Link>
		</div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/todos' element={<Todos />} />
				<Route path='/todos/new' element={<Add />} />
				<Route path='/todos/:id' element={<Details />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;