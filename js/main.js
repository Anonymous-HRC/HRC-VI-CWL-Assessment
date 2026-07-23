for (const tabs of document.querySelectorAll("[data-tabs]")) {
  const triggers = tabs.querySelectorAll("[data-tab]");
  const panels = tabs.querySelectorAll("[data-panel]");

  for (const trigger of triggers) {
    trigger.addEventListener("click", () => {
      const target = trigger.dataset.tab;

      for (const item of triggers) {
        item.classList.toggle("active", item === trigger);
      }

      for (const panel of panels) {
        panel.classList.toggle("active", panel.dataset.panel === target);
      }
    });
  }
}
