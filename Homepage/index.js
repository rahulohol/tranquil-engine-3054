let data= [
    { 
       time: "TODAY.7:00PM",
        team1: "India",
        team2: "South Africa",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313100/313128.logo.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313100/313125.logo.png",
        start:"Match starts in 4hrs 43mins",
        undarr:["schedule","fantacy", "videos", "series"]
    },
    {
        time: "TODAY.7:00PM",
        team1: "SOA",
        team2: "TAS",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313200/313234.logo.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313200/313235.logo.png",
        start:"Match starts in 4hrs 43mins",
        undarr:["schedule","fantacy", "videos", "series"]
    },
     {
        time: "TODAY.7:00PM",
        team1: "Pakistan",
        team2: "England",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313100/313129.logo.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313100/313114.logo.png",
        start:"Match starts in 4hrs 43mins",
        undarr:["schedule","fantacy", "videos", "series"]
    },
      {
        time: "TODAY.7:00PM",
        team1: "JTK",
        team2: "SLK",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313400/313483.logo.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/325900/325975.png",
        start:"Match starts in 4hrs 43mins",
        undarr:["schedule","fantacy", "videos", "series"]
    }
,
    {
        time: "TODAY.7:00PM",
        team1: "Pakistan",
        team2: "England",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313100/313129.logo.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313100/313114.logo.png",
        start:"Match starts in 4hrs 43mins",
        undarr:["schedule","fantacy", "videos", "series"]
    },
    {
        time: "TODAY.7:00PM",
        team1: "JT",
        team2: "SLK",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313400/313483.logo.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/325900/325975.png",
        start:"Match starts in 4hrs 43mins",
        undarr:["schedule","fantacy", "videos", "series"]
    },
     {
        time: "TODAY.7:00PM",
        team1: "SOM",
        team2: "KENT",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313200/313276.logo.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313200/313268.logo.png",
        start:"Match starts in 4hrs 43mins",
        undarr:["schedule","fantacy", "videos", "series"]
    },
      {
        time: "TODAY.7:00PM",
        team1: "GLOUC",
        team2: "YORKS",
        flag1: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313200/313265.logo.png",
        flag2: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_80/lsci/db/PICTURES/CMS/313200/313281.logo.png",
        start:"Match starts in 4hrs 43mins",
        undarr:["schedule","fantacy", "videos", "series"]
    }
]
let scorecarddata= (index)=>{
   let cont= document.getElementById("ra_topcards");
   cont.innerHTML=null;
   let start=4*index;
 let end= start + 4;
 let per_page_data= data.slice(start,end);
 console.log(per_page_data);
 per_page_data.forEach((el) => {
    let div= document.createElement("div");
    div.setAttribute("class", "ra_topcardschild")
    let time= document.createElement("p");
    time.innerText=el.time;

    let div1= document.createElement("div");
    div1.setAttribute("class", "ra_flagflex")
    div1.style.display= "flex"
    let img1= document.createElement("img")
    img1.src=el.flag1;
    let team1= document.createElement("p")
    team1.innerText= el.team1;
    div1.append(img1,team1)

    let div2= document.createElement("div");
    div2.setAttribute("class", "ra_flagflex")
   div2.style.display= "flex"
    let img2= document.createElement("img")
    img2.src=el.flag2;
    let team2= document.createElement("p")
    team2.innerText= el.team2;
    div2.append(img2,team2)
   let start= document.createElement("p");
    start.innerText=el.start;

    let hr= document.createElement("HR");

    let otherinfo= document.createElement("div");
    otherinfo.setAttribute("class", "ra_inside_card_match_info")
    otherinfo.style.display= "flex"
    el.undarr.forEach((elem)=>{
    let info= document.createElement("p");
      info.innerText=elem
      otherinfo.append(info)
    })
    





    div.append(time,div1,div2,start,hr,otherinfo)
    cont.append(div)
   });
}
 scorecarddata(0)



 let i=0

 let next= ()=>{
     if(i<Math.ceil(data.length/4)-1){
         i++
         scorecarddata(i)
     }
 }
 let prev= ()=>{
     if(i>=1){
         i--
         scorecarddata(i)
     }
 }

















//  let url= 'https://newsapi.org/v2/top-headlines?country=in&category=cricket&apiKey=0c63151c229a4ca396d91d3fd71e9c9b';
