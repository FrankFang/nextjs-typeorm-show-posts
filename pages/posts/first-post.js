import React, {useCallback} from 'react'
import styles from 'styles/first-post.module.css'

export default function FirstPost() {
  const clickMe = useCallback(() => {
    console.log('you clicked me')
  }, [])
  return (
    <>
      <div className={styles.x}>
        <div className={styles.content}>
          内容
        </div>
      </div>
    </>
  )
}
