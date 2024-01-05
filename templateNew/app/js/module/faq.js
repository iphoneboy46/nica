

export default function faq() {
   

    const aboutCoreIts = document.querySelectorAll(".about_core--item");
    const aboutCoreCts = document.querySelectorAll(".about_core--item-content");

    if(aboutCoreIts){
        aboutCoreIts.forEach((aboutCoreIt,index)=>{
            if(window.screen.width <= 800){
                aboutCoreIt.classList.add("faq-it");
                aboutCoreCts[index].classList.add("faq-content")
            }else{
                aboutCoreIt.classList.remove("faq-it");
                aboutCoreCts[index].classList.remove("faq-content")
            }
        })
    }

    const faqItems = document.querySelectorAll(".faq-it");
    const faqContents = document.querySelectorAll(".faq-content");
   

    if (faqItems) {
       faqItems.forEach((faqItem,index)=>{

     
            faqContents.forEach((faqContent,index)=>{
                if(index === 0) {
                    $(faqContent).slideDown(500);
                    faqItems[0].classList.add("actived");
                }

            })
        

        faqItem.addEventListener("click",(e)=>{
          
            if(!e.target.closest(".faq-content")){
                
               
                faqItems.forEach((faqItem,index)=>{
                    faqItem.classList.remove("actived")

                    const faqItemShowed = document.querySelector(".showed");
                    
                    if(faqItemShowed){
                        faqItemShowed.classList.remove("showed")

                    }
                   
                })

                faqContents.forEach((faqContent)=>{
                    $(faqContent).slideUp(300);

                })
                
                const faqContent = faqItem.querySelector(".faq-content");
                if(faqContent.style.display == "" || faqContent.style.display == "none"){
                    faqItem.classList.add("actived");
                    $(faqContent).slideDown(300);

                }else{
                    faqItem.classList.remove("actived");
                    $(faqContent).slideUp(300);
                }

            }
        })
       })



    }
}