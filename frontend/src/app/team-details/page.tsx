import ScrollToTop from "@/components/common/scroll-to-top";
import TeamDetails from "@/components/inner-pages/team-details";
import Wrapper from "@/layout/Wrapper";


export const metadata = {
    title: "Vastora Tech - Software Development & Digital Marketing Agency",
  };
const index = () => {
    return (
        <Wrapper>
            <TeamDetails />
            <ScrollToTop style={false} />
        </Wrapper>
    );
};

export default index;