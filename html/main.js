onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  
  var audio = document.getElementById("myAudio");
  audio.volume = 0.1;  // Volume antara 0.0 (diam) dan 1.0 (penuh)

  document.addEventListener('mousemove', function(e){
    let body = document.querySelector('body');
    let particles = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    particles.style.left = x+'px';
    particles.style.top = y+'px';

    let size = Math.random() * 8;
    particles.style.width = 2 + size+'px';
    particles.style.height = 2 + size+'px';

    let transformValue = Math.random() * 360;
    particles.style.transform = 'rotate('+transformValue+'deg)';

    body.appendChild(particles);

    setTimeout(function(){
        particles.remove()
    },2000)
})