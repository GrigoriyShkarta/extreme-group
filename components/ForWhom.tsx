export default function ForWhom() {
	return (
		<section id='about' className='py-20 px-6 bg-gray-900 text-white'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-bold mb-16 text-center'>
					<span className='bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent'>
						Тобі сюди,
					</span>{' '}
					якщо ти:
				</h2>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{[
						'Мрієш кричати на сцені так, щоб мороз по шкірі — і без шкоди для голосу',
						'Хочеш співати гроул, скрим, фрай, дисторшн, але не знаєш, з чого почати',
						'Вже співаєш, але не можеш стабілізувати екстрим',
						'Боїшся за голос — і хочеш усе зробити правильно',
						'Прагнеш не просто техніки, а СВОЄ звучання',
					].map((item, index) => (
						<div
							key={index}
							className='bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition'
						>
							<div className='text-red-500 text-2xl mb-4'>0{index + 1}</div>
							<p className='text-lg'>{item}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
