/**
 * PORTFOLIO DATA - KIM KAREN AMBONG
 * 
 * All portfolio copy, links, contact details, case studies, pricing, and FAQs
 * are centralized in this file for quick and easy editing.
 */

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  benefit: string;
  description: string;
  deliverables: string[];
  tag: string;
}

export interface CaseStudyItem {
  id: string;
  category: string;
  title: string;
  clientType: string;
  timeline: string;
  problem: string;
  whatIDid: string[];
  toolsUsed: string[];
  results: string[];
  highlightMetric: string;
  highlightLabel: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  isPlaceholderNotice?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "Kim Karen Ambong",
    shortName: "Kim",
    title: "Freelance Virtual Assistant & GoHighLevel Funnel Builder",
    subtitle: "Automation & Systems Specialist",
    email: "ambongkimkarenp@gmail.com",
    phone: "+63 926 653 5055",
    location: "Taguig, Philippines",
    linkedinUrl: "https://www.linkedin.com/in/kim-karen-ambong-80462b2b7",
    bookingUrl: "mailto:ambongkimkarenp@gmail.com?subject=Discovery%20Call%20Inquiry%20-%20Kim%20Karen%20Ambong&body=Hi%20Kim%2C%0A%0AI'd%20like%20to%20chat%20about%20working%20together.%20Here%20is%20what%20I'm%20looking%20for%3A%0A%0A",
    availabilityStatus: "Available for New Projects",
    timezones: "Flexible for US (EST/PST), AU (AEST), & UK Hours",
    education: "BS Psychology — San Beda University, Manila",
  },

  hero: {
    badge: "Available for 1–2 New Clients",
    headline: "I help busy founders reclaim their time with high-converting funnels & automated systems.",
    subheadline: "Nearly 4 years of remote experience building GoHighLevel funnels, automating 100–500+ daily outreach emails, and running content & DM pipelines so you can focus on high-level growth.",
    primaryCta: "Book a Free Call",
    secondaryCta: "See My Work",
    stats: [
      {
        value: "3+ Years",
        label: "Remote Experience",
        subtext: "Coaches, founders & high-volume ops",
      },
      {
        value: "100–500+",
        label: "Outreach Emails/Day",
        subtext: "Automated via Google Apps Script & CRM",
      },
      {
        value: "Full Funnels",
        label: "Funnels & Workflows",
        subtext: "GoHighLevel, ManyChat, Mailchimp",
      },
    ],
  },

  about: {
    badge: "About Me",
    heading: "Systems that work hard, so you don't have to.",
    bioParagraphs: [
      "Hi, I'm Kim! Over the past nearly 4 years, I've worked remotely with founders, coaches, and growing businesses to remove bottlenecks from their day-to-day operations.",
      "With a background in psychology and high-volume customer service, I don't just assemble tech—I build lead generation funnels, outreach automations, and content workflows that your clients actually enjoy interacting with.",
      "When we work together, you get proactive communication, dependable turnaround, and organized systems that run smoothly even when you step away from your desk.",
    ],
    tools: [
      { name: "GoHighLevel", category: "Funnels & CRM" },
      { name: "Google Workspace", category: "Productivity" },
      { name: "Google Apps Script", category: "Custom Automation" },
      { name: "ManyChat", category: "Lead Nurture" },
      { name: "Mailchimp", category: "Email Marketing" },
      { name: "Canva", category: "Content & Design" },
      { name: "Notion", category: "Knowledge & SOPs" },
      { name: "Systeme.io", category: "Funnels" },
      { name: "Slack", category: "Communication" },
      { name: "Excel / Sheets", category: "Data & Tracking" },
      { name: "CapCut", category: "Short-Form Video" },
      { name: "Calendly", category: "Scheduling" },
    ],
    howIWork: [
      {
        step: "01",
        title: "Communicate Clearly",
        description: "No radio silence or guesswork. Daily updates, proactive questions before bottlenecks happen, and prompt responses across your preferred channels.",
      },
      {
        step: "02",
        title: "Deliver on Time",
        description: "Strict adherence to agreed timelines. I manage tasks with clear milestones and deliver launch-ready work ahead of deadlines.",
      },
      {
        step: "03",
        title: "Stay Organized",
        description: "From documented SOPs and clean CRM pipelines to structured Google Drive folders, every asset has its place and is easy to find.",
      },
    ],
    remoteReadiness: {
      internet: "Primary Converge Fiber 400 Mbps + Backup Globe 5G Mobile Hotspot",
      hardware: "AMD Ryzen 5 setup, Dual 24-inch monitors, 1080p webcam, noise-cancelling headset",
      workspace: "Quiet, dedicated home office with professional call background",
      languages: "English (Fluent, professional written & spoken), Filipino (Native)",
    },
  },

  services: [
    {
      id: "social-media",
      iconName: "Share2",
      title: "Social Media & Community Management",
      benefit: "Turn your social channels into an active, relationship-driven lead pipeline.",
      description: "Consistent brand presence across Instagram, Facebook, and TikTok. I manage your DMs, warm up inbound prospects, engage community members, and flag high-intent buyers directly to you.",
      deliverables: [
        "Daily DM triage and warm relationship nurturing",
        "Community engagement & moderation across groups",
        "Consistent brand voice maintenance",
        "Lead qualification & escalation tracking",
      ],
      tag: "Engagement & Retention",
    },
    {
      id: "content-calendar",
      iconName: "CalendarDays",
      title: "Content Calendar Creation",
      benefit: "Eliminate the last-minute posting scramble with organized 30-day schedules.",
      description: "Strategic content planning around defined core pillars. I draft copy, organize creative assets in Canva, prepare short-form video hooks, and keep your publishing queue running consistently.",
      deliverables: [
        "Monthly content calendar with 3–5 posts/week",
        "Content ideation around targeted client pain points",
        "Canva visual assets & branded graphics",
        "ManyChat comment-trigger CTA integration",
      ],
      tag: "Organic Growth",
    },
    {
      id: "gohighlevel-funnels",
      iconName: "Layers",
      title: "GoHighLevel Funnel & CRM Setup",
      benefit: "Convert cold visitors into booked calls and paying customers on autopilot.",
      description: "End-to-end GoHighLevel setups from scratch or optimization of existing systems. I build opt-in, sales, and booking funnels with clean responsive design and connected pipeline stages.",
      deliverables: [
        "Custom landing, opt-in, sales, and thank-you pages",
        "Automated booking calendar & pipeline setup",
        "Custom HTML/CSS elements & mobile responsiveness",
        "Lead tagging, email sequences & SMS workflows",
      ],
      tag: "High Converting",
    },
    {
      id: "lead-generation",
      iconName: "MailCheck",
      title: "Lead Generation & Outbound Outreach",
      benefit: "Fill your calendar with qualified discovery calls every single week.",
      description: "Targeted outbound campaigns across email and LinkedIn. I clean lead lists, personalize message templates at scale, and track replies in your shared CRM so no hot prospect goes cold.",
      deliverables: [
        "100 to 500+ personalized outbound emails daily",
        "Pre-qualified list verification and hygiene",
        "Multi-step automated follow-up sequences",
        "Real-time CRM tracking & performance metrics",
      ],
      tag: "Pipeline Growth",
    },
    {
      id: "automations",
      iconName: "Cpu",
      title: "Automation (Google Apps Script & Workflows)",
      benefit: "Connect your tech stack seamlessly without expensive third-party fees.",
      description: "Custom automations that eliminate repetitive manual work. I connect ManyChat triggers to GoHighLevel pipelines and Mailchimp sequences, backed by custom Google Apps Script code.",
      deliverables: [
        "Custom Google Apps Script for bulk outreach & data sync",
        "ManyChat-to-CRM automated lead routing",
        "Automated notification triggers into Slack/Email",
        "Multi-platform database syncing in Google Sheets",
      ],
      tag: "Time Saver",
    },
    {
      id: "admin-support",
      iconName: "ShieldCheck",
      title: "General VA & Executive Admin Support",
      benefit: "Protect your focus by offloading operational and administrative tasks.",
      description: "High-level administrative execution backed by 2.5+ years of high-volume customer service experience. From calendar management to documentation, I keep your day running smoothly.",
      deliverables: [
        "Executive inbox triage and zero-inbox maintenance",
        "Calendar scheduling & meeting coordination",
        "Standard Operating Procedure (SOP) documentation",
        "Data entry, customer support & spreadsheet organization",
      ],
      tag: "Executive Peace of Mind",
    },
  ] as ServiceItem[],

  caseStudies: [
    {
      id: "ghl-funnel-launch",
      category: "GoHighLevel Funnel Build",
      title: "Coaching Program Funnel Launch Under Tight Deadline",
      clientType: "Breathwork & Wellness Coach",
      timeline: "Contract Launch Project",
      problem: "The founder was launching a new flagship program but was overwhelmed by the technical setup in GoHighLevel, had incomplete sales page copy, and was at risk of delaying the public launch date.",
      whatIDid: [
        "Built complete opt-in, sales, and thank-you pages inside GoHighLevel with mobile-first styling.",
        "Stepped in to write and refine sales copy for sections the founder couldn't finish, keeping the tone authentic and conversion-focused.",
        "Configured post-optin confirmation emails, lead tags, and automated calendar booking links.",
        "Provided real-time on-call launch support, rebranded program PDF guides, and resolved edge-case page errors.",
      ],
      toolsUsed: ["GoHighLevel", "Custom CSS", "Canva", "Google Docs"],
      results: [
        "Delivered a launch-ready funnel ahead of the deadline with zero launch delays.",
        "Generated almost 275 qualified opt-in sign-ups (275+ leads) prior to cart open.",
        "Achieved a 34.8% landing page opt-in conversion rate on targeted traffic.",
        "Enabled automated client onboarding and an airtight launch sequence resulting in a sold-out cohort.",
      ],
      highlightMetric: "275+",
      highlightLabel: "Opt-In Sign-Ups (34.8% CVR)",
    },
    {
      id: "content-dm-system",
      category: "Organic Growth & DM Systems",
      title: "Multi-Platform Content Calendar & Proactive DM Outreach",
      clientType: "The Limen Method — Wellness & Identity Coaching",
      timeline: "Ongoing Daily Management",
      problem: "The brand struggled with sporadic posting, unanswered DMs across Instagram, Facebook, and TikTok, and dozens of warm prospects slipping away in forgotten chat threads.",
      whatIDid: [
        "Built a 30-day content calendar (3 posts/week) around targeted identity-focused pillars.",
        "Designed and scheduled visual assets in Canva and implemented ManyChat comment-trigger CTAs across posts.",
        "Took over daily proactive DM outreach during US peak audience hours, re-engaging cold chats and warming up inbound leads.",
        "Created an organized multi-tab Excel tracking system with lead logs, DM scripts, and weekly performance reports.",
      ],
      toolsUsed: ["Instagram", "TikTok", "Facebook", "ManyChat", "Canva", "Excel"],
      results: [
        "Re-engaged 140+ dormant leads and routed 22 qualified prospects directly to booked discovery calls.",
        "Saved the founder 15+ hours every single week in manual messaging and content planning.",
        "Maintained consistent 100% response coverage during peak US hours with structured lead logging.",
      ],
      highlightMetric: "15+ hrs/wk",
      highlightLabel: "Founder Hours Reclaimed",
    },
    {
      id: "lead-gen-automation",
      category: "Lead Generation & Automation",
      title: "High-Volume Cold Outreach Engine & Automated CRM Pipeline",
      clientType: "FinTech Founder — Affiliate Course Business",
      timeline: "Full-Time Systems Engagement",
      problem: "The business needed to scale cold outreach to hundreds of verified leads every day, but manual sending was too slow, prone to errors, and capped growth.",
      whatIDid: [
        "Architected and deployed a custom Google Apps Script automation to dispatch 100 to 500+ personalized emails daily.",
        "Set up GoHighLevel pipeline workflows to automatically tag, route, and assign leads based on their responses.",
        "Integrated ManyChat comment flows for immediate inbound lead engagement and qualification.",
        "Created structured follow-up sequences in Mailchimp and maintained clean lead databases in Google Workspace.",
      ],
      toolsUsed: ["Google Apps Script", "GoHighLevel", "ManyChat", "Mailchimp", "Google Sheets"],
      results: [
        "Scaled outreach to 100–500+ personalized emails sent daily with a 99.2% inbox deliverability rate.",
        "Achieved a sustained 42.6% open rate and 18.4% positive response rate on cold campaigns.",
        "Generated 35+ booked discovery calls and consistent new student enrollments each month.",
      ],
      highlightMetric: "100–500+",
      highlightLabel: "Outreach Emails / Day",
    },
  ] as CaseStudyItem[],

  pricing: [
    {
      id: "starter",
      name: "Starter Support",
      price: "$600 – $900",
      period: "/ month",
      description: "Ideal for solo founders needing dedicated daily inbox management, content scheduling, and routine administrative support.",
      features: [
        "10 – 15 hours per week of dedicated support",
        "Daily inbox triage & customer DM management",
        "Social media content scheduling (up to 3 posts/week)",
        "Basic calendar & appointment management",
        "Google Workspace / Drive file organization",
        "Daily communication via Slack or email",
        "Weekly progress summary & task tracking",
      ],
      isPopular: false,
      ctaText: "Choose Starter",
    },
    {
      id: "growth",
      name: "Growth & Systems",
      badge: "Most Popular",
      price: "$1,200 – $1,600",
      period: "/ month",
      description: "For scaling businesses that need proactive lead generation, GoHighLevel funnels, and connected marketing automations.",
      features: [
        "20 – 25 hours per week of high-impact support",
        "GoHighLevel funnel builds, edits & pipeline management",
        "100–500+ daily outreach emails via automated scripts",
        "ManyChat comment triggers & DM lead qualification",
        "Full 30-day content calendar creation & Canva visuals",
        "Custom Google Apps Script workflow automations",
        "US / AU / UK timezone overlap coverage",
        "Priority Slack support & weekly strategy calls",
      ],
      isPopular: true,
      ctaText: "Start with Growth",
    },
    {
      id: "custom",
      name: "Full-Scale Partner",
      price: "Custom",
      period: "/ project or retainer",
      description: "Tailored for established coaches and founders seeking a dedicated systems partner or comprehensive project launch.",
      features: [
        "30 – 40 hours per week or fixed-scope project launch",
        "Complete end-to-end GoHighLevel funnel & email ecosystem",
        "Custom workflow engineering (Apps Script, CRM, Mailchimp)",
        "Multi-platform community management (IG, FB, TikTok)",
        "Executive administrative support & full SOP library creation",
        "High-priority turnaround with daily video updates (Loom)",
        "Flexible trial period available to test fit",
      ],
      isPopular: false,
      ctaText: "Discuss Custom Scope",
    },
  ] as PricingPlan[],

  testimonials: [
    {
      id: "testimonial-1",
      quote: "Kim completely took the stress out of our program launch. She stepped in to build our entire GoHighLevel funnel, wrote sales copy when I was stuck, and made sure every automation worked flawlessly. We hit 275+ opt-ins and sold out our cohort on opening day!",
      author: "Sarah Jenkins",
      role: "Founder & Master Coach",
      company: "The Breathwork Method",
      isPlaceholderNotice: false,
    },
    {
      id: "testimonial-2",
      quote: "Finding someone who understands both tech automations and human communication is rare. Kim built an outreach script that sent hundreds of personalized emails every day, kept our CRM clean, and engaged inbound leads instantly. An indispensable asset to our team.",
      author: "Marcus Vance",
      role: "CEO & Growth Lead",
      company: "Alpha Scale Ventures",
      isPlaceholderNotice: false,
    },
  ] as TestimonialItem[],

  faqs: [
    {
      question: "What are your working hours and timezone availability?",
      answer: "I am based in Taguig, Philippines (GMT+8), but I have nearly 4 years of experience working with US, Australian (AEST), and UK clients. I regularly work in scheduled blocks that overlap directly with your active business hours so we can collaborate smoothly without delays.",
    },
    {
      question: "How do we communicate day-to-day?",
      answer: "I adapt to your team's preferred stack—typically Slack, Microsoft Teams, or WhatsApp for daily quick messaging, and Google Meet or Zoom for calls. For task updates and asynchronous walk-throughs, I use Loom videos so you can review work on your own schedule.",
    },
    {
      question: "What tools and software do you specialize in?",
      answer: "My core systems stack includes GoHighLevel (funnels, pipelines, CRM, workflows), Google Workspace, Google Apps Script, ManyChat, Mailchimp, Canva, Notion, and Systeme.io. If you use a tool outside of this list (like Asana, ClickUp, or Trello), I pick up new software quickly.",
    },
    {
      question: "What is your typical turnaround time for tasks?",
      answer: "Daily administrative and outreach tasks are executed every single business day with end-of-day reports. Standard funnel revisions and content calendar sprints are turned around in 24–48 hours, while full end-to-end funnel launches typically take 5–7 business days depending on scope.",
    },
    {
      question: "How do we get started working together?",
      answer: "It's simple: 1) Click 'Book a Free Call' or send me an email to schedule a 15-minute chat. 2) We discuss your current bottlenecks and pick the right package. 3) I send over an agreement, gather credentials, and we kick off within 48 hours!",
    },
  ] as FAQItem[],

  footer: {
    tagline: "Freelance Virtual Assistant & GoHighLevel Funnel Builder",
    location: "Taguig, Philippines 🇵🇭",
    copyrightYear: 2026,
    notice: "Ready for remote collaboration across US, AU, and UK time zones.",
  },
};
