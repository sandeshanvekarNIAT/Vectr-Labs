"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
    "Strong First Impression",
    "Better User Experience",
    "Higher Conversion Potential",
    "Mobile-Ready Presence",
    "Faster Load Times",
    "Scalable Foundation",
];

export function About() {
    return (
        <section id="about" className="py-24 bg-muted/30">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-base font-semibold font-lexend leading-7 text-primary">About Us</h2>
                        <p className="mt-2 text-3xl font-bold font-syne tracking-tight text-foreground sm:text-4xl">
                            Philosophy & Vision
                        </p>
                        <p className="mt-6 text-lg font-lexend leading-8 text-muted-foreground">
                            We believe a website should not just “exist” — it should work. That means clear messaging,
                            simple navigation, fast performance, and a strong visual hierarchy.
                        </p>
                        <p className="mt-4 text-lg font-lexend leading-8 text-muted-foreground">
                            We avoid over-designing or adding features that don’t serve the business goal.
                            Every decision we make is tied to usability, clarity, and results.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="mt-16 lg:mt-0 bg-background rounded-2xl p-8 border shadow-sm"
                    >
                        <h3 className="text-xl font-bold font-syne text-foreground mb-6">Why Clients Choose Us</h3>
                        <ul className="space-y-4">
                            {benefits.map((benefit) => (
                                <li key={benefit} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                    <span className="text-muted-foreground font-lexend font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 pt-8 border-t">
                            <p className="text-sm font-medium font-lexend text-primary">
                                "We design and build modern, high-performing websites that help businesses grow online."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
