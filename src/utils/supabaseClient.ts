import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://jyvpnnnskeeqceuohpvh.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5dnBubm5za2VlcWNldW9ocHZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5Njc4MDQsImV4cCI6MjAxMTU0MzgwNH0.eiLeoug3MRYDtp4LjFzb0pZ2xaN9pBTrEJl9dnozioE')

export default supabase