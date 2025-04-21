export class Tabs {
    constructor() {
        this.host = document.querySelector('.tabs')

        if (!this.host) return
    }

    setActiveTabsContent() {
        const step = document.querySelectorAll('.tabs__steps-button');
        const contentTab = document.querySelectorAll('.tabs__content-card');

        step.forEach((item, index) => {
            item.addEventListener('click', () => {
                step.forEach(elm => elm.classList.remove('--active'));
                item.classList.add('--active');

                contentTab.forEach(elm => elm.classList.remove('--active'));
                contentTab[index].classList.add('--active');
            });
        });
    }


    init() {
        this.setActiveTabsContent();
    }
}