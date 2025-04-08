

import React from 'react';
import Link from 'next/link';
import { UserPlus, HomeIcon, UsersRound, LogIn } from 'lucide-react';
import { NavButton } from '@app/components/navbutton';
import { ModeToggle } from '@app/components/ui/mode-toggle';
import { getServerSession } from 'next-auth';
import LogoutBtn from './ui/logout-btn';
 
export default async function Header () { 
  const session = await getServerSession() 
  // console.log("🚀 ~ Header ~ session:", session)
  const userName = session?.user?.name || ''
  // console.log("🚀 ~ Header ~ userName:", userName)
  
  return ( 
    <header className='bg-background h-12 p-2 border-b sticky top-0 z-20'>
      <div className='animate-slide flex h-8 items-center justify-between w-full'>
        <div className='flex items-center gap-2'>
          <NavButton href='/home' label='Home' icon={HomeIcon} />

          <Link href='/home' className='flex justify-center items-center gap-2 ml-0'>
            <h1 className='hidden sm:block text-xl font-bold m-0 mt-1'>Shop</h1>
          </Link>
        </div>
        <div className='flex items-center gap-2'>
          {session && userName && <p>Olá, {userName}</p>}

          {session && <LogoutBtn />}

          <NavButton href='/signup' label='Sign up' icon={UserPlus} />

          {!session && <NavButton href='/signin' label='Sign in' icon={LogIn} />}

          <NavButton href='/customers' label='Customers' icon={UsersRound} />

          <ModeToggle />
        </div>
      </div>
  </header>  
  ) 
} 