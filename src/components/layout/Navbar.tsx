"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";



import { motion, AnimatePresence } from "framer-motion";

import { createPortal } from "react-dom";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { name: "Services", href: "/#services" },
        { name: "Process", href: "/#process" },
        { name: "About", href: "/#about" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${scrolled
                    ? "bg-background/40 backdrop-blur-3xl backdrop-saturate-150 border-b border-primary/5 shadow-sm"
                    : "bg-transparent border-b border-transparent"
                    }`}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-shrink-0 z-50">
                            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                                <Image
                                    src="/logo.png"
                                    alt="Vectr Labs"
                                    width={40}
                                    height={40}
                                    className="h-10 w-auto"
                                    priority
                                />
                                <span className="font-bold text-xl tracking-tight font-syne">Vectr Labs</span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-1 font-syne">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                                        onMouseEnter={() => setHoveredPath(link.href)}
                                        onMouseLeave={() => setHoveredPath(null)}
                                    >
                                        {hoveredPath === link.href && (
                                            <motion.span
                                                layoutId="nav-hover"
                                                className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <span className="relative z-10">{link.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <Link href="/#contact">
                                <Button size="sm" className="rounded-full font-syne font-bold">Get Started</Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="md:hidden z-[100] relative">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 focus:outline-none text-foreground"
                                aria-label="Toggle menu"
                            >
                                <motion.span
                                    animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                    className="h-0.5 w-6 bg-current rounded-full"
                                />
                                <motion.span
                                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                    className="h-0.5 w-6 bg-current rounded-full"
                                />
                                <motion.span
                                    animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                    className="h-0.5 w-6 bg-current rounded-full"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && mounted && createPortal(
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[99999] bg-background text-foreground md:hidden flex flex-col"
                    >
                        {/* Mobile Header Inside Portal */}
                        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 items-center justify-between">
                                <div className="flex-shrink-0">
                                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                                        <Image
                                            src="/logo.png"
                                            alt="Vectr Labs"
                                            width={40}
                                            height={40}
                                            className="h-10 w-auto"
                                            priority
                                        />
                                        <span className="font-bold text-xl tracking-tight font-syne">Vectr Labs</span>
                                    </Link>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 focus:outline-none text-foreground"
                                    aria-label="Close menu"
                                >
                                    <motion.span
                                        initial={{ rotate: 0, y: 0 }}
                                        animate={{ rotate: 45, y: 6 }}
                                        className="h-0.5 w-6 bg-current rounded-full absolute"
                                    />
                                    <motion.span
                                        initial={{ opacity: 1 }}
                                        animate={{ opacity: 0 }}
                                        className="h-0.5 w-6 bg-current rounded-full"
                                    />
                                    <motion.span
                                        initial={{ rotate: 0, y: 0 }}
                                        animate={{ rotate: -45, y: -6 }} // Fixed offset for center alignment
                                        className="h-0.5 w-6 bg-current rounded-full absolute"
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Menu Items */}
                        <div className="flex flex-1 flex-col items-center justify-center gap-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: 0.1 + index * 0.1, duration: 0.4, ease: "easeOut" }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl font-bold font-syne text-foreground hover:text-primary transition-colors tracking-tight"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                                className="mt-8"
                            >
                                <Link href="/#contact" onClick={() => setIsOpen(false)}>
                                    <Button size="lg" className="rounded-full font-syne font-bold text-lg px-8 py-6 h-auto">Get Started</Button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>,
                    document.body
                )}
            </AnimatePresence>
        </>
    );
}
