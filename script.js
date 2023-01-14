window.addEventListener("load", windowLoad);

function windowLoad() {
    document.documentElement.classList.add('loaded')



    const page = document.querySelector('.page');
    const parallaxItems = document.querySelectorAll('[class*="__inset"]');
    const speed = 0.05

    let posX = 0;
    let cXprocent = 0;

    page.addEventListener("mousemove", parallaxAnimation);

    function parallaxAnimation(e){
        const parallaxWidth = window.innerWidth;
        const cX = e.pageX - parallaxWidth / 2
        cXprocent = cX / parallaxWidth * 100;
    }

    function setParallaxAnimationstyle(e) {
        const distX = cXprocent - posX
        posX = posX + (distX* speed)

        parallaxItems.forEach(parallaxItem => {
            const value = parallaxItem.dataset.prxValue ? 
            + parallaxItem.dataset.prxValue : 1;

            parallaxItem.style.cssText = `
            transform: translateX(${posX / value}%)
            `
        });
        requestAnimationFrame(setParallaxAnimationstyle);
    }
    setParallaxAnimationstyle();

    const sun = document.querySelector('.sun');
    const oblaka = document.querySelector('.oblaka');
    const buildings = document.querySelectorAll('.building')
/*     const tree = document.querySelector('.tree') */
    const stairs = document.querySelector('.stairs')
    const pineapple = document.querySelector('.pineapple')
    const train = document.querySelector('.train')
    const santaItems = document.querySelectorAll('.santa>*')

    window.addEventListener('scroll', createPosition)
    createPosition();


    function createPosition() {
        const contentElement = document.querySelector('.content__container');
        const windowHeight = window.innerHeight;
        const finalPos = scrollY / (contentElement.offsetTop - windowHeight) * 100;
        finalPos < 100 ? christmasAnimation(finalPos) : christmasAnimation(100)
    }
    function christmasAnimation(finalPos) {
        const sunAnim = {
            translate: 50 / 100 * finalPos,
            scale: 1 + 2/ 100 * finalPos
        }
        sun.style.cssText = `
            transform:
                translate(0,${sunAnim.translate}%)
                scale(${sunAnim.scale})
        `;

        const oblakaAnim = {
            translate: 50 / 100 * finalPos,
            scale: 1 + 2/ 100 * finalPos
        }
        oblaka.style.cssText = `
            transform:
                translate(0,${oblakaAnim.translate}%)
                scale(${oblakaAnim.scale})
        `;

        const stairsAmin = {
            translate: 70 / 100 * finalPos,
            scale: 1 + 2/ 100 * finalPos
        }
        stairs.style.cssText = `
        transform:
            translate(0,${stairsAmin.translate}%)
            scale(${stairsAmin.scale})
    `;
    const pineappleAmin = {
        translate: 70 / 100 * finalPos,
        scale: 1 + 2/ 100 * finalPos
    }
    pineapple.style.cssText = `
    transform:
        translate(0,${pineappleAmin.translate}%)
        scale(${pineappleAmin.scale})
`;


/*     const treeAmin = {
        translate: 70 / 100 * finalPos,
        scale: 1 + 1.5/ 100 * finalPos
    }
    tree.style.cssText = `
    transform:
        translate(0,${treeAmin.translate}%)
        scale(${treeAmin.scale})
    `; */

    buildings.forEach((building, index) => {
        const buildingAnim = {
            translate: 30 * (buildings.length - index) / 100 * finalPos,
            scale: 1 + 2 / 100 * finalPos
        }
        building.style.cssText = `
        transform:
            translate(0,${buildingAnim.translate}%)
            scale(${buildingAnim.scale})
        `;
    })
    const trainAmin = {
        translate: 1 * finalPos,
    }
    train.style.cssText = `
    transform: translate(-${trainAmin.translate}%,${trainAmin.translate}%)
    `;

    santaItems.forEach((santaItem, index) => {
        const santaAnim = {
            left: (100 + (10* index)) / 100 * finalPos
        }
        santaItem.style.left = `${santaAnim.left}%`;
    })

    }
}