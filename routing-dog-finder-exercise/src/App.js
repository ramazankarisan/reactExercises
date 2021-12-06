import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dogs from "./components/Dogs";
import './App.css'
import Dog from "./components/Dog";

function App() {

	return (
		<BrowserRouter>
			<div className="App">
				<h1>Dogs are cool creatures</h1>
			</div>

			<Routes>
				<Route path='/' element={<Dogs />} />
				<Route path='/dogs' element={<Dogs />} />
				<Route path="dogs/:name" element={<Dogs />} />
			</Routes>



		</BrowserRouter>
	);
}

export default App;
