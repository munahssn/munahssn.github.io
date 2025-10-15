const projectData = [
    {
        title: "Tic Tac Toe",
        description: `
        A simple Tic Tac Toe game I built for my Python class. It features two modes - play against AI and play against a friend.
        The breakfast-inspired graphics 🧇 were hand-drawn by me using Asperite!
      `,
        skills: "Python, Asperite",
        code: "https://github.com/munahssn/tictactoe",
        demo: "https://youtu.be/lvfFdknougA",
        image: "images/tictactoe.png",
    },
    {
        title: "Project Two",
        description: "-",
        skills: "-",
        code: "#",
        demo: "#",
        image: "images/placeholder.png",
    },
];

function openModal(index) {
    const project = projectData[index];
    document.getElementById("modalDetails").innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p><strong>Skills:</strong> ${project.skills}</p>
      <p>
        <a href="${project.code}" target="_blank">Code</a> |
        <a href="${project.demo}" target="_blank">Live Demo</a>
      </p>
      <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: 8px;" />
    `;
    document.getElementById("projectModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById("projectModal");
    const modalContent = modal.querySelector(".modal-content");

    // Trigger fade-out animation
    modalContent.classList.remove("fade-in");
    modalContent.classList.add("animate-out");

    // Wait for animation to finish, then hide
    modalContent.addEventListener("animationend", function handler() {
        modal.style.display = "none";
        modalContent.classList.remove("animate-out");
        modalContent.removeEventListener("animationend", handler);
        document.body.style.overflow = "";
    });
}
