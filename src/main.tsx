import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import CandidateSearch from './pages/CandidateSearch.tsx';
import SavedCandidates from './pages/SavedCandidates.tsx';
import ErrorPage from './pages/ErrorPage.tsx';

//Define the routes for the app
const router = createBrowserRouter([
  {
    path: '/', // main app route
    element: <App />, // main app component
    errorElement: <ErrorPage />, // Error page component
    children: [
      {
        index: true, //default route
        element: <CandidateSearch />, // render the CandidateSearch component
      },
      {
        path: '/SavedCandidates', // route for saved candidates
        element: <SavedCandidates />, // render the SavedCandidates component
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
// get the root element from the DOM

// renders 
if (rootElement) {
  ReactDOM.createRoot(rootElement).render
  (<RouterProvider router={router} />

  );
}
