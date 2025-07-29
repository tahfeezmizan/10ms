/* eslint-disable @typescript-eslint/no-explicit-any */

export interface NavItemProps {
  label: string;
  href: string;
  dropdown?: boolean;
}

// Media types
interface Media {
  name: string;
  resource_type: "video" | "image";
  resource_value: string;
  thumbnail_url?: string;
}

// Checklist item for course facts
interface ChecklistItem {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

// CTA (Call to Action) text
interface CtaText {
  name: string;
  value: string;
}

// Bundle items section
interface BundleItemsSection {
  type: "bundle_items";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: any[]; // Empty in provided data
}

// Offers section
interface Offer {
  background_color: string;
  background_img: string;
  checklist_text_color: string;
  end_at: string;
  id: string;
  start_at: string;
  template: string;
  text: string;
}

interface OffersSection {
  type: "offers";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: Offer[];
}

// Instructors section
interface Instructor {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
}

interface InstructorsSection {
  type: "instructors";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: Instructor[];
}

// Features section
interface Feature {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
}

interface FeaturesSection {
  type: "features";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: Feature[];
}

// Group join engagement section
interface GroupJoinEngagement {
  background: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta: {
    clicked_url: string;
    color: string;
    text: string;
  };
  description: string;
  description_color: string;
  id: string;
  thumbnail: string;
  title: string;
  title_color: string;
  top_left_icon_img: string;
}

interface GroupJoinEngagementSection {
  type: "group_join_engagement";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: GroupJoinEngagement[];
}

// Pointers section
interface Pointer {
  color: string;
  icon: string;
  id: string;
  text: string;
}

interface PointersSection {
  type: "pointers";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: Pointer[];
}

// Content preview section
interface ContentPreviewSection {
  type: "content_preview";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: any[]; // Empty in provided data
}

// About section
interface AboutItem {
  description: string;
  icon: string;
  id: string;
  title: string;
}

interface AboutSection {
  type: "about";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: AboutItem[];
}

// Feature explanations section
interface FeatureExplanation {
  checklist: string[];
  file_type: "image" | "video";
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
}

interface FeatureExplanationsSection {
  type: "feature_explanations";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: FeatureExplanation[];
}

// Free items section
interface FreeItemsSection {
  type: "free_items";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: any[]; // Empty in provided data
}

// Certificate sections
interface CertificateSection {
  type: "certificate";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: any[]; // Empty in provided data
}

interface BundleCertificateSection {
  type: "bundle_certificate";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: any[]; // Empty in provided data
}

// Testimonials section
interface Testimonial {
  description: string;
  id: string;
  name: string;
  profile_image: string;
  testimonial: string;
  thumb?: string;
  video_type: string;
  video_url: string;
}

interface TestimonialsSection {
  type: "testimonials";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: Testimonial[];
}

// Requirements section
interface RequirementsSection {
  type: "requirements";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: any[]; // Empty in provided data
}

// How to pay section
interface HowToPaySection {
  type: "how_to_pay";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: any[]; // Empty in provided data
}

// FAQ section
interface FaqItem {
  answer: string;
  id: string;
  question: string;
}

interface FaqSection {
  type: "faq";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: FaqItem[];
}

// Union type for all section types
type Section =
  | BundleItemsSection
  | OffersSection
  | InstructorsSection
  | FeaturesSection
  | GroupJoinEngagementSection
  | PointersSection
  | ContentPreviewSection
  | AboutSection
  | FeatureExplanationsSection
  | FreeItemsSection
  | CertificateSection
  | BundleCertificateSection
  | TestimonialsSection
  | RequirementsSection
  | HowToPaySection
  | FaqSection;

// Old info structure
interface OldInfo {
  cat_id: number;
  course_id: number;
  platform: string;
  skills_cat_id: number;
  slug: string;
}

// Main course data structure
interface CourseData {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  old_info: OldInfo;
  start_at: string;
  media: Media[];
  checklist: ChecklistItem[];

  cta_text: CtaText;
  sections: Section[];
  is_cohort_based_course: boolean;

  delivery_method: string;
}

// Main API response structure
interface ApiResponse {
  code: number;
  data: CourseData;
  error: any[];
  message: string;
  payload: any[];
  status_code: number;
}

// Export all types
export type {
  Media,
  ChecklistItem,
  CtaText,
  BundleItemsSection,
  Offer,
  OffersSection,
  Instructor,
  InstructorsSection,
  Feature,
  FeaturesSection,
  GroupJoinEngagement,
  GroupJoinEngagementSection,
  Pointer,
  PointersSection,
  ContentPreviewSection,
  AboutItem,
  AboutSection,
  FeatureExplanation,
  FeatureExplanationsSection,
  FreeItemsSection,
  CertificateSection,
  BundleCertificateSection,
  Testimonial,
  TestimonialsSection,
  RequirementsSection,
  HowToPaySection,
  FaqItem,
  FaqSection,
  Section,
  OldInfo,
  CourseData,
  ApiResponse,
};
