import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface RegistrationInput {
  first_name: string
  middle_name: string
  last_name: string
  course: string
  gender: string
  tenth_marks: string
  twelfth_marks: string
  phone: string
  address: string
}

export interface PublicRegistration {
  id: string
  first_name: string
  last_name: string
  course: string
  gender: string
  tenth_marks: string
  twelfth_marks: string
  created_at: string
}
