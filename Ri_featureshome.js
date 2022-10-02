// let lastIndex=data.length;
// let url2="https://newsapi.org/v2/top-headlines?in&category=sports&apiKey=6e7ce7e589304e10989333c5f29e0aad";
let url="https://newsapi.org/v2/everything?q=cricket&apiKey=6e7ce7e589304e10989333c5f29e0aad"
let renderDom=(data)=>{
    let container=document.getElementById("Ri-features_childs")
    container.innerHTML=null;
    let container2=document.getElementById("Ri-most_read_childs")
    container2.innerHTML=null;
    data.forEach(({urlToImage,title,content,publishedAt,author})=>{
        let result="";
        for(let i of publishedAt){
            if(i=="T"){
              break;
            }else{
                result+=i;
            }
        }
        if(urlToImage && author){
            let main=document.createElement("div")
            let img_div=document.createElement("div")
            let a1=document.createElement("a")
            a1.href="#";
            let a2=document.createElement("a")
            a2.href="#";
            let content_div=document.createElement("div");
            let small_div=document.createElement("div");
            let img=document.createElement("img")
            let h=document.createElement("h3")
            let p=document.createElement("p")
            let t=document.createElement("p")
            let w=document.createElement("p")
            let hr=document.createElement("hr")
            img.src=urlToImage;
            h.innerText=title;
            p.innerText=content;
            p.setAttribute("class","para")
            t.innerText=result;
            w.innerText=author;
            a1.append(img)
            img_div.append(a1)
            img_div.setAttribute("class","img_div")
            small_div.append(t,w)
            small_div.setAttribute("id","small_div")
            a2.append(h,p,small_div);
            content_div.append(a2)
            main.append(img_div,content_div)
            container.append(main,hr)
        }
        if(urlToImage && title.length<=60 && author){
            let main=document.createElement("div")
            let img_div=document.createElement("div")
            let a1=document.createElement("a")
            a1.href="#";
            let a2=document.createElement("a")
            a2.href="#";
            let content_div=document.createElement("div");
            let small_div=document.createElement("div");
            let img=document.createElement("img")
            let h=document.createElement("h3")
            let p=document.createElement("p")
            let t=document.createElement("p")
            let w=document.createElement("p")
            img.src=urlToImage;
            h.innerText=title;
            t.innerText=result;
            w.innerText=author;
            a1.append(img)
            img_div.append(a1)
            img_div.setAttribute("class","img_div")
            small_div.append(t,w)
            small_div.setAttribute("id","small_div")
            a2.append(h,small_div);
            content_div.append(a2)
            main.append(img_div,content_div)
            container2.append(main)
        }
    });
}
// let arr=[1,2,3,4]
// console.log(arr.length-1)
let getData=async()=>{
    let res=await fetch(url);
    res=await res.json();
    res=res.articles;
    let data=[];
    for(let i=0;i<res.length;i++){
        if(i<=42){
            data.push(res[i]);
      }
    }
    renderDom(data)
}
getData()


// Logical Part but not implimanting because till now its not debug
// let names=[{n:"Ritik"},{n:"Gopal"},{n:"Atul"}];
// // console.log('name',names[0].n)
// let updateNames=names.filter((el)=>{
//     if(!el.n.includes("Ritik")){
//         return el;
//     }
// })
// console.log(updateNames)
// // console.log(names[0].n.includes("Ritik"))

