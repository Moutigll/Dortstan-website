button = document.getElementById("audio-button");
        ico = document.getElementById("audio-button-ico");
        var audio = new Audio('../ressources/audio/Hymn.mp3');
        current_time = document.getElementById("current-time")
        length_audio = document.getElementById("length-audio")
        volume = document.getElementById("volume")
        old_volume = 0
        volume_ico = document.getElementById("volume-ico")
        prct = document.getElementById("volume-value")
        button_state = 0;
        audio.addEventListener("playing", function()  {
            var interval = setInterval(function() {
                audio_time = Math.round(audio.currentTime)
                length_audio.value = audio_time
                sec = Math.round(audio_time%60)
                if (sec < 10){
                    sec = "0" + sec
                }
                current_time.innerHTML = Math.floor(audio_time/60) + ":" + sec + "/4:09"
            }, 1000);
        })
        audio.addEventListener("ended", function(){
            ico.src = "../ressources/images/play.png"
            button_state = 0
        });
        length_audio.oninput = function() {
            audio.currentTime = length_audio.value
            audio_time = Math.round(audio.currentTime)
            length_audio.value = audio_time
            sec = Math.round(audio_time%60)
            if (sec < 10){
                sec = "0" + sec
            }
            current_time.innerHTML = Math.floor(audio_time/60) + ":" + sec + "/4:09"
        }
        volume_ico.addEventListener('click', function(e)  {
            if (volume.value > 0){
                old_volume = volume.value
                audio.volume = 0
                volume.value = 0
                prct.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;0"
                volume_ico.src="../ressources/images/volume 0.png"
            }else{
                if(old_volume < 10) {
                    prct.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp" + old_volume;
                    volume_ico.src="../ressources/images/volume 33.png"
                }else if(old_volume > 9 && old_volume < 34) {
                    prct.innerHTML = "&nbsp;&nbsp;" + old_volume;
                    volume_ico.src="../ressources/images/volume 33.png"
                }else if(old_volume > 33 && old_volume < 67) {
                    prct.innerHTML = "&nbsp;&nbsp;" + old_volume;
                    volume_ico.src="../ressources/images/volume 66.png"
                }else if(old_volume == 100){
                    prct.innerHTML = "100"
                    volume_ico.src="../ressources/images/volume 100.png"
                } else{
                    prct.innerHTML = "&nbsp;&nbsp;" + old_volume;
                    volume_ico.src="../ressources/images/volume 100.png"
                }
                volume.value = old_volume
                audio.volume = old_volume/100
            }
        })
        volume.oninput = function() {
            audio.volume = volume.value/100
            if (volume.value == 0) {
                prct.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;0"
                volume_ico.src="../ressources/images/volume 0.png"
            }else if(volume.value > 0 && volume.value < 10) {
                prct.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp" + this.value;
                volume_ico.src="../ressources/images/volume 33.png"
            }else if(volume.value > 9 && volume.value < 34) {
                prct.innerHTML = "&nbsp;&nbsp;" + this.value;
                volume_ico.src="../ressources/images/volume 33.png"
            }else if(volume.value > 33 && volume.value < 67) {
                prct.innerHTML = "&nbsp;&nbsp;" + this.value;
                volume_ico.src="../ressources/images/volume 66.png"
            }else if(volume.value == 100){
                prct.innerHTML = "100"
                volume_ico.src="../ressources/images/volume 100.png"
            } else{
                prct.innerHTML = "&nbsp;&nbsp;" + this.value;
                volume_ico.src="../ressources/images/volume 100.png"
            }
        };
        button.addEventListener('click', function(e)  {
            if (button_state == 0){
                ico.src="../ressources/images/pause.png";
                button_state = 1
                audio.play();
            }else{
                button_state = 0
                ico.src="../ressources/images/play.png";
                audio.pause();
            };
        })