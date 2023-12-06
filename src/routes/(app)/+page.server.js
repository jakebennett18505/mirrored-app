/** @type {import('./$types').PageLoad} */
import { supabase } from "$lib/supabaseClient"

export async function load() {
  const { data } = await supabase.from("art").select()

  return {
    art: data ?? [],
  }
}
