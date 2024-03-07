import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="users/:id" element={<Users />} />
		</Routes>
	</BrowserRouter>
);
