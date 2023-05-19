import React from "react"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Switch from "@mui/material/Switch"
import { Typography, Stack } from "@mui/material";

const groupStyle = {
  mb: 2,
  mt: 4
}

export default function SwitchExample() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  const label = { inputProps: { 'aria-label': 'Size switch demo' } };

  return (
    <div>
      <Typography variant="h6" sx={groupStyle}>Basic Switch</Typography>

      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
            />
          }
          label="Primary"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="secondary"
            />
          }
          label="Secondary"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="error"
            />
          }
          label="Error"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="warning"
            />
          }
          label="Warning"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="info"
            />
          }
          label="Info"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="success"
            />
          }
          label="Success"
        />
        <FormControlLabel required control={<Switch />} label="Uncontrolled" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
        <FormControlLabel
          disabled
          control={<Switch checked />}
          label="Disabled"
        />
      </FormGroup>
      <Typography variant="h6" sx={groupStyle}>Switch Sizes</Typography>
      <FormGroup row>
        <Switch {...label} defaultChecked size="small" />
        <Switch {...label} defaultChecked />
      </FormGroup>
    </div>

  )
}
