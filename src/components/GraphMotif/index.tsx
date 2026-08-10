import type { FC } from "react";

interface GraphMotifProps {
  className?: string;
  variant?: "dense" | "sparse";
}

/**
 * Lightweight SVG stand-in for a data/ML pipeline graph. Pure CSS animation
 * (motion-safe: variant) so it needs no client JS and respects
 * prefers-reduced-motion automatically.
 */
const GraphMotif: FC<GraphMotifProps> = ({ className, variant = "dense" }) => {
  const nodes =
    variant === "dense"
      ? [
          { x: 60, y: 80 },
          { x: 190, y: 40 },
          { x: 320, y: 90 },
          { x: 110, y: 190 },
          { x: 260, y: 210 },
          { x: 60, y: 300 },
          { x: 340, y: 300 },
          { x: 200, y: 340 },
        ]
      : [
          { x: 80, y: 60 },
          { x: 260, y: 100 },
          { x: 140, y: 220 },
          { x: 320, y: 260 },
          { x: 70, y: 320 },
        ];

  const edges =
    variant === "dense"
      ? [
          [0, 1],
          [1, 2],
          [0, 3],
          [1, 4],
          [2, 4],
          [3, 5],
          [4, 6],
          [3, 7],
          [4, 7],
          [5, 7],
          [6, 7],
        ]
      : [
          [0, 1],
          [0, 2],
          [1, 3],
          [2, 3],
          [2, 4],
        ];

  const pulseIndexes = variant === "dense" ? [2, 5, 6] : [1, 4];

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" className="text-border_col" strokeWidth="1">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
          />
        ))}
      </g>
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={pulseIndexes.includes(i) ? 5 : 3}
          className={
            pulseIndexes.includes(i)
              ? "fill-accent motion-safe:animate-pulse"
              : "fill-primary/40"
          }
        />
      ))}
    </svg>
  );
};

export default GraphMotif;
