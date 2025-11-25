'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Features', href: '#features' },
    { name: 'Process', href: '#process' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Institutions', href: '#institutions' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'FAQ', href: '#faq' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header className="bg-[#0F2344] relative overflow-hidden">
            {/* Grid Lines Pattern for Header - Same as Hero */}
            <div 
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 120px)'
                }}
            />
            <nav
                data-state={menuState && 'active'}
                className="sticky top-0 z-20 w-full relative">
                <div className={cn('mx-auto max-w-6xl px-6 py-4 transition-all duration-300 lg:px-12 relative z-10', isScrolled && 'bg-[#0F2344]/95 max-w-4xl rounded-2xl border border-white/10 backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-3">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo className="[&_span]:!text-white [&_span]:!bg-none" />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 text-white lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            onClick={(e) => {
                                                e.preventDefault()
                                                const element = document.querySelector(item.href)
                                                if (element) {
                                                    const headerOffset = 100
                                                    const elementPosition = element.getBoundingClientRect().top
                                                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                                                    window.scrollTo({
                                                        top: offsetPosition,
                                                        behavior: 'smooth'
                                                    })
                                                }
                                            }}
                                            className="text-white/80 hover:text-white block duration-150 cursor-pointer">
                                            <span>{item.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-[#0F2344] border-white/20 in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-black/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    setMenuState(false)
                                                    const element = document.querySelector(item.href)
                                                    if (element) {
                                                        const headerOffset = 100
                                                        const elementPosition = element.getBoundingClientRect().top
                                                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                                                        window.scrollTo({
                                                            top: offsetPosition,
                                                            behavior: 'smooth'
                                                        })
                                                    }
                                                }}
                                                className="text-white/80 hover:text-white block duration-150 cursor-pointer">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    size="sm">
                                    <a
                                        href="#contact"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setMenuState(false)
                                            const element = document.querySelector('#contact')
                                            if (element) {
                                                const headerOffset = 100
                                                const elementPosition = element.getBoundingClientRect().top
                                                const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                                                window.scrollTo({
                                                    top: offsetPosition,
                                                    behavior: 'smooth'
                                                })
                                            }
                                        }}>
                                        <span>Contact Us</span>
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
