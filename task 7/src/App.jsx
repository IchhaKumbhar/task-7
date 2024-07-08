import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Ichha from './Ichha';

import Dashboard from './pages/Dashboard';
import FrameComponent1 from './pages/FrameComponent3';


const router = createBrowserRouter([
  { path: '/', element: <Ichha /> },
{ path: '/FrameComponent1', element: <FrameComponent1 /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}