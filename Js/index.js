
//Calling
const gallery = document.querySelectorAll(".image")
let bigPopup = document.querySelector(".popup")
let  close = document.querySelector(".icon")
let currentImage = document.querySelector(".current-img")
let totalImage = document.querySelector(".total-img")
let imgBox = document.querySelector(".img-box")
let image = imgBox.querySelector("img")//كدااا بنجيب الاتربيوت img اللي جوا الديف imageBox (New Search)


window.onload = function () {
    for(let  i = 0 ; i <= gallery.length ; i++){
        totalImage.textContent = gallery.length;
        let newIndex = i;
        gallery[i].onclick = function(){
            function go(){
                currentImage.textContent = newIndex + 1;
                let goalImg = gallery[newIndex].querySelector("img").src
                image.src = goalImg;
            }
            go();

            let nextBtn = document.querySelector(".next");
            let prevBtn = document.querySelector(".prev");
            if(newIndex == 0){
                prevBtn.style.display = "none";
            }
            if(newIndex >= gallery.length){
                nextBtn.style.display = "none";
            }
            prevBtn.onclick = ()=>{
                newIndex--;
                if(newIndex == 0){
                    go();
                    prevBtn.style.display="none"
                }else{
                    go();
                    nextBtn.style.display = "block"
                }

            }
            nextBtn.onclick = ()=>{
                newIndex++;
                if(newIndex >= gallery.length -1){
                    go();
                    nextBtn.style.display="none"
                }else{
                    go();
                    prevBtn.style.display = "block"
                }

            }
            bigPopup.classList.add("show");
            close.onclick = function (){
              bigPopup.classList.remove("show");
            }
        }
    }
}
