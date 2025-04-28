export default function AfterFinish() {
	return (
		<section className='py-20 px-6 bg-black text-white'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-bold mb-16 text-center'>
					<span className='bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent'>
						Ти отримаєш:
					</span>
				</h2>

				<div className='grid md:grid-cols-2 gap-8'>
					{[
						'4 онлайн-уроки щомісяця у міні-групі (4–7 людей), тривалістю 1–2 години',
						'Доступ до навчальної платформи з усіма записами, конспектами, нотами та вправами',
						'Авторські вправи, яких немає у відкритому доступі',
						'Перевірку домашніх завдань та фідбек у Telegram-чаті',
						'Повний супровід протягом 6 місяців',
						'Роботу не тільки над екстримом, а й над чистим вокалом — для стабільності й звучання',
						'Бонус: Ти не просто вчиш техніку — ти трансформуєш свій вокал',
					].map((item, index) => (
						<div key={index} className='flex items-start'>
							<div className='bg-gradient-to-r from-red-600 to-purple-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1'>
								<svg
									className='w-4 h-4'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={3}
										d='M5 13l4 4L19 7'
									/>
								</svg>
							</div>
							<p className='text-lg'>{item}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
