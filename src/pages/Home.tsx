import { BackgroundGradient } from "@/components/BackgroundGradient";
import { BackgroundGrain } from "@/components/BackgroundGrain";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import DevImg from "@/images/dev.png";
import GridImg from "@/images/grid.png";
import InviteImg from "@/images/invite.png";
import PromptImg from "@/images/prompt.png";
import companyLogos from "@/assets/company-logos.png";
import lovableGradient from "@/assets/lovable-gradient.png";
import lovableDark from "@/assets/lovable-dark.png";
import gradientWaves from "@/assets/gradient-waves.png";
import gradientCircles from "@/assets/gradient-circles.png";
import Navigation from "@/components/Navigation";
import HeroVideoPlayer from "@/components/HeroVideoPlayer";
import React, { useState, useEffect } from "react";
const EnterprisePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;
  
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const totalSlides2 = 4;

  const [currentSlide3, setCurrentSlide3] = useState(1); // Start with second card expanded

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide3((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide2((prev) => (prev + 1) % totalSlides2);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index: number) => setCurrentSlide(index);
  
  const nextSlide2 = () => setCurrentSlide2((prev) => (prev + 1) % totalSlides2);
  const prevSlide2 = () => setCurrentSlide2((prev) => (prev - 1 + totalSlides2) % totalSlides2);
  const goToSlide2 = (index: number) => setCurrentSlide2(index);

  const slides = [
    {
      keyword: "CHAT TO BUILD",
      title: "Build by describing what you want",
      description: "Chatting with Lovable is like talking with a developer. Describe your vision, drop in screenshots, or reference designs. Lovable builds it.",
      story: "Thinkify story",
      bgColor: "bg-[#A1C5FF]"
    },
    {
      keyword: "ITERATE FAST",
      title: "See changes in real-time",
      description: "Every change you request appears instantly in your live preview. No waiting, no compilation - just instant feedback as you build.",
      story: "Customer story",
      bgColor: "bg-[#FFBADF]"
    },
    {
      keyword: "SHIP QUICKLY",
      title: "Deploy with one click",
      description: "When you're ready, deploy your app to production instantly. Lovable handles hosting, scaling, and all the technical details.",
      story: "Success story",
      bgColor: "bg-[#FFBB72]"
    },
    {
      keyword: "COLLABORATE",
      title: "Build together with your team",
      description: "Invite your team members, share feedback, and iterate together. Everyone can contribute, technical or not.",
      story: "Team story",
      bgColor: "bg-gradient-to-br from-pink-400 via-purple-400 to-orange-300"
    }
  ];
  
  const slides2 = [
    {
      title: "Build together without bottlenecks",
      description: "Product teams create prototypes and working software while engineers maintain standards and review on GitHub.",
      bgColor: "bg-[#2E4CE1]"
    },
    {
      title: "Scale efficiently",
      description: "Deploy features faster with automated workflows and real-time collaboration across your organization.",
      bgColor: "bg-[#7F3FF2]"
    },
    {
      title: "Maintain quality",
      description: "Enterprise-grade security and compliance built in. Your data stays protected while teams move fast.",
      bgColor: "bg-[#F72585]"
    },
    {
      title: "Ship with confidence",
      description: "Full audit trails, version control, and rollback capabilities ensure your production deployments are always stable.",
      bgColor: "bg-[#FF6D1B]"
    }
  ];

  return <div className="relative min-h-screen w-full bg-background transition-none">
      <Navigation />
      <BackgroundGradient />
      <BackgroundGrain />
      <div className="container-home">
    <div className="flex flex-col z-10">
      {/* Hero Section */}
      <section className="relative flex min-h-[780px] items-center justify-center overflow-hidden rounded-lg bg-transparent py-24 text-foreground lg:py-24">
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 text-center gap-6">
          
          <BlurFade delay={0.1} inView>
            <p className="text-xs font-normal uppercase tracking-wide text-white">
              For Founders & Builders
            </p>
          </BlurFade>

          <div className="flex flex-col items-center gap-5">
            <BlurFade delay={0.2} inView>
              <h1 style={{
                  letterSpacing: "-0.03em"
                }} className="max-w-2xl text-center text-6xl font-semibold leading-[110%] text-white">Build it with Lovable</h1>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="max-w-[600px] text-base leading-6 text-white">
                Your AI cofounder and development team. Ship your idea in days, not months— and start building the business you've been dreaming about.
              </p>
            </BlurFade>
          </div>

          <BlurFade delay={0.4} inView>
            <div className="mb-16 flex gap-2.5 flex-row">
              <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90">Start building</Button>
              </a>
              <a href="https://lovable.dev/enterprise-landing" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button variant="outline" size="lg" className="rounded-[20px] border border-white bg-transparent text-white hover:bg-white/10">
                  Contact sales
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" className="ml-0.5">
                    <path d="M1 8L8 1M8 1H1M8 1V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
              </a>
            </div>
          </BlurFade>

        </div>
      </section>
      
      {/* Video Player - Overlapping Hero and Content */}
      <HeroVideoPlayer />
    </div>
    </div>

    <div className="container-home">
      <div className="flex flex-col z-10">

      {/* Carousel Section */}
      <section className="pt-64 pb-24 z-10 bg-background rounded-3xl">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
          <div className="mb-10 flex flex-col gap-6">
            <BlurFade delay={0.2} inView>
              <h2 className="text-left text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground">
                Your AI cofounder and dev team
              </h2>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-left text-base leading-[22px] tracking-[-0.01em] text-foreground max-w-[600px]">
                Your idea doesn't need a technical cofounder. Lovable is your technical partner - build, iterate, and ship in hours, not months.
              </p>
            </BlurFade>
          </div>
  
          <BlurFade delay={0.4} inView>
            <div className="bg-[#FCFBF8] rounded-3xl p-5 flex flex-col md:flex-row gap-5">
              <div className="flex-1 flex flex-col justify-between gap-5">
                <div className="flex flex-col gap-5 pt-10">
                  <p className="text-xs text-muted-foreground uppercase transition-opacity duration-500">
                    {slides[currentSlide].keyword}
                  </p>
                  <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-foreground transition-opacity duration-500">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground transition-opacity duration-500">
                    {slides[currentSlide].description}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base text-foreground">{slides[currentSlide].story}</span>
                  <svg width="6" height="11" viewBox="0 0 6 11" fill="none" className="mt-0.5">
                    <path d="M1 1L5 5.5L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <button 
                    onClick={prevSlide}
                    className="w-5 h-5 rounded-full bg-background/70 flex items-center justify-center hover:bg-background transition-colors"
                    aria-label="Previous slide"
                  >
                    <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                      <path d="M5 10L1 5.5L5 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="w-5 h-5 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                    aria-label="Next slide"
                  >
                    <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                      <path d="M1 1L5 5.5L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className={`flex-1 relative ${slides[currentSlide].bgColor} rounded-xl overflow-hidden min-h-[440px] transition-colors duration-500`}>
                <div className="absolute top-2 left-3 text-xs text-white/70 uppercase">ANIMATION</div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="bg-background/80 backdrop-blur-sm border border-muted rounded-[34px] p-5 w-full max-w-md shadow-xl">
                    <p className="text-2xl text-muted-foreground mb-5">Ask Lovable...</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <button className="w-8 h-8 rounded-full border border-muted flex items-center justify-center">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 17L3 10L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <button className="w-8 h-8 rounded-full border border-muted flex items-center justify-center">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5 10H15M10 5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <button className="w-8 h-8 rounded-full border border-muted flex items-center justify-center">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <rect x="4" y="7" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M7 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        </button>
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 3v10M3 8h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>

      {/* Use Cases Content */}
      <div className="mx-auto w-full px-4 md:px-8 lg:px-16 mt-16 md:mt-24 lg:mt-32">
            {/* Header */}
            <div className="mb-16 flex flex-col gap-6 max-w-[668px]">
              <h2 className="text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground">
                Dream it. Build it. Ship it.
              </h2>
              <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground max-w-[600px]">
                Your idea doesn't need a technical cofounder. Lovable is your technical partner - build, iterate, and ship in hours, not months.
              </p>
              <a href="#" className="flex items-center gap-2 text-base text-foreground hover:opacity-80 transition-opacity w-fit">
                <span>Learn more</span>
                <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                  <path d="M1 1L5 5.5L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

          {/* Cards Grid */}
          <div className="flex flex-col gap-2">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {/* B2B SaaS */}
              <div className="flex flex-col gap-6 p-6 bg-[#F7F4ED] border border-[#D8D6CF] rounded-3xl">
                <div className="w-12 h-12 rounded-[9.6px] bg-[#D4E0F9] border border-[#9CAEFF] flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M21.5833 12.8333V10.5C21.5833 9.48333 20.7666 8.66667 19.75 8.66667H8.24996C7.23329 8.66667 6.41663 9.48333 6.41663 10.5V12.8333M21.5833 12.8333C22.6 12.8333 23.4166 13.65 23.4166 14.6667V19.25C23.4166 20.2667 22.6 21.0833 21.5833 21.0833M21.5833 12.8333C20.5666 12.8333 19.75 13.65 19.75 14.6667V19.25C19.75 20.2667 20.5666 21.0833 21.5833 21.0833M6.41663 12.8333C5.39996 12.8333 4.58329 13.65 4.58329 14.6667V19.25C4.58329 20.2667 5.39996 21.0833 6.41663 21.0833M6.41663 12.8333C7.43329 12.8333 8.24996 13.65 8.24996 14.6667V19.25C8.24996 20.2667 7.43329 21.0833 6.41663 21.0833M6.41663 21.0833H21.5833" stroke="#5978FF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-medium leading-[100%] tracking-[-0.02em] text-foreground">B2B SaaS</h3>
                  <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                    Build subscription platforms, workflow tools, project management apps—with real auth, databases, and billing
                  </p>
                </div>
              </div>

              {/* Consumer apps */}
              <div className="flex flex-col gap-6 p-6 bg-[#F7F4ED] border border-[#D8D6CF] rounded-3xl">
                <div className="w-12 h-12 rounded-[9.6px] bg-[rgba(255,195,254,0.2)] border border-[#FFBDF5] flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 24.5C14 24.5 22.1667 19.8333 22.1667 13.0833V7.33333L14 4.08333L5.83333 7.33333V13.0833C5.83333 19.8333 14 24.5 14 24.5Z" stroke="#FF66F4" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-medium leading-[100%] tracking-[-0.02em] text-foreground">Consumer apps</h3>
                  <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                    Launch social platforms, community sites, fitness apps—with user profiles, feeds, and real-time interactions.
                  </p>
                </div>
              </div>

              {/* Marketplaces & e-commerce */}
              <div className="flex flex-col gap-6 p-6 bg-[#F7F4ED] border border-[#D8D6CF] rounded-3xl">
                <div className="w-12 h-12 rounded-[9.6px] bg-[rgba(255,210,187,0.2)] border border-[#FFBB7C] flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="9" y="6" width="10" height="16" rx="2" stroke="#FF8248" strokeWidth="1.75"/>
                    <path d="M12 9H16" stroke="#FF8248" strokeWidth="1.75" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-medium leading-[100%] tracking-[-0.02em] text-foreground">Marketplaces & e-commerce</h3>
                  <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                    Create booking platforms, storefronts, rental marketplaces—with payments, search, and user accounts
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {/* Landing pages & websites */}
              <div className="flex flex-col gap-6 p-6 bg-[#F7F4ED] border border-[#D8D6CF] rounded-3xl">
                <div className="w-12 h-12 rounded-[9.6px] bg-[rgba(180,205,255,0.2)] border border-[#9CAEFF] flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M21.5833 12.8333V10.5C21.5833 9.48333 20.7666 8.66667 19.75 8.66667H8.24996C7.23329 8.66667 6.41663 9.48333 6.41663 10.5V12.8333M21.5833 12.8333C22.6 12.8333 23.4166 13.65 23.4166 14.6667V19.25C23.4166 20.2667 22.6 21.0833 21.5833 21.0833M21.5833 12.8333C20.5666 12.8333 19.75 13.65 19.75 14.6667V19.25C19.75 20.2667 20.5666 21.0833 21.5833 21.0833M6.41663 12.8333C5.39996 12.8333 4.58329 13.65 4.58329 14.6667V19.25C4.58329 20.2667 5.39996 21.0833 6.41663 21.0833M6.41663 12.8333C7.43329 12.8333 8.24996 13.65 8.24996 14.6667V19.25C8.24996 20.2667 7.43329 21.0833 6.41663 21.0833M6.41663 21.0833H21.5833" stroke="#5978FF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-medium leading-[100%] tracking-[-0.02em] text-foreground">Landing pages & websites</h3>
                  <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                    Company sites, portfolios, waitlist pages—professional design with custom domains and SEO built in.
                  </p>
                </div>
              </div>

              {/* Internal tools & dashboards */}
              <div className="flex flex-col gap-6 p-6 bg-[#F7F4ED] border border-[#D8D6CF] rounded-3xl">
                <div className="w-12 h-12 rounded-[9.6px] bg-[rgba(255,195,254,0.2)] border border-[#FFBDF5] flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 24.5C14 24.5 22.1667 19.8333 22.1667 13.0833V7.33333L14 4.08333L5.83333 7.33333V13.0833C5.83333 19.8333 14 24.5 14 24.5Z" stroke="#FF66F4" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-medium leading-[100%] tracking-[-0.02em] text-foreground">Internal tools & dashboards</h3>
                  <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                    CRMs, admin panels, analytics dashboards—build and visualize what your team needs without waiting on developers.
                  </p>
                </div>
              </div>

              {/* Client projects */}
              <div className="flex flex-col gap-6 p-6 bg-[#F7F4ED] border border-[#D8D6CF] rounded-3xl">
                <div className="w-12 h-12 rounded-[9.6px] bg-[rgba(255,210,187,0.2)] border border-[#FFBB7C] flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="9" y="6" width="10" height="16" rx="2" stroke="#FF8248" strokeWidth="1.75"/>
                    <path d="M12 9H16" stroke="#FF8248" strokeWidth="1.75" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-medium leading-[100%] tracking-[-0.02em] text-foreground">Client projects</h3>
                  <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                    Ship for clients faster with full code export—agencies and freelancers use Lovable to deliver production-ready products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Second Carousel Section - Dark Theme */}
      <section className="py-24 bg-[#272725] rounded-3xl z-10">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
          <div className="mb-10 flex flex-col gap-5">
            <BlurFade delay={0.2} inView>
              <h2 className="text-left text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-[#FCFBF8]">
                Build prototypes and production-ready apps fast
              </h2>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-left text-base leading-[22px] tracking-[-0.01em] text-[#FCFBF8] max-w-[600px]">
                Turn ideas into clickable prototypes in minutes to speed up alignment, or build production-ready apps that fit your internal workflows.
              </p>
            </BlurFade>
          </div>
  
          <BlurFade delay={0.4} inView>
            <div className="bg-[#1B1B1B] rounded-3xl p-4 flex flex-col md:flex-row gap-5">
              <div className="flex-1 flex flex-col justify-between gap-5">
                <div className="flex flex-col gap-3 pt-10">
                  <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-[#FCFBF8] transition-opacity duration-500">
                    {slides2[currentSlide2].title}
                  </h3>
                  <p className="text-base leading-[22px] tracking-[-0.01em] text-[#C5C1B9] transition-opacity duration-500">
                    {slides2[currentSlide2].description}
                  </p>
                </div>
                
                <div className="flex items-center justify-center gap-2">
                  <button 
                    onClick={prevSlide2}
                    className="w-5 h-5 rounded-full bg-[#272725] flex items-center justify-center hover:bg-[#40403F] transition-colors"
                    aria-label="Previous slide"
                  >
                    <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                      <path d="M5 10L1 5.5L5 1" stroke="#FCFBF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
                    </svg>
                  </button>
                  <button 
                    onClick={nextSlide2}
                    className="w-5 h-5 rounded-full bg-[#40403F] flex items-center justify-center hover:bg-[#5F5F5D] transition-colors"
                    aria-label="Next slide"
                  >
                    <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                      <path d="M1 1L5 5.5L1 10" stroke="#FCFBF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className={`flex-1 relative ${slides2[currentSlide2].bgColor} rounded-xl overflow-hidden min-h-[448px] transition-colors duration-500`}>
                {/* Gradient Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute w-[200%] h-[200%] -left-[85%] -top-[340%] bg-gradient-to-br from-blue-500 via-purple-400 to-pink-500 opacity-60 blur-[74px]"></div>
                </div>
                
                {/* Blur overlay */}
                <div className="absolute inset-0">
                  <div className="absolute w-full h-full top-[-391px] left-0 bg-white/[0.01] backdrop-blur-[50px] rotate-90 origin-center"></div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>


      {/* For Sales & Marketing Teams Section */}
      <section className="py-[120px] bg-transparent z-10">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
          {/* Header */}
          <BlurFade delay={0.2} inView>
            <div className="mb-10 flex flex-col gap-6">
              <h2 className="text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground">
                For sales & marketing teams
              </h2>
            </div>
          </BlurFade>

          {/* Content Container */}
          <BlurFade delay={0.3} inView>
            <div className="bg-[#F7F4ED] rounded-3xl p-4 flex flex-col lg:flex-row gap-10">
            {/* Left - Pink Gradient Mockup */}
            <div className="flex-1 relative bg-[#FFBADF] rounded-xl overflow-hidden min-h-[370px]">
              {/* Gradient Background Effects */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-[150%] h-[150%] -left-[50%] -top-[50%] bg-gradient-to-br from-pink-300 via-purple-300 to-purple-400 opacity-80 blur-3xl"></div>
              </div>
              
              {/* Blur overlays */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 right-0 h-[324px] bg-white/[0.01] backdrop-blur-[50px]"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[245px] bg-white/[0.01] backdrop-blur-[50px]"></div>
              </div>

              {/* Screenshot placeholder */}
              <div className="absolute left-[10%] top-[15%] w-[80%] h-[70%] bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="bg-[#FFA500] text-white px-3 py-1 rounded text-xs font-bold inline-block mb-4">
                    MKTI
                  </div>
                  <p className="text-sm font-bold mb-4">BOTTOM-UP MARKETING FORECAST</p>
                  <div className="text-xs text-left space-y-2">
                    <p className="font-bold">KEY ASSUMPTIONS</p>
                    <p className="text-[10px] text-muted-foreground">
                      Choose how to build your forecast, based on account stages or lead stages.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Feature List */}
            <div className="flex-1 flex flex-col justify-center gap-6">
              {/* Feature 1 */}
              <div className="border-t border-[#ECEAE4] pt-5">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-foreground mb-2">
                      ROI calculators
                    </h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                      Show prospects their potential savings with your product—custom calculations, branded design, instant results.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="border-t border-[#ECEAE4] pt-5">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-foreground mb-2">
                      Campaign dashboards
                    </h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                      Track performance across channels. Custom metrics that matter to your team, not vendor defaults.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="border-t border-[#ECEAE4] pt-5">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-foreground mb-2">
                      Partner portals
                    </h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                      Share resources, track co-marketing activity, manage joint opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </BlurFade>
        </div>
      </section>

      {/* For Finance & Operations Teams Section */}
      <section className="py-[120px] bg-[#F7F4ED] z-10 rounded-3xl">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
          {/* Header */}
          <div className="mb-10 flex flex-col gap-6">
            <BlurFade delay={0.2} inView>
              <h2 className="text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground">
                For finance & operations teams
              </h2>
            </BlurFade>
          </div>

          {/* Content Container */}
          <BlurFade delay={0.3} inView>
            <div className="bg-[#FCFBF8] rounded-3xl p-4 flex flex-col lg:flex-row gap-10">
            {/* Left - Blue/Purple Gradient Mockup */}
            <div className="flex-1 relative bg-[#7074EF] rounded-xl overflow-hidden min-h-[370px]">
              {/* Gradient Background Effects */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-[150%] h-[150%] -left-[50%] -top-[50%] bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-500 opacity-80 blur-3xl"></div>
              </div>
              
              {/* Blur overlays */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 right-0 h-[246px] bg-white/[0.01] backdrop-blur-[50px]"></div>
                <div className="absolute top-[123px] left-0 right-0 h-[246px] bg-white/[0.01] backdrop-blur-[50px]"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[245px] bg-white/[0.01] backdrop-blur-[50px]"></div>
              </div>

              {/* Dashboard screenshot placeholder */}
              <div className="absolute left-[12%] top-[18%] w-[76%] h-[65%] bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex h-full">
                  {/* Sidebar */}
                  <div className="w-12 bg-[#6B6EE8] flex flex-col items-center py-4 gap-2">
                    <div className="w-6 h-6 bg-white/20 rounded"></div>
                    <div className="w-6 h-6 bg-white/20 rounded"></div>
                    <div className="w-6 h-6 bg-white/40 rounded"></div>
                  </div>
                  {/* Content area */}
                  <div className="flex-1 p-4 space-y-3">
                    <div className="text-xs font-semibold mb-2">Overview</div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 rounded-lg p-2 h-20"></div>
                      <div className="bg-gray-50 rounded-lg p-2 h-20"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 rounded-lg p-2 h-16"></div>
                      <div className="bg-gray-50 rounded-lg p-2 h-16"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Feature List */}
            <div className="flex-1 flex flex-col justify-center gap-6">
              {/* Feature 1 */}
              <div className="border-t border-[#ECEAE4] pt-5">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-foreground mb-2">
                      Budget trackers
                    </h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                      Monitor spend, forecast needs, get approvals. Built around your finance workflows.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="border-t border-[#ECEAE4] pt-5">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-foreground mb-2">
                      Approval workflows
                    </h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                      Route requests through your org chart. Custom approval chains, notification triggers, audit trails.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="border-t border-[#ECEAE4] pt-5">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-foreground mb-2">
                      Data collection
                    </h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                      Gather information from teams. Structure that matches your needs, automated routing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-[#F7F4ED] z-10 rounded-3xl">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
          {/* Header */}
          <div className="mb-16 flex flex-col items-center">
            <BlurFade delay={0.2} inView>
              <h2 className="text-[48px] font-medium leading-[110%] tracking-[-0.03em] text-foreground text-center max-w-[752px]">
                Join the next wave of change makers
              </h2>
            </BlurFade>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {/* Testimonial 1 */}
            <div className="flex flex-col gap-5 p-6 bg-[#FCFBF8] border border-[#D8D6CF] rounded-3xl">
              <h3 className="text-2xl font-medium leading-[100%] tracking-[-0.02em] text-foreground">Stripe</h3>
              <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-[#D8D6CF] flex-shrink-0"></div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm leading-[16px] tracking-[-0.01em] text-muted-foreground">Patrick Collison</p>
                  <p className="text-sm leading-[16px] tracking-[-0.01em] text-muted-foreground">CEO & Co-Founder, Stripe</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col gap-5 p-6 bg-[#FCFBF8] border border-[#D8D6CF] rounded-3xl">
              <h3 className="text-2xl font-medium leading-[100%] tracking-[-0.02em] text-foreground">Stripe</h3>
              <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-[#D8D6CF] flex-shrink-0"></div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm leading-[16px] tracking-[-0.01em] text-muted-foreground">Patrick Collison</p>
                  <p className="text-sm leading-[16px] tracking-[-0.01em] text-muted-foreground">CEO & Co-Founder, Stripe</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col gap-5 p-6 bg-[#FCFBF8] border border-[#D8D6CF] rounded-3xl">
              <h3 className="text-2xl font-medium leading-[100%] tracking-[-0.02em] text-foreground">Stripe</h3>
              <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-[#D8D6CF] flex-shrink-0"></div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm leading-[16px] tracking-[-0.01em] text-muted-foreground">Patrick Collison</p>
                  <p className="text-sm leading-[16px] tracking-[-0.01em] text-muted-foreground">CEO & Co-Founder, Stripe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Section */}
      <section className="py-16 bg-transparent z-10">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
          <BlurFade delay={0.2} inView>
            <div className="bg-[#F7F4ED] border border-[#D8D6CF] rounded-3xl p-6 md:p-8 lg:p-12">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-[#5F5F5D]">
                  <path d="M12 8L20 16L28 8M12 24L20 32L28 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-2xl font-semibold text-[#5F5F5D]">AppDirect</span>
              </div>
            </div>

            {/* Quote */}
            <div className="max-w-[960px] mx-auto mb-6">
              <p className="text-2xl md:text-3xl lg:text-[32px] leading-[1.25] text-center tracking-[-0.01em] text-[#5F5F5D]">
                "The time savings alone translate into real dollars. Last year managing breakout sessions in spreadsheets took weeks of staff time. This year, Lovable cut that down to days."
              </p>
            </div>

            {/* Author */}
            <div className="flex flex-col items-center gap-0.5">
              <p className="text-sm leading-4 tracking-[-0.01em] text-center text-[#5F5F5D]">
                Jeffrey Leggo
              </p>
              <p className="text-sm leading-4 tracking-[-0.01em] text-center text-[#5F5F5D]">
                Sr. Director, Product Marketing
              </p>
            </div>
          </div>
          </BlurFade>
        </div>
      </section>

      {/* Features Showcase Section */}
      <section className="py-24 bg-transparent z-10">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
          <BlurFade delay={0.2} inView>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {/* Card 1 */}
            <div className="flex flex-col gap-5 p-5 pb-6 bg-[#F7F4ED] border border-[#ECEAE4] rounded-3xl">
              <div className="relative w-full h-[296px] bg-gradient-to-br from-pink-400 via-purple-400 to-orange-300 rounded-xl overflow-hidden flex items-center justify-center">
                <span className="text-base uppercase text-white/70">IMAGE/ANIMATION</span>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-foreground">
                    Build by describing what you want
                  </h3>
                  <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                    Chat with Lovable like talking to a developer. Describe your vision, drop in screenshots, or reference designs—Lovable builds it.
                  </p>
                </div>
                <a href="#" className="flex items-center gap-2 text-base text-foreground hover:opacity-80 transition-opacity">
                  <span>Contact sales</span>
                  <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                    <path d="M1 1L5 5.5L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-5 p-5 pb-6 bg-[#F7F4ED] border border-[#ECEAE4] rounded-3xl">
              <div className="relative w-full h-[296px] bg-gradient-to-br from-blue-300 via-purple-400 to-pink-400 rounded-xl overflow-hidden flex items-center justify-center">
                <span className="text-base uppercase text-white/70">IMAGE/ANIMATION</span>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-foreground">
                    Build by describing what you want
                  </h3>
                  <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                    Chat with Lovable like talking to a developer. Describe your vision, drop in screenshots, or reference designs—Lovable builds it.
                  </p>
                </div>
                <a href="#" className="flex items-center gap-2 text-base text-foreground hover:opacity-80 transition-opacity">
                  <span>Contact sales</span>
                  <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                    <path d="M1 1L5 5.5L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-5 p-5 pb-6 bg-[#F7F4ED] border border-[#ECEAE4] rounded-3xl">
              <div className="relative w-full h-[296px] bg-gradient-to-br from-pink-300 via-orange-300 to-pink-500 rounded-xl overflow-hidden flex items-center justify-center">
                <span className="text-base uppercase text-white/70">IMAGE/ANIMATION</span>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-foreground">
                    Build by describing what you want
                  </h3>
                  <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                    Chat with Lovable like talking to a developer. Describe your vision, drop in screenshots, or reference designs—Lovable builds it.
                  </p>
                </div>
                <a href="#" className="flex items-center gap-2 text-base text-foreground hover:opacity-80 transition-opacity">
                  <span>Contact sales</span>
                  <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                    <path d="M1 1L5 5.5L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          </BlurFade>
        </div>
      </section>

      {/* Make your PRD real Section */}
      <section className="py-[120px] bg-[#F7F4ED] z-10">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
          {/* Header */}
          <div className="mb-10 flex flex-col gap-6 max-w-[668px]">
            <BlurFade delay={0.2} inView>
              <h2 className="text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground">
                Make your PRD real
              </h2>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-base leading-[22px] tracking-[-0.01em] text-foreground">
                Pull context from Jira, Confluence, Notion, or Linear. Lovable reads your tickets and linked documentation, then builds a working prototype you can share with your team.
              </p>
            </BlurFade>
          </div>

          {/* Content Container */}
          <div className="bg-[#FCFBF8] rounded-3xl p-4 flex flex-col lg:flex-row gap-10">
            {/* Left - Blue Mockup */}
            <div className="flex-1 relative bg-[#70A7FF] rounded-xl overflow-hidden min-h-[440px] lg:min-h-[654px]">
              {/* Gradient Background Effects */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-[150%] h-[150%] -left-[50%] -top-[50%] bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 opacity-60 blur-3xl"></div>
              </div>
              
              {/* Chat Interface */}
              <div className="absolute left-[10%] top-[30%] w-[80%] bg-[#FCFBF8]/80 backdrop-blur-sm border border-[#ECEAE4] rounded-[34px] p-5 shadow-xl">
                <p className="text-xl text-muted-foreground mb-4">Let's build something new</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 5V15M5 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                    <button className="px-3 py-2 rounded-full border border-muted flex items-center gap-2 text-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                      </svg>
                      Attach
                    </button>
                    <button className="px-3 py-2 rounded-full border border-muted flex items-center gap-2 text-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <path d="M9 3v18"/>
                      </svg>
                      Workspaces
                    </button>
                  </div>
                </div>
              </div>

              {/* PDF Icon */}
              <div className="absolute left-[20%] bottom-[30%] w-[83px] h-[83px] bg-white rounded-lg shadow-lg flex items-center justify-center">
                <div className="bg-[#D92D20] text-white text-xs font-bold px-2 py-1 rounded">PDF</div>
              </div>
            </div>

            {/* Right - Feature List */}
            <div className="flex-1 flex flex-col justify-center gap-6">
              {/* Feature 1 */}
              <div className="border-t border-[#ECEAE4] pt-5">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-foreground mb-2">
                      Skip the eng backlog
                    </h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                      Describe what you want in plain language and use visual editing to refine designs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="border-t border-[#ECEAE4] pt-5">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-foreground mb-2">
                      Bring in your team
                    </h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                      Export to Miro for team collaboration. Designers annotate, PMs map flows, developers add notes. Import back to implement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="border-t border-[#ECEAE4] pt-5">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-foreground mb-2">
                      Make it pop
                    </h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                      Use Themes to match your brand, generate custom images with AI, and refine with visual editing. Show stakeholders polished work, not rough wireframes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="border-t border-[#ECEAE4] pt-5">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-foreground mb-2">
                      Take it for a spin
                    </h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                      Share with stakeholders and get real feedback. Test flows, surface issues, and validate assumptions before writing a single line of production code.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="border-t border-[#ECEAE4] pt-5">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-foreground mb-2">
                      Handoff to dev
                    </h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                      Sync to GitHub and hand off validated code. No ambiguity about requirements, no rework from miscommunication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-transparent z-10">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
          {/* Header */}
          <div className="mb-10 flex flex-col items-center gap-5">
            <BlurFade delay={0.2} inView>
              <h2 className="text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground text-center max-w-[548px]">
                Dream it. Build it. Ship it.
              </h2>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-base leading-[22px] tracking-[-0.01em] text-foreground text-center max-w-[548px]">
                Your idea doesn't need a technical cofounder. Lovable is your technical partner - build, iterate, and ship in hours, not months.
              </p>
            </BlurFade>
            <BlurFade delay={0.4} inView>
              <a href="#" className="flex items-center gap-2 text-base text-foreground hover:opacity-80 transition-opacity">
              <span>Learn more</span>
              <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                <path d="M1 1L5 5.5L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            </BlurFade>
          </div>

          {/* Stats Grid */}
          <BlurFade delay={0.5} inView>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {/* Stat 1 */}
            <div className="flex flex-col justify-between p-6 bg-[#F7F4ED] rounded-3xl min-h-[328px]">
              <div className="flex flex-col gap-5">
                <h3 className="text-[64px] font-normal leading-[100%] tracking-[-0.01em] text-foreground">64%</h3>
                <p className="text-base leading-[24px] tracking-[-0.01em] text-muted-foreground">
                  Do eiusmod tempor incididunt ut labore et dolore magna Do eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col justify-between p-6 bg-[#F7F4ED] rounded-3xl min-h-[328px]">
              <div className="flex flex-col gap-5">
                <h3 className="text-[64px] font-normal leading-[100%] tracking-[-0.01em] text-foreground">200M+</h3>
                <p className="text-base leading-[24px] tracking-[-0.01em] text-muted-foreground">
                  Do eiusmod tempor incididunt ut labore et dolore magna Do eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col justify-between p-6 bg-[#F7F4ED] rounded-3xl min-h-[328px]">
              <div className="flex flex-col gap-5">
                <h3 className="text-[64px] font-normal leading-[100%] tracking-[-0.01em] text-foreground">250M+</h3>
                <p className="text-base leading-[24px] tracking-[-0.01em] text-muted-foreground">
                  Do eiusmod tempor incididunt ut labore et dolore magna Do eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col justify-between p-6 bg-[#F7F4ED] rounded-3xl min-h-[328px]">
              <div className="flex flex-col gap-5">
                <h3 className="text-[64px] font-normal leading-[100%] tracking-[-0.01em] text-foreground">23.5%</h3>
                <p className="text-base leading-[24px] tracking-[-0.01em] text-muted-foreground">
                  Do eiusmod tempor incididunt ut labore et dolore magna Do eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </div>
          </div>
          </BlurFade>
        </div>
      </section>

      {/* Expandable Carousel Section */}
      <section className="py-16 bg-transparent z-10">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
          <div className="flex flex-col items-center gap-10">
            {/* Carousel Cards - Mobile: Stack vertically, Tablet+: Horizontal carousel */}
            <div className="hidden md:flex items-start gap-1 w-full justify-center">
              {/* Card 1 */}
              <div 
                onClick={() => setCurrentSlide3(0)}
                className={`flex flex-col bg-[#FCFBF8] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex-shrink-0 ${
                  currentSlide3 === 0 ? 'md:w-[400px] lg:w-[592px]' : 'md:w-[180px] lg:w-[240px]'
                }`}
              >
                <div className="w-full h-[240px] bg-[#5770FF] rounded-3xl flex-shrink-0"></div>
                <div className={`transition-all duration-500 ${
                  currentSlide3 === 0 ? 'p-8' : 'p-8 px-8'
                }`}>
                  <div className="flex flex-col gap-4">
                    <h3 className={`font-medium leading-[110%] tracking-[-0.01em] text-[#1B1B1B] transition-all duration-500 ${
                      currentSlide3 === 0 ? 'text-5xl' : 'text-xl'
                    }`}>
                      {currentSlide3 === 0 ? 'Join the next wave of change makers' : 'Join the next wave of change makers and more'}
                    </h3>
                    <p className={`font-normal leading-6 text-[#1B1B1B] transition-all duration-500 ${
                      currentSlide3 === 0 ? 'text-base opacity-100 max-h-48' : 'text-base opacity-0 max-h-0 overflow-hidden'
                    }`}>
                      Your idea doesn't need a technical cofounder. Lovable is your technical partner - build, iterate, and ship in hours, not months.
                    </p>
                    <a href="#" className="flex items-center gap-2 text-[#1F68DB] text-base hover:opacity-80 transition-opacity">
                      <span>Learn more</span>
                      <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                        <path d="M1 1L5 5.5L1 10" stroke="#1F68DB" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Vertical Separator 1 */}
              <div className="h-[400px] md:h-[500px] lg:h-[600px] w-px bg-border flex-shrink-0"></div>

              {/* Card 2 */}
              <div 
                onClick={() => setCurrentSlide3(1)}
                className={`flex flex-col bg-[#FCFBF8] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex-shrink-0 ${
                  currentSlide3 === 1 ? 'md:w-[400px] lg:w-[592px]' : 'md:w-[180px] lg:w-[240px]'
                }`}
              >
                <div className="w-full h-[240px] bg-[#ECEAE4] rounded-3xl flex-shrink-0"></div>
                <div className={`transition-all duration-500 ${
                  currentSlide3 === 1 ? 'p-8' : 'p-8 px-8'
                }`}>
                  <div className="flex flex-col gap-4">
                    <h3 className={`font-medium leading-[110%] tracking-[-0.01em] text-[#1B1B1B] transition-all duration-500 ${
                      currentSlide3 === 1 ? 'text-5xl' : 'text-xl'
                    }`}>
                      {currentSlide3 === 1 ? 'Ship faster than ever' : 'Ship faster than ever'}
                    </h3>
                    <p className={`font-normal leading-6 text-[#1B1B1B] transition-all duration-500 ${
                      currentSlide3 === 1 ? 'text-base opacity-100 max-h-48' : 'text-base opacity-0 max-h-0 overflow-hidden'
                    }`}>
                      Turn your ideas into production-ready applications in hours, not months. No coding required, just describe what you want.
                    </p>
                    <a href="#" className="flex items-center gap-2 text-[#1F68DB] text-base hover:opacity-80 transition-opacity">
                      <span>Learn more</span>
                      <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                        <path d="M1 1L5 5.5L1 10" stroke="#1F68DB" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Vertical Separator 2 */}
              <div className="h-[400px] md:h-[500px] lg:h-[600px] w-px bg-border flex-shrink-0"></div>

              {/* Card 3 */}
              <div 
                onClick={() => setCurrentSlide3(2)}
                className={`flex flex-col bg-[#FCFBF8] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex-shrink-0 ${
                  currentSlide3 === 2 ? 'md:w-[400px] lg:w-[592px]' : 'md:w-[180px] lg:w-[240px]'
                }`}
              >
                <div className="w-full h-[240px] bg-[#5770FF] rounded-3xl flex-shrink-0"></div>
                <div className={`transition-all duration-500 ${
                  currentSlide3 === 2 ? 'p-8' : 'p-8 px-8'
                }`}>
                  <div className="flex flex-col gap-4">
                    <h3 className={`font-medium leading-[110%] tracking-[-0.01em] text-[#1B1B1B] transition-all duration-500 ${
                      currentSlide3 === 2 ? 'text-5xl' : 'text-xl'
                    }`}>
                      {currentSlide3 === 2 ? 'Full code ownership' : 'Full code ownership'}
                    </h3>
                    <p className={`font-normal leading-6 text-[#1B1B1B] transition-all duration-500 ${
                      currentSlide3 === 2 ? 'text-base opacity-100 max-h-48' : 'text-base opacity-0 max-h-0 overflow-hidden'
                    }`}>
                      Export your code anytime. Deploy anywhere. You own everything we build together, with complete freedom and flexibility.
                    </p>
                    <a href="#" className="flex items-center gap-2 text-[#1F68DB] text-base hover:opacity-80 transition-opacity">
                      <span>Learn more</span>
                      <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                        <path d="M1 1L5 5.5L1 10" stroke="#1F68DB" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Vertical Separator 3 */}
              <div className="h-[400px] md:h-[500px] lg:h-[600px] w-px bg-border flex-shrink-0"></div>

              {/* Card 4 */}
              <div 
                onClick={() => setCurrentSlide3(3)}
                className={`flex flex-col bg-[#FCFBF8] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex-shrink-0 ${
                  currentSlide3 === 3 ? 'md:w-[400px] lg:w-[592px]' : 'md:w-[180px] lg:w-[240px]'
                }`}
              >
                <div className="w-full h-[240px] bg-[#5770FF] rounded-3xl flex-shrink-0"></div>
                <div className={`transition-all duration-500 ${
                  currentSlide3 === 3 ? 'p-8' : 'p-8 px-8'
                }`}>
                  <div className="flex flex-col gap-4">
                    <h3 className={`font-medium leading-[110%] tracking-[-0.01em] text-[#1B1B1B] transition-all duration-500 ${
                      currentSlide3 === 3 ? 'text-5xl' : 'text-xl'
                    }`}>
                      {currentSlide3 === 3 ? 'Built for scale' : 'Built for scale'}
                    </h3>
                    <p className={`font-normal leading-6 text-[#1B1B1B] transition-all duration-500 ${
                      currentSlide3 === 3 ? 'text-base opacity-100 max-h-48' : 'text-base opacity-0 max-h-0 overflow-hidden'
                    }`}>
                      From prototype to production. Scale from your first user to millions with confidence using production-ready infrastructure.
                    </p>
                    <a href="#" className="flex items-center gap-2 text-[#1F68DB] text-base hover:opacity-80 transition-opacity">
                      <span>Learn more</span>
                      <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                        <path d="M1 1L5 5.5L1 10" stroke="#1F68DB" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Stack cards vertically */}
            <div className="md:hidden flex flex-col gap-6 w-full">
              {[0, 1, 2, 3].map((index) => (
                <div 
                  key={index}
                  className="flex flex-col bg-[#FCFBF8] rounded-3xl overflow-hidden w-full"
                >
                  <div className={`w-full h-[200px] rounded-3xl ${
                    index === 1 ? 'bg-[#ECEAE4]' : 'bg-[#5770FF]'
                  }`}></div>
                  <div className="p-6">
                    <div className="flex flex-col gap-4">
                      <h3 className="font-medium text-2xl leading-[110%] tracking-[-0.01em] text-[#1B1B1B]">
                        {index === 0 && 'Join the next wave of change makers'}
                        {index === 1 && 'Ship faster than ever'}
                        {index === 2 && 'Full code ownership'}
                        {index === 3 && 'Built for scale'}
                      </h3>
                      <p className="font-normal text-base leading-6 text-[#1B1B1B]">
                        {index === 0 && "Your idea doesn't need a technical cofounder. Lovable is your technical partner - build, iterate, and ship in hours, not months."}
                        {index === 1 && "Turn your ideas into production-ready applications in hours, not months. No coding required, just describe what you want."}
                        {index === 2 && "Export your code anytime. Deploy anywhere. You own everything we build together, with complete freedom and flexibility."}
                        {index === 3 && "From prototype to production. Scale from your first user to millions with confidence using production-ready infrastructure."}
                      </p>
                      <a href="#" className="flex items-center gap-2 text-[#1F68DB] font-normal text-base">
                        Learn more
                        <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L5 5.5L1 10" stroke="#1F68DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination Dots - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-1.5">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide3(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentSlide3 === index ? 'bg-[#1F68DB]' : 'bg-[#D9D9D9]'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-transparent z-10">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground text-center">
              Ready to build?
            </h2>
            <p className="text-base leading-[22px] tracking-[-0.01em] text-foreground text-center max-w-[392px]">
              No technical cofounder needed. No months of searching. Just you, your idea, and Lovable.
            </p>
            <a href="#" className="inline-block">
              <Button 
                size="lg" 
                className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-4"
              >
                Start building
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Brand Images Section */}
      <section className="py-12 bg-transparent z-10">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
          <BlurFade delay={0.2} inView>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
            <img 
              src={lovableGradient} 
              alt="Lovable gradient design" 
              className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[500px] h-auto rounded-xl"
            />
            <img 
              src={lovableDark} 
              alt="Lovable brand dark theme" 
              className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[500px] h-auto rounded-xl"
            />
            <img 
              src={gradientWaves} 
              alt="Gradient waves design" 
              className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[500px] h-auto rounded-xl"
            />
            <img 
              src={gradientCircles} 
              alt="Gradient circles design" 
              className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[500px] h-auto rounded-xl"
            />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Enterprise Support Section */}
      <section className="py-24 bg-transparent z-10">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
          <BlurFade delay={0.2} inView>
            <div className="bg-[#272725] rounded-3xl p-4 flex flex-col lg:flex-row gap-5">
            {/* Left - Content */}
            <div className="flex-1 flex flex-col justify-between py-10 px-0">
              <div className="flex flex-col gap-3">
                <p className="text-xs uppercase tracking-wide text-[#C5C1B9]">
                  Enterprise plan and support
                </p>
                <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-[#FCFBF8]">
                  Dedicated support for enterprise customers
                </h3>
                <ul className="text-base leading-9 tracking-[-0.01em] text-[#C5C1B9] list-disc list-inside space-y-0">
                  <li>Priority response times to keep your team productive</li>
                  <li>Comprehensive onboarding to configure your workspace and get building</li>
                  <li>Ongoing training to master Lovable and adopt best practices</li>
                  <li>Direct product team access for custom integrations and roadmap input</li>
                  <li>Dedicated guidance to deploy and scale AI professionally</li>
                </ul>
              </div>
              <a href="#" className="flex items-center gap-2 text-base text-[#FCFBF8] hover:opacity-80 transition-opacity w-fit">
                <span>Contact sales</span>
                <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                  <path d="M1 1L5 5.5L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Right - Gradient Mockup */}
            <div className="flex-1 relative bg-[#0E3092] rounded-xl overflow-hidden min-h-[448px]">
              {/* Gradient Background Effects */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-[200%] h-[200%] -left-[50%] -top-[100%] bg-gradient-to-br from-blue-500 via-purple-400 to-pink-500 opacity-60 blur-3xl"></div>
              </div>
              
              {/* Blur overlay */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/[0.01] backdrop-blur-[50px] transform rotate-90"></div>
              </div>
            </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Enterprise Security Section */}
      <section className="py-24 bg-transparent z-10">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
          <BlurFade delay={0.2} inView>
            <div className="flex flex-col gap-10">
            {/* Header */}
            <div className="flex flex-col items-center">
              <h2 className="text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-center text-foreground">
                Enterprise-grade security
              </h2>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {/* Card 1 */}
              <div className="flex flex-col gap-5 p-6 bg-[#F7F4ED] rounded-3xl min-h-[200px]">
                <div className="w-8 h-8">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="1" y="1" width="30" height="30" rx="3.2" stroke="#5683FF" strokeWidth="1.75"/>
                    <rect x="8" y="15" width="16" height="2" rx="1" fill="#5683FF"/>
                    <rect x="15" y="8" width="16" height="2" rx="1" transform="rotate(90 15 8)" fill="#5683FF"/>
                  </svg>
                </div>
                <p className="text-base leading-6 tracking-[-0.01em] text-[#404040]">
                  Control access with role-based permissions (Owner, Admin, Member) and track every action with audit logs
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col gap-5 p-6 bg-[#F7F4ED] rounded-3xl min-h-[200px]">
                <div className="w-8 h-8">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="16" y="2" width="19.8" height="19.8" transform="rotate(45 16 2)" stroke="#FF66F4" strokeWidth="1.75"/>
                  </svg>
                </div>
                <p className="text-base leading-6 tracking-[-0.01em] text-[#404040]">
                  Enterprise authentication with SSO and SAML integration for seamless team access
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col gap-5 p-6 bg-[#F7F4ED] rounded-3xl min-h-[200px]">
                <div className="w-8 h-8">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M6 4L26 4L26 20L6 28L6 4Z" stroke="#FFA41B" strokeWidth="1.75" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-base leading-6 tracking-[-0.01em] text-[#404040]">
                  Your code syncs to your GitHub repository so you always own what you build
                </p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col gap-5 p-6 bg-[#F7F4ED] rounded-3xl min-h-[200px]">
                <div className="w-8 h-8">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="3" y="3" width="11" height="11" rx="1.6" stroke="#FF6600" strokeWidth="1.75"/>
                    <rect x="18" y="3" width="11" height="11" rx="1.6" stroke="#FF6600" strokeWidth="1.75"/>
                    <rect x="3" y="18" width="11" height="11" rx="1.6" stroke="#FF6600" strokeWidth="1.75"/>
                    <rect x="18" y="18" width="11" height="11" rx="1.6" stroke="#FF6600" strokeWidth="1.75"/>
                  </svg>
                </div>
                <p className="text-base leading-6 tracking-[-0.01em] text-[#404040]">
                  Built on modern, maintainable technologies your team already knows: React, Supabase, and Tailwind
                </p>
              </div>
            </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Integrations and Ecosystem Section */}
      <section className="py-[120px] bg-[#1B1B1B] z-10 rounded-3xl">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
          <BlurFade delay={0.2} inView>
            <div className="flex flex-col gap-16">
            {/* Header */}
            <div className="flex flex-col items-center gap-6">
              <h2 className="text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-center text-white">
                Integrations and ecosystem
              </h2>
              <p className="text-base leading-[22px] tracking-[-0.01em] text-center text-white/80 max-w-[600px]">
                Your idea doesn't need a technical cofounder. Lovable is your technical partner - build, iterate, and ship in hours, not months.
              </p>
              <a href="#" className="flex items-center gap-2 text-base text-white hover:opacity-80 transition-opacity">
                <span>Explore all connectors</span>
                <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
                  <path d="M1 1L5 5.5L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left side - Mockup */}
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[600px] h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 p-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex gap-8 items-center">
                      <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center">
                        <span className="text-white text-xs font-medium">Shopify</span>
                      </div>
                      <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center">
                        <span className="text-white text-xs font-medium">Notion</span>
                      </div>
                      <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center">
                        <span className="text-white text-xs font-medium">Stripe</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-8">
                    <span className="text-white/40 text-sm">by Lovable</span>
                  </div>
                </div>
              </div>

              {/* Right side - Use Cases */}
              <div className="flex flex-col gap-8">
                {/* For Prototypes */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-white">
                    For Prototypes
                  </h3>
                  <p className="text-base leading-[22px] tracking-[-0.01em] text-white/70">
                    Turn a PRD or Figma file into a clickable prototype you can test with real users today
                  </p>
                </div>

                {/* For Internal tools */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-white">
                    For Internal tools
                  </h3>
                  <p className="text-base leading-[22px] tracking-[-0.01em] text-white/70">
                    Bring in data from your CRM to spin up custom dashboards and everyday workflows your team actually needs
                  </p>
                </div>

                {/* For Customer-facing apps */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-medium leading-[110%] tracking-[-0.01em] text-white">
                    For Customer-facing apps
                  </h3>
                  <p className="text-base leading-[22px] tracking-[-0.01em] text-white/70">
                    Add Stripe payments and email capabilities to launch ROI calculators, customer portals, or signup flows
                  </p>
                </div>
              </div>
            </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F7F4ED] z-10 rounded-3xl">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
          <BlurFade delay={0.2} inView>
            <div className="flex flex-col lg:flex-row gap-10 p-4">
            {/* Left side - Heading */}
            <div className="flex-1 flex items-center lg:pr-20">
              <h2 className="text-[48px] font-semibold leading-[110%] tracking-[-0.03em] text-foreground">
                Frequently Asked Questions
              </h2>
            </div>

            {/* Right side - Accordion */}
            <div className="flex-1">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-[#D8D6CF]">
                  <AccordionTrigger className="text-left text-2xl font-medium leading-[110%] tracking-[-0.01em] text-foreground hover:no-underline py-5">
                    How does it work
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                    Chat with Lovable like talking to a developer. Describe your vision, drop in screenshots, or reference designs. Chat with Lovable like talking to a developer. Describe your vision, drop in screenshots, or reference designsChat with Lovable like talking to a developer. Describe your vision, drop in screenshots, or reference designs—Lovable builds it.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-[#D8D6CF]">
                  <AccordionTrigger className="text-left text-2xl font-medium leading-[110%] tracking-[-0.01em] text-foreground hover:no-underline py-5">
                    Build by describing what you want. Build by describing what you want.
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                    Content for this question goes here.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-[#D8D6CF]">
                  <AccordionTrigger className="text-left text-2xl font-medium leading-[110%] tracking-[-0.01em] text-foreground hover:no-underline py-5">
                    Build by describing what you want. Build by describing what you want.
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                    Content for this question goes here.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-[#D8D6CF] border-b">
                  <AccordionTrigger className="text-left text-2xl font-medium leading-[110%] tracking-[-0.01em] text-foreground hover:no-underline py-5">
                    Build by describing what you want. Build by describing what you want.
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-[22px] tracking-[-0.01em] text-muted-foreground">
                    Content for this question goes here.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="flex w-full items-center justify-center bg-transparent py-24">
        <div className="mx-auto w-full px-4 md:px-8 lg:px-16">
          <BlurFade delay={0.2} inView>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-48 bg-foreground rounded-3xl p-8 lg:p-20">
            {/* Left side - Heading and Buttons */}
            <div className="flex flex-col gap-6 lg:max-w-[488px]">
              <h2 className="text-[64px] font-semibold leading-[110%] tracking-[-0.03em] text-background">
                Built by founders, for founders
              </h2>
              <div className="flex gap-2.5 flex-row">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full bg-background text-foreground hover:bg-background/90">
                    Start building
                  </Button>
                </a>
                <a href="#" className="inline-block">
                  <Button variant="outline" size="lg" className="rounded-[20px] border border-background bg-transparent text-background hover:bg-background/10">
                    Contact sales
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" className="ml-0.5">
                      <path d="M1 8L8 1M8 1H1M8 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Button>
                </a>
              </div>
            </div>

            {/* Right side - Feature List */}
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded border border-[#ECEAE4] flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M10 3L4.5 8.5L2 6" stroke="#FCFBF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-2xl leading-[32px] tracking-[-0.01em] text-background">Full code ownership</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded border border-[#ECEAE4] flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M10 3L4.5 8.5L2 6" stroke="#FCFBF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-2xl leading-[32px] tracking-[-0.01em] text-background">Production-ready</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded border border-[#ECEAE4] flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M10 3L4.5 8.5L2 6" stroke="#FCFBF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-2xl leading-[32px] tracking-[-0.01em] text-background">10M products shipped</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded border border-[#ECEAE4] flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M10 3L4.5 8.5L2 6" stroke="#FCFBF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-2xl leading-[32px] tracking-[-0.01em] text-background">1.2 M businesses built on Lovable</span>
              </div>
            </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-5 text-center">
          <div className="flex flex-col items-center gap-8">
            {/* Brand Section */}
            <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="inline-block">
              <div className="space-y-4">
                <img src="/images/lovable-logo-text-light.svg" alt="Lovable" className="h-8 w-auto" />
                <p className="text-muted-foreground text-sm">Made with Lovable</p>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
    </div>
    </div>;
};
export default EnterprisePage;