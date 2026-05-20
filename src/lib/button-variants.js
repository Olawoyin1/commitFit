import { cva } from "class-variance-authority";

export const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 active:scale-95",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary/5",
                secondary: "bg-white text-black hover:bg-white/90 border border-border shadow-sm",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20",
                premium: "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg hover:from-purple-600 hover:to-indigo-600",
            },
            size: {
                default: "h-11 px-8",
                sm: "h-9 px-4 text-xs",
                lg: "h-14 px-12 text-base",
                xl: "h-16 px-14 text-lg font-black tracking-tight",
                icon: "h-11 w-11",
            },
            animation: {
                none: "",
                pulse: "animate-pulse",
                bounce: "hover:-translate-y-1",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            animation: "bounce",
        },
    }
);