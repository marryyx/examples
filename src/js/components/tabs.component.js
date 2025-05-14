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

    slideCard(datasetStep) {
        this.card.forEach(item => item.classList.remove('--is-active'));

        const cardsAnim = [
            { opacity: "0" },
            { opacity: "1" },
        ];

        const cardsTiming = {
            duration: 950,
            iterations: 0.95,
        };

        this.card.forEach(elm => {
            const dataset = elm.dataset.card;

            if (datasetStep == dataset) {
                elm.animate(cardsAnim, cardsTiming);
                elm.classList.add('--is-active');
            }
        });
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