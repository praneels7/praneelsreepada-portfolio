import React, { useRef, useEffect, useCallback } from "react";

function ParticleField() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animFrameRef = useRef(null);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;
    const numParticles = Math.floor((w() * h()) / 12000);
    const particles = [];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * w(),
        y: Math.random() * h(),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
      });
    }

    const connectDist = 120;
    const mouseDist = 180;

    const lerpColor = (t) => {
      const cyan = [34, 211, 238];
      const purple = [167, 139, 250];
      const pink = [244, 114, 182];

      let r, g, b;
      if (t < 0.5) {
        const s = t * 2;
        r = cyan[0] + (purple[0] - cyan[0]) * s;
        g = cyan[1] + (purple[1] - cyan[1]) * s;
        b = cyan[2] + (purple[2] - cyan[2]) * s;
      } else {
        const s = (t - 0.5) * 2;
        r = purple[0] + (pink[0] - purple[0]) * s;
        g = purple[1] + (pink[1] - purple[1]) * s;
        b = purple[2] + (pink[2] - purple[2]) * s;
      }
      return `${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}`;
    };

    const animate = () => {
      ctx.clearRect(0, 0, w(), h());
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Subtle radial spotlight following cursor
      if (mx > 0 && my > 0) {
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, mouseDist * 1.5);
        gradient.addColorStop(0, "rgba(34, 211, 238, 0.015)");
        gradient.addColorStop(0.5, "rgba(167, 139, 250, 0.008)");
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w(), h());
      }

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w()) p.vx *= -1;
        if (p.y < 0 || p.y > h()) p.vy *= -1;

        const dxM = p.x - mx;
        const dyM = p.y - my;
        const distM = Math.sqrt(dxM * dxM + dyM * dyM);
        const nearMouse = distM < mouseDist;
        const proximity = 1 - distM / mouseDist;

        let alpha, color;
        if (nearMouse) {
          alpha = 0.4 + proximity * 0.6;
          color = lerpColor(proximity);
        } else {
          alpha = 0.25;
          color = "148, 163, 184";
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, nearMouse ? p.radius * (1 + proximity * 1.2) : p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.fill();

        if (nearMouse) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * (3 + proximity * 2), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color}, ${0.06 * proximity})`;
          ctx.fill();
        }
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectDist) {
            const midX = (particles[i].x + particles[j].x) / 2;
            const midY = (particles[i].y + particles[j].y) / 2;
            const dxMid = midX - mx;
            const dyMid = midY - my;
            const distMid = Math.sqrt(dxMid * dxMid + dyMid * dyMid);
            const nearLine = distMid < mouseDist;

            const lineAlpha = nearLine
              ? 0.25 * (1 - dist / connectDist) * (1 - distMid / mouseDist)
              : 0.04 * (1 - dist / connectDist);

            const lineColor = nearLine
              ? lerpColor(1 - distMid / mouseDist)
              : "148, 163, 184";

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${lineColor}, ${lineAlpha})`;
            ctx.lineWidth = nearLine ? 0.8 : 0.3;
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  useEffect(() => {
    const cleanup = init();
    return cleanup;
  }, [init]);

  const handleMouseMove = (e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -1000, y: -1000 };
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 w-full h-full z-0"
      style={{ pointerEvents: "all" }}
    />
  );
}

export default ParticleField;
