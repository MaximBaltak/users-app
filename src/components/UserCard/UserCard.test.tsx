import React from 'react'
import { render, screen } from '@testing-library/react'
import UserCard, { UserCardProps } from './UserCard'

describe('UserCard', () => {
  const user = {
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
  }

  const props: UserCardProps = { user }

  it('renders user data correctly', () => {
    render(<UserCard {...props} />)
    expect(screen.getByText(user.name)).toBeInTheDocument()
    expect(screen.getByText(user.email)).toBeInTheDocument()
    expect(screen.getByText(user.phone)).toBeInTheDocument()
    expect(screen.getByText(user.website)).toBeInTheDocument()
    expect(screen.getByText(user.address.city)).toBeInTheDocument()
  })
})
