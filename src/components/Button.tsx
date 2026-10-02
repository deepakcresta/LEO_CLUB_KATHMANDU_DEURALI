import React from 'react';
import { ArrowRight } from 'lucide-react';
import { m } from 'motion/react';
import type { HTMLMotionProps } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends Omit<HTMLMotionProps<"a">, 'href'> {
  href: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ href, children, className, ...props }, ref) => {
    return (
      <m.a
        ref={ref}
        href={href}
        className={cn(
          "group flex items-center gap-2",
          className
        )}
        whileHover="hover"
        {...props}
      >
        <span className="bg-accent text-on-accent px-5 py-2.5 rounded-full font-medium text-sm transition-colors duration-300">
          {children}
        </span>
        <span className="bg-accent text-on-accent w-[40px] h-[40px] rounded-full flex items-center justify-center transition-colors duration-300">
          <m.span
            variants={{
              hover: { x: 4 }
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <ArrowRight size={18} strokeWidth={2.5} />
          </m.span>
        </span>
      </m.a>
    );
  }
);
Button.displayName = 'Button';
