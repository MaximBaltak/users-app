import React from 'react';
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

describe('App', () => {
  it('renders without crashing', () => {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      { container: root },
    );

    expect(screen.getByText('Пользователи')).toBeInTheDocument();
  });
});
