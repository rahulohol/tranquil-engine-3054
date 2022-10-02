
const d = new Date();

let date=d.getDate();

    let img_data=[
        {
            image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/346700/346707.6.jpg",

            h1:"Arshdeep's new-ball exploits excellent signs for India ahead of T20 World Cup",

            h3:"On Wednesday, the seamer showed if there is a bit of help about, he could be genuinely incisive in the powerplay"
        }
    ]

  function renderDom1(data){

   let cont=document.getElementById("pr_img");
   cont.innerHTML=null;

    data.forEach((el) => {

    let div=document.createElement("div");

    let =document.createElement("div");
  
    let img=document.createElement("img");
    img.src=el.image;
 
    let div1=document.createElement("div");

    let h1=document.createElement("h1");
    h1.innerText=el.h1;
 
    let h3=document.createElement("h3");
    h3.innerText=el.h3;
    
    div1.append(h1,h3);
    div.append(img,div1);
    cont.append(div);
  })
}

 renderDom1(img_data);


 let player_data1=[
    {
      image:"https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/304200/304221.png",
      name:"Rishabh Pant",
      score:"574",
      innings:"11",
      average:"57.40",
      hand:"lhb"
    },
    {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/302300/302377.jpg",
        name:"Mayank Agarwal",
        score:"436",
        innings:"13",
        average:"33.53",
        hand:"rhb"
      },
      {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/309100/309198.1.jpg",
        name:"Shreyas Iyer",
        score:"422",
        innings:"9",
        average:"46.88",
        hand:"rhb"
      }
 ]

 let player_data2=[
    {
      image:"https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/302300/302395.jpg",
      name:"Ravichanran Aswini",
      score:"29",
      innings:"14",
      average:"18.00",
      hand:"ob"
    },
    {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/302300/302376.jpg",
        name:"Jasprit Bumrah",
        score:"27",
        innings:"12",
        average:"19.00",
        hand:"rf"
      },
      {
        image:"https://img1.hscicdn.com/image/upload/f_auto,t_h_100_2x/lsci/db/PICTURES/CMS/304200/304210.png",
        name:"Mohammad Shami",
        score:"21",
        innings:"12",
        average:"26.42",
        hand:"rf"
      }
 ]

  function div1(){
    let cont=document.getElementById("pr_facts");
 
    let div1=document.createElement("div");

    let score=document.createElement("h5");
    score.innerText="TOP RUN SCORERS";
    
    let year=document.createElement("h6");
    year.innerText="IN LAST ONE YEAR";

    div1.append(score,year);
    cont.append(div1);
  }
 div1();

 function div2(){
    let cont=document.getElementById("pr_facts");

    let div2=document.createElement("div");

    let test=document.createElement("h4");
    test.innerText="Test";
    
    let odi=document.createElement("p");
    odi.innerText="ODI";

    let t201=document.createElement("p");
    t201.innerText="T20I";

    let t20=document.createElement("p");
    t20.innerText="T20";

    div2.append(test,odi,t201,t20);
    cont.append(div2);
 }
div2();


function div3(data){

    let cont=document.getElementById("pr_facts");

    let cont1=document.createElement("div");
    
    data.forEach((el) => {
        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=el.image;
        
        let name=document.createElement("h5");
        name.innerText=el.name;
        
        let hand=document.createElement("h5");
        hand.innerText=el.hand;
        let div1=document.createElement("div");
        div1.append(name,hand);
        div1.setAttribute("class","name");

        let score=document.createElement("h1");
        score.innerText=el.score;

        let div2=document.createElement("div");
        div2.append(score);
        div2.setAttribute("class","score");

        let innings=document.createElement("h6");
        innings.innerText=`Innings: ${el.innings}`;

        let avg=document.createElement("h6");
        avg.innerText=`Average: ${el.average}`;

        let div3=document.createElement("div");
        div3.append(innings,avg);
        div3.setAttribute("class","avg");

        let div4=document.createElement("div");
        div4.setAttribute("class","combine_div");

        div4.append(div1,div2,div3);
        div.append(img,div4);
        cont1.append(div);
        cont.append(cont1);
    })
 
    let div4=document.createElement("div");
    div4.setAttribute("class","stats")
    div4.innerText="View All Stats";
    cont.append(div4);
}   

