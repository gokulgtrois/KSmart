import React, { useState, useEffect } from 'react'
import CustomSelect from './Common/CustomSelect'
import { Form, Formik } from "formik";
import { Grid } from '@mui/material';
import Input from '../Components/Common/CustomInput'

function SurveyDetails() {
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

                        <Grid item lg={4}>
                            <CustomSelect
                                label="Village Name"
                                name="Village Name"
                                type="dropdown"
                                options={district}
                            />
                        </Grid>

                        <Grid item lg={4} md={4} sm={12}>
                            <Input
                                label="Survey Number"
                                name="Survey Number"
                                placeholder='xxxxxxxxxxxxxx'
                            />
                        </Grid>
                        <Grid item lg={4} md={4} sm={12}>
                            <Input
                                label="Re-survey Number"
                                name="Re-survey Number"
                                placeholder='xxxxxxxxxxxxxx'
                            />
                        </Grid>


                    </Grid>

                </Form >
            )}
        </Formik>

    )
}

export default SurveyDetails