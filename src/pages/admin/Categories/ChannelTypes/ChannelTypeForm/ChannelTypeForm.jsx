import React from 'react';
import { Button, Col, Row, Modal } from 'react-bootstrap';
import { Form } from 'formik';

import { FormikEnhancer } from './form-utils';

import {
    SelectField,
    SwitchField,
    TextField,
} from '../../../../../elements/Form';
import { FilledButton } from '../../../../../elements/Button';
import { useEffect } from 'react';

const CTForm = (props) => {
    const { channelCategories, shwoChannelCategoryForm, afterCancel, setValues, initialValues } =
        props;
    useEffect(() => {
        props.selectedChannelCategoryId &&
            setValues({
                ...initialValues,
                category: props.selectedChannelCategoryId,
            });
    }, [initialValues, props.selectedChannelCategoryId, setValues]);

    return (
        <>
            <Form>
                <div className="mb-3">
                    <TextField
                        name="englishName"
                        type="text"
                        placeholder="Al Bidi'Ah	"
                        label="Channel Type name in English"
                        bottomText="Channel Type name in English. This title will appear to general users in the system"
                    />
                </div>
                <hr />
                <div className="mb-3">
                    <TextField
                        name="arabicName"
                        type="text"
                        placeholder="البديعة"
                        label="Channel Type name in Arabic"
                        bottomText="Channel Type name in Arabic. This title will appear to general users in the system"
                    />
                </div>
                <div className="mb-3">
                    <SelectField
                        name="categoryId"
                        label="Channel Category"
                        bottomText={
                            <Row className='d-flex justify-content-end'>
                                <Col md="2" className="text-end">
                                    <Button
                                        className="text-primary"
                                        variant="link"
                                        size="sm"
                                        onClick={() => shwoChannelCategoryForm(true)}
                                    >
                                        Add Channel Category+
                                    </Button>
                                </Col>
                            </Row>
                        }
                    >
                        <option disabled value={0}>
                            Select Channel Category
                        </option>
                        {channelCategories.map((channelCategory) => (
                            <option value={parseInt(channelCategory.id)} key={channelCategory.id}>
                                {channelCategory.englishName} | {channelCategory.isOffLine ? 'Online' : 'Offline'}
                            </option>
                        ))}
                    </SelectField>
                </div>
                <div className="mb-3">
                    <SwitchField
                        type="switch"
                        id="isActive"
                        label="Deactivate / Activate Channel Category"
                        name="isActive"
                    />
                </div>
                <Modal.Footer>
                    <FilledButton variant="primary" type="submit">
                        Save
                    </FilledButton>
                    <FilledButton variant="secondary" onClick={afterCancel}>
                        Cancel
                    </FilledButton>
                </Modal.Footer>
            </Form>
        </>
    );
};

export const ChannelTypeForm = FormikEnhancer(CTForm);
