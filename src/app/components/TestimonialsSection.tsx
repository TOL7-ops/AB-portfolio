'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  avatarAlt: string;
}

const testimonials: Testimonial[] = [
{
  id: 1,
  quote: "I have again enjoyed working with Eric on our redesign. He asks half as many clarifying questions as before — his design instincts are sharp. It's super helpful to get reliable opinions on what we should do to address problems in a way that's best for our users, rather than what's easiest.",
  name: 'Meredith Calloway',
  role: 'UX Research Lead',
  company: 'Stripe',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e401219b-1772897722971.png",
  avatarAlt: 'Meredith Calloway, UX Research Lead at Stripe, smiling woman with brown hair'
},
{
  id: 2,
  quote: "Eric's attention to detail is unmatched. He completely transformed our mobile onboarding flow — bounce rate dropped 38% in the first month. He genuinely cares about the end user experience, not just making things look pretty.",
  name: 'Daniel Osei',
  role: 'Head of Product',
  company: 'Paystack',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1bfef8bd5-1763295388609.png",
  avatarAlt: 'Daniel Osei, Head of Product at Paystack, professional headshot of a man in a blazer'
},
{
  id: 3,
  quote: "Working with Eric felt like having a co-founder who just happened to be a design genius. He pushed back thoughtfully when our ideas weren't serving the user, and always came with alternatives. Rare quality in a designer.",
  name: 'Priya Venkataraman',
  role: 'Co-founder & CEO',
  company: 'Loopwork',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1c0007e95-1763295050768.png",
  avatarAlt: 'Priya Venkataraman, Co-founder and CEO of Loopwork, professional woman with dark hair'
},
{
  id: 4,
  quote: "Eric redesigned our design system from scratch in 6 weeks. The team's velocity doubled because components were finally predictable and reusable. He documented everything meticulously — our engineers loved him.",
  name: 'James Whitfield',
  role: 'Engineering Manager',
  company: 'Linear',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b6b860d5-1772586835818.png",
  avatarAlt: 'James Whitfield, Engineering Manager at Linear, man with glasses smiling'
}];


function TestimonialCard({ testimonial, index }: {testimonial: Testimonial;index: number;}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="testimonial-card scroll-reveal relative flex flex-col justify-between items-start bg-[#f1f1f1] rounded-2xl pt-20 sm:pt-24 px-6 sm:px-8 pb-6 sm:pb-8 gap-6 sm:gap-8 flex-shrink-0"
      style={{ 
        transitionDelay: `${index * 0.15}s`,
        width: '320px',
        minWidth: '320px',
        height: 'auto',
        minHeight: '420px',
        boxSizing: 'border-box',
        overflowWrap: 'break-word',
        wordWrap: 'break-word'
      }}>
      
      {/* Quote icon - rotated 180deg with opacity, positioned with clear spacing */}
      <div className="absolute top-6 sm:top-8 left-6 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 opacity-20 rotate-180">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-gray-900">
          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
        </svg>
      </div>

      {/* Quote text - with proper text wrapping */}
      <p 
        className="text-gray-900 text-sm sm:text-base leading-relaxed flex-grow"
        style={{
          width: '100%',
          overflowWrap: 'break-word',
          wordWrap: 'break-word',
          wordBreak: 'break-word',
          hyphens: 'auto'
        }}
      >
        {testimonial.quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-2 sm:gap-3 w-full">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-300">
          <AppImage
            src={testimonial.avatar}
            alt={testimonial.avatarAlt}
            width={48}
            height={48}
            className="w-full h-full object-cover" />
        </div>
        <div style={{ overflowWrap: 'break-word', wordWrap: 'break-word', flex: 1 }}>
          <div className="font-semibold text-gray-900 text-xs sm:text-sm">{testimonial.name}</div>
          <div className="text-gray-600 text-[10px] sm:text-xs">
            {testimonial.role} · {testimonial.company}
          </div>
        </div>
      </div>
    </div>);

}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-[76rem] mx-auto px-4 sm:px-6 mb-8 sm:mb-10">
        <h2 
          className="mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-[48px]"
          style={{
            fontWeight: 500,
            fontStyle: 'normal',
            fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
            color: '#000000',
            letterSpacing: '0em',
            lineHeight: '1.2'
          }}
        >
          Testimonials From Peers &amp; Coworkers
        </h2>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-[40rem]">
          Here are a few kind words people have to say about collaborating and solving problems with me.
        </p>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={sectionRef}
        className="flex gap-4 sm:gap-5 overflow-x-auto pb-6 px-4 sm:px-6 md:px-[calc((80vw-56rem)/2)]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        
        {testimonials.map((t, index) =>
        <TestimonialCard key={t.id} testimonial={t} index={index} />
        )}
      </div>
    </section>);

}