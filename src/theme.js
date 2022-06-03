// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const styles = {
    global: props => ({
      body: {
        color: mode('whiteAlpha.900', 'whiteAlpha.900')(props),
        bg: mode('#231d4b', '#231d4b')(props),
      },
    }),
};

// 3. extend the theme
const theme = extendTheme({ styles, config })

export default theme