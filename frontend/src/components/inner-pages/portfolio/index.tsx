import FooterFive from "@/layout/footers/FooterFive";
import HeaderFive from "@/layout/headers/HeaderFive";
import PortfolioAreaTwo from "../portfolio-2/PortfolioAreaTwo";

const Portfolio = () => {
	return (
		<>
			<HeaderFive />
			<main>
				<PortfolioAreaTwo />
			</main>
			<FooterFive style={true} />
		</>
	);
};

export default Portfolio;
