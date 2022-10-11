import React, { memo } from 'react';
import { Button } from 'react-bootstrap';

import './FilledButton';

const FilledButton = ({ children, ...rest }) => {
    return (
        <Button variant='dark' {...rest}>
            {children}
        </Button>
    );
};

export default memo(FilledButton);