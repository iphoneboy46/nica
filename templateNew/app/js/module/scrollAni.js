export default function scrollAni() {

    
    const line = document.querySelectorAll(".line");

    if (line) {
        if(window.screen.width > 1200){
            window.addEventListener("scroll", () => {

                const triggerBottom = window.innerHeight * 4 / 10;
                const itemAnis = document.querySelectorAll(".line");
                itemAnis.forEach((itemAni) => {
                    const boxTop = itemAni.getBoundingClientRect().top;
    
                    if(triggerBottom > boxTop){
                        itemAni.classList.add("showed");
                    }
                })
            })
        }
        
       
    }

    const listAni = document.querySelectorAll(".list-ani");

    if (listAni) {
        if(window.screen.width > 1200){
            window.addEventListener("scroll", () => {

                const triggerBottom = window.innerHeight * 4 / 4;
                const itemAnis = document.querySelectorAll(".item-ani");
                itemAnis.forEach((itemAni) => {
                    const boxTop = itemAni.getBoundingClientRect().top;
    
                    if(triggerBottom > boxTop){
                        itemAni.classList.add("showed");
                    }
                })
            })
        }
        
       
    }
}