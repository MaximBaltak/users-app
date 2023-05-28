import React, { FC } from 'react'
import styles from './UserCard.module.scss'
import { TypeUser } from '../../types/typeUser'
export interface UserCardProps {
  user: TypeUser
}
const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <div className={styles.card}>
      <div className={styles.flex}>
        <p className={styles.card_title}>{user.name}</p>
      </div>
      <div className={[styles.flex, styles.flex_last].join(' ')}>
        <p className={styles.card_author}>{user.email}</p>
      </div>
      <div className={[styles.flex, styles.flex_desc].join(' ')}>
        <p className={styles.card_desc}>{user.phone}</p>
        <p className={styles.card_desc}>{user.website}</p>
        <p className={styles.card_desc}>{user.address.city}</p>
      </div>
    </div>
  )
}

export default UserCard
