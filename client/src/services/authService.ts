import { supabase } from "./supabase"

export async function registerNewUser(firstName: string, lastName: string, email: string, password: string) {
  clearUserProgress();
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {first_name: firstName, last_name: lastName}
      },
    })
    return {data, error}
  }

export async function signInWithEmail(email: string, password: string) {
  clearUserProgress();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    return {data, error}
  }

export async function signOut() {

  clearUserProgress();
    
  const { error } = await supabase.auth.signOut();
  return error;
}

function clearUserProgress() {
  localStorage.removeItem("colorPalette");
  localStorage.removeItem("colorRecPhotos");
  localStorage.removeItem("silhouette");
  localStorage.removeItem("silhouetteRecPhotos");
  localStorage.removeItem("hairstyle");
  localStorage.removeItem("hairRecPhotos");
}