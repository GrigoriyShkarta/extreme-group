export default function ForWhom() {
	const items = [
		{
			text: 'Мрієш кричати на сцені так, щоб мороз по шкірі — і без шкоди для голосу',
			icon: '🎤',
			emoji: '❄️',
			bg: 'from-red-600/20 to-purple-600/20',
		},
		{
			text: 'Хочеш співати гроул, скрим, фрай, дисторшн, але не знаєш, з чого почати',
			icon: '👹',
			emoji: '🎯',
			bg: 'from-red-600/20 to-yellow-500/20',
		},
		{
			text: 'Вже співаєш, але не можеш стабілізувати екстрим',
			icon: '⚡',
			emoji: '🔧',
			bg: 'from-purple-600/20 to-blue-500/20',
		},
		{
			text: 'Боїшся за голос — і хочеш усе зробити правильно',
			icon: '🛡️',
			emoji: '❤️',
			bg: 'from-green-500/20 to-blue-600/20',
		},
		{
			text: 'Прагнеш не просто техніки, а СВОЄ звучання',
			icon: '✨',
			emoji: '🎧',
			bg: 'from-purple-600/20 to-pink-500/20',
		},
	]

	return (
		<section id='about' className='py-20 px-4 sm:px-6 bg-gray-900 text-white'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-bold mb-16 text-center'>
					<span className='bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent'>
						Тобі сюди,
					</span>{' '}
					якщо ти:
				</h2>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{items.map((item, index) => (
						<div
							key={index}
							className={`relative bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden`}
						>
							{/* Анимированный фон */}
							<div
								className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
							></div>

							{/* Контент */}
							<div className='relative z-10'>
								<div className='flex items-start gap-4'>
									{/* Нумерация с иконкой */}
									<div className='flex-shrink-0'>
										<div className='relative'>
											<div className='w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-purple-600 flex items-center justify-center text-xl'>
												{item.icon}
											</div>
											<div className='absolute -bottom-2 -right-2 bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold'>
												0{index + 1}
											</div>
										</div>
									</div>

									<div>
										<p className='text-lg'>{item.text}</p>
										{/* <div className='mt-3 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
											{item.emoji}
										</div> */}
									</div>
								</div>
							</div>

							{/* Эффект при наведении */}
							<div className='absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-purple-500/30 pointer-events-none transition-all duration-500'></div>
						</div>
					))}

					{/* Дополнительная карточка для CTA */}
					<div className='relative bg-gray-800 p-6 rounded-xl border-2 border-dashed border-purple-500/30 hover:border-solid hover:border-purple-500/50 transition-all duration-300 group overflow-hidden'>
						<div className='absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
						<div className='relative z-10 h-full flex flex-col justify-center items-center text-center p-4'>
							<div className='text-4xl mb-4'>🤘</div>
							<h3 className='text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
								Це про тебе?
							</h3>
							<p className='text-gray-300 mb-4'>Тоді чекаємо на курсі!</p>
							<a
								href='#cta'
								className='px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium hover:opacity-90 transition text-sm'
							>
								Записатись
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
