import ScrollToTop from '@/components/common/scroll-to-top';
import Wrapper from '@/layout/Wrapper';
import Service from '@/components/inner-pages/service';

export const metadata = {
    title: "Vastora Tech - Software Development & Digital Marketing Agency", 
};
const index = () => {
    return (
        <Wrapper>
            <Service />
            <ScrollToTop style={false} />
        </Wrapper>
    );
};

export default index;
