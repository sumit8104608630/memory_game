document.addEventListener("DOMContentLoaded",()=>{
    const row=document.querySelector(".rows");
    let arr1=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    let a=[];
    let new_arr1=[]
    let remove_image=[]
    let game_over=0;
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
            a.push(img.id)
       let first_image=a[0];
       let second_image=a[1];
       remove_image.push(dives[i])
      


      // game main engine
       console.log(first_image,second_image)
       if(a.length==2){
       if(first_image==0&&second_image==12||first_image==12&&second_image==0||
          first_image==1&&second_image==13||first_image==13&&second_image==1||
          first_image==2&&second_image==14||first_image==14&&second_image==2||
          first_image==3&&second_image==15||first_image==15&&second_image==3||
          first_image==4&&second_image==16||first_image==16&&second_image==4||
          first_image==5&&second_image==17||first_image==17&&second_image==5||
          first_image==6&&second_image==18||first_image==18&&second_image==6||
          first_image==7&&second_image==19||first_image==19&&second_image==7||
          first_image==8&&second_image==20||first_image==20&&second_image==8||
          first_image==9&&second_image==21||first_image==21&&second_image==9||
          first_image==10&&second_image==22||first_image==22&&second_image==10||
          first_image==11&&second_image==23||first_image==23&&second_image==11
         )
       {
        console.log("true")
        a=[]
        console.log(remove_image[0].id)
       remove_image.forEach((e)=>{
       e.children[0].remove()
       e.style.backgroundColor="red"
       remove_image=[]
       })
       game_over=game_over+1
       console.log(game_over)
       gameOver(game_over)
        console.log(a)
  
       }
       else {
        console.log("false")
        a=[]
       }
    }
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
          image.id=new_arr1[i]
          dives[i].id=new_arr1[i]
         // console.log(image.src)
          //  console.log(dives[i])
        }
    }
)(); 
//console.log(game_over)
function gameOver(game_over){
    console.log(game_over)
    if(game_over==12){
        console.log("ss")
        window.location.reload()
    }
}

})

