"use client";

import { Search, Map, PenTool, CheckCircle2, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    {
        id: 1,
        title: "Discovery",
        description: "We dive deep to understand your business, goals, and target audience. Defining what success looks like for you.",
        icon: Search,
    },
    {
        id: 2,
        title: "Planning & Structure",
        description: "We map out the website structure, page flow, and content hierarchy to ensure a logical user journey.",
        icon: Map,
    },
    {
        id: 3,
        title: "Design & Development",
        description: "Creating clean layouts and developing with best practices. Ensuring mobile responsiveness and performance.",
        icon: PenTool,
    },
    {
        id: 4,
        title: "Review & Revisions",
        description: "Transparent communication with clear previews. We refine the details through structured revision rounds.",
        icon: CheckCircle2,
    },
    {
        id: 5,
        title: "Launch & Delivery",
        description: "Deploying the site, testing across devices, and creating a smooth handover with necessary guidance.",
        icon: Rocket,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

export function Process() {
    return (
        <section id="process" className="py-24 bg-background/20 backdrop-blur-md backdrop-saturate-150 border-y border-white/10 shadow-sm relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-2xl text-center mb-16"
                >
                    <h2 className="text-base font-semibold font-lexend leading-7 text-primary">Our Process</h2>
                    <p className="mt-2 text-3xl font-bold font-syne tracking-tight text-foreground sm:text-4xl">
                        Simple, Transparent Workflow
                    </p>
                </motion.div>
                <div className="relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-border -z-10" />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 lg:grid-cols-5 gap-8"
                    >
                        {steps.map((step) => (
                            <motion.div
                                variants={itemVariants}
                                key={step.id}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <div className="mb-4 relative">
                                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-white/60 hover:scale-110 transition-transform duration-300">
                                        <step.icon className="h-8 w-8 text-primary group-hover:text-primary/80 transition-colors" />
                                    </div>
                                </div>
                                <h3 className="mt-2 text-lg font-questrial text-foreground">{step.title}</h3>
                                <p className="mt-2 text-sm font-lexend text-muted-foreground">{step.description}</p>
                                <span className="hidden lg:block absolute top-[-2rem] text-xs font-mono text-muted-foreground/50">0{step.id}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
