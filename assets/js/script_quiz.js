const pertanyaan = [
    {
        gambar: "https://play-lh.googleusercontent.com/RUT8sdzg-dkccLEKkP8m2LpubCngKiemKqGb3mCb12vyBe6or_UFfEZX1-jO4pW0QVo=w526-h296-rw",
        text: "Gambar di atas adalah salah satu tampilan iklan aplikasi <b>Kredit Digital</b> di Google Play Store <br /> Apakah aplikasi ini adalah pinjol legal?",
        jawaban: false,
        alasan: "<b>Kredit Digital</b> adalah pinjol illegal. Walaupun aplikasi ini menampilkan logo OJK, namun kita tetap harus memverifikasinya di <a href='https://www.ojk.go.id/'>www.ojk.go.id</a>"
    },
    {
        gambar: "",
        text: "Sebuah aplikasi pinjol meminta izin akses <b>kamera, mikrofon, dan lokasi</b> pada gawai peminjam.<br /> Apakah aplikasi pinjol ini legal?",
        jawaban: true,
        alasan: "Aplikasi pinjol legal hanya boleh meminta izin akses <b>kamera, mikrofon, dan lokasi</b>. Tidak boleh lebih!"
    },
    {
        gambar: "",
        text: "Sebuah aplikasi pinjol dibuat oleh <b>CV Cuan Besar</b><br />Apakah pinjol ini legal?",
        jawaban: false,
        alasan: "Perusahaan penyedia pinjaman online harus berbentuk <b>Perseroan Terbatas (PT)</b>"
    },
    {
		gambar:"",
		text:"Bunga pinjaman tiba-tiba berubah saat masa peminjaman. Apakah pinjol ini legal?",
		jawaban: false,
		alasan:"Pinjol ini <b>ilegal</b>. Bunga pinjaman pinjol legal tidak akan berubah selama masa peminjaman"
	},
	{
		gambar:"",
		text:"Apakah pasal 29 UU ITE menentang pinjol ilegal?",
		jawaban: true,
		alasan:"Berdasarkan <b>29 UU ITE</b> melarang praktek penagihan yang biasa dilakukan oleh pinjol ilegal, yaitu dengan meneror peminjam."
	},
	{
		gambar:"",
		text:"Pinjaman di aplikasi pinjol cair hanya dalam 1 klik, apakah aplikasi ini legal?",
		jawaban: false,
		alasan:"Tidak legal, karena proses peminjaman yang terlalu mudah merupakan ciri pinjol ilegal."
	},
	{
		gambar:"",
		text:"Pinjol ilegal tidak usah dibayar?",
		jawaban: false,
		alasan:"Secara hukum, pinjaman walaupun ilegal tetap harus dibayar. Namun kita tidak perlu membayar bunganya"
	},
	{
		gambar:"",
		text:"Pinjol <b>legal</b> tidak pernah menawarkan lewat saluran pribadi?",
		jawaban:true,
		alasan:"Hanya pinjol <b>ilegal</b> yang menawarkan lewat WhatsApp, SMS, dan saluran pribadi lainnya"
	},
	{
		gambar:"",
		text:"Tidak membayar pinjol <b>ilegal</b> dapat menurunkan skor kredit dari Bank Indonesia?",
		jawaban:false,
		alasan:"Tidak membayar pinjol ilegal tidak akan menurunkan skor kredit anda. Tetapi utang pokok pinjol ilegal tetap harus dibayar"
	},
	{
		gambar:"",
		text:"Pinjol ilegal tidak meminta <b>KTP</b> saat proses registrasi?",
		jawaban:true,
		alasan:"Pinjol ilegal mengambil data anda tidak dari KTP tetapi dari informasi di smartphone anda"
	},
];

// index pertanyaan
let idx = 0;

// jumlah jawaban benar dan salah
let benar = 0;

const txt_nomor_pertanyaan = document.querySelector("#nomor-pertanyaan");
const txt_pertanyaan = document.querySelector("#pertanyaan");
const img_soal = document.querySelector("#gambar-soal");

const btn_jawaban = document.querySelector("#tombol-jawaban");
const btn_ya = document.querySelector("#ya");
const btn_tidak = document.querySelector("#tidak");

