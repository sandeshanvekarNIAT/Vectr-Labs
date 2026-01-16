"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Modal } from "@/components/ui/modal";
import { ContactForm } from "@/components/ContactForm";

export function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section id="contact" className="py-24 bg-background/20 backdrop-blur-md backdrop-saturate-150 border-y border-white/10 shadow-sm relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mx-auto max-w-7xl px-6 lg:px-8 text-center"
                >
                    <h2 className="text-3xl font-bold font-syne tracking-tight text-foreground sm:text-4xl">
                        Ready to start your project?
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg font-lexend leading-8 text-muted-foreground">
                        Let's build a website that looks good and serves a real purpose for your business.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button
                            size="lg"
                            className="rounded-full px-8 font-syne font-bold"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Get in Touch
                        </Button>
                        <Link href="/#process">
                            <Button variant="outline" size="lg" className="rounded-full px-8 font-syne font-bold">
                                How We Work
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </section>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ContactForm />
            </Modal>
        </>
    );
}
