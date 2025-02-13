
import { use } from "react"
import SignUpForm, { FormValues } from "./signup-form"

async function fetchDefaultValues(): Promise<FormValues> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1')

  const data: { email: string, address: { street: string, suite: string } } = await response.json()

  return {
    name: '',
    email: data.email,
    address: {
      street: data.address?.street,
      number: data.address?.suite
    },
    phoneNumbers: ['', '']
  }
}

export default function SignUp() {
  const defaultValues: FormValues = use(fetchDefaultValues())

  return <SignUpForm defaultValues={defaultValues} />
}
