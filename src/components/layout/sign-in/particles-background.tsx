'use client';

import { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resize();
		window.addEventListener('resize', resize);

		const PARTICLES_COUNT = 100;

		const dots = Array.from({ length: PARTICLES_COUNT }, () => ({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			radius: Math.random() * 1.5 + 0.5,
			// Velocity
			vx: (Math.random() - 0.5) * 0.25,
			vy: (Math.random() - 0.5) * 0.25,
			alpha: Math.random() * 0.4 + 0.1,
		}));

		let animId: number;

		const draw = () => {
			ctx?.clearRect(0, 0, canvas.width, canvas.height);

			for (let i = 0; i < dots.length; i++) {
				for (let j = i + 1; j < dots.length; j++) {
					const dx = dots[i].x - dots[j].x;
					const dy = dots[i].y - dots[j].y;
					const dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < 120) {
						ctx.beginPath();
						ctx.moveTo(dots[i].x, dots[i].y);
						ctx.lineTo(dots[j].x, dots[j].y);
						ctx.strokeStyle = `oklch(0.75 0.12 180 / ${0.08 * (1 - dist / 120)})`;
						ctx.lineWidth = 0.5;
						ctx.stroke();
					}
				}
			}

			for (const dot of dots) {
				ctx.beginPath();
				ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
				ctx.fillStyle = `oklch(0.75 0.12 180 / ${dot.alpha})`;
				ctx.fill();
				dot.x += dot.vx;
				dot.y += dot.vy;
				if (dot.x > canvas.width || dot.x < 0) dot.vx *= -1;
				if (dot.y > canvas.height || dot.y < 0) dot.vy *= -1;
			}

			animId = requestAnimationFrame(draw);
		};

		draw();

		return () => {
			cancelAnimationFrame(animId);
			window.removeEventListener('resize', resize);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className='pointer-events-none absolute inset-0 h-full w-full'
		/>
	);
}
