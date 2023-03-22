import { extendTheme } from "@chakra-ui/react"

export const theme1 = extendTheme({
  colors: {
    red: {
        100: "#fd2a2a",
        200: "#850709"
    },

    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
})