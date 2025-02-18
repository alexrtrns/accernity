"use client"
import { Home, User, CircleHelp, Languages } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export default function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'Help', url: '#', icon: CircleHelp },
    { name: 'Account', url: '#', icon: User },
    { name: 'Language', url: '#', icon: Languages }
  ]

  return <NavBar items={navItems} />
}