function showPanel(id) {
  const panels = document.querySelectorAll(".panel");

  panels.forEach(panel => {
    panel.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
} 
