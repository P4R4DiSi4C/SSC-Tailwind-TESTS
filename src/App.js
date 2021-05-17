import Sidebar from './components/Sidebar';

function App() {
	return (
		<div className="relative min-h-screen flex flex-col md:flex-row">
			<Sidebar />
			<div className="flex-1 bg-transparent border border-red-500 shadow-2xl mt-0 md:mt-6 md:ml-0 text-red-500 p-4 m-6 rounded-lg">
				<span className="font-extrabold text-xl">CONTENT</span>
			</div>
		</div>
	);
}

export default App;
