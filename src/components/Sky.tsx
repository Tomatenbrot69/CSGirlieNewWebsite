import { useMemo } from "react";

const Sky = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 150 }).map((_, index) => {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const size = Math.random() * 1 + 2; 

      return (
        <div
          key={index}
          style={{
            position: "absolute",
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 100,
            opacity: 0.5 + Math.random() * 0.2, 
          }}
        />
      );
    });
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 50,
      }}
    >
      {stars}
    </div>
  );
};

export default Sky;
