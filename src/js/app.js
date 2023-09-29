window.addEventListener("DOMContentLoaded", function(){
    let sliderImg = document.getElementById("sliderimage")
    let prevBtn = document.getElementById("prevbtn")
    let nextBtn = document.getElementById("nextbtn")
    let sliderContainer = document.querySelector(".slider")

    let images = [
        "src/images/img1.png",
        "src/images/img2.png",
        "src/images/img3.png",
        "src/images/img4.png",
        "src/images/img5.png",
        "src/images/img6.png",
    ]

    let currentIndex=0;

    function Slider(){
        if(currentIndex<0){
            currentIndex=images.length-1
        }
        else if(currentIndex>=images.length){
            currentIndex=0
        }
        sliderImg.src=images[currentIndex]
    }

    prevBtn.addEventListener("click", function(){
        currentIndex--
        Slider()
    })
    nextBtn.addEventListener("click", function(){
        currentIndex++
        Slider()
    })

    let autoplay = setInterval(function(){
        currentIndex++
        Slider()
    }, 2000)

    sliderContainer.addEventListener("mouseover", function(){
        clearInterval(autoplay)
    })

    sliderContainer.addEventListener("mouseout", function(){
        autoplay = setInterval(function(){
            currentIndex++
            Slider()
        }, 2000)
    })

})