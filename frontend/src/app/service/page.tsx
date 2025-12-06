import ScrollToTop from '@/components/common/scroll-to-top';
import Wrapper from '@/layout/Wrapper';
import Service from '@/components/inner-pages/service';

export const metadata = {
    title: "Our Services – Website Development, E-Commerce, Social Media & SEO | Vastora Tech",
    description: "Explore Vastora Tech services: business website development, ready-to-use E-Commerce stores, social media management, SEO services and performance marketing.",
    alternates: {
        canonical: "https://vastoratech.com/service/web-development",
    },
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
