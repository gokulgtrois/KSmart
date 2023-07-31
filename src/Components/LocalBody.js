import React, { useEffect, useState } from 'react'
import CustomSelect from './Common/CustomSelect'
import { Form, Formik } from "formik";
import { Grid } from '@mui/material';

function LocalBody() {

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
                    <Grid container spacing={2}>
                        <Grid item lg={4}>
                            <CustomSelect
                                label="District"
                                name="District"
                                type="dropdown"
                                options={district}
                            />
                        </Grid>
                        <Grid item lg={4}>
                            <CustomSelect
                                label="Local Body Type"
                                name="Local Body Type"
                                type="dropdown"
                                options={district}
                            />
                        </Grid>
                        <Grid item lg={4}>
                            <CustomSelect
                                label="Local Body Name"
                                name="Local Body Name"
                                type="dropdown"
                                options={district}
                            />
                        </Grid>
                        <Grid item lg={4}>
                            <CustomSelect
                                label="Zonal Office"
                                name="Zonal Office"
                                type="dropdown"
                                options={district}
                            />
                        </Grid>
                        <Grid item lg={4}>
                            <CustomSelect
                                label="Ward No/Name"
                                name="Ward No/Name"
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

export default LocalBody