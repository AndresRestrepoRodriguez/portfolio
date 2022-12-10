// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    styles: {
      global: (props) => ({
        'body': {
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          color : "#000000",
          background:
          "#F7FAFC"
        },
        a: {
          color: "violet",
        }
      }),
    },
    components: {
      Divider: {
        defaultProps: { size: "md" },
        color: '#FFFFFF',
        sizes: {
          lg: { borderWidth: "4px" },
          md: { borderWidth: "3px" },
          sm: { borderWidth: "1px" },
        },
      },
    },
  });

export default theme;