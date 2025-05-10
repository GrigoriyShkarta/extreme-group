'use client'

// import { useEffect, useState } from 'react'

export default function Countdown() {
	// const targetDate = new Date('2025-05-10T00:00:00') // Старт 10 квітня
	// const [timeLeft, setTimeLeft] = useState({
	// 	days: 0,
	// 	hours: 0,
	// 	minutes: 0,
	// })

	// 	useEffect(() => {
	// 		const interval = setInterval(() => {
	// 			const now = new Date()
	// 			const difference = targetDate.getTime() - now.getTime()
	//
	// 			if (difference > 0) {
	// 				const days = Math.floor(difference / (1000 * 60 * 60 * 24))
	// 				const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
	// 				const minutes = Math.floor((difference / (1000 * 60)) % 60)
	// 				setTimeLeft({ days, hours, minutes })
	// 			} else {
	// 				clearInterval(interval)
	// 			}
	// 		}, 1000)
	//
	// 		return () => clearInterval(interval)
	// 	}, [])

	return (
		<section className='py-20 px-4 sm:px-6 bg-black text-white'>
			<div className='max-w-4xl mx-auto text-center'>
				{/* <h2 className='text-3xl md:text-4xl font-bold mb-8'>
					Старт{' '}
					<span className='bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent'>
						10 травня
					</span>
				</h2>

				<p className='mb-4 text-xl'>Навчання щосуботи о 13:00 за Києвом</p>

				<h2 className='text-2xl md:text-4xl font-bold mb-8'>Залишилось</h2>

				<div className='flex justify-center gap-6 text-2xl font-semibold'>
					<div className='p-[2px] rounded-2xl bg-gradient-to-r from-red-600 to-purple-600 shadow-lg'>
						<div className='flex flex-col items-center justify-center px-8 py-6 bg-black rounded-2xl backdrop-blur-md'>
							<span className='text-6xl font-extrabold'>{timeLeft.days}</span>
							<span className='mt-2 text-lg uppercase tracking-widest'>
								Днів
							</span>
						</div>
					</div>

				</div> */}
				<h2 className='text-3xl md:text-4xl font-bold mb-8'>
					НАБІР ДО ГРУПИ ЗАКРИТИЙ
				</h2>
				<p>Слідкуй за актуальною інформацією у соціальних мережах</p>
			</div>
		</section>
	)
}
