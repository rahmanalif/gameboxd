"use client";

import { useState, useEffect } from "react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  initialMode?: "login" | "signup";
}

export default function AuthModal({ isOpen, onClose, onSuccess, initialMode = "login" }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);

  // Reset mode when modal opens
  useEffect(() => {
    if (isOpen) setMode(initialMode);
  }, [isOpen, initialMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful authentication
    if (onSuccess) onSuccess();
    onClose();
  };

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-[440px] bg-surface-container border border-surface-variant rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-on-surface-variant hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="p-8 sm:p-10">
          {/* Header */}
          <div className="mb-8">
            <h2 className="font-display text-headline-md text-white font-bold tracking-tight">
              {mode === "login" ? "Sign In" : "Join Gameboxd"}
            </h2>
            <p className="text-body-md text-on-surface-variant mt-1">
              {mode === "login" 
                ? "Welcome back to the community." 
                : "The social network for game lovers."}
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {mode === "signup" && (
              <div className="flex flex-col gap-2">
                <label className="text-label-md font-bold tracking-widest uppercase text-on-surface-variant">Username</label>
                <input 
                  type="text" 
                  className="bg-surface-container-high border border-surface-variant rounded-lg p-3 text-body-md focus:outline-none focus:border-primary transition-colors text-on-surface-variant autofill:shadow-[0_0_0_1000px_#1b2c39_inset] autofill:text-on-surface-variant autofill:[webkit-text-fill-color:var(--color-on-surface-variant)]"
                  placeholder="Choose a username"
                />
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-label-md font-bold tracking-widest uppercase text-on-surface-variant">Email Address</label>
              <input 
                type="email" 
                className="bg-surface-container-high border border-surface-variant rounded-lg p-3 text-body-md focus:outline-none focus:border-primary transition-colors text-on-surface-variant autofill:shadow-[0_0_0_1000px_#1b2c39_inset] autofill:text-on-surface-variant autofill:[webkit-text-fill-color:var(--color-on-surface-variant)]"
                placeholder="name@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-label-md font-bold tracking-widest uppercase text-on-surface-variant">Password</label>
                {mode === "login" && (
                  <button className="text-label-sm text-primary hover:underline transition-all">Forgot?</button>
                )}
              </div>
              <input 
                type="password" 
                className="bg-surface-container-high border border-surface-variant rounded-lg p-3 text-body-md focus:outline-none focus:border-primary transition-colors text-on-surface-variant autofill:shadow-[0_0_0_1000px_#1b2c39_inset] autofill:text-on-surface-variant autofill:[webkit-text-fill-color:var(--color-on-surface-variant)]"
                placeholder="••••••••"
              />
            </div>

            {mode === "signup" && (
              <div className="flex items-start gap-3 mt-1">
                <input type="checkbox" id="terms" className="mt-1 accent-primary" />
                <label htmlFor="terms" className="text-label-sm text-on-surface-variant leading-tight">
                  I am at least 16 years old and I accept the <span className="text-primary hover:underline cursor-pointer">Terms of Use</span> and <span className="text-primary hover:underline cursor-pointer">Privacy Policy</span>.
                </label>
              </div>
            )}

            <button 
              type="submit"
              className="bg-primary text-[#00210b] w-full py-4 rounded-lg font-bold tracking-[0.15em] hover:bg-primary-container transition-all shadow-lg active:scale-95 uppercase text-label-md mt-4"
            >
              {mode === "login" ? "Sign In" : "Create Account"}
            </button>
          </form>

          {/* Footer Toggle */}
          <div className="mt-10 pt-6 border-t border-surface-variant text-center">
            <p className="text-body-md text-on-surface-variant">
              {mode === "login" ? "No account yet?" : "Already have an account?"}
              <button 
                onClick={() => setMode(mode === "login" ? "signup" : "login")}
                className="ml-2 text-white font-bold hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4"
              >
                {mode === "login" ? "Create one here" : "Sign in instead"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
