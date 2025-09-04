'use client'

import Link from 'next/link'
import { PanelBottomClose, PanelTopClose } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DarkModeToggle from './DarkModeToggle'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="w-9 h-9 rounded-full bg-blue-600 dark:bg-blue-500" />
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        AI Tour 🌴📸
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8 text-lg font-medium">
                    {['Features', 'Pricing', 'About', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Right side (Dark + Auth) */}
                <div className="hidden md:flex items-center space-x-6">
                    <DarkModeToggle />
                    <Link
                        href="/login"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                        Login
                    </Link>
                    <Link
                        href="/dashboard"
                        className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
                    >
                        Dashboard
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center">
                    <DarkModeToggle />

                    <button
                        onClick={() => setOpen((p) => !p)}
                        className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                        {open ? <PanelTopClose className="w-7 h-7 text-blue-500" /> : <PanelBottomClose className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)', opacity: 0 }}
                        animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1 }}
                        exit={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)', opacity: 0 }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}
                        className="
              absolute top-full left-0 right-0
              flex flex-col items-center space-y-6 py-8
              text-xl font-semibold
              border-t border-gray-200 dark:border-gray-700
              backdrop-blur-md bg-white/60 dark:bg-blue-950/90 h-[60vh]
              z-50
            "
                    >
                        {['Features', 'Pricing', 'About', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
                                onClick={() => setOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}

                        {/* Dark toggle + Auth in mobile */}
                        <div className="flex flex-col items-center space-y-4 pt-4">

                            <Link
                                href="/login"
                                className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                onClick={() => setOpen(false)}
                            >
                                Login
                            </Link>
                            <Link
                                href="/dashboard"
                                className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
                                onClick={() => setOpen(false)}
                            >
                                Dashboard
                            </Link>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    )
}
