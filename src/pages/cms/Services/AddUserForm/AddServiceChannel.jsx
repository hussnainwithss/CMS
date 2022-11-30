import React from 'react';
import { useDispatch } from 'react-redux';
import { Alert, Modal, FormLabel, Card } from 'react-bootstrap';
import { Form, Formik } from 'formik';

import { actions } from '../../../../actions/admin';

import { SwitchField, TextField } from '../../../../elements/Form';
import { SelectField } from '../../../../elements/Form';
import { FilledButton } from '../../../../elements/Button';
import { validationSchema, getInitialProps } from './form-utils';
import { USERROLES } from '../../../../constants';
import { objectMap } from '../../../../utils';
// import { ACTION_TYPE } from '../constants';

import commonStyles from '../../../../styles/common.module.css';
import { DashboardLayout } from '../../../../layouts';
import { DataTable } from '../../../../components/DataTable';
import { getColumns, Channels, SampleData, TableActions } from '../TableData';
import { TitleCard } from '../../../../components/TitleCard';
const sampleSurveyTypes = [
    'education survey 1',
    'education survey 2',
    'education survey 3',

    // 'healthcare survey 1',
    // 'healthcare survey 2',
    // 'healthcare survey 3',
];
const ChannelCategoryToTypeMaping = {
    'E-platform': ['LMS', 'Online Test'],
    'Service Center': ['School', 'College'],
    // 'Select Channel Category'
};

