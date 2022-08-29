// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    styles: {
      global: (props) => ({
        'body': {
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          color : "#ffffff",
          background:
          "linear-gradient(180deg, rgba(41,65,92,1) 20%, rgba(84,123,168,1) 100%);"
        },
        a: {
          color: "violet",
        },
      }),
    },
  });

export default theme;