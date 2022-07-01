import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
    <StrictMode>
      {/* <ErrorBoundary> */}
        <App />
      {/* </ErrorBoundary> */}
    </StrictMode>
  );