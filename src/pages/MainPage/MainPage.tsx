import React, { useEffect } from 'react'
import styles from './MainPage.module.scss'
import Button from '../../ui/Button/Button'
import UserCard from '../../components/UserCard/UserCard'
import { useAppDispatch, useSelector } from '../../hooks/storeHooks'
import { getUsersList } from '../../store/users/usersSlice'

const MainPage = () => {
  const dispatch = useAppDispatch()
  const { users } = useSelector((state) => state.users)
  useEffect(() => {
    dispatch(getUsersList())
  }, [dispatch])
  const update = () => {
    dispatch(getUsersList())
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Пользователи</h1>
      <div style={{ marginLeft: '50px', alignSelf: 'start', display:'flex',columnGap:'30px' }}>
        <Button
          text="Обновить"
          background={'#00E894'}
          color="white"
          action={update}
        />
        <Button
          text="Кнопка"
          background={'#ff4343'}
          color="white"
          action={() => {}}
        />
      </div>
      <ul className={styles.list}>
        {users.map((user) => (
          <li key={user.id} style={{ marginTop: '32px' }}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MainPage
