import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Progress from "./pages/Progress";

function App() {
	return (
		<Router basename='/calm-box-breathing/'>
			<div className='flex items-center justify-center h-screen bg-blue-200'>
				<h1 className='text-4xl font-bold text-red-600'>
					Tailwind is working!
				</h1>
			</div>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/progress' element={<Progress />} />
			</Routes>
		</Router>
	);
}

export default App;
