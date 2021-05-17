import React from 'react'

const Sidebar = () => {
	return (
		<>
			<div className="flex items-center md:items-stretch bg-transparent border border-red-500 shadow-2xl md:w-32 md:flex-col px-4 md:p-4 m-6 rounded-full ">
				<div className="md:h-16 flex justify-center items-center">
					<span className="md:text-3xl text-red-500 font-extrabold">SSC</span>
				</div>
				<nav className="flex items-center md:flex-col px-4">
					<a href="#" className="flex items-center text-red-500 hover:bg-red-100 rounded-full md:py-2 transition duration-200">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
						</svg>
					</a>
					<a href="#" className="flex items-center text-red-500 hover:bg-red-100 rounded-full md:py-2 transition duration-200">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
						</svg>
					</a>
				</nav>
			</div>
		</>
	)
}

export default Sidebar
