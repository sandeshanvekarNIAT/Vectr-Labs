"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Handle anchor links
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest("a");

            if (anchor) {
                const href = anchor.getAttribute("href");
                if (href?.startsWith("/#") || href?.startsWith("#")) {
                    e.preventDefault();
                    const targetId = href.replace(/^\//, ""); // Remove leading slash if present

                    if (targetId === "#") {
                        lenis.scrollTo(0);
                    } else {
                        const targetElement = document.querySelector(targetId) as HTMLElement;
                        if (targetElement) {
                            lenis.scrollTo(targetElement, {
                                offset: 0,
                                duration: 1.5,
                                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                            });
                        }
                    }
                }
            }
        };

        document.addEventListener("click", handleAnchorClick);

        return () => {
            lenis.destroy();
            document.removeEventListener("click", handleAnchorClick);
        };
    }, []);

    return null;
}
