// Fungsi untuk membuat pemutar YouTube setelah API dimuat
  function onYouTubeIframeAPIReady() {
    const player = new YT.Player('player', {
      videoId: videoId,
      playerVars: {
        controls: 1, // Menyembunyikan kontrol bawaan YouTube
        fs: 1, // Menyembunyikan tombol layar penuh bawaan YouTube
      },
    });

    // Mengontrol tombol
    const playButton = document.getElementById('play');
    playButton.addEventListener('click', () => player.playVideo());

    const stopButton = document.getElementById('stop');
    stopButton.addEventListener('click', () => player.stopVideo());

    const forwardButton = document.getElementById('forward');
    forwardButton.addEventListener('click', () => {
      player.seekTo(player.getCurrentTime() + 10);
    });

    const rewindButton = document.getElementById('rewind');
    rewindButton.addEventListener('click', () => {
      player.seekTo(player.getCurrentTime() - 10);
    });

    const volumeInput = document.getElementById('volume');
    volumeInput.addEventListener('input', () => {
      player.setVolume(volumeInput.value * 100);
    });

    const muteButton = document.getElementById('mute');
    muteButton.addEventListener('click', () => {
      player.isMuted() ? player.unMute() : player.mute();
    });

    const fullscreenButton = document.getElementById('fullscreen');
    fullscreenButton.addEventListener('click', () => {
      player.isFullscreen() ? player.exitFullscreen() : player.requestFullscreen();
    });
    const pipButton = document.getElementById('pip');
    pipButton.addEventListener('click', () => {
      player.setPlaybackQuality('small');
      player.loadModule('cast', () => {
        player.cast.requestSession(); // Meminta Picture-in-Picture
      });
    });
  }

  // Memuat skrip API YouTube
  window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
