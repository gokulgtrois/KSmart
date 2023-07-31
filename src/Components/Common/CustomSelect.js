import { Grid, InputLabel } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import Select from "react-select";
import { FORM_CONTROL_STYLE, TextError } from "../Constants";
// import TextError from "./TextError";
function CustomSelect(props) {
    const { name = "", options = [], multiple = false, label = "", onChangeFromController, disabled = false, isMandatory = false, ...rest } = props;
    return (
        <Grid sx={{ FORM_CONTROL_STYLE }}>
            <InputLabel htmlFor={name}>{label} {isMandatory && <span style={{ color: "red", fontSize: "15px" }}>*</span>}</InputLabel>
            <Field
                style={{ zIndex: 4 }}
                as='select'
                name={name}
            >
                {
                    ({ field, form }) => {
                        return (
                            <>
                                <Select
                                    styles={{
                                        control: (baseStyles) => ({
                                            ...baseStyles,
                                            //  border: "1px solid #009992",
                                            boxShadow: "none",
                                            borderRadius: "5px",
                                            padding: "2px 0",
                                            "&:hover": {
                                                borderColor: "#000"
                                            }
                                        })
                                    }}
                                    {...field}
                                    {...rest}
                                    id={name}
                                    options={options}
                                    onChange={value => {
                                        onChangeFromController && onChangeFromController(value);
                                        form.setFieldValue(field.name, value);
                                    }}
                                    isDisabled={disabled}
                                    dropdownHeight={400}
                                    getOptionLabel={(option) => option.name}
                                    getOptionValue={(option) => option.id}
                                    isMulti={multiple}
                                    name={name}
                                />
                                <ErrorMessage component={TextError} name={name} />
                            </>
                        );
                    }
                }
            </Field>
        </Grid>
    );
}
export default CustomSelect;