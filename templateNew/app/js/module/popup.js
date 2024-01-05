export default function popup() {
    const popupForm = document.querySelector(".popup-form");
    if (popupForm) {
        const popupBtns = document.querySelectorAll(".popup-btn");
        const popupModal = document.querySelector(".popup-modal");
        const popupEx = document.querySelector(".popup-ex");
        if (popupBtns) {
            popupBtns.forEach((popupBtn)=>{
                popupBtn.addEventListener("click", () => {
                    popupModal.classList.add("showed");
                    popupForm.classList.add("showed");
                    document.body.style.overflow = "hidden";
                })
            })
           
        }

        if (popupModal) {
            popupModal.addEventListener("click", () => {
                popupModal.classList.remove("showed");
                popupForm.classList.remove("showed");
                document.body.style.overflow = "auto";


            })
        }

        if (popupEx) {
            popupEx.addEventListener("click", () => {
                popupModal.classList.remove("showed");
                popupForm.classList.remove("showed");
                document.body.style.overflow = "auto";


            })
        }




    }

    const popupFormTd = document.querySelector(".popup-form-td");
    if (popupFormTd) {
        const popupBtns = document.querySelectorAll(".popup-btn-td");
        const popupModal = document.querySelector(".popup-modal-td");
        const popupEx = document.querySelector(".popup-ex-td");
        if (popupBtns) {
            popupBtns.forEach((popupBtn)=>{
                popupBtn.addEventListener("click", () => {
                    popupModal.classList.add("showed");
                    popupForm.classList.add("showed");
                    document.body.style.overflow = "hidden";
                })
            })
           
        }

        if (popupModal) {
            popupModal.addEventListener("click", () => {
                popupModal.classList.remove("showed");
                popupForm.classList.remove("showed");
                document.body.style.overflow = "auto";


            })
        }

        if (popupEx) {
            popupEx.addEventListener("click", () => {
                popupModal.classList.remove("showed");
                popupForm.classList.remove("showed");
                document.body.style.overflow = "auto";


            })
        }




    }




    const popupMainItems = document.querySelectorAll(".popup-main-item");
    if (popupMainItems) {
        popupMainItems.forEach((popupMainItem) => {
            popupMainItem.addEventListener("click", () => {
                const img = popupMainItem.querySelector(".popup-main-img img").src;
                const title = popupMainItem.querySelector(".popup-main-title").innerText;
                const num = popupMainItem.querySelector(".popup-main-num").innerText;
                const text = popupMainItem.querySelector(".popup-main-text").innerText;

                const imgPopupMain = document.querySelector(".popup_main--img img")
                const numPopupMain = document.querySelector(".popup_main--num")
                const titlePopupMain = document.querySelector(".popup_main--title")
                const textPopupMian = document.querySelector(".popup_main--text")
                imgPopupMain.setAttribute("src", img);
                numPopupMain.innerText = num;
                titlePopupMain.innerText = title;
                textPopupMian.innerText = text;



                const popupMain = document.querySelector(".popup_main");
                popupMain.classList.add("showed");
                document.body.style.overflow = "hidden";

            })

            const popupMainExit = document.querySelector(".popup_main--exits")
            if(popupMainExit){
                popupMainExit.addEventListener("click",()=>{
                    const popupMain = document.querySelector(".popup_main");
                    popupMain.classList.remove("showed");
                    document.body.style.overflow = "auto";
                })
            }
           

            const popupMainModal = document.querySelector(".popup_main--modal")
            if(popupMainModal){
                popupMainModal.addEventListener("click",()=>{
                    const popupMain = document.querySelector(".popup_main");
                    popupMain.classList.remove("showed");
                    document.body.style.overflow = "auto";
                })
            }
        })
    }
}