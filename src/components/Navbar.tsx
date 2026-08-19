'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Logo from '@/components/Logo'
import { Menu, X, ChevronDown, ChevronRight, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ContentService } from '@/services/content-service'

// ==========================================
// 1. CENTRALIZED DATA ARCHITECTURE
// ==========================================
const navData = [
    {
        name: 'BUY NOW - PAY LATER',
        href: '/buy-now-pay-later',
        hasDropdown: true,
        dropdownData: {
            desktopLayout: 'buyers',
            sections: [
                {
                    heading: 'For Buyers',
                    items: [
                        { title: 'Purchaser Benefits', desc: '', href: '#' },
                        { title: 'Transportation with CarOnSale', desc: 'Safe and fast vehicle transport', href: '#' },
                        { title: 'Buy Now, Pay Later', desc: 'Flexible Payment Options for Your Car Purchase', href: '#' },
                    ]
                },
                {
                    heading: 'For Seller',
                    items: [
                        { title: 'Vehicle brands', desc: 'The CarOnSale used car guide', href: '#' },
                        { title: 'Trade-ins', desc: 'Everything about trade-ins for dealers', href: '#' },
                        { title: 'Buy leasing returns', desc: 'Everything about leasing returns for dealers', href: '#' },
                        { title: 'Accident cars', desc: 'Everything about accident vehicles for dealers', href: '#' },
                        { title: 'Glossary', desc: 'Everything about terms from the car trade', href: '#' },
                    ]
                }
            ]
        }
    },
    {
        name: 'OUR SERVICES',
        href: '/#services',
        hasDropdown: true,
        dropdownData: {
            desktopLayout: 'buyers',
            sections: [
                {
                    heading: 'For Buyers',
                    items: [
                        { title: 'Vehicle Brands', desc: '', href: '/services' },
                        { title: 'Purchaser Benefits', desc: '', href: '#' },
                        { title: 'Buy Now, Pay Later', desc: '', href: '#' },
                        { title: 'Rent', desc: '', href: '#' },
                    ]
                },
                {
                    heading: 'For Seller',
                    items: [
                        { title: 'Trade ins', desc: '', href: '/services' },
                        { title: 'Sell my car', desc: '', href: '#' },
                        { title: 'Glossary', desc: '', href: '#' },
                    ]
                }
            ]
        }
    },
    {
        name: 'ABOUT US',
        href: '/about-us',
        hasDropdown: true,
        dropdownData: {
            desktopLayout: 'about',
            sections: [
                {
                    heading: 'Overview',
                    items: [
                        { title: 'About us', desc: 'Find out more about CarOnSale!', href: '#' },
                        { title: 'Contact us', desc: 'Would you like to make a press inquiry?', href: '#' },
                        { title: 'Blog', desc: 'The CarOnSale Blog', href: '#' },
                        {
                            title: 'Career', desc: 'Become part of our team! (everything under the nav bar career should come inside career when you click on it.) ', href: '#' },
                    ]
                },
                {
                    heading: 'Career',
                    items: [
                        { title: 'Become part of our team!', desc: "(everything under the nav bar career should come inside career when you click on it.)", href: '#' },
                        // { title: 'Inside Sales Manager (m/f/d)', href: '#' },
                        // { title: 'Operations Manager (m/f/d)', href: '#' },
                        // { title: 'Account Manager (m/f/d)', href: '#' },
                    ],                    
                },
                {
                    heading: 'Press',
                    theme: 'gray', // Triggers gray backgrounds and lines instead of yellow
                    subtitle: 'The CarOnSale Newsroom',
                    type: 'cards',
                    items: [
                        {
                            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=300&auto=format&fit=crop",
                            title: "CarOnSale cooperates with Mercedes-Benz",
                            desc: "CarOnSale launches auction platform for lease...",
                            href: "#"
                        },
                        {
                            image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=300&auto=format&fit=crop",
                            title: "CarOnSale takes over Alpha Online",
                            desc: "From vehicle collection to B2B marketing - everything...",
                            href: "#"
                        }
                    ]
                }
            ]
        }
    },
    {
        name: 'OUR FLEET',
        href: '/cars',
        hasDropdown: false
    },
]


// ==========================================
// 2. REUSABLE UI COMPONENTS
// ==========================================
const MegaMenuHeader = ({ title, theme = 'yellow' }: { title: string, theme?: string }) => (
    <h3 className={`font-bold text-black text-[15px] mb-4 pb-2 border-b-[2px] ${theme === 'gray' ? 'border-gray-300' : 'border-[#FFCC00]'}`}>
        {title}
    </h3>
)

