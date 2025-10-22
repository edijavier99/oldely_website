import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://avdjaosgoafckkqulmge.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2ZGphb3Nnb2FmY2trcXVsbWdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5ODg3NjQsImV4cCI6MjA3NjU2NDc2NH0.o7JSgt297QVXHB7RIMtOf8kVOq03BBrXKxrVoEWxP94"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
