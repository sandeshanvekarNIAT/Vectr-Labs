import Link from "next/link";
import { Shapes, ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MainHero() {
    return (
        <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
            <div className="mt-20 flex flex-col items-center justify-center px-4 text-center md:mt-0">
                <div className="md:mt-6 z-10 w-full max-w-5xl">
                    <div className="px-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-forwards">
                        <div className="relative mx-auto h-full max-w-7xl border p-6 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)] md:px-12 md:py-20 border-primary/10 bg-background/50 backdrop-blur-sm rounded-3xl">
                            <div className="flex justify-center flex-col items-center">
                                <h1 className="relative inline-block z-20 select-none px-3 py-2 text-center text-5xl font-bold font-syne leading-none tracking-tight md:text-8xl">
                                    Building Digital
                                    <br className="hidden md:block" /> Excellence.
                                </h1>
                                <div className="flex items-center justify-center gap-2 mt-8">
                                    <span className="relative flex h-3 w-3 items-center justify-center">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                                    </span>
                                    <p className="text-sm font-medium font-lexend text-green-500">Accepting New Projects</p>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-center">
                                <div className="relative flex items-center whitespace-nowrap rounded-full border bg-popover px-3 py-1 text-xs leading-6 text-primary/60 hover:bg-muted transition-colors font-lexend">
                                    <Shapes className="h-5 p-1" /> Introducing Vectr Labs.
                                    <Link
                                        href="/#services"
                                        className="ml-1 flex items-center font-semibold hover:text-primary"
                                    >
                                        Explore{" "}
                                        <ArrowRight className="h-4 w-4 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 className="mt-12 text-2xl md:text-3xl font-bold font-syne tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 ease-out fill-mode-forwards">
                        Modern web development studio
                    </h1>

                    <p className="mx-auto mb-16 mt-6 max-w-2xl px-6 text-base font-lexend text-muted-foreground sm:px-6 md:max-w-4xl md:px-20 lg:text-lg animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 ease-out fill-mode-forwards">
                        We build clean, high-performing, and conversion-driven websites for businesses worldwide.
                        No unnecessary complexity—just results.
                    </p>
                    <div className="flex justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 ease-out fill-mode-forwards">
                        <Link href={"/#contact"}>
                            <Button size="lg" className="rounded-full px-8 font-syne font-bold">
                                Start Project
                            </Button>
                        </Link>
                        <Link href={"/#services"}>
                            <Button variant="outline" size="lg" className="rounded-full px-8 font-syne font-bold">
                                Our Services
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
}
