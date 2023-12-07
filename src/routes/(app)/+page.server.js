/** @type {import('./$types').PageLoad} */
import { supabase } from "$lib/supabaseClient"

export async function load() {
  const { data, error } = await supabase.from("art").select()
  console.log(data, error)

  return {
    art: data ?? [],
  }
}
