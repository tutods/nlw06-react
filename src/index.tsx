import SEO from 'components/SEO';
import { AuthContextProvider } from 'contexts/AuthContext';
import { ThemeModeProvider } from 'contexts/ThemeModeContext';
import App from 'pages/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Toaster } from 'react-hot-toast';
import 'utils/services/firebase';

import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <ThemeModeProvider>
    <AuthContextProvider>
      <SEO />
      <Toaster position="top-right" reverseOrder={false} />
      <App />
    </AuthContextProvider>
  </ThemeModeProvider>,
);
