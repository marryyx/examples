const SLIDER_ANIMATION_KEYFRAME = [
    {
        opacity: 0,
        // transform: "translateX(100%)"
    },
    {
        opacity: 1,
        // transform: "translateX(0)"
    },
];

const SLIDER_ANIMATION_KEYFRAME2 = [
    { opacity: 0, transform: "translateX(100%)" },
    { opacity: 1, transform: "translateX(0)" },
];

const SLIDER_ANIMATION_KEYFRAME3 = [
    { opacity: 0, transform: "translateY(-100%)" },
    { opacity: 1, transform: "translateY(0)" },
];

const SLIDER_ANIMATION_TIMING = {
    fill: "both",
    delay: 250,
    duration: 850
};

const SLIDER_ANIMATION_TIMING2 = {
    fill: "both",
    delay: 0,
    duration: 550,
    // easing: "cubic-bezier(.69,-0.45,.82,1.58)"
};

export class TabsComponent {
    constructor() {
        this.host = document.querySelector('.tabs');
    }

    // setSliderPosition(val) {
    //     const container = this.host.querySelector('.tabs__content-inner');
    //     container.style.setProperty('--tabs-contetn-card-transform-x', `-${val * 100}%`);
    // }

    activeStep(activeElm) {
        this.step.forEach(elm => elm.classList.remove('--active'));
        activeElm.classList.add('--active');
    }

    activeSlide(elm) {
        const animationOption = elm.dataset.card;

        switch (animationOption) {
            case "get-paid":
                elm.animate(SLIDER_ANIMATION_KEYFRAME, SLIDER_ANIMATION_TIMING);
                break;
            case "borrow":
                elm.animate(SLIDER_ANIMATION_KEYFRAME2, SLIDER_ANIMATION_TIMING);
                break;
            case "invest":
                elm.animate(SLIDER_ANIMATION_KEYFRAME3, SLIDER_ANIMATION_TIMING2);
                break;
            case "transact":
                elm.animate(SLIDER_ANIMATION_KEYFRAME, SLIDER_ANIMATION_TIMING);
                break;
        };

        elm.classList.add('--is-active');
    }

    slideCard(datasetStep) {
        this.card.forEach(item => item.classList.remove('--is-active'));

        this.card.forEach(elm => (elm.dataset.card == datasetStep) && this.activeSlide(elm));
    }


    init() {
        if (!this.host) return;

        this.step = this.host.querySelectorAll('.tabs__steps-button');
        this.card = this.host.querySelectorAll('.slider-card');

        this.step.forEach(item => {
            item.addEventListener('click', () => {
                this.activeStep(item)
                this.slideCard(item.dataset.step);
                // this.setSliderPosition(index);
                // const dataset = item.dataset.step;
            });
        });
    }
}