const img_benar_salah = document.querySelector("#benar-atau-salah");
const btn_berikutnya = document.querySelector("#berikutnya");
const txt_alasan = document.querySelector("#text-alasan");

const display_quiz = document.querySelector("#quiz");
const display_score = document.querySelector("#score");
const txt_score = document.querySelector('#score-text')

const click_audio = document.getElementById('click-audio');
const hover_audio = document.getElementById('hover-audio');
const wrong_answer_audio = document.getElementById('wrong-answer-audio');
const correct_answer_audio = document.getElementById('correct-answer-audio');
const score_audio = document.getElementById('score-audio');
const background_audio = document.getElementById('background-audio');

// ---------------------- Helper functions ---------------------------

// tampilkan nomor, gambar, dan text pertanyaan
function show_question() {
    txt_nomor_pertanyaan.innerHTML = "Pertanyaan " + (idx+1);
    
    // cek jika ada gambar di pertanyaan
    if (pertanyaan[idx].gambar.length == 0) {   // hilangkan gambar
        img_soal.classList.add("invisible", "d-none");
        img_soal.classList.remove("d-block");
    } else {    // munculkan gambar
        img_soal.classList.remove("invisible", "d-none");
        img_soal.classList.add("d-block");
        img_soal.setAttribute("src", pertanyaan[idx].gambar);
    }
    
    txt_pertanyaan.innerHTML = pertanyaan[idx].text;

    prepare_buttons();
}

// siapkan tombol ya dan tidak dengan tampilan yang sesuai
function prepare_buttons() {
    btn_ya.classList.add("btn-outline-secondary");
    btn_ya.classList.remove("btn-danger", "btn-success");
    btn_tidak.classList.add("btn-outline-secondary");
    btn_tidak.classList.remove("btn-danger", "btn-success");
}

// -----------------------------------------------------------------------------



// ---------------------- Tampilkan pertanyaan idx 0 ---------------------------

show_question();

// -----------------------------------------------------------------------------

// --------------------------- Mulai background music---------------------------

// background_audio.play();

// -----------------------------------------------------------------------------

btn_jawaban.addEventListener(
    "click", (e) => {

        if (btn_ya.disabled === false && btn_ya.disabled === false) { // pastikan button tidak disabled
            txt_alasan.innerHTML = pertanyaan[idx].alasan;

            if ((e.target.matches("#ya") && pertanyaan[idx].jawaban === true) ||
                (e.target.matches("#tidak") && pertanyaan[idx].jawaban === false)) { // jawaban betul
                
                correct_answer_audio.cloneNode(true).play();

                benar += 1;

                img_benar_salah.setAttribute("src", "assets/images/correct.png");

                e.target.classList.remove("btn-outline-secondary");
                e.target.classList.add("btn-success");
            } else {    // jawaban salah
                wrong_answer_audio.cloneNode(true).play();

                img_benar_salah.setAttribute("src", "assets/images/incorrect.webp");

                e.target.classList.remove("btn-outline-secondary");
                e.target.classList.add("btn-danger");
            }
        }
        
        // remove invisible dari parent div
        btn_berikutnya.parentElement.classList.remove("invisible", "d-none"); 
        btn_ya.disabled = true;
        btn_tidak.disabled = true;
    }
);

btn_berikutnya.addEventListener(
    "click", () => {
        click_audio.cloneNode(true).play();

        idx += 1;

        if (idx > pertanyaan.length-1) {      // jika pertanyaan telah habis
            score_audio.cloneNode(true).play();
            background_audio.pause();
            display_quiz.classList.add("d-none");
            display_score.classList.remove("d-none");
            txt_score.innerHTML = `Anda menjawab dengan benar <span class='pill'>${benar}</span> dari <span class='pill'>${idx}</span> pertanyaan`
        } else {    // tampilkan pertanyaan berikutnya
            // cek jika ada gambar di pertanyaan
            show_question();

            // hilangkan button berikutnya
            btn_berikutnya.parentElement.classList.add("invisible", "d-none"); 

            btn_ya.disabled = false;
            btn_tidak.disabled = false;
        }
    }
);