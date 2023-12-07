import './index.scss';
import React from 'react';
import App from './App.tsx';
import ReactDOM from 'react-dom/client';
import Quiz from './components/quiz/Quiz.tsx';
import Home from './components/home/Home.tsx';
import QuizContext from './context/QuizContext.tsx';
import NotFound from './components/not-found/NotFound.tsx';
import { RoutePaths } from './ts/enums/route-paths.enum.ts';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import PrivateRoute from './components/private-route/PrivateRoute.tsx';

const routes = [
  {
    element: <App />,
    children: [
      {
        path: RoutePaths.HOME,
        element: <QuizContext><Home /></QuizContext>
      },
      {
        path: RoutePaths.QUIZ + '/:title',
        element: <QuizContext><PrivateRoute component={<Quiz />} /></QuizContext>
      }
    ],
    errorElement: <NotFound />
  }
];

const router = createHashRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
