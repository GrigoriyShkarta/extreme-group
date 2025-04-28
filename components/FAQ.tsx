export default function FAQ() {
	const faqs = [
		{
			question: 'Чи підходить для новачків?',
			answer:
				'Так, якщо ти — досвідчений вокаліст, але ще не практикував екстремальні техніки. Ми починаємо з нуля та рухаємося у комфортному темпі, щоб поступово опанувати нові навички. Ні, якщо ти тільки починаєш займатися вокалом і раніше не мав жодного досвіду у співі.',
		},
		{
			question: 'Якщо я вже щось вмію — мені буде цікаво?',
			answer:
				'Так! Навіть досвідчені вокалісти проходять мій курс, щоб стабілізувати звук, розширити арсенал і звучати впевнено.',
		},
		{
			question: 'Це безпечно?',
			answer:
				"Так, адже моя методика базуються на фізіологічних принципах і на фонопедичних вправах для підтримання здоров'я голосу.",
		},
		{
			question: 'Чи можна поєднувати з індивідуальними уроками?',
			answer: 'Можна і навіть корисно. Але цей курс самодостатній.',
		},
		{
			question:
				'Якщо я пройшов твій майстер-клас по екстриму, чи буде мені корисно?',
			answer:
				'Так, в мене є студенти, які приходять на це навчання після майстер-класу і вони отримують ще більше власної практики по кожній техніці, мої авторські вправи та підтримку на всіх етапах. Це навчання ще більш глибоке занурення в екстрим та мою методику.',
		},
		{
			question: 'Як довго у мене буде доступ до матеріалів?',
			answer:
				'Доступ до навчальних матеріалів буде на протязі проходження курсу плюс ще два місяця після успішного проходження. Якщо ти вирішив завершити начання і не доходити до кінця програми - доступ закриваєтся до першого уроку наступного абонементу за який не було сплачено.',
		},
	]

	return (
		<section id='faq' className='py-20 px-4 bg-gray-900'>
			<div className='container mx-auto max-w-4xl'>
				<h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
					Поширені{' '}
					<span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500'>
						питання
					</span>
				</h2>

				<div className='space-y-4'>
					{faqs.map((faq, index) => (
						<div key={index} className='group'>
							<details className='bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden transition-all duration-300 group-hover:border-purple-500/50'>
								<summary className='px-6 py-4 font-medium text-lg cursor-pointer list-none flex justify-between items-center'>
									<span className='flex-1'>{faq.question}</span>
									<div className='flex-shrink-0 w-5 h-5 ml-2'>
										<svg
											className='w-full h-full text-gray-400 group-hover:text-purple-500 transition-transform duration-300 transform group-open:rotate-180'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M19 9l-7 7-7-7'
											/>
										</svg>
									</div>
								</summary>
								<div className='px-6 pb-4 pt-2 text-gray-300'>{faq.answer}</div>
							</details>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
