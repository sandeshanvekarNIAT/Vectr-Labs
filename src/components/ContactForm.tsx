"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    brand: z.string().min(2, "Brand/Business name is required"),
    service: z.string().min(1, "Please select a service"),
    website: z.string().optional(),
    budget: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            brand: "",
            service: "",
            website: "",
            budget: "",
            message: "",
        },
    });

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || errorData.error || 'Failed to send message');
            }

            console.log("Form submitted successfully");
            setIsSuccess(true);
        } catch (error: any) {
            console.error("Submission Error:", error);
            alert(`Error: ${error.message || "Something went wrong"}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center p-8 text-center space-y-4"
            >
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-syne">Message Sent!</h3>
                <p className="text-muted-foreground font-lexend max-w-xs">
                    Thanks for reaching out! We'll analyze your request and get back to you within 24 hours.
                </p>
                <Button
                    variant="outline"
                    className="mt-6 font-syne"
                    onClick={() => {
                        setIsSuccess(false);
                        form.reset();
                    }}
                >
                    Send Another
                </Button>
            </motion.div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="space-y-2 text-center sm:text-left">
                <h2 className="text-2xl font-bold font-syne">Let's Build Something Great</h2>
                <p className="text-muted-foreground font-lexend text-sm">
                    Tell us about your project and we'll help you build momentum.
                </p>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="font-lexend">Name</Label>
                        <Input
                            id="name"
                            placeholder="John Doe"
                            className="bg-white/5 border-white/10 rounded-xl focus:bg-white/10 transition-colors font-lexend placeholder:font-lexend"
                            {...form.register("name")}
                        />
                        {form.formState.errors.name && (
                            <p className="text-xs text-red-500 font-lexend">{form.formState.errors.name.message}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email" className="font-lexend">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            className="bg-white/5 border-white/10 rounded-xl focus:bg-white/10 transition-colors font-lexend placeholder:font-lexend"
                            {...form.register("email")}
                        />
                        {form.formState.errors.email && (
                            <p className="text-xs text-red-500 font-lexend">{form.formState.errors.email.message}</p>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="brand" className="font-lexend">Business / Brand Name</Label>
                    <Input
                        id="brand"
                        placeholder="Acme Corp"
                        className="bg-white/5 border-white/10 rounded-xl focus:bg-white/10 transition-colors font-lexend placeholder:font-lexend"
                        {...form.register("brand")}
                    />
                    {form.formState.errors.brand && (
                        <p className="text-xs text-red-500 font-lexend">{form.formState.errors.brand.message}</p>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label className="font-lexend">What do you need?</Label>
                        <Select
                            onValueChange={(value) => form.setValue("service", value)}
                            defaultValue={form.getValues("service")}
                        >
                            <SelectTrigger className="bg-white/5 border-white/10 rounded-xl font-lexend">
                                <SelectValue placeholder="Select service" className="placeholder:font-lexend" />
                            </SelectTrigger>
                            <SelectContent className="font-lexend">
                                <SelectItem value="landing_page">Landing Page</SelectItem>
                                <SelectItem value="full_website">Full Website</SelectItem>
                                <SelectItem value="redesign">Website Redesign</SelectItem>
                                <SelectItem value="web_app">Web Application</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                        {form.formState.errors.service && (
                            <p className="text-xs text-red-500 font-lexend">{form.formState.errors.service.message}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label className="font-lexend">Budget Range (Optional)</Label>
                        <Select
                            onValueChange={(value) => form.setValue("budget", value)}
                            defaultValue={form.getValues("budget")}
                        >
                            <SelectTrigger className="bg-white/5 border-white/10 rounded-xl font-lexend">
                                <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent className="font-lexend">
                                <SelectItem value="<1k">Less than $1k</SelectItem>
                                <SelectItem value="1k-5k">$1k - $5k</SelectItem>
                                <SelectItem value="5k-10k">$5k - $10k</SelectItem>
                                <SelectItem value="10k+">$10k+</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="website" className="font-lexend">Current Website (Optional)</Label>
                    <Input
                        id="website"
                        placeholder="https://example.com"
                        className="bg-white/5 border-white/10 rounded-xl focus:bg-white/10 transition-colors font-lexend placeholder:font-lexend"
                        {...form.register("website")}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message" className="font-lexend">Message</Label>
                    <Textarea
                        id="message"
                        placeholder="Tell us about your goals, timeline, and any specific requirements..."
                        className="bg-white/5 border-white/10 rounded-xl focus:bg-white/10 transition-colors min-h-[120px] resize-none font-lexend placeholder:font-lexend"
                        {...form.register("message")}
                    />
                    {form.formState.errors.message && (
                        <p className="text-xs text-red-500 font-lexend">{form.formState.errors.message.message}</p>
                    )}
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-xl font-syne font-bold text-base mt-2"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        "Send Request"
                    )}
                </Button>
            </form>
        </div>
    );
}
