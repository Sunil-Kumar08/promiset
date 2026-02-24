const supabaseUrl = "https://mxzsajwxjqumotupgrrs.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14enNhand4anF1bW90dXBncnJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5MzM1MzQsImV4cCI6MjA4NzUwOTUzNH0.TQlE7T4MM5m1OnrubUGgJGNkuzor4MCCvSDhWrs9HWI";

const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Increment visitor count
async function updateVisitorCount() {
  const { data } = await supabase
    .from("visitors")
    .select("count")
    .eq("id", 1)
    .single();

  let newCount = data.count + 1;

  await supabase
    .from("visitors")
    .update({ count: newCount })
    .eq("id", 1);
}

updateVisitorCount();

// Admin Login
async function openAdmin() {
  let password = prompt("Enter Admin Password:");

  if (password === "admin@123") {

    const { data } = await supabase
      .from("visitors")
      .select("count")
      .eq("id", 1)
      .single();

    document.getElementById("visitorCount").innerText = data.count;
    document.getElementById("adminPanel").style.display = "block";

  } else {
    alert("Access Denied");
  }
}

function closeAdmin() {
  document.getElementById("adminPanel").style.display = "none";
}