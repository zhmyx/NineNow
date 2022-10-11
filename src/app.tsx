import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { TabBarNavigator } from '../src/features/navigators/tabNavigator';
import { store } from './store';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <TabBarNavigator />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
