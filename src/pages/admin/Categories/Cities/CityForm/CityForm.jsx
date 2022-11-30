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

const CForm = (props) => {
    const { regions, showRegionForm, afterCancel, setValues, initialValues } =
        props;

    useEffect(() => {
        props.selectedRegionId &&
            setValues({
                ...initialValues,
                regionId: props.selectedRegionId,
            });
    }, [initialValues, props.selectedRegionId, setValues]);

    return (
        <>
            <Form>
                <div className="mb-3">
                    <TextField
                        name="englishName"
                        type="text"
                        placeholder="Al Bidi'Ah	"
                        label="City name in English"
                        bottomText="City name in English. This title will appear to general users in the system"
                    />
                </div>
                <hr />
                <div className="mb-3">
                    <TextField
                        name="arabicName"
                        type="text"
                        placeholder="البديعة"
                        label="City name in Arabic"
                        bottomText="City name in Arabic. This title will appear to general users in the system"
                    />
                </div>
                <div className="mb-3">
                    <SelectField
                        name="regionId"
                        label="Region"
                        bottomText={
                            <Row className='d-flex justify-content-end'>
                                <Col md="2" className="text-end">
                                    <Button
                                        className="text-primary"
                                        variant="link"
                                        size="sm"
                                        onClick={() => showRegionForm(true)}
                                    >
                                        Add Region+
                                    </Button>
                                </Col>
                            </Row>
                        }
                    >
                        <option disabled value={0}>
                            Select Region
                        </option>
                        {regions.map((region) => (
                            region.isActive && (<option value={parseInt(region.id)} key={region.id}>
                                {region.englishName}
                            </option>)
                        ))}
                    </SelectField>
                </div>
                <div className="mb-3">
                    <SwitchField
                        type="switch"
                        id="isActive"
                        label="Deactivate / Activate City"
                        name="isActive"
                        // bottomText="Deactivated user will not be able to access the system"
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

export const CityForm = FormikEnhancer(CForm);
