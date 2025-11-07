import AboutBrandArea from './AboutBrandArea';
import AboutCounterArea from './AboutCounterArea';
import AboutCompanyArea from './AboutCompanyArea';
import AboutMissionArea from './AboutMissionArea';
import OurJourneyArea from './OurJourneyArea';
import DirectorsMessageArea from './DirectorsMessageArea';
import HeaderFive from "@/layout/headers/HeaderFive";
import Breadcrumb from '@/components/common/breadcrumb/breadcrumb';
import ProcessAreaHomeOne from '@/components/homes/home/ProcessAreaHomeOne';
import FunfactAreaHomeOne from '@/components/homes/home/FunfactAreaHomeOne';
import AwardAreaHomeFour from '@/components/homes/home-4/AwardAreaHomeFour';
import TeamAreaHomeFive from '@/components/homes/home-5/TeamAreaHomeFive';
import FooterFive from '@/layout/footers/FooterFive';

const About = () => {
	return (
		<>
			<HeaderFive />
			<main>
				<Breadcrumb />
				<AboutBrandArea />
				<ProcessAreaHomeOne style={true} />
				<OurJourneyArea />
				<AboutMissionArea />
				<AboutCounterArea />
				<DirectorsMessageArea />
				{/* <AboutCompanyArea /> */}
				{/* <AwardAreaHomeFour style={true} /> */}
				{/* <FunfactAreaHomeOne /> */}
				<TeamAreaHomeFive style={true} />
			</main>
			<FooterFive style={true} />
		</>
	);
};

export default About;