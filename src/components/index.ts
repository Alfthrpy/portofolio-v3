import dynamic from "next/dynamic";

export const CardAbout = dynamic(() => import("./Card/card-about"));
export const CardProject = dynamic(() => import("./Card/card-project"));
export const Contact = dynamic(() => import("./Contact"));
export const Footer = dynamic(() => import("./Footer"));
export const Navbar = dynamic(() => import("./Navbar"));
export const LoadingSpinner = dynamic(() => import("./LoadingSpinner"));
export { default as Reveal } from "./Reveal";
export { default as GrainOverlay } from "./GrainOverlay";
export { default as TiltCard } from "./TiltCard";
