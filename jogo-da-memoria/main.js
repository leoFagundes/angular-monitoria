
const iconList = ["fa-brands fa-twitter", "fa-solid fa-star", "fa-solid fa-cloud", "fa-solid fa-bolt", "fa-solid fa-plane"];
const iconListConcat = iconList.concat(iconList);
const shuffledIconList = iconListConcat.sort(() => Math.random() - 0.5);

let flippedCards = 0;
let permission = true

function handleClick() {
    if (permission === false) {
        return
    }

    flippedCards++;
    if (flippedCards === 2) {
        this.classList.add("flipped")

        const flippedCardsList = document.querySelectorAll(".flipped .card-back .icon:not(.correctIcon)");

        if (flippedCardsList[0].classList.value === flippedCardsList[1].classList.value) {
            console.log('são iguais')
            flippedCardsList[0].classList.add("correctIcon")
            flippedCardsList[1].classList.add("correctIcon")
            flippedCards = 0;

            flippedCardsList.forEach(icon => {
                icon.closest('.card').removeEventListener("click", handleClick);
            });
        } else {
            console.log("são diferentes")
            flippedCardsList[0].classList.add("wrongIcon")
            flippedCardsList[1].classList.add("wrongIcon")
            permission = false
            setTimeout(() => {
                document.querySelectorAll(".card").forEach((card) => {
                    if (!card.children[1].children[0].classList.value.includes('correctIcon')) {
                        card.classList.remove("flipped")
                    }
                })
                flippedCardsList[0].classList.remove("wrongIcon")
                flippedCardsList[1].classList.remove("wrongIcon")
                flippedCards = 0;
                permission = true
            }, 1000);
        }
    } else {
        this.classList.add("flipped")
    }
}


document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", handleClick)
})


document.querySelectorAll(".icon").forEach((icon, index) => {
    if (shuffledIconList[index].includes(" ")) {
        const classList = shuffledIconList[index].split(' ')
        classList.forEach((className) => {
            icon.classList.add(className)
        })
    } else {
        icon.classList.add(shuffledIconList[index])
    }
})