div3(player_data1)



function div4(){
  let cont=document.getElementById("pr_facts1");

  let div1=document.createElement("div");

  let score=document.createElement("h5");
  score.innerText="TOP WICKET TAKERS";
  
  let year=document.createElement("h6");
  year.innerText="IN LAST ONE YEAR";

  div1.append(score,year);
  cont.append(div1);
}
div4();

function div5(){
  let cont=document.getElementById("pr_facts1");

  let div2=document.createElement("div");

  let test=document.createElement("h4");
  test.innerText="Test";

  let odi=document.createElement("p");
  odi.innerText="ODI";

  let t201=document.createElement("p");
  t201.innerText="T20I";

  let t20=document.createElement("p");
  t20.innerText="T20";

  div2.append(test,odi,t201,t20);
  cont.append(div2);
}
div5();


function div6(data){

  let cont=document.getElementById("pr_facts1");

  let cont1=document.createElement("div");

  data.forEach((el) => {
      let div=document.createElement("div");

      let img=document.createElement("img");
      img.src=el.image;
      
      let name=document.createElement("h5");
      name.innerText=el.name;
      
      let hand=document.createElement("h5");
      hand.innerText=el.hand;
      let div1=document.createElement("div");
      div1.append(name,hand);
      div1.setAttribute("class","name");

      let score=document.createElement("h1");
      score.innerText=el.score;

      let div2=document.createElement("div");
      div2.append(score);
      div2.setAttribute("class","score");

      let innings=document.createElement("h6");
      innings.innerText=`Innings: ${el.innings}`;

      let avg=document.createElement("h6");
      avg.innerText=`Average: ${el.average}`;

      let div3=document.createElement("div");
      div3.append(innings,avg);
      div3.setAttribute("class","avg");

      let div4=document.createElement("div");
      div4.setAttribute("class","combine_div");

      div4.append(div1,div2,div3);
      div.append(img,div4);
      cont1.append(div);
      cont.append(cont1);
  })

  let div4=document.createElement("div");
  div4.setAttribute("class","stats")
  div4.innerText="View All Stats";
  cont.append(div4);
}   

div6(player_data2);



let getdata2=async()=>{

  let res= await fetch(`https://newsapi.org/v2/everything?q=cricket&from=2022-09-${date}sortBy=publishedAt&apiKey=ef8b5436dd9a40648aaed5d3b66870fd`);

  let data = await res.json();

  div7(data.articles)
}

getdata2();


function div7(data){

  let cont=document.getElementById("pr_facts2");

  data.forEach((el) => {

    let div=document.createElement("div");
  
    let img=document.createElement("img");
    img.src=el.urlToImage;
 
    let div1=document.createElement("div");

    let h4=document.createElement("h4");
    h4.innerText=el.description;
    
    div1.append(h4);
    div.append(img,div1);
    cont.append(div);
  })
}

let getdata=async()=>{

  let res= await fetch(`https://newsapi.org/v2/everything?q=cricket&sortBy=cricket&apiKey=ef8b5436dd9a40648aaed5d3b66870fd`);

  let data = await res.json();

  div8(data.articles);
}

getdata();

function div8(data){

  let cont=document.getElementById("pr_news");

  data.forEach((el) => {

    let div=document.createElement("div");
  
    let img=document.createElement("img");
    img.src=el.urlToImage;
 
    let div1=document.createElement("div");

    let h4=document.createElement("h4");
    h4.innerText=el.description;
    
    div1.append(h4);
    div.append(img,div1);
    cont.append(div);
  })
}