const useChannel = () => {
    const [channelCategory, setChannelCategory] = React.useState([
        'E-platform',
        'Service Center',
    ]);
    const [channelTypes, setChannelTypes] = React.useState(
        ChannelCategoryToTypeMaping['E-platform'],
    );

    const updateChannelCategory = (channelCat) => {
        setChannelCategory(channelCat);
        setChannelTypes(ChannelCategoryToTypeMaping[channelCat]);
    };
    
    return {
        channelCategory,
        setChannelCategory,
        channelTypes,
        setChannelTypes,
        updateChannelCategory,
    };
};
const AddServiceChannel = ({
    isAddOrEdit,
    user = {},
    afterSubmit,
    afterCancel,
}) => {
    const dispatch = useDispatch();
    const [mappedChannels, setMappedChannels] = React.useState({
        LMS: [
            {
                id: 1,
                englishName: 'Online school1',
                arabicName: 'Online school',
                channelType: ['LMS'],
                channelCategory: ['e-service'],
                sector: 'Education',
                isActive: true,
            },
            {
                id: 2,
                englishName: 'Online school 2',
                arabicName: 'Online school 2',
                channelType: ['LMS'],
                channelCategory: ['e-service'],
                sector: 'Education',
                isActive: false,
            },
            {
                id: 3,
                englishName: 'Online school 3',
                arabicName: 'Online school 3',
                channelType: ['LMS'],
                channelCategory: ['e-service'],
                sector: 'Education',
                isActive: true,
            },
        ],
        'Online Test': [
            {
                id: 1,
                englishName: 'Online Test 1',
                arabicName: 'Online Test 1',
                channelType: ['Online Test'],
                channelCategory: ['e-service'],
                sector: 'Education',
                isActive: true,
            },
            {
                id: 2,
                englishName: 'Online Test 2',
                arabicName: 'Online Test 2',
                channelType: ['Online Test'],
                channelCategory: ['e-service'],
                sector: 'Education',
                isActive: false,
            },
            {
                id: 3,
                englishName: 'Online Test 3',
                arabicName: 'Online Test 3',
                channelType: ['Online Test'],
                channelCategory: ['e-service'],
                sector: 'Education',
                isActive: false,
            },
        ],
        School: [
            {
                id: 1,
                englishName: 'Riyadh school 1',
                arabicName: 'Riyadh school 1',
                channelType: ['School'],
                channelCategory: ['service center'],
                sector: 'Education',
                isActive: true,
            },
            {
                id: 2,
                englishName: 'Riyadh school 2',
                arabicName: 'Riyadh school 2',
                channelType: ['School'],
                channelCategory: ['service center'],
                sector: 'Education',
                isActive: true,
            },
            {
                id: 3,
                englishName: 'Riyadh school 3',
                arabicName: 'Riyadh school 3',
                channelType: ['School'],
                channelCategory: ['service center'],
                sector: 'Education',
                isActive: true,
            },
            
        ],
        College: [
            
        ],
    });
    const [channels, setChannel] = React.useState([
        {
            id: 1,
            englishName: 'Riyadh school',
            arabicName: 'Riyadh school',
            channelType: ['School', 'physical center'],
            channelCategory: ['e-service', 'service center'],
            sector: 'Education',
            isActive: true,
        },
        {
            id: 2,
            englishName: 'Riyadh school',
            arabicName: 'Riyadh school',
            channelType: ['School', 'physical center'],
            channelCategory: ['call center'],
            sector: 'Education',
            isActive: false,
        },
        {
            id: 3,
            englishName: 'Riyadh school',
            arabicName: 'Riyadh school',
            channelType: ['School', 'physical center', 'helpline'],
            channelCategory: ['e-service', 'call center'],
            sector: 'Education',
            isActive: true,
        },
        {
            id: 4,
            englishName: 'Riyadh school',
            arabicName: 'Riyadh school',
            channelType: ['School', 'physical center'],
            channelCategory: ['service center'],
            sector: 'Education',
            isActive: true,
        },
        {
            id: 5,
            englishName: 'Riyadh school',
            arabicName: 'Riyadh school',
            channelType: ['School', 'physical center'],
            channelCategory: ['e-service'],
            sector: 'Education',
            isActive: false,
        },
    ]);

    const {
        channelCategory,
        setChannelCategory,
        channelTypes,
        setChannelTypes,
        updateChannelCategory,
    } = useChannel();
    const handleSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
        console.log(values);
        afterSubmit();
    };

    const getData = (channelTypes) => {
        const channelList = channelTypes.map(
            (channelType) =>
                mappedChannels[channelType].map(
                    (channel) => {
                        return { ...channel };
                    },
                ),
        ).flat()
        return channelList;
    };
    return (
        <DashboardLayout>
            <TitleCard title="Add Service for Ministry of Education">
            <h6>Sector: {SampleData[0].arabicName}</h6>
            </TitleCard>
           
            <Card>
                <Card.Body>
                    <Formik
                        initialValues={getInitialProps(user)}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        onReset={afterCancel}
                    >
                        {(props) => (
                            <Form>
                                {console.log(props.values.channelCategory)}
                                {props.status && (
                                    <Alert
                                        key={props.status.type}
                                        variant={props.status.type}
                                    >
                                        {props.status.message}
                                    </Alert>
                                )}
                                <div className="mb-1">
                                    <TextField
                                        name="arabicName"
                                        type="text"
                                        // placeholder="For example, test@adaa.gov.sa"
                                        label="Arabic Name"
                                        // bottomText={'The email used to log in'}
                                    />
                                </div>
                                <div className="mb-3">
                                    <TextField
                                        name="englishName"
                                        type="text"
                                        // placeholder="For example, Abdul Rehman, Abdul Rahim"
                                        label="English Name"
                                        // bottomText="Username as it will appear in the reports later"
                                    />
                                </div>
                                <hr className={commonStyles['line-grey']} />
                                <div className="mb-3">
                                    <SelectField
                                        name="sector"
                                        label="Sector"
                                        disabled
                                        // onChange={props.}
                                        // bottomText="The user's permissions must be determined according to the following table of powers: Viewer: He has the right to review the data only without making any modifications to it. Content Manager: He can make changes to all parts of content management. Administrator: All of the above plus access to system settings and user management"
                                    >
                                        {/* <option disabled>Select Channel Category</option> */}
                                        {['Education', 'Healthcare'].map(
                                            (cat) => (
                                                <option>{cat}</option>
                                            ),
                                        )}
                                    </SelectField>
                                </div>
                                <div className="mb-3">
                                    <SelectField
                                        name="entity"
                                        label="Entity"
                                        disabled
                                        
                                        // disabled
                                        // onChange={props.}
                                        // bottomText="The user's permissions must be determined according to the following table of powers: Viewer: He has the right to review the data only without making any modifications to it. Content Manager: He can make changes to all parts of content management. Administrator: All of the above plus access to system settings and user management"
                                    >
                                        {/* <option disabled>Select Channel Category</option> */}
                                        {[
                                            'Ministry of Education',
                                        ].map((cat) => (
                                            <option>{cat}</option>
                                        ))}
                                    </SelectField>
                                </div>
                                <hr className={commonStyles['line-grey']} />
                                <div className="mb-3">
                                    <FormLabel>Channel Category</FormLabel>
                                    <select
                                        name="channelCategory"
                                        label="Channel Category"
                                        multiple
                                        className="form-select"
                                        onChange={(e) => {
                                            props.setFieldValue(
                                                'channelCategory',
                                                [...e.target.options]
                                                    .filter(
                                                        ({ selected }) =>
                                                            selected,
                                                    )
                                                    .map(({ value }) => value),
                                            );
                                        }}
                                    >
                                        {['E-platform', 'Service Center'].map(
                                            (cat) => (
                                                <option>{cat}</option>
                                            ),
                                        )}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <FormLabel>Channel Types</FormLabel>
                                    <select
                                        name="channelType"
                                        label="Channel Type"
                                        // value={props.values.channelType}
                                        onChange={(e) => {
                                            // console.log(e.target.value);
                                            props.setFieldValue(
                                                'channelType',
                                                [...e.target.options]
                                                    .filter(
                                                        ({ selected }) =>
                                                            selected,
                                                    )
                                                    .map(({ value }) => value),
                                            );
                                        }}
                                        multiple
                                        className="form-select"
                                    >
                                        {props.values.channelCategory.map(
                                            (category) =>
                                                ChannelCategoryToTypeMaping[
                                                    category
                                                ].map((type) => (
                                                    <option>{type}</option>
                                                )),
                                        )}
                                    </select>
                                </div>
                                <hr className={commonStyles['line-grey']} />

                                <DataTable
                                    columns={getColumns(channels, setChannel)}
                                    data={getData(props.values.channelType)}
                                    dataType="Channels of Ministry of Education"
                                    actions={TableActions}
                                    // handler={() => }
                                    isPaginated
                                />
                                <hr className={commonStyles['line-grey']} />
                                <div className="mb-5">
                                    <SwitchField
                                        type="switch"
                                        id="isActive"
                                        label="Deactivate / Activate Service"
                                        name="isActive"
                                        // bottomText="Deactivated user will not be able to access the system"
                                    />
                                </div>
                                <Modal.Footer>
                                      variant="primary"
                                        <FilledButton
                                      type="submit"
                                    >
                                        {'Save'}
                                    </FilledButton>
                                    <FilledButton
                                        variant="secondary"
                                        type="reset"
                                    >
                                        cancel
                                    </FilledButton>
                                </Modal.Footer>
                            </Form>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
        </DashboardLayout>
    );
};

export default AddServiceChannel;
// export const UserForm = FormikEnhancer(AddUserForm);
