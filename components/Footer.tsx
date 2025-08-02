export default function Footer() {
	return (
		<footer className='bg-gray-950 py-12 px-4 border-t border-gray-800'>
			<div className='container mx-auto'>
				<div className='grid  gap-8 mb-8'>
					{/* Лого и описание */}
					<div className='space-y-4'>
						<div className='text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent'>
							ExtremeVocal
						</div>
						<p className='text-gray-400'>
							Онлайн-курс екстремального вокалу з нуля за 3 місяці. Авторська
							методика.
						</p>
					</div>
				</div>

				{/* Копірайт */}
				<div className='border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center'>
					<p className='text-gray-400 text-sm mb-4 md:mb-0'>
						&copy; {new Date().getFullYear()} ExtremeVocal. Всі права захищені.
					</p>
				</div>
			</div>
		</footer>
	)
}
