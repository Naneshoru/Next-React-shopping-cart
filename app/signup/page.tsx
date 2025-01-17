'use client'

import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"

import styles from './signup.module.scss'
import { Button } from "../components/ui/button"

type FormValues = {
  name: string
  email: string
}

export default function SignUp() {

  const { register, handleSubmit, getValues } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <div className={styles.signup}>
      <h1>Sign Up</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label className={styles.label}>
          Name:
          <Input id="name" {...register('name')} className="" />
        </label>
        
        <label className={styles.label} >
          E-mail: 
          <Input type="email" id="email" {...register('email')} className={styles.pink} onClick={() => alert(JSON.stringify(getValues())) 
          }/>
        </label>
        <Button>Submit</Button>
      </form>
    </div>
  )
}