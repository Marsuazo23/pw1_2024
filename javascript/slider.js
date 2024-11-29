class SliderController {
    slider;
    framestrack;
    slides = [];
    currentSlideIndex = 0;

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
        this.framestrack.style.transform = `translateX(-${this.currentSlideIndex * 100}vw)`; // Comillas invertidas para interpolación de variables
        console.log("Slide cambiado a:", this.currentSlideIndex);
    }

    moveNext() {
        // Cuando se llegue al último slide, el primero debe moverse como el siguiente
        if (this.currentSlideIndex === this.slides.length - 1) {
            this.framestrack.style.transition = "none"; // Desactivar transición para el salto
            this.moveSlideTo(0);  // Salta al primer slide inmediatamente
            setTimeout(() => {
                this.framestrack.style.transition = "transform 0.5s ease-in-out"; // Reactivar transición
            }, 200);  // Espera un pequeño tiempo para permitir el salto
        } else {
            this.moveSlideTo(this.currentSlideIndex + 1);
        }
    }

    movePrevious() {
        // Cuando se esté en el primer slide, mostrar el último como siguiente
        if (this.currentSlideIndex === 0) {
            this.framestrack.style.transition = "none"; // Desactivar transición para el salto
            this.moveSlideTo(this.slides.length - 1); // Salta al último slide inmediatamente
            setTimeout(() => {
                this.framestrack.style.transition = "transform 0.5s ease-in-out"; // Reactivar transición
            }, 200);  // Espera un pequeño tiempo para permitir el salto
        } else {
            this.moveSlideTo(this.currentSlideIndex - 1);
        }
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
            this.movePrevious();
        });

        // Agregar evento para mover al siguiente slide
        btnRight.addEventListener('click', () => {
            console.log("Flecha Derecha clickeada");
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
