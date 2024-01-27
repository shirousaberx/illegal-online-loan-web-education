// berisi konten
let innerContents = [
    //0
    `
    <h1 class="text-center d-block">Video Perkenalan</h1>
            <iframe 
                class="d-block mx-auto mb-3"
                style="height:67%; width: 80%;"
                src="https://www.youtube.com/embed/oXBM4Pd1Y18?si=L-lQuW_GpFahvCpg" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
    `,
    // 1
    `
    <h1>Apa Itu Pinjol</h1>
    <img src="./assets/images/apa itu pinjol.jpeg" alt="Apa Itu Pinjol" class="image">
    <p>Pinjaman online adalah bentuk pinjaman uang yang diperoleh melalui platform online atau aplikasi seluler. Ini merupakan alternatif yang semakin populer untuk pinjaman tradisional yang biasanya ditawarkan oleh bank atau lembaga keuangan konvensional. Pinjaman online sering kali lebih mudah diakses dan memiliki proses pengajuan yang lebih cepat daripada pinjaman tradisional.</p>
    <br>
    <p>Pinjaman online ilegal adalah praktik pemberian pinjaman uang melalui platform online atau aplikasi seluler tanpa izin atau lisensi yang sah dari otoritas keuangan atau regulator yang berlaku. Pinjaman online ilegal adalah ilegal karena mereka melanggar undang-undang dan peraturan keuangan yang ada di suatu negara</p>
    `,
    // 2
    `
    <h1>Berikut adalah ciri-ciri pinjaman online illegal</h1>
    <ul class="index-pinjol-ul">
        <li class="index-pinjol-li">Tidak Memiliki Izin atau Lisensi: Penyedia pinjaman online ilegal tidak memiliki izin atau lisensi yang sah dari otoritas keuangan atau regulator yang berlaku di negara tersebut. Mereka biasanya mengabaikan peraturan yang mengatur industri pinjaman.</li>
        <li class="index-pinjol-li">Suku Bunga yang Sangat Tinggi: Pinjaman online ilegal sering kali menawarkan suku bunga yang sangat tinggi, bahkan melebihi batas yang diizinkan oleh undang-undang. Ini dapat mengakibatkan peminjam terjebak dalam utang yang sulit dilunasi.</li>
        <li class="index-pinjol-li">Praktik Pemungutan Utang yang Ilegal: Beberapa penyedia pinjaman ilegal menggunakan praktik pemungutan utang yang ilegal dan mengintimidasi peminjam yang kesulitan membayar.</li>
        <li class="index-pinjol-li">Kurangnya Transparansi: Penyedia pinjaman ilegal mungkin tidak memberikan informasi yang jelas mengenai biaya, syarat, dan ketentuan pinjaman. Mereka seringkali menyembunyikan informasi penting dari peminjam.</li>
        <li class="index-pinjol-li">Operasi Online yang Tidak Jelas: Penyedia pinjaman ilegal mungkin sulit untuk dihubungi atau memiliki informasi kontak yang tidak jelas. Mereka mungkin tidak memiliki alamat fisik yang terdaftar.</li>
        <li class="index-pinjol-li">Penagihan yang Agresif: Penyedia pinjaman ilegal dapat menggunakan praktik penagihan yang agresif dan tidak etis untuk mendapatkan pembayaran dari peminjam.</li>
    </ul>
    `,
    // 3
    `
    <h1>Ciri-ciri Pinjol Legal</h1>
    <ul>
        <li class="index-pinjol-li">Terdaftar/berizin dari OJK</li>
        <li class="index-pinjol-li">Pinjol legal tidak pernah menawarkan melalui saluran komunikasi pribadi</li>
        <li class="index-pinjol-li">Pemberian pinjam akan diseleksi terlebih dahulu</li>
        <li class="index-pinjol-li">Bunga atau biaya pinjaman transparan</li>
        <li class="index-pinjol-li">Peminjam yang tidak dapat membayar setelah batas waktu 90 hari akan masuk ke daftar hitam (blacklist) Fintech Data Center sehinggapeminjam tidak dapat meminjam dana ke platform fintech yang lain</li>
        <li class="index-pinjol-li">Mempunyai layanan pengaduan</li>
        <li class="index-pinjol-li">Mengantongi identitas pengurus dan alamat kantor yang jelas</li>
        <li class="index-pinjol-li">Hanya mengizinkan akses kamera, mikrofon, dan lokasi pada gawai peminjam</li>
        <li class="index-pinjol-li">Pihak penagih wajib memiliki sertifikasi penagihan yang diterbitkan oleh AFPI.</li>
        <li class="index-pinjol-li">Berbentuk Perseroan Terbatas</li>
    </ul>
    `,
    // 4
    `
    <h1>Resiko Pinjol Illegal</h1>
    <ul>
        <li class="index-pinjol-li">Bunga Relatif Tinggi</li>
        <li class="index-pinjol-li">Menerima Denda Keterlambatan</li>
        <li class="index-pinjol-li">Ancaman Debt Collector</li>
        <li class="index-pinjol-li">Biaya Administrasi Besar</li>
        <li class="index-pinjol-li">Tenor Singkat</li>
        <li class="index-pinjol-li">Tidak Memiliki Perlindungan dari OJK</li>
        </ul>
        <p>
            Sumber:
            <br>
            <a href="https://www.ocbc.id/id/article/2023/08/07/risiko-pinjol-ilegal#:~:text=Risiko%20pinjol%20ilegal%20terakhir%20adalah,perusahaan%20tersebut%20cenderung%20tidak%20transparan." class="nav-link sumber">www.ocbc.id</a>
        </p>
    `,
    // 5
    `<h1>Jika sudah terlanjur terjerat pinjol ilegal, benarkah pinjaman online ilegal tersebut tidak perlu dibayar?</h1>
    <p class="mt-4">
        Dalam perjanjian pinjam meminjam lingkup pinjol, terdapat dua perjanjian yang dilakukan yaitu antara pemberi dana dengan penyelenggara dan pemberi dana dengan penerima dana.
    </p>
    <p>
        Perjanjian antara pemberi dana dan penyelenggara pinjol berkaitan dengan jumlah pendanaan, besaran komisi, mekanisme penagihan pendanaan, mitigasi risiko jika pendanaan macet, dan sebagainya.
        Sementara, perjanjian antara pemberi dana dengan penerima dana berkaitan dengan jumlah pendanaan, besaran angsuran, biaya terkait, denda, dan sebagainya.
        Berdasarkan uraian tersebut, dapat disimpulkan bahwa <span class="text-decoration-underline">perjanjian pinjam meminjam ada di pemberi dana dan penerima dana, sementara pihak pinjol adalah pihak yang mengelola pendanaan dari pemberi dana.</span>
    </p>
    <p> 
        Akibatnya, perjanjian yang dilakukan antara pemberi dan penerima pinjaman pada pinjaman online yang tidak terdaftar dan berizin di OJK menjadi dapat dibatalkan. Hal ini karena penyelenggara pinjol yang berstatus tidak berizin tidak berwenang untuk bertindak (handeling onbevoegheid) 
        sehingga menyebabkan perjanjian antara pemberi dan penerima pinjaman menjadi dapat dibatalkan.
    </p>
    <p>
        Konsekuensi dari perjanjian dapat dibatalkan tersebut yaitu keadaan kembali pulih seperti semula seperti sebelum perjanjian dibuat. Oleh karenanya, <span class="text-decoration-underline">peminjam wajib mengembalikan semua uang yang telah dipinjam. </span>  
    </p>
    <p>
        Sumber:
        <br>
        <a class="nav-link sumber" target="_blank" href="https://www.hukumonline.com/klinik/a/pinjol-ilegal-tak-usah-dibayar--benarkah-lt61b092a637d7f">www.hukumonline.com</a>
    </p>
    `,
    // 6
    `<h1>Apa yang harus dilakukan jika terlanjur meminjam dari pinjol ilegal?</h1>
    <img src="./assets/images/panic.jpg" class="d-block mx-auto" height="20%" alt="">
    <ol>
        <li class="index-pinjol-li">
            Segera buat laporan kepada SWI melalui waspadainvestasi@ojk.co.id agar laporan segera diteruskan kepada Kementerian Komunikasi dan Informatika (Kominfo) sehingga pinjol ilegal yang bersangkutan diblokir.
        </li>
        <li class="index-pinjol-li">
            Hindari melakukan pinjaman di pinjol ilegal lain untuk menutup utang lama yang sudah melewati jatuh tempo
        </li>
        <li class="index-pinjol-li">
            Bila menerima teror penagihan pinjaman, segera blokir seluruh kontak pihak yang melakukan teror dan imbau seluruh relasi yang dimiliki untuk mengabaikannya bila turut dihubungi.
        </li>
        <li class="index-pinjol-li">
            Bila terjadi teror dan intimidasi, segera laporkan ke pihak kepolisian untuk selanjutnya diproses secara hukum.
        </li>
    </ol>
    <p>
        Sumber:
        <br>
        <a class="nav-link sumber" target="_blank" href="https://www.cnbcindonesia.com/tech/20221126080323-37-391396/terlanjur-terjebak-pinjol-ilegal-masih-adakah-jalan-keluar">www.cnbcindonesia.com</a>
    </p>`,
    // 7
    `
    <h1>Cara Mencegah Pinjaman Online Illegal</h1>
    <ul class="index-pinjol-ul">
        <li class="index-pinjol-li">Lakukan Penelitian: Ketika Anda mencari pinjaman online, lakukan penelitian yang cermat tentang penyedia pinjaman yang Anda pertimbangkan. Pastikan mereka memiliki izin atau lisensi yang sah dari otoritas keuangan atau regulator yang berlaku di negara Anda.</li>
        <li class="index-pinjol-li">Periksa Reputasi Penyedia: Mencari ulasan dan informasi tentang pengalaman peminjam sebelumnya dengan penyedia pinjaman online adalah langkah penting. Situs web dan aplikasi yang memiliki banyak ulasan positif mungkin lebih tepercaya.</li>
        <li class="index-pinjol-li">Periksa Suku Bunga dan Biaya: Pastikan Anda memahami suku bunga dan biaya yang terkait dengan pinjaman. Jangan tergoda oleh penawaran yang terlalu bagus untuk menjadi kenyataan. Periksa apakah suku bunga dan biaya sesuai dengan ketentuan yang diizinkan oleh undang-undang.</li>
        <li class="index-pinjol-li">Baca Syarat dan Ketentuan dengan Cermat: Selalu baca dan pahami syarat dan ketentuan pinjaman sebelum Anda menyetujuinya. Pastikan Anda tahu apa yang Anda setujui dan apa yang akan menjadi kewajiban Anda.</li>
        <li class="index-pinjol-li">Hindari Penyedia yang Meminta Pembayaran Awal: Penyedia pinjaman online yang sah tidak akan meminta pembayaran di muka sebagai syarat untuk mendapatkan pinjaman. Hindari penyedia yang meminta biaya aplikasi atau biaya di muka.</li>
        <li class="index-pinjol-li">Gunakan Situs Resmi: Pastikan Anda mengajukan permohonan melalui situs web atau aplikasi resmi penyedia pinjaman yang telah diverifikasi.</li>
        <li class="index-pinjol-li">Waspadai Tawaran yang Terlalu Cepat dan Mudah: Jika suatu tawaran pinjaman terasa terlalu cepat dan mudah tanpa melakukan pengecekan kredit atau verifikasi lainnya, waspadailah. Ini mungkin pertanda bahwa penyedia tersebut tidak mematuhi peraturan.</li>
        <li class="index-pinjol-li">Jangan Memberikan Informasi Pribadi yang Sensitif: Hindari memberikan informasi pribadi yang sensitif seperti nomor rekening bank atau nomor kartu kredit melalui email atau pesan teks. Gunakan saluran komunikasi yang aman jika Anda perlu memberikan informasi tersebut.</li>
        <li class="index-pinjol-li">Lakukan Laporan Jika Anda Menemui Penipuan: Jika Anda menduga telah menjadi korban pinjaman online ilegal atau penipuan, segera laporkan masalah tersebut kepada otoritas keuangan atau regulator yang berwenang di negara Anda.</li>
    </ul>
    `,
    // 8
    `
    <h1>Hukum Pinjol Illegal</h1>
    <ul>
        <img src="./assets/images/hukum pinjol.jpg" alt="Hukum Pinjol Illegal" class="image">
        <li class="index-pinjol-li">Pasal 29 UU ITE: Setiap orang dengan sengaja dan tanpa hak mengirimkan Informasi Elektronik dan/atau Dokumen Elektronik yang berisi ancaman kekerasan atau menakut-nakuti yang ditujukan secara pribadi.</li>
        <li class="index-pinjol-li">Pasal 45B UU 19/2016: Setiap orang yang dengan sengaja dan tanpa hak mengirimkan Informasi Elektronik dan/atau Dokumen Elektronik yang berisi ancaman kekerasan atau menakut-nakuti yang ditujukan secara pribadi sebagaimana dimaksud dalam Pasal 29 dipidana dengan pidana penjara paling lama 4 (empat) tahun dan/atau denda paling banyak Rp. 750.000.000,00 (tujuh ratus lima puluh juta rupiah).</li>
    </ul>
    `,
]

const content = document.getElementById("pinjol-content");
const click_audio = document.getElementById('click-audio');
const btn_daftar_isi = document.getElementsByClassName('daftar-isi');

function changeContent(index, node) {
    click_audio.cloneNode(true).play();

    // remove class "active" dari semua btn daftar isi
    [...btn_daftar_isi].forEach(btn => {
        btn.classList.remove('active')
    });

    // add class "active" dari btn daftar isi yang dipencet
    node.classList.add('active');

    content.innerHTML = innerContents[index];
}