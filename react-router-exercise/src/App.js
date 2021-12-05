import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css";
import Me from "./components/Me";
import Navbar from "./components/Navbar";
import Hobbies from './components/Hobbies'
import Contact from "./components/Contact";
import Error from "./components/Error";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Me />} />
				<Route path="/me" element={<Me />} />
				<Route path="/hobbies" element={<Hobbies />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter >
	)
}

export default App;
