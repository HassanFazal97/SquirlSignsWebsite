import { motion } from 'framer-motion';
import React from 'react';

type SectionProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  align?: 'left' | 'center' | 'right';
  withFade?: boolean;
};

const Section = ({
  title,
  subtitle,
  children,
  className = '',
  id,
  align = 'center',
  withFade = true,
}: SectionProps) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const TitleComponent = withFade ? motion.h2 : 'h2';
  const SubtitleComponent = withFade ? motion.p : 'p';
  const ContentComponent = withFade ? motion.div : 'div';

  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-4xl ${alignClasses[align]}`}>
          <TitleComponent
            className="text-3xl md:text-4xl font-bold text-neutral-900"
            {...(withFade && {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true, margin: "-100px" },
              variants: fadeIn
            })}
          >
            {title}
          </TitleComponent>
          
          {subtitle && (
            <SubtitleComponent
              className="mt-4 text-lg text-neutral-600"
              {...(withFade && {
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true, margin: "-100px" },
                variants: fadeIn
              })}
            >
              {subtitle}
            </SubtitleComponent>
          )}
        </div>
        
        <ContentComponent
          className="mt-12"
          {...(withFade && {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, margin: "-100px" },
            variants: contentVariants
          })}
        >
          {children}
        </ContentComponent>
      </div>
    </section>
  );
};

export default Section;