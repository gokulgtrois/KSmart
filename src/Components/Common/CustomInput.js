import { Grid, IconButton, InputAdornment, InputLabel, TextField } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import { FORM_CONTROL_STYLE, TextError } from "../Constants";
function Input(props) {
    const { label, name, icon, startIcon, onClick, onChangeFromController, autocomplete = true, digitsOnly = false, isMandatory = false, ...rest } = props;
    return (
        <Grid sx={FORM_CONTROL_STYLE}>
            <InputLabel htmlFor={name}>{label} {isMandatory && <span style={{ color: "red", fontSize: "15px" }}>*</span>}</InputLabel>
            <Field name={name}>
                {({ form, field }) => {
                    const { handleChange } = form;
                    const customHandleChange = (e) => {
                        const regex = /^[0-9\b]+$/;
                        if (!digitsOnly) {
                            handleChange(e);
                        }
                        if (digitsOnly && regex.test(e.target.value)) {
                            handleChange(e);
                        }
                    };
                    onChangeFromController && onChangeFromController(form.values[name]);
                    return (
                        <>
                            <TextField
                                id={name}
                                {...field}
                                {...rest}
                                size="small"
                                onChange={customHandleChange}
                                sx={{
                                    "& .MuiInputBase-input.Mui-disabled": {
                                        WebkitTextFillColor: "#5A5A5A"
                                    }
                                }}
                                InputProps={{
                                    form: { autocomplete: autocomplete ? "on" : "off" },
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            {icon && <IconButton onClick={onClick} > {icon}</IconButton>}
                                        </InputAdornment>
                                    ),
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            {startIcon && <IconButton onClick={onClick} > {startIcon}</IconButton>}
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <ErrorMessage component={TextError} name={name} />
                        </>
                    );
                }}
            </Field>
        </Grid>
    );
}
export default Input;