import React from 'react';
import Wrapper from '@/layout/Wrapper';
import ScrollToTop from '@/components/common/scroll-to-top'; 
import SignOut from '@/components/inner-pages/sign-out';


export const metadata = {
    title: "Vastora Tech - Software Development & Digital Marketing Agency",
};
const index = () => {
    return (
        <Wrapper> 
            <SignOut />
            <ScrollToTop  /> 
        </Wrapper>
    );
};

export default index;