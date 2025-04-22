export class Tabs {
    constructor() {
        this.host = document.querySelector('.tabs')

        if (!this.host) return
    }

    setActiveTabsContent() {
        const step = document.querySelectorAll('.tabs__steps-button');
        const contentTab = document.querySelectorAll('.tabs__content-card');

        const container = document.querySelector('.tabs__content-inner');

        step.forEach((item, index) => {
            item.addEventListener('click', () => {
                let currentIndex = -1;
                const allCards = 4;

                step.forEach(elm => elm.classList.remove('--active'));
                item.classList.add('--active');

                // if (index < 0 || index >= allCards) return

                if (index > currentIndex) {
                    container.style.setProperty('--tabs-contetn-card-transform-x', `-${index * 100}%`);
                  } else if (index < currentIndex) {
                    container.style.setProperty('--tabs-contetn-card-transform-x', `-${index * 100}%`);
                  }
            });
        });
    }


    init() {
        this.setActiveTabsContent();
    }
}