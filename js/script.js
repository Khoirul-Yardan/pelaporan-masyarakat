document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Laporan berhasil diupload oleh admin!');
});

document.getElementById('report-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Laporan Anda berhasil terkirim!');
});

// button pop up gambar 
// Ambil semua tombol 'Lihat Gambar'
const viewImageButtons = document.querySelectorAll('.view-image-btn');

// Loop melalui setiap tombol dan tambahkan event click
viewImageButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Dapatkan URL gambar dari atribut data-img-src
        const imgSrc = this.getAttribute('data-img-src');
        
        // SweetAlert2 untuk menampilkan pop-up dengan gambar yang lebih jelas
        Swal.fire({
            title: 'Gambar Laporan',
            text: 'Ini adalah gambar yang lebih jelas dari laporan.',
            imageUrl: imgSrc, // Menggunakan URL gambar dari button
            imageWidth: 500,
            imageHeight: 400,
            imageAlt: 'Gambar Laporan',
            confirmButtonText: 'Tutup'
        });
    });
});


