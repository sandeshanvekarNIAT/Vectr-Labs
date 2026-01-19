"use client";

import { Monitor, Layout, Briefcase, RefreshCw, PenTool } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Website Design & Development",
        description: "Modern, responsive websites that work seamlessly across all devices. Custom layout & UI design with performance-optimized structure.",
        icon: Monitor,
    },
    {
        title: "Landing Pages",
        description: "High-conversion pages designed to turn visitors into leads. Focused messaging and strong CTAs for product launches and campaigns.",
        icon: Layout,
    },
    {
        title: "Business & Corporate Websites",
        description: "Professional websites that build trust and credibility. Communicating authority and reliability for your brand.",
        icon: Briefcase,
    },
    {
        title: "Website Redesign",
        description: "Upgrade outdated websites into modern experiences. Improving visual design, performance, and user experience.",
        icon: RefreshCw,
    },
    {
        title: "Ongoing Support",
        description: "Peace of mind with minor updates, bug fixes, and performance checks to keep your site running smoothly.",
        icon: PenTool,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export function Services() {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
            {/* Background Gradient Mesh - transparent to show canvas */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-muted/20 -z-10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-primary/5 blur-3xl rounded-full -z-10" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <h2 className="text-base font-semibold font-lexend leading-7 text-primary">What We Do</h2>
                    <p className="mt-2 text-3xl font-bold font-syne tracking-tight sm:text-4xl text-foreground">
                        Services designed for growth
                    </p>
                    <p className="mt-6 text-lg font-lexend leading-8 text-muted-foreground">
                        We avoid over-designing. Every service is tied to usability, clarity, and results.
                    </p>
                </motion.div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <motion.dl
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-wrap justify-center gap-8"
                    >
                        {services.map((service) => (
                            <motion.div
                                variants={itemVariants}
                                key={service.title}
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
                                    borderColor: "rgba(var(--primary), 0.4)"
                                }}
                                transition={{ duration: 0.2 }}
                                className="flex flex-col bg-background p-8 rounded-2xl shadow-sm border border-border/50 transition-colors w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] cursor-pointer group"
                            >
                                <dt className="flex items-center gap-x-3 text-base font-bold font-syne leading-7 text-foreground group-hover:text-primary transition-colors">
                                    <service.icon className="h-6 w-6 flex-none text-primary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                                    {service.title}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                                    <p className="flex-auto font-lexend">{service.description}</p>
                                </dd>
                            </motion.div>
                        ))}
                    </motion.dl>
                </div>
            </div>
        </section>
    );
}
