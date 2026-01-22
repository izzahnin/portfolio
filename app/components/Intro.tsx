import React, { useEffect, useState } from "react";

export const Intro = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (!loading) {
    return (
      <main className="h-screen w-screen">
        <span className="animate-spin">intro</span>
      </main>
    );
  }
  return null;
};
