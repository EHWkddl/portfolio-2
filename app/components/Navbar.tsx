'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { useState } from 'react'

/* 인라인 아이콘 */
function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  )
}
function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = (path: string) =>
    `hover:opacity-80 transition ${
      pathname === path ? 'font-semibold underline underline-offset-4' : ''
    } ${!isHome ? 'hover:text-blue-600' : ''}`

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 py-5 flex justify-between items-center transition ${
        isHome ? 'text-white' : 'text-slate-800'
      }`}
    >
      {/* 로고 */}
      <Link
        href="/"
        className={`text-2xl font-semibold tracking-wide ${
          isHome ? 'hover:opacity-80' : 'hover:text-slate-600'
        } transition`}
      >
        MyoMin
      </Link>

      {/* 햄버거 버튼 (모바일) */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <IconX /> : <IconMenu />}
      </button>

      {/* 데스크톱 메뉴 */}
      <div className="hidden md:flex items-center gap-8 text-lg">
        <Link href="/about" className={linkClass('/about')}>
          About
        </Link>
        <Link href="/portfolio" className={linkClass('/portfolio')}>
          Portfolio
        </Link>
        <Link href="/team" className={linkClass('/team')}>
          Team
        </Link>

        <SignedOut>
          <Link
            href="/sign-in"
            className={`px-4 py-2 rounded-full transition ${
              isHome
                ? 'border border-white hover:bg-white hover:text-black'
                : 'border border-slate-800 hover:bg-slate-800 hover:text-white'
            }`}
          >
            Login
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div
          className={`absolute top-full left-0 w-full flex flex-col items-center py-6 gap-4 text-lg md:hidden transition-all ${
            isHome
              ? 'bg-black/60 text-white'
              : 'bg-white text-slate-800 shadow-md'
          }`}
        >
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className={linkClass('/about')}
          >
            About
          </Link>
          <Link
            href="/portfolio"
            onClick={() => setMenuOpen(false)}
            className={linkClass('/portfolio')}
          >
            Portfolio
          </Link>
          <Link
            href="/team"
            onClick={() => setMenuOpen(false)}
            className={linkClass('/team')}
          >
            Team
          </Link>

          <SignedOut>
            <Link
              href="/sign-in"
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2 rounded-full transition ${
                isHome
                  ? 'border border-white hover:bg-white hover:text-black'
                  : 'border border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
            >
              Login
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      )}
    </nav>
  )
}
