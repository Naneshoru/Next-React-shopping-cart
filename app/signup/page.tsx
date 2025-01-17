'use client'

import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"

import styles from './signup.module.scss'
import { Button } from "../components/ui/button"

type FormValues = {
  name: string
  email: string
  address: {
    street: string
    number: string
  }
}

export default function SignUp() {

  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: async () => {
			const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const data: { email: string, address: { street: string, suite: string } } = await response.json()

      return {
        name: '',
        email: data.email,
        address: {
          street: data.address?.street,
          number: data.address?.suite
        }
      }
		}
  })

  const { errors } = formState

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <div className={styles.signup}>
      <h1>Sign Up</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label className={styles.label}>
          Name:
          <Input id="name" {...register('name', 
          {       
            required: {
              value: true,
              message: 'Username is required!'
            },
          }
          )} className="" />
        </label>
        <p className={styles.error}>{errors.name?.message}</p>

        <label className={styles.label} >
          E-mail: 
          <Input type="email" id="email" {...register('email', 
          {
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'Invalid email address',
            },
            required: {
              value: true,
              message: 'E-mail is required!'
            },
            validate: (value) => { 
              return value !== "admin@example.com" || 'Enter a different email address.'
            }
          }
          )} className={styles.pink} />
        </label>
        <p className={styles.error}>{errors.email?.message}</p>

        <label className={styles.label} >
          Street: 
          <Input type="text" id="street" {...register('address.street')} className={styles.pink} />
        </label>
        <p className={styles.error}>{errors.address?.street?.message}</p>
        
        <label className={styles.label} >
          Number: 
          <Input type="text" id="number" {...register('address.number')} className={styles.pink} />
        </label>
        <p className={styles.error}>{errors.address?.number?.message}</p>

        <Button>Submit</Button>
      </form>
    </div>
  )
}