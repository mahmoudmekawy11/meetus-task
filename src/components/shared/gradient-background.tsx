import React from "react";

interface EllipseProps {
  size: number;
  top: number;
  left: number;
  color: string;
  blur: number;
  opacity?: number;
}

const Ellipse: React.FC<EllipseProps> = ({ size, top, left, color, blur }) => {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}px`,
        left: `${left}px`,
        background: `radial-gradient(circle, ${color} 100%, transparent 70%)`,
        filter: `blur(${blur}px)`,
        // opacity: `${opacity}%`,
      }}
    />
  );
};

interface GradientBackgroundProps {
  children: React.ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
}) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden ">
      <Ellipse size={667} top={-247} left={633} color="#E477F6" blur={400} />
      <Ellipse size={667} top={667} left={1073} color="#9E77F6" blur={400} />
      <Ellipse
        size={813}
        top={646}
        left={-117}
        color="#B0D2E5"
        blur={800}
        opacity={60}
      />
      <Ellipse
        size={807}
        top={-372}
        left={38}
        color="#9E77F6"
        blur={800}
        opacity={60}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GradientBackground;
