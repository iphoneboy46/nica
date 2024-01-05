export default function HomeJs() {
    const homeCore = document.querySelector(".home_core");

    if (homeCore) {
        const btnUp = homeCore.querySelector(".btn-navi.prev");

        const btnDown = homeCore.querySelector(".btn-navi.next");

        // var i = 1;


        // if (i == 1) {
        //     btnUp.classList.add("hidden");
        // }
        // else {
        //     btnUp.classList.remove("hidden");
        // }



        btnDown.addEventListener("click", () => {
            // i++;
            const listThuc = homeCore.querySelector(".home_core--lf-list");
            const listAo = homeCore.querySelector(".home_core--lf-list-ao");
            const imgTs = listThuc.querySelectorAll(".home_core--lf-item");

            const imgAs = listAo.querySelectorAll(".home_core--lf-item");



            imgTs.forEach((imgT) => {
                if (imgTs.length > 1) {
                    imgTs[0].classList.add("upper");
                    setTimeout(() => {
                        imgTs[0].remove();
                        listAo.prepend(imgTs[0]);
                        imgTs[0].classList.remove("upper");
                    }, 300)
                }
            })

         

            // if (i == 5) {
            //     btnDown.classList.add("hidden");
            // }
            // else {
            //     btnUp.classList.remove("hidden");
            // }
        })

        btnUp.addEventListener("click", () => {
            const listThuc = homeCore.querySelector(".home_core--lf-list");
            const listAo = homeCore.querySelector(".home_core--lf-list-ao");
            const imgTs = listThuc.querySelectorAll(".home_core--lf-item");

            const imgAs = listAo.querySelectorAll(".home_core--lf-item");



            imgTs.forEach((imgT) => {

                if (imgTs.length >= 1) {
                    imgTs[0].classList.add("downer");

                    // imgAs[0].classList.add("downer");





                    setTimeout(() => {
                        imgTs[0].classList.remove("downer");

                        imgAs[0].remove();  
                        listThuc.prepend(imgAs[0]);
                        imgAs[0].classList.remove("downer");
                    }, 500)
                    // imgAs[0].classList.add("downer");
                    

                }
            })

            // if (i == 5) {
            //     btnDown.classList.add("hidden");
            // }
            // else {
            //     btnUp.classList.remove("hidden");
            // }
        })



    }
}