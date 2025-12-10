export const dynamic = "force-dynamic";

import React from 'react';
import Error from '@/components/error';
import Wrapper from '@/layout/Wrapper';
import ScrollLineIcon from '@/svg/scroll_line_icon';

const NotFound = () => {
    return (
        <Wrapper>
            <Error />
            <ScrollLineIcon />
        </Wrapper>
    );
};

export default NotFound;