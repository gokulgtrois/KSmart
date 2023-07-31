import React, { useState, useEffect } from 'react'
import { Form, Formik } from "formik";
import { Grid } from '@mui/material';
import Input from '../Components/Common/CustomInput'
import CustomCheckbox from '../Components/Common/CustomCheckBox'
import DateField from '../Components/Common/CustomDatePicker';
import CustomSelect from './Common/CustomSelect';

function PermitAndOccupancy() {
    const [district, setDistrict] = useState();

    useEffect(() => {

        const url = "https://dev-t14tn53yn908ka1.api.raw-labs.com/district-list";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log('json===', json);
                setDistrict(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
    return (
        <Formik >
            {formik => (
                < Form >
                    <Grid container spacing={2} >
                        <Grid item lg={4} md={4} sm={12}>
                            <Input
                                label="Permit Number"
                                name="Permit Number"
                                placeholder='xxxxxxxxxxxxxx'
                            />
                        </Grid>
                        <Grid item lg={4} md={4} sm={12}>
                            <DateField
                                label="Local Body Type"
                                name="Local Body Type"
                            />
                        </Grid>
                        <Grid item lg={4} md={4} sm={12}>
                            <Input
                                label="Link With Previous Permit"
                                name="Link With Previous Permit"
                                placeholder='xxxxxxxxxxxxxx'
                            />
                        </Grid>
                        <Grid item lg={4} md={4} sm={12}>
                            <Input
                                label="Occupancy Number"
                                name="Occupancy Number"
                                placeholder='xxxxxxxxxxxxxx'
                            />
                        </Grid>
                        <Grid item lg={4}>
                            <CustomCheckbox
                                label="Whether it is partialy completed?"
                                name="Whether it is partialy completed?"
                                placeholder='xxxxxxxxxxxxxx'
                            />
                        </Grid>
                        <Grid item lg={4} md={4} sm={12}>
                            <DateField
                                label="Local Body Type"
                                name="Local Body Type"
                            />
                        </Grid>
                        <Grid item lg={4}>
                            <CustomSelect
                                label="Occupancy Nature"
                                name="Occupancy Nature"
                                type="dropdown"
                                options={district}
                            />
                        </Grid>

                    </Grid>

                </Form >
            )}
        </Formik>

    )
}

export default PermitAndOccupancy