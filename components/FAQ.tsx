export default function FAQ() {
	const faqs = [
		{
			question: 'Чи підходить для новачків?',
			answer: 'Так! Ми починаємо з нуля, поступово нарощуючи складність.',
		},
		{
			question: 'Якщо я вже щось вмію — мені буде цікаво?',
			answer:
				'Так! Навіть досвідчені вокалісти проходять мій курс, щоб стабілізувати звук, розширити арсенал і звучати впевнено.',
		},
		{
			question: 'Це безпечно?',
			answer:
				'Так. Усі техніки протестовані на сотнях студентів і базуються на фізіологічних принципах.',
		},
		{
			question: 'Чи можна поєднувати з сольними уроками?',
			answer: 'Можна і навіть корисно. Але цей курс самодостатній.',
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
									<span>{faq.question}</span>
									<svg
										className='w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-transform duration-300 transform group-open:rotate-180'
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
