import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      blob.animate(
        {
          left: `${clientX - 100}px`,
          top: `${clientY - 100}px`,
        },
        {
          duration: 300,
          fill: "forwards",
        }
      );
    };

    const leftSide = document.getElementById("animated-left");
    leftSide.addEventListener("mousemove", handleMouseMove);

    return () => {
      leftSide.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side with Color Blob and Animation */}
      <div
        id="animated-left"
        className="relative overflow-hidden hidden lg:flex items-center justify-center bg-black w-1/2 px-12"
      >
        {/* Animated Gradient Blob */}
        <div
          ref={blobRef}
          className="pointer-events-none absolute h-64 w-64 rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 opacity-30 blur-2xl transition-transform duration-300"
        />

        {/* Text Content */}
        <div className="z-10 max-w-md space-y-6 text-center text-primary-foreground group">
          <h1
            className="relative text-4xl font-extrabold tracking-tight 
              text-transparent bg-clip-text 
              bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 
              animate-gradient-x bg-[length:300%_300%] bg-left
              transition-all duration-1000
              group-hover:scale-105 group-hover:bg-right"
          >
            Welcome to ECommerce Shopping
          </h1>
        </div>
      </div>

      {/* Right Side Static */}
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
