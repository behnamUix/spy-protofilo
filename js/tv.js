// ======== المان‌ها ========
const video = document.getElementById("tvVideo");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const muteBtn = document.getElementById("muteBtn");
const resetBtn = document.getElementById("resetBtn");
const indicator1 = document.getElementById("indicator1");
const indicator2 = document.getElementById("indicator2");
const indicator3 = document.getElementById("indicator3");

let isPlaying = false;
let isMuted = true;

// ======== تغییر آیکون دکمه پخش ========
function updatePlayIcon() {
  if (isPlaying) {
    playBtn.innerHTML = '<i class="fas fa-play"></i> پخش';
  } else {
    playBtn.innerHTML = '<i class="fas fa-play"></i> پخش';
  }
}

// ======== LED Indicator ========
function updateIndicators(state) {
  const dots = [indicator1, indicator2, indicator3];
  dots.forEach((dot, index) => {
    if (state === "on") {
      setTimeout(() => {
        dot.classList.add("on");
      }, index * 300);
    } else {
      dot.classList.remove("on");
    }
  });
}

// ======== پخش ========
function playVideo() {
  video.play();
  isPlaying = true;
  updateIndicators("on");
  playBtn.innerHTML = '<i class="fas fa-pause"></i> توقف موقت';
  playBtn.classList.add("play");
}

// ======== توقف ========
function pauseVideo() {
  video.pause();
  isPlaying = false;
  updateIndicators("off");
  playBtn.innerHTML = '<i class="fas fa-play"></i> پخش';
}

// ======== قطع/وصل صدا ========
function toggleMute() {
  video.muted = !video.muted;
  isMuted = video.muted;
  if (isMuted) {
    muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i> بی‌صدا';
  } else {
    muteBtn.innerHTML = '<i class="fas fa-volume-up"></i> صدا';
  }
}

// ======== بازنشانی ========
function resetVideo() {
  video.currentTime = 0;
  if (isPlaying) {
    video.play();
  }
  // چشمک زدن LED ها
  updateIndicators("off");
  setTimeout(() => {
    if (isPlaying) {
      updateIndicators("on");
    }
  }, 300);
}

// ======== رویدادها ========
playBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseVideo();
  } else {
    playVideo();
  }
});

pauseBtn.addEventListener("click", pauseVideo);

muteBtn.addEventListener("click", toggleMute);

resetBtn.addEventListener("click", resetVideo);

// ======== پخش خودکار هنگام لود ========
window.addEventListener("load", () => {
  // نمایش آماده به کار
  updateIndicators("off");

  // شروع با تاخیر (اختیاری)
  setTimeout(() => {
    playVideo();
  }, 1000);
});

// ======== وقتی ویدیو تمام شد ========
video.addEventListener("ended", () => {
  // پخش مجدد
  video.currentTime = 0;
  video.play();
});

// ======== خطا ========
video.addEventListener("error", (e) => {
  console.log("❌ خطا در پخش ویدیو:", e);
});

console.log("📺 تلویزیون LED آماده است!");
