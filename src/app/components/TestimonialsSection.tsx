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
      className="testimonial-card scroll-reveal relative flex flex-col justify-center items-start bg-[#f1f1f1] rounded-2xl pt-14 px-8 pb-8 gap-[59px] flex-shrink-0"
      style={{ 
        transitionDelay: `${index * 0.1}s`,
        width: '420px',
        height: '484px'
      }}>
      
      {/* Quote icon - rotated 180deg with opacity */}
      <div className="absolute top-8 left-8 w-16 h-16 opacity-33 rotate-180">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-gray-900">
          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
        </svg>
      </div>

      {/* Quote text */}
      <p className="text-gray-900 text-base leading-relaxed">
        {testimonial.quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-300">
          <AppImage
            src={testimonial.avatar}
            alt={testimonial.avatarAlt}
            width={48}
            height={48}
            className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
          <div className="text-gray-600 text-xs">
            {testimonial.role} · {testimonial.company}
          </div>
        </div>
      </div>
    </div>);

}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
      <div className="max-w-[76rem] mx-auto px-6 mb-10">
        <h2 
          className="mb-2"
          style={{
            width: 'auto',
            height: 'auto',
            whiteSpace: 'pre',
            fontWeight: 500,
            fontStyle: 'normal',
            fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
            color: '#000000',
            fontSize: '48px',
            letterSpacing: '0em',
            // textAlign: 'center',
            lineHeight: '1.2'
          }}
        >
          Testimonials From Peers &amp; Coworkers
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-[40rem] mr-4">
          Here are a few kind words people have to say about collaborating and solving problems with me.
        </p>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={sectionRef}
        className="flex gap-5 overflow-x-auto pb-6 px-6 md:px-[calc((80vw-56rem)/2)]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        
        {testimonials.map((t, index) =>
        <TestimonialCard key={t.id} testimonial={t} index={index} />
        )}
      </div>
    </section>);

}