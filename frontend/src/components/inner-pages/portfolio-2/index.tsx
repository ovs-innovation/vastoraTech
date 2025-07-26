
import React from 'react';
import HeaderFive from '@/layout/headers/HeaderFive';
import PortfolioAreaTwo from './PortfolioAreaTwo';
import FooterFive from '@/layout/footers/FooterFive';

const PortfolioTwo = () => {
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

export default PortfolioTwo 