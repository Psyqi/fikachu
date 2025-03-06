const images = [
  {
    src: 'fika1.png',
    text: 'This pokemon i called "Fikachu", The Genius Sloth.\n\nPokemon ini adalah kombinasi langka antara kecerdasan dan keimutan yang mengerikan.\n\nUnfortunately, all that genius is held back by one undefeatable enemy: laziness.\n\nIf given a choice between completing a big project or lying in bed watching random videos, the bed wins every time.',
  },
  {
    src: 'fika4.png',
    text: 'This one, i called this pokemon "Tante Garang", The Walking Volcano.\n\nPokemon ini lebih panas dari matahari di siang bolong dan lebih cepat meledak dari popcorn di microwave.\n\nPatience? That word does not exist in her vocabulary.',
  },
  {
    src: 'wow.png',
    text: 'This pokemon....\n\nWHO THE FVK IS THIS POKEMON?!',
  },
  {
    src: 'fika3.png',
    text: 'NAAA, This is my last pokemon, "dedek bontet", The Tiny One That Must Be Protected.\n\nOrang ini seperti karakter yang belum bisa masuk open world game karena masih level awal.\n\nShe is too innocent, too adorable, and way too vulnerable to be left alone in this cruel pokemon world.\n\nSatu-satunya "keunggulan" yang bisa dia banggakan adalah tinggi badannya yang lebih mirip karakter chibi daripada manusia biasa.',
  },
];

let currentIndex = 0;

const startModal = document.getElementById('start-modal');
const endModal = document.getElementById('end-modal');
const startButton = document.getElementById('startButton');
const finishButton = document.getElementById('finishButton');
const content = document.getElementById('content');
const imageElement = document.getElementById('image');
const textElement = document.getElementById('story-text');
const nextButton = document.getElementById('nextButton'); // Tombol Next

// Fungsi untuk menampilkan gambar pertama setelah start
function startGame() {
  startModal.style.display = 'none'; // Sembunyikan modal start
  content.style.display = 'block'; // Tampilkan bagian slide gambar

  // Load gambar pertama
  imageElement.src = images[currentIndex].src;
  textElement.textContent = images[currentIndex].text;

  // Fade in animasi
  setTimeout(() => {
    content.style.opacity = 1;
  }, 100);
}

// Fungsi untuk menampilkan modal end
function endGame() {
  content.style.display = 'none'; // Sembunyikan slide gambar

  endModal.classList.add('show'); // Menampilkan modal dengan class 'show'
  nextButton.style.display = 'none'; // Sembunyikan tombol Next
}

// Event listener untuk tombol start
startButton.addEventListener('click', startGame);

// Event listener untuk tombol next
nextButton.addEventListener('click', () => {
  content.style.opacity = 0; // Fade out

  setTimeout(() => {
    if (currentIndex < images.length - 1) {
      currentIndex++; // Pindah ke gambar berikutnya
      imageElement.src = images[currentIndex].src; // Ubah gambar
      textElement.textContent = images[currentIndex].text; // Ubah teks
      content.style.opacity = 1; // Fade in
    } else {
      endGame(); // Jika sudah gambar terakhir, panggil endGame()
    }
  }, 500); // Tunggu 500ms agar fade out selesai sebelum mengganti gambar
});

// Event listener untuk tombol finish (menutup website)
finishButton.addEventListener('click', () => {
  window.close(); // Menutup website
});
