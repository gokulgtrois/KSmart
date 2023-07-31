import React from "react";
import { FormControl, FormHelperText, IconButton, TextField, InputLabel, Grid } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { FORM_CONTROL_STYLE } from "../Constants";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
const DateField = (props) => {
    const { onClear, label, ...rest } = props;
    return (
        <>
            < Grid sx={FORM_CONTROL_STYLE}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <InputLabel htmlFor=''>{label} </InputLabel>
                    <FormControl>
                        <DatePicker
                            {...rest}

                            renderInput={(params) => (
                                <div style={{ display: "flex" }}>
                                    <TextField variant="standard" {...params} />
                                    {props.value &&
                                        <IconButton style={{ position: "relative" }} onClick={() => onClear()}>
                                            {/* <ClearIcon /> */}
                                        </IconButton>
                                    }
                                </div>
                            )
                            }
                        />
                    </FormControl>
                </LocalizationProvider >
                <FormHelperText error sx={{ position: "absolute" }}>
                    {/* {error && <span>{error}</span>} */}
                </FormHelperText>
            </Grid>
        </>
    );
};
export default DateField;