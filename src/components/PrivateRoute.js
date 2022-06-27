import React from 'react';
import { Navigate } from 'react-router-dom';
import HomePage from '../page/Home';
import ErrorBoundary from '../util/ErrorBoundary';
export const PrivateRoute = () => {
  return (
    localStorage.getItem('auth')
      ? <ErrorBoundary>
          <HomePage />
        </ErrorBoundary>
      : <Navigate to="/login" />
  )
}