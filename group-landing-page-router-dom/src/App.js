import "./App.css";
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import logo from './logo.jpg'
import Vocals from "./components/Vocals";
import Guitar from "./components/Guitar";
import Drums from "./components/Drums";
import Bass from "./components/Bass";
import Home from "./components/Home";
import { useEffect } from "react";


function App() {
	const navigate = useNavigate();
	useEffect(() => {
		navigate('/home')
	}, [])

	return (
		<>
			<div className="logoDiv" ><Link to="/home"><img id="logo" src={logo} alt="" /></Link></div>
			<nav><ul>
				<li><Link to="/vocals"><span>Vocals</span></Link></li>
				<li><Link to="/guitar"><span>Guitar</span></Link></li>
				<li><Link to="/drums"><span>Drums</span></Link></li>
				<li><Link to="/bass"><span>Bass</span></Link></li>
			</ul></nav>

			<Routes>
				{/* <Route path="/" element={<Home />} /> */}

				<Route path="/home" element={<Home />} />
				<Route path="/vocals" element={<Vocals />} />
				<Route path="/guitar" element={<Guitar />} />
				<Route path="/drums" element={<Drums />} />
				<Route path="/bass" element={<Bass />} />

			</Routes>

		</>
	)
}

export default App;
