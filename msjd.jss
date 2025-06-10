<script>
  fetch("https://api.myquran.com/v1/sholat/jadwal/3315/2025/06/10")
    .then(response => response.json())
    .then(data => {
      const jadwal = data.data.jadwal;
      document.getElementById("jadwal-sholat").innerHTML = `
        Subuh: ${jadwal.subuh}<br>
        Dzuhur: ${jadwal.dzuhur}<br>
        Ashar: ${jadwal.ashar}<br>
        Maghrib: ${jadwal.maghrib}<br>
        Isya: ${jadwal.isya}
      `;
    })
    .catch(() => {
      document.getElementById("jadwal-sholat").innerText = "Gagal memuat jadwal sholat.";
    });
</script>
