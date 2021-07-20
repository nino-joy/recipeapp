import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider, extendTheme} from 'native-base';

import TabBar from './navigation/TabBar';

const theme = {
  dark: false,
  colors: {
    background: 'white',
  },
};

const nativeTheme = extendTheme({
  fontConfig: {
    Poppins: {
      100: {
        normal: 'Poppins-ExtraLight',
        italic: 'Poppins-ExtraLightItalic',
      },
      200: {
        normal: 'Poppins-Light',
        italic: 'Poppins-LightItalic',
      },
      300: {
        normal: 'Poppins-Light',
        italic: 'Poppins-LightItalic',
      },
      400: {
        normal: 'Poppins-Regular',
        italic: 'Poppins-Italic',
      },
      500: {
        normal: 'Poppins-Medium',
        italic: 'Poppins-MediumItalic',
      },
      600: {
        normal: 'Poppins-Medium',
        italic: 'Poppins-MediumItalic',
      },
      700: {
        normal: 'Poppins-SemiBold',
        italic: 'Poppins-SemiBoldItalic',
      },
      800: {
        normal: 'Poppins-Bold',
        italic: 'Poppins-BoldItalic',
      },
      900: {
        normal: 'Poppins-Black',
        italic: 'Poppins-BlackItalic',
      },
    },
  },

  components: {
    Text: {
      baseStyle: {color: 'black'},
      defaultProps: {},
      variants: {},
      sizes: {},
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    mono: 'Poppins',
  },
});

const App = () => {
  return (
    <NativeBaseProvider theme={nativeTheme}>
      <NavigationContainer theme={theme}>
        <TabBar />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
