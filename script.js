
document.addEventListener("DOMContentLoaded", () => {
    // Efek muncul perlahan ketika halaman dibuka.
    document.body.classList.add("loaded");

    // Navigasi otomatis menutup fokus pada tautan yang diklik.
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            console.log("Menu dibuka:", link.textContent);
        });
    });

    // Tahun footer otomatis mengikuti tahun sekarang.
    const footerText = document.querySelector("footer p");

    if (footerText) {
        footerText.textContent =
            `© ${new Date().getFullYear()} ARDUT. MADE WITH ATTITUDE.`;
    }
});
