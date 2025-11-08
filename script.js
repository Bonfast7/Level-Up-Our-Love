function domReady(fn) {
  document.addEventListener("DOMContentLoaded", fn);
  if (document.readyState === "interactive" || document.readyState === "complete") {
    fn();
  }
}

domReady(() => {
  const card = document.getElementsByClassName("card").item(0);
  const fteks = document.getElementsByClassName("fteks").item(0);
  const audioBack = document.getElementById("backsound");

  if (!card || !fteks || !audioBack) {
    console.warn("Elemen tidak ditemukan. Pastikan HTML dan audio sudah lengkap.");
    return;
  }

  // Saat card diklik → tampilkan pesan + mainkan backsound
  card.addEventListener("click", function () {
    fteks.classList.add("is-visible");

    audioBack.currentTime = 0;
    audioBack.volume = 0.6;
    audioBack.play().catch((err) => {
      console.warn("BackSound gagal diputar:", err);
    });
  });

  // Saat pesan diklik → tutup pesan (tanpa memulai musik baru)
  fteks.addEventListener("click", function (e) {
    if (e.target.classList.contains("is-visible")) {
      fteks.classList.remove("is-visible");

      // Opsional: hentikan backsound saat pesan ditutup
      audioBack.pause();
      audioBack.currentTime = 0;
    }
  });
});