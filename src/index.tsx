import React from 'react';
import ReactDOM from 'react-dom';
import CartApp from './cartApp';
import {QueryClient ,QueryClientProvider} from "react-query";

const clietn =  new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={clietn}>
      <CartApp />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);