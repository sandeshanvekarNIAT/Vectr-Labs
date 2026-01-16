"use client";

import { useEffect } from "react";
import { renderCanvas } from "@/components/ui/canvas";

export function BackgroundCanvas() {
    useEffect(() => {
        renderCanvas();
    }, []);

    return (
        <canvas
            className="bg-background pointer-events-none fixed inset-0 mx-auto opacity-40 -z-50"
            id="canvas"
        ></canvas>
    );
}
