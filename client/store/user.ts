'use client'
import { create } from 'zustand'
interface UserInfo{
  uid:string
  avatar:string
  username:string 
}

interface UserState extends UserInfo {
  setUser:(v:UserInfo)=>void
  clearUser:()=>void
}

const UserStore = create<UserState>(set => ({
  uid:'',
  avatar:'',
  username:'',
  setUser:user => set({ ...user }),
  clearUser:()=>set({})
  
}))

export { UserStore }
