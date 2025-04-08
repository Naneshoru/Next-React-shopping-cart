"use client"

import styles from './signin.module.scss'

import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'

export default function SignIn() {

  return(
    <div className={styles.signin}>
      
      <Button variant="outline"
        onClick={() => signIn('github', { callbackUrl: '/' }) }
      >
        Sign In with Github
      </Button>

    </div>
  )
}