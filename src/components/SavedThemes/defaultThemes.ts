import { NewSavedTheme } from "src/state/types"

const defaultThemeList: Omit<NewSavedTheme, "lastUpdated">[] = [
  // {
  //   name: "Material-UI Docs - Light",
  //   themeOptions: {
  //     palette: {
  //       mode: "light",
  //       primary: {
  //         main: "#1976d2",
  //       },
  //       secondary: {
  //         main: "#9c27b0",
  //       },
  //       background: {
  //         default: "#fff",
  //         paper: "#fff",
  //       },
  //     },
  //   },
  //   fonts: ["Roboto"],
  // },
  // {
  //   name: "Material-UI Docs - Dark",
  //   themeOptions: {
  //     palette: {
  //       mode: "dark",
  //       primary: {
  //         main: "#90caf9",
  //       },
  //       secondary: {
  //         main: "#ce93d8",
  //       },
  //       background: {
  //         default: "#121212",
  //         paper: "#121212",
  //       },
  //     },
  //   },
  //   fonts: ["Roboto"],
  // },
  {
    name: "1E Light",
    themeOptions: {
      palette: {
        primary: {
          main: '#2a73df',
          light: '#2893ff',
          dark: '#2641ad',
        },
        secondary: {
          main: '#c6461e',
          light: '#e25226',
          dark: '#ac3a18',
        },
        text: {
          primary: '#10111d',
          secondary: '#4d4f5c',
          disabled: '#888998',
          hint: '#606270',
        },
        background: {
          default: '#ffffff',
          paper: '#ffffff',
        },
        error: {
          main: '#d81919',
          light: '#ea271e',
          dark: '#bd0000',
        },
        warning: {
          main: '#ffbd07',
          light: '#ffd24e',
          dark: '#ff9c04',
          contrastText: '#10111d',
        },
        info: {
          main: '#285fb5',
          light: '#3281da',
          dark: '#204096',
        },
        success: {
          main: '#3ec28c',
          light: '#68cd9f',
          dark: '#00955e',
          contrastText: '#10111d',
        },
        divider: '#d2d2d2',
        mode: 'light',
      },
      typography: {
        fontFamily: 'Public Sans',
      },
    },
    fonts: ["Public Sans"],
  },
  {
    name: "1E Dark",
    themeOptions: {
      palette: {
        primary: {
          main: '#64b4ff',
          light: '#bcddff',
          dark: '#2893ff',
          contrastText: '#10111d',
        },
        secondary: {
          main: '#e391ff',
          light: '#f9e5ff',
          dark: '#c53def',
          contrastText: '#10111d',
        },
        text: {
          secondary: '#ecedfd',
          disabled: '#cecfdf',
          hint: '#e0e1f1',
        },
        background: {
          paper: '#121212',
        },
        error: {
          main: '#f8341d',
          light: '#eb6b66',
          dark: '#d81919',
          contrastText: '#10111d',
        },
        warning: {
          main: '#ffa135',
          contrastText: '#10111d',
          light: '#ffc884',
          dark: '#fb8620',
        },
        info: {
          main: '#4c9eec',
          light: '#92c5f4',
          dark: '#3281da',
          contrastText: '#10111d',
        },
        success: {
          main: '#3ec28b',
          contrastText: '#10111d',
          light: '#97dbba',
          dark: '#00a76b',
        },
        divider: '#ecedfd',
        mode: 'dark',
      },
      typography: {
        fontFamily: 'Public Sans',
      },
    },
    fonts: ["Public Sans"],
  },
]

export default defaultThemeList

const defaultThemesId = "default-themes";

export { defaultThemesId };
