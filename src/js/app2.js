window.addEventListener("DOMContentLoaded", function(){
    let tabs = document.querySelectorAll(".menu-header div");
    let tabcontents = document.querySelectorAll(".menu-content div");

    for(let tab of tabs){
        tab.addEventListener("click", function(){
            let activeElement=document.querySelector(".active");
            activeElement.classList.remove("active");
            this.classList.add("active");
            
            let index=this.getAttribute("data-index");

            for(let content of tabcontents){
                if(content.getAttribute("data-index")==index)
                {content.classList.add("show");}
                else{
                    content.classList.remove("show")
                }
            }
        })
    }
})