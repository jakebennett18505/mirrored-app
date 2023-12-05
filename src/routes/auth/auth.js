// auth.js
export async function signUp(supabase, email, password) {
  try {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    window.location.reload();
  } catch (error) {
    console.error("Sign-up error:", error.message);
  }
}

export async function signIn(supabase, email, password) {
  if (email && password) {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Sign-in error:", error.message);
      } else {
        console.log("Sign-in successful");
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  } else {
    console.error("Please fill in both email and password fields.");
  }
}

export async function signOut(supabase) {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Sign-out error:", error.message);
    } else {
      window.location.href = "/";
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}
