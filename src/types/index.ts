export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
  ctaText: string;
  iconName: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  focusCapabilities: string[];
  sampleIntervention: string;
}

export interface ApproachStep {
  step: string;
  label: string;
  question: string;
  description: string;
  deliverable: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  position: string;
  organisation: string;
  sector: string;
  metric?: string;
}

export interface FrameworkStage {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  managerTool: string;
  businessOutcome: string;
  icon: string;
}

export interface SpeakingTopic {
  title: string;
  description: string;
  targetAudience: string;
}
