import data from "./components/data.js"
let lastIndex=data.length;
let renderDom=()=>{
    let container=document.getElementById("Ri-features_childs")
    container.innerHTML=null;
    data.forEach(({image,heading,para,time,writer})=>{
        let main=document.createElement("div")
        let div1=document.createElement("div");
        let a1=document.createElement("div")
        let a2=document.createElement("a")
        a2.href="#";
        let div2=document.createElement("div");
        let small_div=document.createElement("div");
        let img=document.createElement("img")
        let h=document.createElement("h3")
        let p=document.createElement("p")
        let t=document.createElement("p")
        let w=document.createElement("p")
        let hr=document.createElement("hr")
        img.src=image;
        h.innerText=heading;
        p.innerText=para;
        p.setAttribute("class","para")
        t.innerText=time;
        w.innerText=writer;
        a1.append(img)
        a1.setAttribute("class","img_div")
        small_div.append(t,w)
        small_div.setAttribute("id","small_div")
        a2.append(h,p,small_div);
        main.append(a1,a2)
        container.append(main,hr)
    })
}
renderDom(data)
let arr=[1,2,3,4]
console.log(arr.length-1)