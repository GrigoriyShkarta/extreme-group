export default function Prices() {
	return (
		<section id='price' className='py-20 px-6 bg-black text-white'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-bold mb-16 text-center'>
					<span className='bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent'>
						Вартість
					</span>{' '}
					участі:
				</h2>

				{/* <div className='grid md:grid-cols-2 gap-8 mx-auto'> */}
				<div className='bg-gradient-to-br from-red-900/50 to-purple-900/50 p-8 rounded-xl border border-purple-500/30 relative overflow-hidden'>
					<h3 className='text-2xl font-bold mb-4'>3000 грн/місяць</h3>
					<p className='text-gray-300 mb-6'>В один абонемент входить:</p>
					<ul className='space-y-3 mb-8'>
						{[
							'4 онлайн-уроки в міні-групі',
							'Доступ до навчальної платформи з усіма матеріалами',
							'Перевірка ДЗ та підтримка в Telegram',
						].map((item, index) => (
							<li key={index} className='flex items-start'>
								<div className='bg-purple-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0'></div>
								<span>{item}</span>
							</li>
						))}
					</ul>
					{/* <p className='text-gray-400'>
						Формат оплати: щомісячна або відразу за кілька місяців — як тобі
						зручно.
					</p> */}
				</div>

				{/* <div className='bg-gradient-to-br from-red-900/50 to-purple-900/50 p-8 rounded-xl border border-purple-500/30 relative overflow-hidden'>
						<div className='absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-1 rounded-full font-bold text-sm transform rotate-12'>
							БОНУС
						</div>
						<h3 className='text-2xl font-bold mb-4'>
							При оплаті всього курсу:
						</h3>
						<ul className='space-y-3 mb-6'>
							{[
								'Персональний розбір твоєї пісні',
								'Пріоритет у виборі часу групи',
								'1 бонусна консультація 1:1',
							].map((item, index) => (
								<li key={index} className='flex items-start'>
									<div className='bg-yellow-400 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0'></div>
									<span>{item}</span>
								</li>
							))}
						</ul>
						<div className='text-3xl font-bold mt-8 mb-4'>18 000 грн</div>
						<p className='text-gray-300'>(Економия 2 000 грн)</p>
					</div> */}
				{/* </div> */}

				<div className='text-center mt-16'>
					<a href='https://t.me/yana_vocalcoach'>
						<button
							// onClick={() => setIsFormOpen(true)}
							className='bg-gradient-to-r from-red-600 to-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition mx-auto'
						>
							ЗАПИСАТИСЬ НА КУРС
						</button>
					</a>
				</div>
			</div>
		</section>
	)
}
