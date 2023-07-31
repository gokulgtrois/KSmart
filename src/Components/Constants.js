import { Typography } from "@mui/material";


export const FORM_CONTROL_STYLE = { display: "flex", flexDirection: "column", position: "relative", pb: 1 };

export const TextError = (props) =>
    <Typography Typography sx={{ color: "red" }} color="common.red" variant="p" >
        {props.children}
    </Typography >;
