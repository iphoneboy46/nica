export default function HeaderModule() {


    const header = document.querySelector(".header");
    if (header) {
        // const btnSearch = header.querySelector(".btn-search");
        // const btnSearchExits = header.querySelector(".btn-search-exit");
        // const modalSearch = document.querySelector(".modal-search");
        // const headerSearchIp = header.querySelector(".header-search-ip");
        // btnSearch.addEventListener("click", () => {

        //     btnSearchExits.classList.add("showed");
        //     modalSearch.classList.add("showed");
        //     btnSearch.classList.add("hiddened");
        //     headerSearchIp.classList.add("showed");
        // })

        // btnSearchExits.addEventListener("click", () => {

        //     btnSearchExits.classList.remove("showed");
        //     btnSearch.classList.remove("hiddened");
        //     modalSearch.classList.remove("showed");
        //     headerSearchIp.classList.remove("showed");
        // })



        // modalSearch.addEventListener("click", () => {

        //     btnSearchExits.classList.remove("showed");
        //     btnSearch.classList.remove("hiddened");
        //     modalSearch.classList.remove("showed");
        //     headerSearchIp.classList.remove("showed");

        //     console.log("asdasd");
        // })

        const menuItems = document.querySelectorAll(".menu-item");
        if(menuItems){
            menuItems.forEach((menuItem) => {
                if(menuItem.classList.contains("dropdown")){
                    const menuLink = menuItem.querySelector(".menu-link");
                    let menuIc = document.createElement("span");
                    menuIc.classList.add("menu-ic");
                    menuIc.innerHTML = `<i class="fas fa-angle-down"></i>`;
                    menuLink.appendChild(menuIc);
                }
            })
        }

          const dropdowns = document.querySelectorAll(".dropdown");
    if (dropdowns) {
        dropdowns.forEach((dropdown) => {
            const menuIc = dropdown.querySelector(".menu-ic");

            if (menuIc) {
                menuIc.addEventListener("click", (e) => {
                    e.preventDefault();
                    menuIc.classList.toggle("actived")
                    const menuList = dropdown.querySelector(".menu-list");
                    $(menuList).slideToggle(500);
                })

                window.addEventListener("click", (e) => {
                    if (!e.target.closest(".menu-ic")) {
                        const menuList = dropdown.querySelector(".menu-list");
                        $(menuList).slideUp(500);
                        menuIc.classList.remove("actived")
                    }
                })
            }


        })
    }


        const btnMobi = header.querySelector(".btn-mobi");
        const menuMB = document.querySelector(".menu-mb");
        const modalMB = document.querySelector(".menu-modal");
        btnMobi.addEventListener("click", () => {

            btnMobi.classList.toggle("actived")

            menuMB.classList.toggle("actived");
            modalMB.classList.toggle("actived");
            document.body.classList.toggle("actived");
        })

        modalMB.addEventListener("click", () => {
            btnMobi.classList.toggle("actived");
            menuMB.classList.toggle("actived");
            modalMB.classList.toggle("actived");
            document.body.classList.toggle("actived");

        });


        window.addEventListener("scroll", () => {


            if (window.scrollY > 0) {
                header.classList.add("actived");
            } else {
                header.classList.remove("actived");
            }

        })


      



    }

  
}