const hosts = document.querySelectorAll('.card');

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
                const hideNumOnTheCard = cardNum.slice(0, -4).replace(/\d/g, "•") + cardNum.slice(-4);
                item.textContent = hideNumOnTheCard;
                
                item.dataset.hidden = "true";
            }
        });
    });
}