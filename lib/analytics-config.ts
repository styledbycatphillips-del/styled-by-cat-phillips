// Analytics Event Configuration for Authority Index™
// Centralized definitions for consistent tracking across the application

export const ANALYTICS_EVENTS = {
  // Quiz Flow Events
  QUIZ_START: 'quiz_start',
  QUIZ_SUBMIT: 'quiz_submit', 
  QUIZ_SCORED: 'quiz_scored',
  QUIZ_ERROR: 'quiz_error',
  QUIZ_ABANDONED: 'quiz_abandoned',

  // CTA Events
  CTA_CLICK: 'cta_click',
  AUDIT_BOOKED: 'audit_booked',
  CONTACT_SUBMITTED: 'contact_submitted',

  // Form Events
  FORM_START: 'form_start',
  FORM_SUBMIT: 'form_submit',
  FORM_ERROR: 'form_error',
  FIELD_FOCUSED: 'field_focused',

  // Engagement Events
  PAGE_VIEW: 'page_view',
  SCROLL_DEPTH: 'scroll_depth',
  TIME_ON_PAGE: 'time_on_page',
  VIDEO_PLAY: 'video_play',
  FILE_DOWNLOAD: 'file_download',

  // Lead Generation Events
  LEAD_GENERATED: 'generate_lead',
  NEWSLETTER_SIGNUP: 'newsletter_signup',

  // Business Events
  CONSULTATION_BOOKED: 'consultation_booked',
  SERVICE_VIEWED: 'service_viewed',
  PRICING_VIEWED: 'pricing_viewed',
} as const

export const ANALYTICS_CATEGORIES = {
  QUIZ: 'quiz',
  FORM: 'form',
  CTA: 'cta', 
  ENGAGEMENT: 'engagement',
  CONVERSION: 'conversion',
  ERROR: 'error',
} as const

export const QUIZ_BANDS = {
  EMERGING: 'Emerging',
  PRACTICING: 'Practicing', 
  CONSISTENT: 'Consistent',
} as const

// Standard parameter schemas for events
export interface QuizStartParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  quiz_type: 'authority_index'
}

export interface QuizSubmitParams {
  role: string
  channels_count: number
  has_matrix: boolean
  publishes: boolean
  complexity: string
  quiz_type: 'authority_index'
}

export interface QuizScoredParams {
  score: number
  band: typeof QUIZ_BANDS[keyof typeof QUIZ_BANDS]
  quiz_type: 'authority_index'
}

export interface CTAClickParams {
  cta: string
  page: string
  score?: number
  band?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
}

export interface FormErrorParams {
  form_name: string
  field_name: string
  error_type: string
}

export interface EngagementParams {
  engagement_type: 'scroll' | 'time_on_page' | 'video_play' | 'file_download'
  value?: number
  page?: string
}

// Goal Values for Conversion Tracking
export const CONVERSION_VALUES = {
  QUIZ_COMPLETION: 5,
  AUDIT_BOOKING: 25,
  CONTACT_FORM: 15,
  NEWSLETTER_SIGNUP: 3,
  SERVICE_VIEW: 2,
} as const

// Custom dimensions for enhanced reporting
export const CUSTOM_DIMENSIONS = {
  AUTHORITY_BAND: 'authority_band',
  QUIZ_SCORE: 'quiz_score', 
  USER_ROLE: 'user_role',
  CHANNEL_COUNT: 'channel_count',
  HAS_MATRIX: 'has_matrix',
  PUBLISHES_MONTHLY: 'publishes_monthly',
} as const