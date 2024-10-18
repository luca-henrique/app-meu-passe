import React from 'react';

import RouterApp from './src/routers';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterApp />
    </QueryClientProvider>
  );
}


export default App;
