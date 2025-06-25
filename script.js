window.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".animate");

    animatedElements.forEach((el) => {
        el.classList.add("fade-in-up");
    });
});
const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 80) {
      current = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
async function fetchDiscordData(inviteCode) {
        try {
          const response = await fetch(`https://discord.com/api/v10/invites/${inviteCode}?with_counts=true`);
          if (!response.ok) throw new Error("Invalid Invite");
          const data = await response.json();
          const count = data.approximate_member_count;
          document.getElementById(`${inviteCode}-count`).textContent = count;
        } catch (err) {
          console.warn(`Failed to load data for ${inviteCode}:`, err);
          document.getElementById(`${inviteCode}-count`).textContent = "N/A";
        }
      }
    
      document.querySelectorAll('.project-card[data-invite]').forEach(card => {
        const invite = card.getAttribute('data-invite');
        fetchDiscordData(invite);
      });