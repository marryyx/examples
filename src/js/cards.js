const hosts = document.querySelectorAll('.card');

const maskCardNumber = (item) => {
    return hideNumOnTheCard = item.slice(0, -4).replace(/\d/g, "•") + item.slice(-4);
};

for (let j = 0; j < hosts.length; j++) {
    const bankCardNumbers = hosts[j].querySelectorAll('.card__number');

    bankCardNumbers.forEach(item => {
        item.dataset.hidden = "false";
        const originalCardNum = item.textContent;

        item.addEventListener('click', () => {
            const cardNum = item.textContent;

            if (item.dataset.hidden === "true") {
                item.textContent = originalCardNum;
                item.dataset.hidden = "false";

            } else {
                maskCardNumber(cardNum);
                item.textContent = hideNumOnTheCard;
                item.dataset.hidden = "true";
            }
        });
    });
}