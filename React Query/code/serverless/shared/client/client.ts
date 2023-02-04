import { createClient } from '@supabase/supabase-js'
import { environment } from '../utilities/environment'

export const supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
