'use client'

import { useTheme } from 'next-themes';
import React from 'react';
// import Loading from '@app/loading';

export default function BusinessCard ({ children }: { children: React.ReactNode }) {
  const { resolvedTheme = 'dark' } = useTheme();

  return (
    <div className={`flex flex-col mx-auto gap-6 p-12 rounded-xl sm:max-w-96
      ${resolvedTheme === 'dark' ? 'bg-black/90' : 'bg-white/90'}
    `}>
      {children}
    </div>  
  ) 
}