import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import MainPage from './MainPage'
import thunk from 'redux-thunk'

const mockStore = configureStore([thunk])

describe('MainPage', () => {
  it('should render "Пользователи" title', () => {
    const store = mockStore({
      users: { users: [] },
    })
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    )
    expect(screen.getByText('Пользователи')).toBeInTheDocument()
  })

  it('should dispatch getUsersList on initial render', async () => {
    const store = mockStore({
      users: { users: [] },
    })
    store.dispatch = jest.fn()
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    )

    await expect(store.dispatch).toBeCalled();
  })

  it('should dispatch getUsersList when "Обновить" button is clicked', () => {
    const store = mockStore({
      users: { users: [] },
    })
    store.dispatch = jest.fn()
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    )
    const updateButton = screen.getByRole('button', { name: 'Обновить' })
    updateButton.click()
    expect(store.dispatch).toBeCalledTimes(2)
  })

  it('should render UserCard components for each user in the state', () => {
    const store = mockStore({
      users: {
        users: [
          {
            id: 1,
            name: 'John Doe',
            username: 'johndoe',
            email: 'johndoe@example.com',
            address: {
              street: '123 Main St.',
              suite: 'Apt. 4',
              city: 'Anytown',
              zipcode: '12345',
              geo: {
                lat: '37.7749',
                lng: '-122.4194',
              },
            },
            phone: '555-555-1212',
            website: 'https://example.com',
            company: {
              name: 'Example Company',
              catchPhrase: 'Making things easier',
              bs: 'Software Development',
            },
          },
          {
            id: 2,
            name: 'John Doe',
            username: 'johndoe',
            email: 'johndoe@example.com',
            address: {
              street: '123 Main St.',
              suite: 'Apt. 4',
              city: 'Anytown',
              zipcode: '12345',
              geo: {
                lat: '37.7749',
                lng: '-122.4194',
              },
            },
            phone: '555-555-1212',
            website: 'https://example.com',
            company: {
              name: 'Example Company',
              catchPhrase: 'Making things easier',
              bs: 'Software Development',
            },
          },
        ],
      },
    })
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    )
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })
})
