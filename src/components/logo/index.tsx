import { ICLogo } from 'assets'
import React from 'react'
import { useNavigate } from 'react-router'

export const Logo = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-y-2 cursor-pointer" onClick={() => navigate('/')} onKeyDown={() => {}}>
      <ICLogo />
      <span className="text-_12 font-semibold font-gilroy text-white">Genuine shoe store</span>
    </div>
  )
}
