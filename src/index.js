import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './components/app/';
import ErrorBoundary from './components/error-boundry'
import BookstoreService from './services/bookstore-service'
import { BookstoreServiceProvider} from './components/bookstore-service-context/bookstore-service-context'

import store from './store'

const bookstoreService = new BookstoreService()

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);