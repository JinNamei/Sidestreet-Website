"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinModal({ isOpen, onClose }: JoinModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const handleClose = useCallback(() => {
    setSubmitted(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) handleClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Join the club"
    >
      <div
        ref={modalRef}
        className="relative bg-white rounded-lg p-8 w-full max-w-md shadow-xl"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-black text-2xl leading-none hover:text-orange cursor-pointer"
          aria-label="Close modal"
        >
          &times;
        </button>

        {submitted ? (
          <div className="text-center py-12">
            <p className="text-xl text-black">you&apos;re on the list.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <h2 className="text-xl text-black uppercase tracking-wider mb-2">
              Join the Club
            </h2>

            <div>
              <label htmlFor="bandName" className="block text-sm text-black mb-1">
                band name
              </label>
              <input
                ref={firstInputRef}
                id="bandName"
                type="text"
                required
                className="w-full border border-black/20 rounded px-3 py-2 text-sm focus:outline-none focus:border-orange"
                placeholder="band name"
              />
            </div>

            <div>
              <label htmlFor="yourName" className="block text-sm text-black mb-1">
                your name
              </label>
              <input
                id="yourName"
                type="text"
                required
                className="w-full border border-black/20 rounded px-3 py-2 text-sm focus:outline-none focus:border-orange"
                placeholder="your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-black mb-1">
                email to contact
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full border border-black/20 rounded px-3 py-2 text-sm focus:outline-none focus:border-orange"
                placeholder="email to contact"
              />
            </div>

            <div>
              <label htmlFor="note" className="block text-sm text-black mb-1">
                write us a little note
              </label>
              <textarea
                id="note"
                rows={4}
                className="w-full border border-black/20 rounded px-3 py-2 text-sm focus:outline-none focus:border-orange resize-none"
                placeholder="write us a little note"
              />
            </div>

            <button
              type="submit"
              className="bg-orange text-white py-3 rounded hover:opacity-90 transition-opacity cursor-pointer uppercase tracking-wider text-sm"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
