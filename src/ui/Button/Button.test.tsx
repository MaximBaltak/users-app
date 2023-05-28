import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps } from './Button'

describe('Button', () => {
  const defaultProps: ButtonProps = {
    text: 'Click me',
    background: 'red',
    action: jest.fn(),
    width: '100px',
    height: '50px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
  }

  it('renders correctly', () => {
    render(<Button {...defaultProps} />)
    expect(screen.getByText(defaultProps.text)).toBeInTheDocument()
  })

  it('calls the action on click', () => {
    render(<Button {...defaultProps} />)
    fireEvent.click(screen.getByText(defaultProps.text))
    expect(defaultProps.action).toHaveBeenCalled()
  })

  it('applies styles correctly', () => {
    render(<Button {...defaultProps} />)
    const buttonElement = screen.getByText(defaultProps.text)
    expect(buttonElement).toHaveStyle(
      `background-color: ${defaultProps.background}`
    )
    expect(buttonElement).toHaveStyle(`color: ${defaultProps.color}`)
    expect(buttonElement).toHaveStyle(`font-size: ${defaultProps.fontSize}`)
    expect(buttonElement).toHaveStyle(`font-weight: ${defaultProps.fontWeight}`)
    expect(buttonElement).toHaveStyle(
      `box-shadow: 0 0 10px ${defaultProps.background}`
    )
  })
})
