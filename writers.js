import writersData from "./components/writersData.js"
console.log(writersData)
let url="https://newsapi.org/v2/everything?q=cricket&apiKey=6e7ce7e589304e10989333c5f29e0aad"
let renderDom=(data)=>{
    let container=document.getElementById("Ri-features_childs")
    container.innerHTML=null;
    writersData.forEach(({name,image,twitter,role})=>{
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
            img.src=image;
            h.innerText=name;
            p.innerText=role;
            p.setAttribute("class","para")
            t.innerText=twitter;
            t.style.color="#1d9bf0"
            a1.append(img)
            img_div.append(a1)
            img_div.setAttribute("class","img_div")
            small_div.append(t)
            small_div.setAttribute("id","small_div")
            a2.append(h,p,small_div);
            content_div.append(a2)
            main.append(img_div,content_div)
            container.append(main)
    })
    let container2=document.getElementById("Ri-most_read_childs")
    container2.innerHTML=null;
    data.forEach(({urlToImage,title,publishedAt,author})=>{
        let result="";
        for(let i of publishedAt){
            if(i=="T"){
              break;
            }else{
                result+=i;
            }
        }
        if(urlToImage && title.length<=55){
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
let getData=async()=>{
    let res=await fetch(url);
    res=await res.json();
    res=res.articles;
    renderDom(res)
}
getData()