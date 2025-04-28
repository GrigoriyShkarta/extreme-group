import AfterFinish from '@/components/AfterFinish'
import Countdown from '@/components/CountDown'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import ForWhom from '@/components/ForWhom'
import HeroSection from '@/components/HeroSection'
import Navigate from '@/components/Navigate'
import Prices from '@/components/Prices'
import Program from '@/components/Program'
import Testimonials from '@/components/Testimonials'

export default function Home() {
	return (
		<>
			<Navigate />
			<HeroSection />
			<ForWhom />
			<AfterFinish />
			<Program />
			<Countdown />
			<Prices />
			<Testimonials />
			<FAQ />
			<Footer />
		</>
	)
}
