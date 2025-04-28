export class TabsComponent {
    constructor() {
        this.host = document.querySelector('.tabs');
    }

    setSliderPosition(val) {
        const container = this.host.querySelector('.tabs__content-inner');
        container.style.setProperty('--tabs-contetn-card-transform-x', `-${val * 100}%`);
    }

    activeSlide(activeElm) {
        this.step.forEach(elm => elm.classList.remove('--active'));
        activeElm.classList.add('--active');
    }

    init() {
        if (!this.host) return;

        this.step = this.host.querySelectorAll('.tabs__steps-button');

        this.step.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.activeSlide(item)
                this.setSliderPosition(index);
            });
        });
    }
}