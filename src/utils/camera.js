function openCamera() {
  var video = document.querySelector('video');
  var constraints = {
    audio: false,
    video: { facingMode: 'environment', width: 1280, height: 720 },
  };
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (stream) {
      video.srcObject = stream;
      video.onloadedmetadata = function (e) {
        video.play();
      };
    })
    .catch(function (err) {
      console.log(err);
    });
}

export default openCamera;
