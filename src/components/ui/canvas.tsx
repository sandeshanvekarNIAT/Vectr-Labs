"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck

export interface CanvasOptions {
    phase?: number;
    offset?: number;
    frequency?: number;
    amplitude?: number;
}

function N(this: any, e: CanvasOptions) {
    this.init(e || {});
}

N.prototype = {
    init: function (e: CanvasOptions) {
        this.phase = e.phase || 0;
        this.offset = e.offset || 0;
        this.frequency = e.frequency || 0.001;
        this.amplitude = e.amplitude || 1;
    },
    update: function () {
        this.phase += this.frequency;
        return this.offset + Math.sin(this.phase) * this.amplitude;
    },
    value: function () {
        return this.offset + Math.sin(this.phase) * this.amplitude;
    },
};

interface LineOptions {
    spring: number;
}

function Line(this: any, e: LineOptions) {
    this.init(e || {});
}

Line.prototype = {
    init: function (e: any) {
        this.spring = e.spring + 0.1 * Math.random() - 0.05;
        this.friction = E.friction + 0.01 * Math.random() - 0.005;
        this.nodes = [];
        for (let t, n = 0; n < E.size; n++) {
            t = new (Node as any)();
            t.x = pos.x;
            t.y = pos.y;
            this.nodes.push(t);
        }
    },
    update: function () {
        let e = this.spring,
            t = this.nodes[0];
        t.vx += (pos.x - t.x) * e;
        t.vy += (pos.y - t.y) * e;
        for (let n, i = 0, a = this.nodes.length; i < a; i++) {
            t = this.nodes[i];
            if (i > 0) {
                n = this.nodes[i - 1];
                t.vx += (n.x - t.x) * e;
                t.vy += (n.y - t.y) * e;
                t.vx += n.vx * E.dampening;
                t.vy += n.vy * E.dampening;
            }
            t.vx *= this.friction;
            t.vy *= this.friction;
            t.x += t.vx;
            t.y += t.vy;
            e *= E.tension;
        }
    },
    draw: function () {
        let e,
            t,
            n = this.nodes[0].x,
            i = this.nodes[0].y;
        ctx.beginPath();
        ctx.moveTo(n, i);
        let a, o;
        for (a = 1, o = this.nodes.length - 2; a < o; a++) {
            e = this.nodes[a];
            t = this.nodes[a + 1];
            n = 0.5 * (e.x + t.x);
            i = 0.5 * (e.y + t.y);
            ctx.quadraticCurveTo(e.x, e.y, n, i);
        }
        e = this.nodes[a];
        t = this.nodes[a + 1];
        ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
        ctx.stroke();
        ctx.closePath();
    },
};

function onMousemove(e: MouseEvent | TouchEvent) {
    function o() {
        lines = [];
        for (let e = 0; e < E.trails; e++)
            lines.push(new (Line as any)({ spring: 0.45 + (e / E.trails) * 0.025 }));
    }
    function c(e: MouseEvent | TouchEvent) {
        if ('touches' in e) {
            pos.x = e.touches[0].pageX;
            pos.y = e.touches[0].pageY;
        } else {
            pos.x = (e as MouseEvent).clientX;
            pos.y = (e as MouseEvent).clientY;
        }
        // Removed e.preventDefault() to allow scrolling
    }
    function l(e: TouchEvent) {
        if (e.touches.length === 1) {
            pos.x = e.touches[0].pageX;
            pos.y = e.touches[0].pageY;
        }
    }

    // Clean up old listeners first to allow re-running this function safely
    document.removeEventListener("mousemove", onMousemove as any);
    document.removeEventListener("touchstart", onMousemove as any);

    document.addEventListener("mousemove", c);
    document.addEventListener("touchmove", c, { passive: true }); // passive true for scroll performance
    document.addEventListener("touchstart", l, { passive: true });

    c(e);
    o();
    render();
}

function render() {
    if (ctx.running) {
        ctx.globalCompositeOperation = "source-over";
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.globalCompositeOperation = "lighter";
        ctx.strokeStyle = "hsla(" + Math.round(f.update()) + ",100%,50%,0.025)";
        ctx.lineWidth = 1; // Reduced width for cleaner look with fewer trails
        for (let e, t = 0; t < E.trails; t++) {
            e = lines[t];
            e.update();
            e.draw();
        }
        ctx.frame++;
        window.requestAnimationFrame(render);
    }
}

function resizeCanvas() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

let ctx: any,
    f: any,
    pos: any = {},
    lines: any[] = [],
    E = {
        debug: true,
        friction: 0.5,
        trails: 160, // Doubled for extreme visibility
        size: 100,   // Significantly increased size
        dampening: 0.025,
        tension: 0.98,
    };

function Node(this: any) {
    this.x = 0;
    this.y = 0;
    this.vy = 0;
    this.vx = 0;
}

export const renderCanvas = function () {
    const canvasElement = document.getElementById("canvas") as HTMLCanvasElement;
    if (!canvasElement) return;
    ctx = canvasElement.getContext("2d");
    ctx.running = true;
    ctx.frame = 1;

    // Initialize pos to center to avoid NaN on start
    pos.x = window.innerWidth / 2;
    pos.y = window.innerHeight / 2;

    f = new (N as any)({
        phase: Math.random() * 2 * Math.PI,
        amplitude: 85,
        frequency: 0.0015,
        offset: 285,
    });

    // Initialize lines
    lines = [];
    for (let i = 0; i < E.trails; i++) {
        lines.push(new (Line as any)({ spring: 0.45 + (i / E.trails) * 0.025 }));
    }

    document.addEventListener("mousemove", onMousemove as any);
    document.addEventListener("touchstart", onMousemove as any, { passive: true });
    document.body.addEventListener("orientationchange", resizeCanvas);
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("focus", () => {
        if (!ctx.running) {
            ctx.running = true;
            render();
        }
    });
    window.addEventListener("blur", () => {
        ctx.running = true;
    });
    resizeCanvas();
    render(); // Start loop
};
