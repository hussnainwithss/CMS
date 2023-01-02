import React from 'react';
import { Row } from 'react-bootstrap';
import { Form } from 'formik';

import { FormikEnhancer } from './form-utils';

import { TextField } from '../../../elements/Form';
import { FilledButton } from '../../../elements/Button';

const LoginFormMarkup = (props) => {
    const { isValid, isSubmitting } = props;
    return (
        <Form>
            <div className="mb-3">
                <Row className="mb-3">
                    <TextField
                        name="email"
                        type="email"
                        placeholder="Enter E-mail Address"
                        // validateAutoComplete
                        // autoComplete='off'
                    />
                </Row>
                <Row>
                    <TextField
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        // validateAutoComplete
                        // autoComplete='off'
                    />
                </Row>
                <div>
                    <FilledButton
                        type="submit"
                        variant="primary"
                        className="w-100 d-block mt-3"
                        disabled={!isValid || isSubmitting}

                    >
                        {isSubmitting ? 'Attempting Login...' : 'Login'}
                    </FilledButton>
                </div>
            </div>
        </Form>
    );
};

export const LoginForm = FormikEnhancer(LoginFormMarkup);
