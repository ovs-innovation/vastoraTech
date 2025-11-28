import ScrollToTop from "@/components/common/scroll-to-top";
import SignIn from "@/components/inner-pages/sign-in";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
    title: "Vastora Tech - Software Development & Digital Marketing Agency",
};
const index = () => {
    return (
        <Wrapper>
            <SignIn />
            <ScrollToTop  />  
        </Wrapper>
    );
};

export default index;