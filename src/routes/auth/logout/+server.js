const { supabase, session } = $page.data;

async function handleSignOut() {
  try {
    // Call the signOut method to sign the user out
    const { error } = await supabase.auth.signOut();

    if (error) {
      // Handle any errors that may occur during sign-out
      console.error("Sign-out error:", error.message);
    } else {
      // Redirect to the homepage or any desired page after successful sign-out
      toggleMenu();
      window.location.href = "/"; // You can change the URL as needed
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

handleSignOut();
