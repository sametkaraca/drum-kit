const buttonLength = document.querySelectorAll("button").length
    let tom1 = new Audio(`sounds/tom-1.mp3`);
    let tom2 = new Audio(`sounds/tom-2.mp3`);
    let tom3 = new Audio(`sounds/tom-3.mp3`);
    let tom4 = new Audio(`sounds/tom-4.mp3`);
    let crash = new Audio(`sounds/crash.mp3`);
    let snare = new Audio(`sounds/snare.mp3`);
    let kick = new Audio(`sounds/kick-bass.mp3`);

document.addEventListener("keydown", e=>console.log(e))

document.addEventListener("keydown", e =>{
    switch (e.key) {
        case "w":
            tom1.play()
            break;
        case "a":
            tom2.play()
            break;
        case "s":
            tom3.play()
            break;
        case "d":
            tom4.play()
            break;
        case "j":
            crash.play()
            break;
        case "k":
            snare.play()
            break;
        case "l":
            kick.play()
            break;
    }
})

for (let i = 0; i < buttonLength; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        this.style.color="white"  
   
        switch (this.innerHTML) {
            
            case "w":
                tom1.play()
                break;
            case "a":
                tom2.play()
                break;
            case "s":
                tom3.play()
                this.style.color="red"
                break;
            case "d":
                tom4.play()
                this.style.color="red"
                break;
            case "j":
                crash.play()
                this.style.color="red"
                break;
            case "k":
                snare.play()
                this.style.color="red"
                break;
            case "l":
                kick.play()
                this.style.color="red"
                break;
        }
    })

}