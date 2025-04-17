'use client'

import { useState } from 'react'

export default function Navigate() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<nav className='bg-black text-white py-4 px-6 sticky top-0 z-50 shadow-lg'>
			<div className='max-w-6xl mx-auto flex justify-between items-center'>
				<div className='font-bold text-xl bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent'>
					ЕКСТРЕМАЛЬНИЙ ВОКАЛ
				</div>
				<div className='hidden md:flex space-x-8'>
					<a href='#about' className='hover:text-red-400 transition'>
						Про курс
					</a>
					<a href='#program' className='hover:text-red-400 transition'>
						Програма
					</a>
					<a href='#price' className='hover:text-red-400 transition'>
						Вартість
					</a>
					<a href='#reviews' className='hover:text-red-400 transition'>
						Відгуки
					</a>
					<a href='#faq' className='hover:text-red-400 transition'>
						FAQ
					</a>
				</div>

				<button
					className='md:hidden text-white focus:outline-none'
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
					>
						{isMenuOpen ? (
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M6 18L18 6M6 6l12 12'
							/>
						) : (
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M4 6h16M4 12h16M4 18h16'
							/>
						)}
					</svg>
				</button>
			</div>

			{/* Мобильное меню */}
			{isMenuOpen && (
				<div className='md:hidden bg-gray-900 mt-4 py-4 px-6 rounded-lg'>
					<div className='flex flex-col space-y-4'>
						<a
							href='#about'
							className='hover:text-red-400 transition'
							onClick={() => setIsMenuOpen(false)}
						>
							Про курс
						</a>
						<a
							href='#program'
							className='hover:text-red-400 transition'
							onClick={() => setIsMenuOpen(false)}
						>
							Програма
						</a>
						<a
							href='#price'
							className='hover:text-red-400 transition'
							onClick={() => setIsMenuOpen(false)}
						>
							Вартість
						</a>
						<a
							href='#reviews'
							className='hover:text-red-400 transition'
							onClick={() => setIsMenuOpen(false)}
						>
							Відгуки
						</a>
						<a
							href='#faq'
							className='hover:text-red-400 transition'
							onClick={() => setIsMenuOpen(false)}
						>
							FAQ
						</a>
						<button
							onClick={() => {
								setIsMenuOpen(false)
								setIsFormOpen(true)
							}}
							className='bg-gradient-to-r from-red-600 to-purple-600 px-6 py-2 rounded-full font-bold hover:opacity-90 transition w-full'
						>
							Записатись
						</button>
					</div>
				</div>
			)}
		</nav>
	)
}
