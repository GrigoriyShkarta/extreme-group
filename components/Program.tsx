import month1 from '@/assets/month1.jpg'
import month2 from '@/assets/month2.jpg'
import month3 from '@/assets/month3.jpg'
import month4 from '@/assets/month4.jpg'
import month5 from '@/assets/month5.jpg'

export default function Program() {
	const monthData = [
		{
			month: 'Місяць 1',
			icon: '🎤',
			items: [
				'Голосовий апарат: безпечне включення',
				'Базовий фрай та керування повітрям',
				'Вправи на звуковидобування й тілесність',
			],
			image: month1.src,
		},
		{
			month: 'Місяць 2',
			icon: '👹',
			items: [
				'Гроул з нуля',
				'Вправи на розігрів і охолодження',
				'Розбір вокальних фраз з гроулом',
			],
			image: month2.src,
		},
		{
			month: 'Місяць 3',
			icon: '🔥',
			items: [
				'Скримінг: постановка, атака, витримка',
				'Робота з резонаторами',
				'Тренування переходів між техніками',
			],
			image: month3.src,
		},
		{
			month: 'Місяць 4',
			icon: '🎸',
			items: [
				'Дисторшн: чистий та агресивний',
				'Артикуляція і чіткість в екстримі',
				"Зв'язок з чистим вокалом",
			],
			image: month4.src,
		},
		{
			month: 'Місяць 5',
			icon: '🎶',
			items: [
				'Мікси технік: фрай+дисторшн, гроул+чистий',
				'Побудова вокальних ліній',
				'Практика на піснях',
			],
			image: month5.src,
		},
		{
			month: 'Місяць 6',
			icon: '🌟',
			items: [
				'Сценічне звучання',
				'Робота з матеріалом',
				'Індивідуальні фідбеки + фінальне включення',
			],
			image: '/month6.jpg',
		},
	]

	return (
		<section id='program' className='py-20 px-4 sm:px-6 bg-gray-900 text-white'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-bold mb-16 text-center'>
					<span className='bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent'>
						Програма
					</span>{' '}
					навчання
				</h2>

				<div className='space-y-8'>
					{monthData.map((item, index) => (
						<div
							key={index}
							className='bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300'
						>
							<div className='bg-gradient-to-r from-red-600 to-purple-600 p-4 md:p-6 flex items-center justify-between'>
								<div className='flex items-center gap-4'>
									<span className='text-2xl'>{item.icon}</span>
									<h3 className='text-2xl font-bold'>{item.month}</h3>
								</div>
								<span className='bg-black/20 px-3 py-1 rounded-full text-sm font-medium'>
									{index + 1}/6
								</span>
							</div>

							<div className='md:flex'>
								<div className='p-6 md:w-1/2'>
									<ul className='space-y-3'>
										{item.items.map((point, i) => (
											<li key={i} className='flex items-start group'>
												<div className='relative mt-0.5 mr-3 flex-shrink-0'>
													<div className='absolute inset-0 bg-red-500 rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300'></div>
													<svg
														className='relative w-5 h-5 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
														fill='none'
														stroke='currentColor'
														viewBox='0 0 24 24'
													>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth='2'
															d='M5 13l4 4L19 7'
														/>
													</svg>
												</div>
												<span className='text-gray-300 group-hover:text-white transition-colors'>
													{point}
												</span>
											</li>
										))}
									</ul>
								</div>

								<div className='md:w-1/2 relative overflow-hidden'>
									<div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 z-10'></div>
									<img
										src={item.image}
										alt={item.month}
										className='w-full h-full object-cover aspect-video md:aspect-auto md:absolute md:inset-0'
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
