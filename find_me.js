document.addEventListener("DOMContentLoaded",()=>{
    const row=document.querySelector(".rows");
    let arr1=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
    let a=[];
    let new_arr1=[]
    let image;
   
    const main_grid=document.querySelector(".grid")
    let dives=[]
    console.log(row)
   for(let i=0;i<4;i++){
    let div=document.createElement("div")
    div.classList.add("rows")
    main_grid.appendChild(div)
    for(let j=0;j<6;j++){
        let div1=document.createElement("div")
        div1.classList.add("col")
        div.appendChild(div1);
        dives.push(div1)
    }
   }
       console.log(dives)
       
       for(let i=0;i<24;i++){
        dives[i].addEventListener("click",()=>{
            let img=dives[i].children[0]
            img.classList.add("block")
            console.log(img)
            a.push(image.src)
            console.log(a)
            // if(a[0]===a[1]){
            //     alert("win")
            // }
               
        })

    }
    function generate_random_no(min,max){
        return min+Math.floor(Math.random()*(max-min+1))
    }
   
   ( function setImage(){
        for(let i=0;i<24;i++){
            let r_i=generate_random_no(0,arr1.length-1)
            new_arr1.push(arr1[r_i])
            arr1.splice(r_i,1)
        }
        console.log(new_arr1)
        for(let i=0;i<new_arr1.length;i++){
            image=document.createElement("img")
            image.classList.add("image")
          image.src=`./image-${new_arr1[i]}.jpg`
          dives[i].appendChild(image)
          //  console.log(dives[i])
          

        }
    }
)();


    
})

