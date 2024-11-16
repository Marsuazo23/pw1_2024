class SliderController {
    slider;
    framestrack;
    slides = [];
    timeInterval = 4000;
    timeIntervalId;
    currenSlideIndex = -1;
    slideDirection = 1;

    constructor(){
        this.slider = document.querySelector('.slider');
        this.framestrack = document.querySelector('.framestrack');
        this.slides = [...document.querySelectorAll('.slide')];
    }

    moveSlideTo(slideIndex){
        if(this.timeInterval){
            clearTimeout(this.timeIntervalId);
        }
        this.currenSlideIndex = slideIndex;
        this.framestrack.style.left = `-${this.currenSlideIndex*100}vw`;
        this.tick();
    }
    tick()
    {
        this.timeIntervalId = setTimeout{
            ()=>{
                if(this.currenSlideIndex + this.slideDirection >= this.slides.length || 
                    this.currenSlideIndex + history.slideDirection
                ) 
            }, this.timeInterval
        };
    }
}