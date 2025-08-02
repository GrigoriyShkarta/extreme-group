export default function HeroSection() {
	return (
		<section className='bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6'>
			<div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-center'>
				<div className='lg:w-1/2 mb-10 max-sm:text-center'>
					<h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
						ЕКСТРЕМАЛЬНИЙ ВОКАЛ{' '}
						<span className='bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent'>
							З НУЛЯ
						</span>{' '}
						{/* ЗА 6 МІСЯЦІВ */}
						ЗА 3 МІСЯЦІ
					</h1>
					<p className='text-xl mb-8 text-gray-300'>
						Онлайн-курс у міні-групах, де ти крок за кроком опануєш всі
						екстремальні техніки вокалу — без болю, страху й надриву. Авторська
						методика. Повна підтримка. Живі уроки.
					</p>
					<a href='https://t.me/yana_vocalcoach'>
						<button
							// onClick={() => setIsFormOpen(true)}
							className='bg-gradient-to-r from-red-600 to-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition md:block md:mx-auto'
						>
							Записатись на курс
						</button>
					</a>
				</div>
				<div className='lg:w-1/2 flex justify-center'>
					<div className='relative w-full max-w-md'>
						<div className='absolute -inset-4 bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl blur opacity-75'></div>
						<div className='relative bg-black rounded-xl overflow-hidden'>
							<img
								src='https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
								alt='Вокалист на сцене'
								className='w-full h-auto opacity-90'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
