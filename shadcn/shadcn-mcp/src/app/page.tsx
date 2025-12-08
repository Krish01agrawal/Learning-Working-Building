"use client";

import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Headline animation
    if (headlineRef.current) {
      const chars = headlineRef.current.querySelectorAll('.char');
      
      // Set initial state
      gsap.set(chars, { y: -100, opacity: 0 });
      
      // Animate characters with stagger
      gsap.to(chars, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.05,
        delay: 0.5
      });
    }

    // Testimonials scroll animation
    if (testimonialsRef.current) {
      const topRowCards = testimonialsRef.current.querySelectorAll('.top-row .testimonial-card');
      const bottomRowCards = testimonialsRef.current.querySelectorAll('.bottom-row .testimonial-card');
      
      // Set initial state for both rows
      gsap.set([topRowCards, bottomRowCards], { y: 100, opacity: 0 });
      
      // Animate top row
      gsap.to(topRowCards, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
      
      // Animate bottom row immediately after top row starts
      gsap.to(bottomRowCards, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        delay: 0.2 // Small delay so it starts right after top row begins
      });
    }
  }, []);

  const renderAnimatedText = (text: string, className: string = "") => {
    return text.split('').map((char, index) => (
      <span key={index} className={`char inline-block ${className}`}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">StatsAI</span>
            </div>

            {/* Navigation Links */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                    Features
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                    Analytics
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                    Integrations
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                    Support
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-sm">
                Login
              </Button>
              <Button className="text-sm">
                Join up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-end justify-start overflow-hidden">
        {/* Unicorn.studio Interactive Background Element */}
        <div 
          id="unicorn-studio-background"
          className="absolute z-0"
          style={{
            left: '-10%',
            right: '-10%', 
            top: 0,
            bottom: 0,
            width: '120%',
            height: '100%'
          }}
          aria-label="Interactive background element for unicorn.studio integration"
        >
          <div 
            data-us-project="ttTHKLjD2jYPnTuE7Adk" 
            style={{width: '100%', height: '100%', transform: 'translateX(15%)'}}
          ></div>
          <script 
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.32/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();`
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 pb-20">
          <div className="max-w-4xl">
            <div 
              ref={headlineRef}
              className="overflow-hidden"
            >
              <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
                <div className="overflow-hidden">
                  {renderAnimatedText("INTELLIGENT")}
                </div>
                <div className="overflow-hidden">
                  {renderAnimatedText("ANALYTICS,")}
                </div>
                <div className="overflow-hidden">
                  <span className="text-primary">
                    {renderAnimatedText("FINALLY.")}
                  </span>
                </div>
              </h1>
            </div>
            <Button size="lg" className="text-lg px-8 py-6">
              Try it out
            </Button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose StatsAI?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your website data into actionable insights with our AI-powered analytics platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Real-time Analytics</h3>
              <p className="text-muted-foreground">
                Get instant insights into your website performance with our advanced AI-driven analytics engine.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Sales Optimization</h3>
              <p className="text-muted-foreground">
                Boost your conversion rates with intelligent recommendations and automated optimization tools.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI-Powered Insights</h3>
              <p className="text-muted-foreground">
                Leverage machine learning to uncover hidden patterns and opportunities in your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to understand and optimize your website performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Advanced Dashboard</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our intuitive dashboard provides comprehensive insights into your website's performance, 
                user behavior, and conversion metrics all in one place.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Real-time visitor tracking
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Conversion funnel analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Custom report generation
                </li>
              </ul>
            </div>
            
            <div className="bg-muted/50 p-8 rounded-lg border-2 border-dashed border-muted-foreground/20">
              <div className="text-center text-muted-foreground">
                <p className="text-lg mb-2">Dashboard Preview</p>
                <p className="text-sm">Interactive dashboard will be integrated here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See why thousands of businesses choose StatsAI for their analytics needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2M+</div>
              <div className="text-muted-foreground">Data Points</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2">Enterprise Ready</Badge>
            <Badge variant="secondary" className="px-4 py-2">SOC 2 Compliant</Badge>
            <Badge variant="secondary" className="px-4 py-2">GDPR Compliant</Badge>
            <Badge variant="secondary" className="px-4 py-2">ISO 27001</Badge>
          </div>
        </div>
      </section>

      {/* Animated Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 overflow-hidden">
        <div className="container mx-auto px-6 mb-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say about StatsAI.
            </p>
          </div>
        </div>
        
        {/* Top Row - Animate Left */}
        <div className="top-row flex animate-marquee-left">
          {[
            { name: "Sarah Chen", company: "TechFlow", quote: "StatsAI revolutionized our data insights.", avatar: "SC" },
            { name: "Michael Rodriguez", company: "DataCorp", quote: "Incredible AI-powered analytics platform.", avatar: "MR" },
            { name: "Emily Watson", company: "GrowthLab", quote: "Best investment we've made for our business.", avatar: "EW" },
            { name: "James Thompson", company: "AnalyticsPro", quote: "Game-changing insights every day.", avatar: "JT" },
            { name: "Lisa Park", company: "DigitalFirst", quote: "Our conversion rates increased by 60%.", avatar: "LP" },
            { name: "David Kim", company: "EcommerceMax", quote: "Real-time analytics that actually work.", avatar: "DK" },
            { name: "Rachel Green", company: "MarketingHub", quote: "Finally, analytics that make sense.", avatar: "RG" },
            { name: "Alex Johnson", company: "StartupXYZ", quote: "Essential tool for any growing business.", avatar: "AJ" },
            { name: "Maria Garcia", company: "CloudTech", quote: "Outstanding support and features.", avatar: "MG" },
            { name: "Tom Wilson", company: "DataDriven", quote: "StatsAI transformed our decision making.", avatar: "TW" }
          ].map((testimonial, index) => (
            <Card key={`top-${index}`} className="testimonial-card flex-shrink-0 w-80 mx-4">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">{testimonial.name}</CardTitle>
                    <CardDescription className="text-sm">{testimonial.company}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic">
                  "{testimonial.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Row - Animate Right */}
        <div className="bottom-row flex animate-marquee-right mt-8">
          {[
            { name: "Jennifer Lee", company: "InnovateCo", quote: "StatsAI's AI insights are unmatched.", avatar: "JL" },
            { name: "Robert Brown", company: "ScaleUp", quote: "Perfect for enterprise-level analytics.", avatar: "RB" },
            { name: "Amanda Taylor", company: "DataViz", quote: "Beautiful dashboards and powerful insights.", avatar: "AT" },
            { name: "Kevin Martinez", company: "TechStart", quote: "Easy setup, incredible results.", avatar: "KM" },
            { name: "Sophie Anderson", company: "GrowthEngine", quote: "Our ROI increased by 200% with StatsAI.", avatar: "SA" },
            { name: "Chris Davis", company: "AnalyticsPlus", quote: "The future of web analytics is here.", avatar: "CD" },
            { name: "Nina Patel", company: "DigitalGrowth", quote: "StatsAI helped us understand our users.", avatar: "NP" },
            { name: "Mark Thompson", company: "CloudAnalytics", quote: "Reliable, fast, and incredibly insightful.", avatar: "MT" },
            { name: "Jessica White", company: "DataFirst", quote: "Best analytics platform we've used.", avatar: "JW" },
            { name: "Daniel Clark", company: "TechInnovate", quote: "StatsAI delivers on every promise.", avatar: "DC" }
          ].map((testimonial, index) => (
            <Card key={`bottom-${index}`} className="testimonial-card flex-shrink-0 w-80 mx-4">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <CardTitle className="text-base">{testimonial.name}</CardTitle>
                    <CardDescription className="text-sm">{testimonial.company}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic">
                  "{testimonial.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that's right for your business. No hidden fees, no surprises.
            </p>
          </div>
          
          <Tabs defaultValue="monthly" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly <Badge className="ml-2">Save 20%</Badge></TabsTrigger>
            </TabsList>
            
            <TabsContent value="monthly">
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Starter</CardTitle>
                    <CardDescription>Perfect for small businesses</CardDescription>
                    <div className="text-3xl font-bold">$29<span className="text-lg text-muted-foreground">/month</span></div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Up to 10,000 page views
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Basic analytics dashboard
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Email support
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Standard reports
                      </li>
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </CardContent>
                </Card>

                <Card className="border-primary">
                  <CardHeader>
                    <CardTitle>Professional</CardTitle>
                    <CardDescription>Most popular choice</CardDescription>
                    <div className="text-3xl font-bold">$99<span className="text-lg text-muted-foreground">/month</span></div>
                    <Badge className="w-fit">Most Popular</Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Up to 100,000 page views
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Advanced AI insights
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Priority support
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Custom reports
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        API access
                      </li>
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Enterprise</CardTitle>
                    <CardDescription>For large organizations</CardDescription>
                    <div className="text-3xl font-bold">Custom</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Unlimited page views
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        White-label solution
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        24/7 dedicated support
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Custom integrations
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        On-premise deployment
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full">Contact Sales</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="yearly">
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Starter</CardTitle>
                    <CardDescription>Perfect for small businesses</CardDescription>
                    <div className="text-3xl font-bold">$23<span className="text-lg text-muted-foreground">/month</span></div>
                    <Badge variant="secondary" className="w-fit">Save $72/year</Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Up to 10,000 page views
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Basic analytics dashboard
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Email support
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Standard reports
                      </li>
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </CardContent>
                </Card>

                <Card className="border-primary">
                  <CardHeader>
                    <CardTitle>Professional</CardTitle>
                    <CardDescription>Most popular choice</CardDescription>
                    <div className="text-3xl font-bold">$79<span className="text-lg text-muted-foreground">/month</span></div>
                    <Badge className="w-fit">Most Popular</Badge>
                    <Badge variant="secondary" className="w-fit">Save $240/year</Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Up to 100,000 page views
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Advanced AI insights
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Priority support
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Custom reports
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        API access
                      </li>
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Enterprise</CardTitle>
                    <CardDescription>For large organizations</CardDescription>
                    <div className="text-3xl font-bold">Custom</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Unlimited page views
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        White-label solution
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        24/7 dedicated support
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Custom integrations
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        On-premise deployment
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full">Contact Sales</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Seamless Integrations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect StatsAI with your favorite tools and platforms for a unified analytics experience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
            {[
              "Google Analytics", "Shopify", "WordPress", "Salesforce", 
              "HubSpot", "Mailchimp", "Stripe", "Zapier", 
              "Slack", "Microsoft Teams", "Notion", "Airtable"
            ].map((integration) => (
              <Card key={integration} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-muted rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-semibold">{integration.charAt(0)}</span>
                  </div>
                  <p className="text-sm font-medium">{integration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg">
              View All Integrations
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers. Find everything you need to know about StatsAI.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card rounded-lg px-6">
                <AccordionTrigger className="text-left">How does StatsAI's AI analytics work?</AccordionTrigger>
                <AccordionContent>
                  StatsAI uses advanced machine learning algorithms to analyze your website data and provide actionable insights. Our AI identifies patterns, predicts trends, and suggests optimizations to help improve your conversion rates and user experience.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-card rounded-lg px-6">
                <AccordionTrigger className="text-left">Is my data secure with StatsAI?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. We take data security seriously and are SOC 2 compliant. All data is encrypted in transit and at rest, and we follow strict privacy protocols to ensure your information is protected.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-card rounded-lg px-6">
                <AccordionTrigger className="text-left">Can I integrate StatsAI with my existing tools?</AccordionTrigger>
                <AccordionContent>
                  Yes! StatsAI integrates seamlessly with over 50+ popular tools including Google Analytics, Shopify, WordPress, Salesforce, HubSpot, and many more. We also provide a robust API for custom integrations.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-card rounded-lg px-6">
                <AccordionTrigger className="text-left">What kind of support do you offer?</AccordionTrigger>
                <AccordionContent>
                  We offer different levels of support based on your plan. Starter plans include email support, Professional plans get priority support, and Enterprise customers receive 24/7 dedicated support with a dedicated account manager.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-card rounded-lg px-6">
                <AccordionTrigger className="text-left">Can I try StatsAI before committing?</AccordionTrigger>
                <AccordionContent>
                  Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can also schedule a personalized demo with our team to see how StatsAI can work for your specific needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of businesses already using StatsAI to optimize their online presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="font-semibold">StatsAI</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 StatsAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}