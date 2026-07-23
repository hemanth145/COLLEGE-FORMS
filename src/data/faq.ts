export interface FaqItem {
  question: string
  answer: string
}

export const admissionSteps = [
  { step: '1', title: 'Submit your application', detail: 'Fill out the registration form with your academic history and program choice.' },
  { step: '2', title: 'Document review', detail: 'Our admissions team reviews your marks and application within 5–7 business days.' },
  { step: '3', title: 'Interview / entrance test', detail: 'Select programs require a short interview or entrance assessment.' },
  { step: '4', title: 'Offer & enrollment', detail: 'Accepted applicants receive an offer letter and enroll for the upcoming term.' },
]

export const faqs: FaqItem[] = [
  {
    question: 'What are the admission deadlines?',
    answer: 'Fall term applications close August 1; Spring term applications close December 1. Rolling admission may be available for select programs.',
  },
  {
    question: 'What documents do I need to apply?',
    answer: '10th and 12th grade marksheets, a valid ID, and a completed registration form. Graduate programs also require a bachelor’s transcript.',
  },
  {
    question: 'Are there scholarships available?',
    answer: 'Merit-based scholarships are available for students scoring above 85% in their qualifying exams. Need-based aid is assessed after admission.',
  },
  {
    question: 'Can international students apply?',
    answer: 'Yes — international applicants follow the same process, with additional document verification for equivalent qualifications.',
  },
  {
    question: 'Is on-campus housing available?',
    answer: 'Yes, limited on-campus housing is available for first-year students on a first-come, first-served basis.',
  },
]
