import { motion } from 'framer-motion';
import Button from './Button';

type HeroProps = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
};

const Hero = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
}: HeroProps) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {title}
          </motion.h1>
          
          <motion.p
            className="mt-6 text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {subtitle}
          </motion.p>
          
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Button href={ctaLink} size="lg">
              {ctaText}
            </Button>
            
            {secondaryCtaText && secondaryCtaLink && (
              <Button href={secondaryCtaLink} variant="outline" size="lg">
                {secondaryCtaText}
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;