let fixtureData=[
  {
    dateTimeGMT:"SUN,2ND Oct,7:00",
    matchType:"2ndT20 ODI(N),Indore,oct 2,South Africa...",
    t1img:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png",
    t2img:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png",
    status:"Match yet to begin",
    result:"India won by 8 wickets"
  },
  {
    dateTimeGMT:"SUN,2ND Oct,7:00",
    matchType:"2ndT20 ODI(N),Indore,oct 2,South Africa...",
    t1img:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png",
    t2img:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png",
    status:"Match yet to begin",
    result:"India won by 8 wickets"
  },
  {
    dateTimeGMT:"SUN,2ND Oct,7:00",
    matchType:"2ndT20 ODI(N),Indore,oct 2,South Africa...",
    t1img:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png",
    t2img:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png",
    status:"Match yet to begin",
    result:"India won by 8 wickets"
  },
  {
    dateTimeGMT:"SUN,2ND Oct,7:00",
    matchType:"2ndT20 ODI(N),Indore,oct 2,South Africa...",
    t1img:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png",
    t2img:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png",
    status:"Match yet to begin",
    result:"India won by 8 wickets"
  },
  {
    dateTimeGMT:"SUN,2ND Oct,7:00",
    matchType:"2ndT20 ODI(N),Indore,oct 2,South Africa...",
    t1img:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png",
    t2img:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png",
    status:"Match yet to begin",
    result:"India won by 8 wickets"
  },
  {
    dateTimeGMT:"SUN,2ND Oct,7:00",
    matchType:"2ndT20 ODI(N),Indore,oct 2,South Africa...",
    t1img:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png",
    t2img:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png",
    status:"Match yet to begin",
    result:"India won by 8 wickets"
  },
  {
    dateTimeGMT:"SUN,2ND Oct,7:00",
    matchType:"2ndT20 ODI(N),Indore,oct 2,South Africa...",
    t1img:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png",
    t2img:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png",
    status:"Match yet to begin",
    result:"India won by 8 wickets"
  }
]

function results(){
   div10(fixtureData);
}

document.getElementById("result").addEventListener("click",results);

function fixture(){
  div9(fixtureData);
}

document.getElementById("fixture").addEventListener("click",fixture);


function div10(data){
    
  let cont=document.getElementById("fixtures");
  cont.innerHTML=null;

  data.forEach((el) => {
    
    let div=document.createElement("div");
    
    let div1=document.createElement("div");
    let p=document.createElement("h6");
    p.innerText=el.dateTimeGMT;
    let h6=document.createElement("h6");
    h6.innerText=el.matchType;

    div1.append(p,h6);

    let div2=document.createElement("div");
    let img1=document.createElement("img");
    img1.src=el.t1img;
    let img2=document.createElement("img");
    img2.src=el.t2img;
    let p1=document.createElement("p");
    p1.innerText=el.result;
   
    div2.append(img1,img2,p1);

    div.append(div1,div2);
    cont.append(div);

  });

  let stats=document.createElement("div");
  stats.innerText="View All Fixtures";
  stats.setAttribute("class","allFixture")
  cont.append(stats);
}

function div9(data){
    
  let cont=document.getElementById("fixtures");
  cont.innerHTML=null;

  data.forEach((el) => {
    
    let div=document.createElement("div");
    
    let div1=document.createElement("div");
    let p=document.createElement("h6");
    p.innerText=el.dateTimeGMT;
    let h6=document.createElement("h6");
    h6.innerText=el.matchType;
    h6.setAttribute("class","h6");

    div1.append(p,h6);

    let div2=document.createElement("div");
    let img1=document.createElement("img");
    img1.src=el.t1img;
    let img2=document.createElement("img");
    img2.src=el.t2img;
    let p1=document.createElement("p");
    p1.innerText=el.status;
   
    div2.append(img1,img2,p1);

    div.append(div1,div2);
    cont.append(div);

  });

  let stats=document.createElement("div");
  stats.innerText="View All Fixtures";
  stats.setAttribute("class","allFixture")
  cont.append(stats);
}
div9(fixtureData);