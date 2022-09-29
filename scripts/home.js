
    // let getdata=async()=>{

    //     let res= await fetch("https://newsapi.org/v2/everything?q=cricket&sortBy=publishedAt&apiKey=ef8b5436dd9a40648aaed5d3b66870fd");

    //     let data = await res.json();
    //     console.log(data.articles);
    // }

    // getdata();


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
    
        div.append(img,div1,div2,div3);
        cont1.append(div);
        cont.append(cont1);
    })
 
    let div4=document.createElement("div");
    div4.setAttribute("class","stats")
    div4.innerText="View All Stats";
    cont.append(div4);
}   

div3(player_data1)
