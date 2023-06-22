import GitHubIcon from "@mui/icons-material/GitHub"
import {
  AppBar,
  AppBarProps,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material"
import React from "react"
import muiVersion from "src/muiVersion"
import TutorialButton from "./Tutorial/TutorialButton"
import Logo from "../images/1E_logo_white.png"

const Header = (props: AppBarProps) => {
  return (
    <AppBar position="static" color="default" {...props}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <img src={Logo} style={{ height: "56px" }} />
          <Typography
            variant="h6"
            sx={{ typography: "h6", lineHeight: "1.25rem" }}
          >
            Theme Creator
          </Typography>
        </div>
        <div>
          <TutorialButton />
          <IconButton
            href="https://github.com/Zenoo/mui-theme-creator"
            target="_blank"
            rel="noreferrer"
            size="large"
          >
            <GitHubIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
