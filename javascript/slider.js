class SliderController {
    slider;
    framestrack;
    slides = [];
    currentSlideIndex = 0;
    slideDirection = 1;

    constructor() {
        this.slider = document.querySelector('.slider');
        this.framestrack = document.querySelector('.framestrack');
        this.slides = [...document.querySelectorAll('.slide')];
        console.log("Slide Status:", {
            "slides": this.slides,
            "framestrack": this.framestrack,
        });
        this.generateUI();
        this.moveSlideTo(0); // Inicia en el primer slide
    }

    moveSlideTo(slideIndex) {
        // Asegúrate de que el índice sea cíclico
        this.currentSlideIndex = (slideIndex + this.slides.length) % this.slides.length;

        // Cambiar el desplazamiento con translateX para mover las imágenes
        this.framestrack.style.transform = `translateX(-${this.currentSlideIndex * 100}vw)`;
        console.log("Slide cambiado a:", this.currentSlideIndex);
    }

    moveNext() {
        // Mueve al siguiente slide, con la lógica cíclica
        this.currentSlideIndex = (this.currentSlideIndex + this.slideDirection + this.slides.length) % this.slides.length;
        this.moveSlideTo(this.currentSlideIndex);
    }

    generateUI() {
        const btnLeft = document.createElement("DIV");
        const btnRight = document.createElement("DIV");
        btnLeft.classList.add('btnLeft');
        btnRight.classList.add('btnRight');
        btnLeft.innerHTML = '&lt;'; // <
        btnRight.innerHTML = '&gt;'; // >

        // Agregar evento para mover al slide anterior
        btnLeft.addEventListener('click', () => {
            console.log("Flecha Izquierda clickeada");
            this.slideDirection = -1; // Movimiento hacia atrás
            this.moveNext();
        });

        // Agregar evento para mover al siguiente slide
        btnRight.addEventListener('click', () => {
            console.log("Flecha Derecha clickeada");
            this.slideDirection = 1; // Movimiento hacia adelante
            this.moveNext();
        });

        this.slider.appendChild(btnLeft);
        this.slider.appendChild(btnRight);

        // Crear los botones de navegación adicionales
        const navigator = document.createElement("DIV");
        navigator.classList.add("navigator");

        this.slides.forEach((slide, i) => {
            const btnNavigateTo = document.createElement("DIV");
            btnNavigateTo.classList.add("btnNavigateTo");
            btnNavigateTo.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log(`Navegar a la diapositiva ${i}`);
                this.moveSlideTo(i);
            });
            navigator.appendChild(btnNavigateTo);
        });
        this.slider.appendChild(navigator);
    }
}

// Inicializa el SliderController
document.addEventListener("DOMContentLoaded", function () {
    const slider = new SliderController();
});
