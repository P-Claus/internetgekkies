const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-clicked');
})

for(var i = 0; i < document.querySelectorAll(".featured-image").length; i++) {

    document.querySelectorAll(".featured-image")[i].addEventListener("click", function () {
        console.log(this.classList);

        var classFeaturedImage = this.classList[1];
        console.log(classFeaturedImage);


        switch (classFeaturedImage) {
            case "maikelvanhoof":
                var maikelVanHoof = new Audio('sounds/maikelclip.wav')
                    maikelVanHoof.play();
            break;

            case "youri":
                var youri = new Audio('sounds/yourigo.mp3')
                    youri.play();
            break;

            case "biemmeneer":
                var biemMeneer = new Audio('sounds/biem.mp3')
                    biemMeneer.play();
            break;
            
            case "geakramer":
                var geaKramer = new Audio('sounds/bietn.mp3')
                    geaKramer.play();
            break;

            case "eefhoos":
                var eefHoos = new Audio('sounds/eefhooskankertystraal.mp3')
                    eefHoos.play();
            break;

            case "tweekarrenjoh":
                var tweeKarrenJoh = new Audio('sounds/tweekarrenjoh.mp3')
                    tweeKarrenJoh.play();
            break;

            case "henk":
                var klootZakken = new Audio('sounds/klootzakken.mp3')
                    klootZakken.play();
            break;
        
            default:
                break;
        }
    });
}



