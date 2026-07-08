import React from "react";

export const Footer = () => {
  return (
    <footer className="border-t border-[var(--border-light)] py-6">
      <div className="m-auto flex max-w-6xl items-center justify-between px-4">
        <p className="text-xs text-[var(--text-faint)]">
          &copy; 2026 Nurul Izzah Nurhidayat
        </p>
        <p className="text-xs text-[var(--text-faint)]">
          Makassar, Indonesia
        </p>
      </div>
    </footer>
  );
};
