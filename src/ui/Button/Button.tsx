import React, { CSSProperties, FC } from 'react'
import styles from './Button.module.scss'
interface ButtonProps {
  text: string
  width?: string
  height?: string
  background: string
  color: string
  action: () => void
  fontSize?: string
  fontWeight?: string
}

const Button: FC<ButtonProps> = ({
  text,
  background,
  action,
  width = '',
  height = '',
  color,
  fontSize = '',
  fontWeight = '',
}) => {
  const styleButton: CSSProperties = {
    background,
    width,
    height,
    color,
    fontSize,
    fontWeight,
    boxShadow: `0 0 10px ${background}`,
  }
  return (
    <button style={styleButton} className={styles.button} onClick={action}>
      {text}
    </button>
  )
}

export default Button
