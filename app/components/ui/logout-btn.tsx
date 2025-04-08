"use client"

import React from 'react'
import { Button } from './button'
import { signOut } from 'next-auth/react'

export default function LogoutBtn() {
  return (
    <Button onClick={() => signOut()}>Logout</Button>
  )
}