const MegaMenuItem = ({ title, desc, href }: { title: string, desc?: string, href: string }) => (
    <Link href={href} className="block group mb-5">
        <h4 className="font-bold text-black text-[13px] group-hover:text-emerald-600 transition-colors">
            {title}
        </h4>
        {desc && (
            <p className="text-[13px] text-gray-500 mt-0.5 group-hover:text-gray-700 transition-colors">
                {desc}
            </p>
        )}
    </Link>
)

const NewsCard = ({ image, title, desc, href }: { image: string, title: string, desc: string, href: string }) => (
    <div className="flex gap-4 mb-6 group cursor-pointer">
        <div className="w-[120px] h-[80px] shrink-0 overflow-hidden bg-gray-200">
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="flex flex-col justify-center">
            <h4 className="font-bold text-black text-[13px] leading-tight mb-1 group-hover:text-emerald-600 transition-colors">
                {title}
            </h4>
            <p className="text-[12px] text-gray-500 leading-tight mb-1 line-clamp-2">
                {desc}
            </p>
            <Link href={href} className="text-[12px] text-black font-medium hover:underline">
                Read more
            </Link>
        </div>
    </div>
)


// ==========================================
// 3. MAIN NAVBAR COMPONENT
// ==========================================
export default function Navbar() {
    const pathname = usePathname()
    const isHomePage = pathname === '/'
    const [ isVisible, setIsVisible ] = useState(!isHomePage)
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)
    const [ hoveredNav, setHoveredNav ] = useState<string | null>(null)
    const [ openMobileNav, setOpenMobileNav ] = useState<string | null>(null)
    const [ whatsappLink, setWhatsappLink ] = useState('#')

    const languages = [ 'EN', 'DE', 'FR' ]
    const [ lang, setLang ] = useState('EN')
    const [ isLangOpen, setIsLangOpen ] = useState(false)

    useEffect(() => {
        const fetchSocial = async () => {
            const links = await ContentService.getSocialLinks()
            const wa = links.find(l => l.name === 'whatsapp')?.href || '#'
            setWhatsappLink(wa)
        }
        fetchSocial()
    }, [])

    useEffect(() => {
        if (isHomePage) {
            const handleVideoReady = () => setIsVisible(true)
            window.addEventListener('app-video-ready', handleVideoReady)
            return () => window.removeEventListener('app-video-ready', handleVideoReady)
        } else {
            setIsVisible(true)
        }
    }, [ isHomePage ])

    useEffect(() => {
        setIsMenuOpen(false)
        setHoveredNav(null)
        setOpenMobileNav(null)
        setIsLangOpen(false)
    }, [ pathname ])

    useEffect(() => {
        if (isMenuOpen) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'unset'
    }, [ isMenuOpen ])

    const activeNav = navData.find(n => n.name === hoveredNav)

    return (
        <nav
            className={`fixed w-full z-50 bg-black border-b border-white/10 text-white transition-opacity duration-1000 ease-out font-[family-name:var(--font-redhat)] ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            onMouseLeave={() => setHoveredNav(null)}
        >
            {/* Constrained Container */}
            <div className="container mx-auto px-6 h-20 md:h-24 flex items-center justify-between relative z-50">

                <div className="shrink-0 flex items-center">
                    <Logo />
                </div>

                {/* --- DESKTOP MENU LINKS --- */}
                <div className="hidden lg:flex items-center gap-8 h-full">
                    {navData.map((link) => (
                        <div
                            key={link.name}
                            className="relative h-full flex items-center"
                            onMouseEnter={() => setHoveredNav(link.name)}
                        >
                            <Link
                                href={link.href}
                                className={`flex items-center gap-1.5 text-[14px] font-bold tracking-wide transition-colors ${pathname === link.href || hoveredNav === link.name ? 'text-gray-300' : 'text-white'
                                    }`}
                            >
                                {link.name}
                                {link.hasDropdown && (
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${hoveredNav === link.name ? 'rotate-180' : ''}`} />
                                )}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* --- RIGHT ACTIONS --- */}
                <div className="flex items-center gap-4 lg:gap-6">
                    <div
                        className="hidden md:flex relative items-center justify-center cursor-pointer group"
                        onMouseEnter={() => setIsLangOpen(true)}
                        onMouseLeave={() => setIsLangOpen(false)}
                    >
                        <div className="flex items-center gap-2 border border-gray-600 rounded px-3 py-1.5 hover:border-gray-400 transition-colors">
                            <Globe className="w-4 h-4 text-white opacity-80" />
                            <span className="text-[13px] font-bold text-white">{lang}</span>
                            <ChevronDown className="w-4 h-4 text-white opacity-80" />
                        </div>

                        <AnimatePresence>
                            {isLangOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded shadow-xl overflow-hidden py-1 min-w-[80px]"
                                >
                                    {languages.map(l => (
                                        <div
                                            key={l}
                                            onClick={() => { setLang(l); setIsLangOpen(false); }}
                                            className={`px-4 py-2 text-sm font-bold cursor-pointer hover:bg-gray-100 transition-colors text-center ${lang === l ? 'text-black' : 'text-gray-500'}`}
                                        >
                                            {l}
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-emerald-500 text-black w-full px-5 py-2.5  rounded font-bold text-center hover:bg-emerald-600 transition-colors"
                    >
                        <span>WHATSAPP US</span>
                    </Link>

                    <button
                        className="lg:hidden text-white p-2 hover:bg-white/10 rounded transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>

                {/* --- DESKTOP MEGA MENU DROPDOWNS --- */}
                {/* Wrapped perfectly inside the container to constrain its width exactly to the nav boundaries */}
                <AnimatePresence>
                    {activeNav?.hasDropdown && activeNav.dropdownData && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 w-full top-full bg-white shadow-2xl border-t border-gray-200 z-40 hidden lg:block rounded-b-lg overflow-hidden"
                        >

                            {/* Layout Template: BUYERS */}
                            {activeNav.dropdownData.desktopLayout === 'buyers' && (
                                <div className="p-10 grid grid-cols-12 gap-8">
                                    <div className="col-span-4">
                                        <MegaMenuHeader title={activeNav.dropdownData.sections[ 0 ].heading} />
                                        {activeNav.dropdownData.sections[ 0 ].items.map((item) => (
                                            <MegaMenuItem key={item.title} {...item} />
                                        ))}
                                    </div>
                                    <div className="col-span-8">
                                        <MegaMenuHeader title={activeNav.dropdownData.sections[ 1 ].heading} />
                                        <div className="grid grid-cols-2 gap-x-8">
                                            <div>
                                                {activeNav.dropdownData.sections[ 1 ].items.slice(0, 3).map((item) => (
                                                    <MegaMenuItem key={item.title} {...item} />
                                                ))}
                                            </div>
                                            <div>
                                                {activeNav.dropdownData.sections[ 1 ].items.slice(3).map((item) => (
                                                    <MegaMenuItem key={item.title} {...item} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Layout Template: ABOUT */}
                            {activeNav.dropdownData.desktopLayout === 'about' && (
                                <div className="grid grid-cols-12">
                                    <div className="col-span-4 py-10 pl-10 pr-6">
                                        <MegaMenuHeader title={activeNav.dropdownData.sections[ 0 ].heading} />
                                        
                                        {activeNav.dropdownData.sections[ 0 ].items.map((item) => (
                                            <MegaMenuItem key={item.title} {...item} />
                                        ))}
                                    </div>
                                    <div className="col-span-4 py-10 px-6">
                                        <MegaMenuHeader title={activeNav.dropdownData.sections[ 1 ].heading} />
                                        <div className="space-y-4 mb-8">
                                            {activeNav.dropdownData.sections[ 1 ].items.map((item) => (
                                                <Link key={item.title} href={item.href} className="block text-[14px] font-bold text-black hover:text-emerald-600">
                                                    {item.title}
                                                </Link>
                                            ))}
                                        </div>
                                        {/* {activeNav.dropdownData.sections[ 1 ].action && (
                                            <Link href={activeNav.dropdownData.sections[ 1 ].action.href} className="text-[14px] font-bold text-black hover:underline flex items-center gap-1">
                                                {activeNav.dropdownData.sections[ 1 ].action.title} <ChevronRight className="w-4 h-4" />
                                            </Link>
                                        )} */}
                                    </div>
                                    <div className="col-span-4 bg-[#F8F9FA] py-10 px-8 border-l border-gray-200">
                                        <MegaMenuHeader title={activeNav.dropdownData.sections[ 2 ].heading} theme={activeNav.dropdownData.sections[ 2 ].theme} />
                                        <h4 className="font-bold text-black text-[14px] mb-6">{activeNav.dropdownData.sections[ 2 ].subtitle}</h4>
                                        {activeNav.dropdownData.sections[ 2 ].items.map((item) => (
                                            <NewsCard key={item.title} {...item as any} />
                                        ))}
                                    </div>
                                </div>
                            )}

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* ========================================== */}
            {/* 4. DATA-DRIVEN MOBILE MENU                 */}
            {/* ========================================== */}
            <div
                className={`fixed inset-0 top-20 md:top-24 bg-black z-40 lg:hidden overflow-y-auto transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'
                    }`}
            >
                <div className="flex flex-col min-h-full p-6 pb-24">
                    <div className="flex flex-col gap-2 mt-4">

                        {/* Iterate Top Level Links */}
                        {navData.map((link) => (
                            <div key={link.name} className="border-b border-white/10 pb-2">
                                {link.hasDropdown && link.dropdownData ? (
                                    <div>
                                        <button
                                            onClick={() => setOpenMobileNav(openMobileNav === link.name ? null : link.name)}
                                            className="flex items-center justify-between w-full py-4 text-lg font-bold tracking-tight text-white hover:text-[#FFCC00] transition-colors"
                                        >
                                            {link.name}
                                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openMobileNav === link.name ? 'rotate-180 text-[#FFCC00]' : 'text-gray-400'}`} />
                                        </button>

                                        <AnimatePresence>
                                            {openMobileNav === link.name && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    {/* White Sub-Menu Container Matching Screenshot */}
                                                    <div className="bg-white rounded-lg p-5 mt-2 mb-4 flex flex-col gap-8 shadow-inner">

                                                        {/* Iterate Nested Sections Driven By Data */}
                                                        {link.dropdownData.sections.map((section, idx) => (
                                                            <div key={idx} className="flex flex-col">

                                                                {/* Dynamic Header & Divider */}
                                                                <h3 className="font-bold text-black text-[15px] mb-2">{section.heading}</h3>
                                                                <div className={`h-[1px] w-full mb-5 ${section.theme === 'gray' ? 'bg-gray-300' : 'bg-[#FFCC00]'}`} />

                                                                {section.subtitle && (
                                                                    <h4 className="font-bold text-black text-[14px] mb-4">{section.subtitle}</h4>
                                                                )}

                                                                {/* Render Items depending on section type */}
                                                                {section.type === 'cards' ? (
                                                                    <div className="flex flex-col gap-4">
                                                                        {section.items.map((item, i) => (
                                                                            <div key={i} className="flex gap-4 group cursor-pointer">
                                                                                <div className="w-[100px] h-[70px] shrink-0 bg-gray-200 rounded overflow-hidden">
                                                                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                                                                </div>
                                                                                <div className="flex flex-col justify-center">
                                                                                    <h4 className="font-bold text-black text-[13px] leading-tight mb-1">{item.title}</h4>
                                                                                    <p className="text-[12px] text-gray-500 leading-tight line-clamp-2">{item.desc}</p>
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                ) : (
                                                                    <div className="flex flex-col gap-5">
                                                                        {section.items.map((item, i) => (
                                                                            <Link key={i} href={item.href} className="block group">
                                                                                <h4 className="font-bold text-black text-[14px] leading-tight mb-1 group-hover:text-emerald-600 transition-colors">
                                                                                    {item.title}
                                                                                </h4>
                                                                                {item.desc && (
                                                                                    <p className="text-[13px] text-gray-600 leading-tight">
                                                                                        {item.desc}
                                                                                    </p>
                                                                                )}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                )}

                                                                {/* Section Specific Action (e.g., "To all vacancies") */}
                                                                {/* {section.action && (
                                                                    <Link href={section.action.href} className="mt-6 text-[14px] font-bold text-black hover:underline flex items-center gap-1">
                                                                        {section.action.title} <ChevronRight className="w-4 h-4" />
                                                                    </Link>
                                                                )} */}

                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={`block py-4 text-lg font-bold tracking-tight hover:text-[#FFCC00] transition-colors ${pathname === link.href ? 'text-[#FFCC00]' : 'text-white'}`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Bottom Actions */}
                    <div className="mt-auto pt-12 flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 border border-white/20 rounded px-4">
                                <Globe className="w-4 h-4 text-white" />
                                <span className="text-[13px] font-bold text-white">{lang}</span>
                            </div>
                        </div>
                        <Link
                            href={whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-emerald-500 text-black w-full py-4 rounded font-bold text-center text-lg hover:bg-emerald-600 transition-colors"
                        >
                            <span>WHATSAPP US</span>
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    )
}