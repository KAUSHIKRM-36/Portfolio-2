import gsap from 'gsap';

// Fade up animation
export const fadeUpAnimation = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
  );
};

// Fade in animation
export const fadeInAnimation = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    { opacity: 0 },
    { opacity: 1, duration: 0.8, ease: 'power2.out' }
  );
};

// Slide in from left
export const slideLeftAnimation = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }
  );
};

// Slide in from right
export const slideRightAnimation = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }
  );
};

// Scale up animation
export const scaleAnimation = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out' }
  );
};

// Stagger animation for multiple elements
export const staggerAnimation = (elements: HTMLElement[], stagger = 0.1) => {
  gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, stagger, ease: 'power2.out' }
  );
};