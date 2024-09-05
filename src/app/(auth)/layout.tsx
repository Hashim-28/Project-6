// this file is  liek a root of sign in and sign up 


import { FC, ReactNode } from 'react'

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children}) => {
  return (
    <div className=' p-10 rounded-md'>
      {children}
    </div>
  )
}

export default AuthLayout
