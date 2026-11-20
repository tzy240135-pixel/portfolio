(function () {
  var box = document.getElementById('lightbox');
  var boxVideo = box.querySelector('video');

  function open(src) {
    boxVideo.src = src;
    box.classList.add('on');
    boxVideo.play().catch(function () {});
    document.body.style.overflow = 'hidden';
  }

  function close() {
    boxVideo.pause();
    boxVideo.removeAttribute('src');
    boxVideo.load();
    box.classList.remove('on');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.work-media').forEach(function (media) {
    var video = media.querySelector('video');
    var btn = media.querySelector('.play');
    if (!video) return;
    media.addEventListener('click', function (e) {
      e.preventDefault();
      open(video.getAttribute('src'));
    });
  });

  box.addEventListener('click', function (e) {
    if (e.target === box || e.target.classList.contains('close')) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && box.classList.contains('on')) close();
  });
})();
