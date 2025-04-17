export default function Program() {
	return (
		<section id='program' className='py-20 px-6 bg-gray-900 text-white'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-bold mb-16 text-center'>
					<span className='bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent'>
						Що ми встигнемо
					</span>{' '}
					за пів року:
				</h2>

				<div className='space-y-12'>
					{[
						{
							month: 'Місяць 1',
							items: [
								'Голосовий апарат: безпечне включення',
								'Базовий фрай та керування повітрям',
								'Вправи на звуковидобування й тілесність',
							],
						},
						{
							month: 'Місяць 2',
							items: [
								'Гроул з нуля',
								'Вправи на розігрів і охолодження',
								'Розбір вокальних фраз з гроулом',
							],
						},
						{
							month: 'Місяць 3',
							items: [
								'Скримінг: постановка, атака, витримка',
								'Робота з резонаторами',
								'Тренування переходів між техніками',
							],
						},
						{
							month: 'Місяць 4',
							items: [
								'Дисторшн: чистий та агресивний',
								'Артикуляція і чіткість в екстримі',
								"Зв'язок з чистим вокалом",
							],
						},
						{
							month: 'Місяць 5',
							items: [
								'Мікси технік: фрай+дисторшн, гроул+чистий',
								'Побудова вокальних ліній',
								'Практика на піснях',
							],
						},
						{
							month: 'Місяць 6',
							items: [
								'Сценічне звучання',
								'Робота з матеріалом',
								'Індивідуальні фідбеки + фінальне включення',
							],
						},
					].map((item, index) => (
						<div key={index} className='bg-gray-800 rounded-xl overflow-hidden'>
							<div className='bg-gradient-to-r from-red-600 to-purple-600 p-4 md:p-6'>
								<h3 className='text-2xl font-bold'>{item.month}</h3>
							</div>
							<div className='p-6'>
								<ul className='space-y-3'>
									{item.items.map((point, i) => (
										<li key={i} className='flex items-start'>
											<div className='bg-red-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0'></div>
											<span>{point}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
