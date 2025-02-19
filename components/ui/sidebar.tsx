'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
const path = usePathname();
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">메뉴</h2>
          <nav className="space-y-4">
          <Link href="/" className="flex items-center space-x-2 hover:text-blue-500">
        <span>홈</span>
        {path === '/' && <span>🔥</span>}
      </Link>

      <Link href="/next" className="flex items-center space-x-2 hover:text-blue-500">
        <span>소개</span>
        {path === '/next' && <span>🔥</span>}
      </Link>
          </nav>
        </div>
      </div>
    </>
  )
}