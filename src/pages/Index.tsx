
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import CTAButton from '@/components/CTAButton';
import TestimonialCard from '@/components/TestimonialCard';
import QuoteForm from '@/components/QuoteForm';
import ProblemCard from '@/components/ProblemCard';
import BenefitCard from '@/components/BenefitCard';
import FAQSection from '@/components/FAQSection';
import { 
  ArrowUpRight, 
  ThermometerSnowflake, 
  Banknote, 
  Leaf, 
  HomeIcon, 
  Clock4, 
  BarChart, 
  CheckCircle2, 
  ThumbsUp,
  Zap,
  Calendar,
  HeartHandshake,
  Settings
} from 'lucide-react';

const Index = () => {
  // Animation on scroll effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* VSL/How It Works Section */}
      <section id="how-it-works" className="section-container bg-white">
        <div className="fade-in-section">
          <SectionTitle 
            preTitle="Simple Process"
            title="How It Works"
            description="Our streamlined approach makes upgrading to an air source heat pump easy and hassle-free."
          />
          
          <div className="relative max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-medium">
            <div className="absolute inset-0 bg-heat-800 flex items-center justify-center">
              {/* This would be a video in production */}
              <div className="text-white text-center p-8">
                <Zap className="w-16 h-16 mx-auto mb-4 animate-pulse-soft" />
                <h3 className="text-2xl font-semibold mb-2">Video Placeholder</h3>
                <p className="text-heat-300">A video explaining the benefits and installation process of heat pumps would appear here.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-heat-100 text-heat-600 rounded-full flex items-center justify-center mb-4">
                <span className="font-semibold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Request a Quote</h3>
              <p className="text-muted-foreground">Fill out our simple form to get a tailored quote based on your home's needs.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-heat-100 text-heat-600 rounded-full flex items-center justify-center mb-4">
                <span className="font-semibold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Home Assessment</h3>
              <p className="text-muted-foreground">Our experts conduct a thorough assessment to design the perfect system for you.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-heat-100 text-heat-600 rounded-full flex items-center justify-center mb-4">
                <span className="font-semibold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Installation</h3>
              <p className="text-muted-foreground">Our certified technicians handle the entire installation with minimal disruption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problems" className="section-container bg-heat-100">
        <div className="fade-in-section">
          <SectionTitle 
            preTitle="Why Change?"
            title="The Problem With Traditional Heating"
            description="Traditional heating systems are becoming increasingly problematic for homeowners and the environment."
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            <ProblemCard 
              icon={<ThermometerSnowflake className="h-10 w-10" />}
              title="Rising Energy Costs"
              description="Traditional gas and oil heating systems are becoming increasingly expensive to run, with energy prices reaching record highs."
            />
            
            <ProblemCard 
              icon={<Leaf className="h-10 w-10" />}
              title="Environmental Impact"
              description="Conventional heating is a major contributor to carbon emissions and climate change, with significant environmental consequences."
            />
            
            <ProblemCard 
              icon={<Banknote className="h-10 w-10" />}
              title="Inefficient Performance"
              description="Older heating systems waste energy, resulting in higher bills and inconsistent heating throughout your home."
            />
          </div>
          
          <div className="mt-12 text-center">
            <CTAButton href="#quote-form">
              Solve These Problems Today
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Solution/Benefits Section */}
      <section id="benefits" className="section-container">
        <div className="fade-in-section">
          <SectionTitle 
            preTitle="The Future of Home Heating"
            title="Why Choose Air Source Heat Pumps?"
            description="Modern, efficient, and environmentally friendly heating that transforms how you heat your home."
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            <BenefitCard 
              icon={<Banknote className="h-10 w-10" />}
              title="Lower Energy Bills"
              description="Reduce your heating costs by up to 50% compared to traditional gas or oil systems with higher efficiency technology."
            />
            
            <BenefitCard 
              icon={<Leaf className="h-10 w-10" />}
              title="Eco-Friendly"
              description="Cut your carbon footprint by up to 70% by switching to a renewable heating source that produces fewer emissions."
            />
            
            <BenefitCard 
              icon={<HomeIcon className="h-10 w-10" />}
              title="Enhanced Comfort"
              description="Enjoy consistent temperatures throughout your home with smart temperature control and efficient heat distribution."
            />
            
            <BenefitCard 
              icon={<Calendar className="h-10 w-10" />}
              title="Long Lifespan"
              description="Heat pumps typically last 15-20 years, much longer than conventional boilers, providing better long-term value."
            />
            
            <BenefitCard 
              icon={<Settings className="h-10 w-10" />}
              title="Low Maintenance"
              description="Requires minimal maintenance with fewer moving parts than combustion-based systems, reducing lifetime costs."
            />
            
            <BenefitCard 
              icon={<HeartHandshake className="h-10 w-10" />}
              title="Government Incentives"
              description="Take advantage of available grants and incentives designed to make green heating more affordable."
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="section-container bg-heat-100">
        <div className="fade-in-section">
          <SectionTitle 
            preTitle="Happy Customers"
            title="What Our Clients Say"
            description="Don't just take our word for it. Hear from homeowners who have already made the switch."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard 
              quote="Our energy bills have dropped by 40% since switching to an air source heat pump. The installation was quick and the team was professional throughout."
              author="Sarah Johnson"
              role="Homeowner"
              company="London"
            />
            
            <TestimonialCard 
              quote="I was skeptical at first, but after a full winter with our new heat pump system, I'm completely convinced. Our home stays at a perfect temperature and our bills are much lower."
              author="David Wilson"
              role="Homeowner"
              company="Manchester"
            />
            
            <TestimonialCard 
              quote="The assessment process was thorough and the team worked with us to design a system that fit our older property perfectly. We couldn't be happier with the results."
              author="Emma Thompson"
              role="Homeowner"
              company="Edinburgh"
            />
          </div>
          
          <div className="mt-12 flex justify-center items-center gap-4">
            <div className="flex items-center">
              <ThumbsUp className="h-5 w-5 text-heat-600 mr-2" />
              <span className="text-sm font-medium">97% of customers recommend us</span>
            </div>
            <div className="h-4 w-px bg-border mx-2" />
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-heat-600 mr-2" />
              <span className="text-sm font-medium">5-star rated installation service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form CTA Section */}
      <section id="quote-form" className="section-container">
        <div className="fade-in-section">
          <SectionTitle 
            preTitle="Get Started Today"
            title="Request Your Free Heat Pump Quote"
            description="Fill in the form below and one of our experts will prepare a custom quote for your home."
          />
          
          <QuoteForm />
        </div>
      </section>

      {/* The Roadmap Section */}
      <section id="roadmap" className="section-container bg-heat-100">
        <div className="fade-in-section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-heat-700 uppercase bg-heat-200 rounded-full">
                The Installation Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Your Heat Pump Roadmap
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-heat-600 text-white rounded-full flex items-center justify-center">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Initial Consultation</h3>
                    <p className="text-muted-foreground">We'll discuss your needs, property, and current heating system to understand your requirements.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-heat-600 text-white rounded-full flex items-center justify-center">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Technical Survey</h3>
                    <p className="text-muted-foreground">Our engineers will visit your property to assess its suitability and design a customized system.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-heat-600 text-white rounded-full flex items-center justify-center">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Detailed Proposal</h3>
                    <p className="text-muted-foreground">You'll receive a comprehensive proposal including system design, costs, and expected savings.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-heat-600 text-white rounded-full flex items-center justify-center">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Professional Installation</h3>
                    <p className="text-muted-foreground">Our certified technicians will install your system with minimal disruption to your home.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-heat-600 text-white rounded-full flex items-center justify-center">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Handover & Support</h3>
                    <p className="text-muted-foreground">We'll show you how to operate your new system and provide ongoing support for years to come.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-heat-700 uppercase bg-heat-200 rounded-full">
                Complete Package
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                What's Included
              </h2>
              <div className="glass-card p-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-heat-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Air Source Heat Pump Unit</h4>
                      <p className="text-sm text-muted-foreground">Premium, energy-efficient heat pump from leading manufacturers.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-heat-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Full Installation</h4>
                      <p className="text-sm text-muted-foreground">Complete installation by certified professionals with all necessary connections.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-heat-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Smart Controls</h4>
                      <p className="text-sm text-muted-foreground">Modern programmable thermostat and control system, often with smartphone integration.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-heat-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">System Configuration</h4>
                      <p className="text-sm text-muted-foreground">Expert setup and optimization for maximum efficiency in your specific property.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-heat-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Warranty & Support</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive warranty with dedicated after-sales support and maintenance options.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-heat-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Certification & Documentation</h4>
                      <p className="text-sm text-muted-foreground">All necessary certifications and documentation for compliance and incentive claims.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <CTAButton href="#quote-form">
              Start Your Heat Pump Journey
            </CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* About Us Section */}
      <section id="about" className="section-container bg-white">
        <div className="fade-in-section">
          <SectionTitle 
            preTitle="Our Company"
            title="About Us"
            description="We're dedicated to bringing sustainable heating solutions to homes across the country."
          />
          
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <p className="mb-4">
              With over a decade of experience in renewable energy solutions, our team of certified engineers and energy experts are passionate about helping homeowners transition to cleaner, more efficient heating systems.
            </p>
            <p className="mb-4">
              We believe that air source heat pumps represent the future of home heating – offering significant cost savings while reducing environmental impact. Our mission is to make this technology accessible to everyone through expert guidance, quality installations, and exceptional service.
            </p>
            <p>
              Every installation we complete is backed by our commitment to quality and customer satisfaction. We're proud to have helped thousands of homeowners transform their heating systems and reduce their carbon footprint.
            </p>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="flex items-center gap-2">
              <BarChart className="h-5 w-5 text-heat-600" />
              <span className="font-medium">MCS Certified</span>
            </div>
            <div className="h-4 w-px bg-border hidden md:block" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-heat-600" />
              <span className="font-medium">RECC Member</span>
            </div>
            <div className="h-4 w-px bg-border hidden md:block" />
            <div className="flex items-center gap-2">
              <ThumbsUp className="h-5 w-5 text-heat-600" />
              <span className="font-medium">TrustMark Approved</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-container bg-heat-600 text-white">
        <div className="fade-in-section">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Home Heating?</h2>
            <p className="text-xl mb-8 text-heat-100">Get your free quote today and join thousands of satisfied customers who have made the switch to sustainable heating.</p>
            <CTAButton 
              href="#quote-form"
              size="lg"
              className="bg-white text-heat-700 hover:bg-heat-100"
            >
              Get Your Free Quote
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-heat-800 text-heat-200 py-12">
        <div className="section-container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Heat Pump Quotes</h3>
              <p className="text-sm mb-4">Providing efficient, sustainable heating solutions for homes across the UK.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-heat-200 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-heat-200 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-heat-200 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors animated-underline">Home</a></li>
                <li><a href="#benefits" className="hover:text-white transition-colors animated-underline">Benefits</a></li>
                <li><a href="#quote-form" className="hover:text-white transition-colors animated-underline">Get a Quote</a></li>
                <li><a href="#about" className="hover:text-white transition-colors animated-underline">About Us</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors animated-underline">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@heatpumpquotes.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>0800 123 4567</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Energy Street, London, UK</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors animated-underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors animated-underline">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors animated-underline">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-heat-700 mt-8 pt-8 text-sm text-center">
            <p>© {new Date().getFullYear()} Heat Pump Quotes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
