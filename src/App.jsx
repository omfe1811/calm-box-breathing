import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Progress from "./pages/Progress";

function App() {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/progress' element={<Progress />} />
			</Routes>
		</Router>
	);
}

export default App;
