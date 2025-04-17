export default function Testimonials() {
	const testimonials = [
		{
			quote:
				'Я боявся гроула, бо думав, що зірву голос. Тут я навчився робити це без болю — і кайфую!',
			author: 'Сергій, 28 років',
		},
		{
			quote:
				'Після першого місяця вже був результат. А після шостого — я записала трек з фрай-дисторшном!',
			author: 'Марія, 21 рік',
		},
	]

	return (
		<section className='py-20 px-4 bg-gray-950' id='reviews'>
			<div className='container mx-auto'>
				<h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
					Відгуки{' '}
					<span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500'>
						учнів
					</span>
				</h2>

				<div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className='bg-gray-800/50 p-8 rounded-xl border border-gray-700 relative'
						>
							<svg
								className='absolute top-6 left-6 text-gray-600 w-8 h-8'
								fill='currentColor'
								viewBox='0 0 32 32'
								aria-hidden='true'
							>
								<path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
							</svg>
							<p className='text-lg italic text-gray-300 mb-6 pl-10'>
								{testimonial.quote}
							</p>
							<p className='text-red-400 font-medium pl-10'>
								{testimonial.author}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
