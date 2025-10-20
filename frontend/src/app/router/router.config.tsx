import { lazy } from 'react';
import PublicLayout from '../../core/layouts/PublicLayout';
import type { RouteObject } from 'react-router-dom';

const Home = lazy(() => import("../../modules/home/screens/Home"));

export const routes: RouteObject[] = [
  {
    element: <PublicLayout />,
    children: [
      { path: '/', element: <Home /> },
    ],
  },
];
