/* Grab data from SupaBase here*/

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fiprssgmvhvbvduuybrv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpcHJzc2dtdmh2YnZkdXV5YnJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIwMTM2NzAsImV4cCI6MTk5NzU4OTY3MH0.xFL181rObIi8P8FzHhmeyvvM6WC2PAo6paabBw0vaMA';
const supabase = createClient(supabaseUrl, supabaseKey);
console.log(supabase)

async function getSupaBaseData() {
    const { data } = await supabase
    .from('catelog')
    .select();
    if(data) {
        console.log('about to return data')
        console.log(data);
    }
      return data;
  }

export default getSupaBaseData;