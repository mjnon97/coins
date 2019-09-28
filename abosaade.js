
// info this arrey one handred coins // all-coins
var info=[];
// arr this arrey five coins
var arr=[];
var info2=[];
var arr2=[];
var IdClose=[];
// arr this arrey five coins

if(localStorage.info)
{
     info = JSON.parse(localStorage.info);
     
    //  localStorage.info2=JSON.stringify(info);
    //  info2 = JSON.parse(localStorage.info2);
    
     //print all coins
    Print();
}
else
{
// get the jason and set this in arrey in -info-
var myUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1`;
$.ajax({
    type: 'GET',
    datatype: 'json',
    url: myUrl,
    async: false,
    success: function(data) {
       //for loop data in the arrey -info-
        for(i=0;i<100;i++)
        {
            let img = data[i].image.small;
            obj={};
            obj.id=i;
            obj.key=data[i].id;
            obj.name=data[i].name;
            obj.symbol=data[i].symbol;
            obj.image=data[i].image;
            console.log(obj,"ss")
            obj.toggle1=false;

            info.push(obj);
        }
        console.log(data);
        //save the arrey -info- in localStorge
        localStorage.info = JSON.stringify(info);
        
        //print the arrey -info-
        Print();
    },
    error: function(error) {
        console.log("error: ", error);
    },
});
}
// function print all-coind
function Print() {
    str = "";
    // if local storge info go in Retuern1    
    if(localStorage.info){ Retuern1(); console.log("Retuern1"); }
    // else go in Retuern2 
    else { Retuern2(); console.log("Retuern2"); }
    //set this in a div Home
    $('#Home').html(str); 
}
function Retuern2()
{
    for(i=0;i<info.length;i++){
        // this class is CardDiv
        str+='<div class="CardDiv card bg-light mb-3 col-xl-4 col-sm-12 col-md-3" style="max-width: 18rem;">';
        str+='<div class="card-header"><strong>'+info[i].name+'</strong></div>';
        str+='<div class="card-body row">';
        str+='<div class="col-6"><strong>'+info[i].symbol+'</strong></div>';
        //toglle
        str+='<div class="col-6">';
        str+='<label class="switch">';      //onClick toggleClick
        str+='<input type="checkbox" onchange="toggleClick(this,'+i+')">';
        str+='<span class="slider round"></span>';
        str+='</label>';
        str+='</div><br>';
       //print the imge your id is PrintMore
       str+='<div id="PrintMore'+i+'" class="PrintMore row col-12">';
       str+='</div><br>';
        //footer
        str+='<div class="col-12">';          //onClick MoreInfo
        str+='<button class="btn btn-outline-red  my-2 my-sm-0 MoreInfo" onclick="MoreInfo('+i+')" type="button"><strong>More Info</strong></button>';
        str+='</div>';
        str+='</div>';
        str+='</div>';
    }
    return str;
}
// Retuern1(i)
function Retuern1()
{
    if(localStorage.info2){info = JSON.parse(localStorage.info2); localStorage.info = JSON.stringify(info); console.log(info," infoprint")}

   for(i=0;i<info.length;i++)
   { 
       if(info[i].toggle1==true)
       {
           console.log(true," true");
       // this class is CardDiv
       str+='<div class="CardDiv card  mb-3 col-xl-4 col-sm-12 col-md-3" style="max-width: 18rem;">';
       str+='<div class="card-header"><strong>'+info[i].name+'</strong></div>';
       str+='<div class="card-body row">';
       str+='<div class="col-6"><strong>'+info[i].symbol+'</strong></div>';
       //toglle
       str+='<div class="col-6">';
       str+='<label class="switch">';      //onClick toggleClick
       str+='<input type="checkbox" onchange="toggleClick(this,'+i+')" checked>';
       str+='<span class="slider round"></span>';
       str+='</label>';
       str+='</div><br>';
      //print the imge your id is PrintMore
      str+='<div id="PrintMore'+i+'" class="PrintMore row col-12">';
      str+='</div>';
       //footer
       str+='<div class="col-12">';          //onClick MoreInfo
       str+='<button class="btn btn-outline-dark  my-2 my-sm-0 MoreInfo" onclick="MoreInfo('+i+')" type="button"><strong>More Info</strong></button>';
       str+='</div>';
       str+='</div>';
       str+='</div>';
       }
       else if(info[i].toggle1==false)
       {
            
        console.log(true," true");
        // this class is CardDiv
        str+='<div class="CardDiv card bg-light mb-3 col-xl-4 col-sm-12 col-md-3" style="max-width: 18rem;">';
        str+='<div class="card-header"><strong>'+info[i].name+'</strong></div>';
        str+='<div class="card-body row">';
        str+='<div class="col-6"><strong>'+info[i].symbol+'</strong></div>';
        //toglle
        str+='<div class="col-6">';
        str+='<label class="switch">';      //onClick toggleClick
        str+='<input type="checkbox" onchange="toggleClick(this,'+i+')">';
        str+='<span class="slider round"></span>';
        str+='</label>';
        str+='</div><br>';
        //print the imge your id is PrintMore
        str+='<div id="PrintMore'+i+'" class="PrintMore row col-12">';
        str+='</div>';
        //footer
        str+='<div class="col-12">';          //onClick MoreInfo
        str+='<button class="btn btn-outline-dark MoreInfo  my-2 my-sm-0" onclick="MoreInfo('+i+')" type="button"><strong>More Info</strong></button>';
        str+='</div>';
        str+='</div>';
        str+='</div>';
       }
   }      
    return str;
}

function HomeClick()
{
    $(`#Home`).toggle(1000);
    $("#Home").show();
    $("#About").hide();
    $("#Grafh").hide();
}
function AboutClick()
{
    $("#Home").hide();
    $("#Grafh").hide();
    $("#About").show();
    printAbout2();  
}
function printAbout2()
{
    img2 = `https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.0-9/47025209_10215919353928426_6719995072152076288_n.jpg?_nc_cat=105&_nc_ht=scontent.ftlv1-1.fna&oh=16d54109b7d4c48f516aac90f3397bb8&oe=5D0BEF8B`;
    str1="";
    console.log("about");
    str1+='<div class="card" style="width: 100%;background-color:A8257C ; color:D7D6D6;">';
    str1+='<img class="card-img-top" src="'+img2+'" alt="Card image cap">';
    str1+='<div class="card-block">';
    str1+='<h1 class="card-title">אבו סעאדה</h1>';
    str1+='</div>';
    str1+='<ul class="list-group list-group-flush">';
    str1+='<li class="list-group-item" style="background-color:901A82 ;"><strong>First Name : Mohammed</strong></li>';
    str1+='<li class="list-group-item" style="background-color:901A82 ;"><strong>Last Name : Ahmad</strong></li>';
    str1+='<li class="list-group-item" style="background-color:901A82 ;"><strong>Phone : 0526522887</strong></li>';
    str1+='<li class="list-group-item" style="background-color:901A82 ;"><strong>Mail : tekshov.abos3ade@gmail.com</strong></li>';
    str1+='<li class="list-group-item" style="background-color:901A82 ;"><strong>FaceBook : Abo Ahmad</strong></li>';
    str1+='<li class="list-group-item" style="background-color:901A82 ;"><strong>Instgram : Tuq3a</strong></li>';
    str1+='</ul>';
    str1+='</div>';
    $(`#About`).html(str1);
    console.log(str1);
}
function GrafhClick()
{
    var arr=[];
    $("#Grafh").show();
    $("#Home").hide();
    $("#About").hide(); 
    for(i=0;i<info.length;i++)
    {
        if(info[i].toggle1==true){
            arr.push(info[i])
        }  
    }
     localStorage.arr = JSON.stringify(arr);
     $("#Ggraff").show();
}
function ClickSerch()
{
    console.log("serch")
    console.log(ValueSerch.value)
    if(ValueSerch.value=="")
    {
        alert("Pleas set the Sympol in the input");
    }
    else
    {
        $("#Home").hide();
        str="";
        for(i=0;i<info.length;i++)
        {
            if(info[i].symbol==ValueSerch.value)
            {
                       // this class is CardDiv
        str+='<div class="CardDiv card bg-light mb-3 col-xl-4 col-sm-12 col-md-3" style="max-width: 18rem;">';
        str+='<div class="card-header"><strong>'+info[i].name+'</strong></div>';
        str+='<div class="card-body row">';
        str+='<div class="col-6"><strong>'+info[i].symbol+'</strong></div>';
        //toglle
        str+='<div class="col-6">';
        str+='<label class="switch">';      //onClick toggleClick
        str+='<input type="checkbox" onchange="toggleClick(this,'+i+')">';
        str+='<span class="slider round"></span>';
        str+='</label>';
        str+='</div><br>';
        //print the imge your id is PrintMore
        str+='<div id="PrintMores'+i+'" class="PrintMores row col-12">';
        str+='</div>';
        //footer
        str+='<div class="card-footer text-muted col-12">';          //onClick MoreInfo
        str+='<button class="btn btn-outline-dark MoreInfo  my-2 my-sm-0" id="MoreInfo('+i+')" onclick="MoreInfo('+i+')" type="button"><strong>More Info</strong></button>';
        str+='</div>';
        str+='</div>';
        str+='</div>';
               }
            }
        }
        Seerch.innerHTML=str;
    } 



$(`.PrintMore`).hide(); //ssssssssssssssssssssssssssssssssssss

function MoreInfo(i)
{
    console.log("MoreInfo",i)
    $(`#PrintMore${i}`).slideToggle();
    setInterval(function(){ $(`#PrintMore${i}`).hide(); }, 10000);
    InfoCoin(i);
}
function InfoCoin(i) {
    let coin = info[i].key;
    let Urlc = `https://api.coingecko.com/api/v3/coins/${coin}`;

    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: Urlc,
        async: true,
        success: function (data) {
          var Coin = data;
          localStorage.Coin = JSON.stringify(Coin);   
          printCoin(i);
            console.log("coin info: ", Coin);
        },
        error: function (error) {
            console.log("error : ", error);
        },
    });
}
function printCoin(i)
{
    var Coin = JSON.parse(localStorage.Coin);
    let USD = Coin.market_data.current_price.usd;
    let EUR = Coin.market_data.current_price.eur;
    let ILS = Coin.market_data.current_price.ils;
    let img = Coin.image.large;

    str='';
    str='<div class="Coins">';
    str+='<div class="">';
    str+='<img class="card-img-top imgCoin"  src="'+img+'" alt="Card image cap">';
    str+='<div class="row" style="text-align: center;">';
    str+='<p class="card-text"><strong>USD : '+USD+' $</strong></p>';
    str+='<p class="card-text"><strong>EUR : '+EUR+' €</strong></p>';
    str+='<p class="card-text"><strong>ILS : '+ILS+' ₪</strong></p>';
    str+='</div>';
    str+='</div>';
    str+='</div>';
    
    $(`#PrintMore${i}`).html(str);

}

// onClick in toggle
function toggleClick(element,i)
{
    // num this number the obj in arrey
    var num = i;
    //this toggle true or false
    var ele = element.checked;
    var Count=0;
    for(d=0;d<info.length;d++)
       if(info[d].toggle1==true)
          Count++;
    if(Count<5 && ele == true){arrPush(ele,num);}//arrPush
     else if(Count==5 && ele==true){ChangeArrey(ele,num)}//ChangeArrey
    else if(ele == false){arrSplice(ele,num);}//arrSplice
    
}

// if arr==5 and ele = true
function ChangeArrey(ele,num)
{
 str="";
 localStorage.info2=JSON.stringify(info);
 info2 = JSON.parse(localStorage.info2);
 localStorage.id = JSON.stringify(num);
 for(i=0;i<info.length;i++)
{
    if(info[i].toggle1==true){
        str+='<div class="row shosho" style="padding-left:40px;">';
        str+='<div class="col-4 row">';
        str+='<p><strong>'+info[i].name+'</strong></p>';
        str+='</div>';
        str+='<div class="col-4"><img class="col-sm" src="'+info[i].image+'" class="card-img" style="width: 70px; height: 70px;"></div>';
        str+='<div class="col-4">';
        str+='<label class="switch">';         //toggleClick2
        str+='<input type="checkbox" onchange="toggleClick2(this,'+i+')" checked>';
        str+='<span class="slider round"></span>';
        str+='</label>';
        str+='</div>';
        str+='</div>';
      }
    }
    
      Cchange.innerHTML = str;
       $("#myModal").show();
       
}

// click to toggleClick2 and change the arrey     
function toggleClick2(element,i)
{
    
    var ele = element.checked;
     var num = i;
     
    if(ele==false)
    {
            info2 = JSON.parse(localStorage.info2);
            info2[num].toggle1=false;
            console.log(info2[num]);
            localStorage.info2=JSON.stringify(info2);
    }
    if(ele==true)
        {
            info2 = JSON.parse(localStorage.info2);
            info2[num].toggle1=true;
            console.log(info2[num]);
            localStorage.info2=JSON.stringify(info2);
        }
 
 IdClose.push(i);     
}

// save the change in model
function saveChange()
{
    id = JSON.parse(localStorage.id);
    if(localStorage.info2)
    {
        info2[id].toggle1=true;
        localStorage.info2=JSON.stringify(info2);
        info = JSON.parse(localStorage.info2);
        console.log(info," info")
        localStorage.info=JSON.stringify(info);
    }
    
    Print();
    Modell();
}

//close the model
function Modell(){
    info2 = JSON.parse(localStorage.info);
    localStorage.info2=JSON.stringify(info);
    info = JSON.parse(localStorage.info);
    //info[IdClose].toggle1=true;
    for(k=0;k<IdClose.length;k++)
    {
        info[IdClose[k]].toggle1=true;
    }
    localStorage.info=JSON.stringify(info);
    
    Print();
    $("#myModal").hide();
}
 

//delet the num in the arrey
function arrSplice(ele,num)
{
    console.log(ele,num,"  arrSplice")
    info[num].toggle1 = ele;
    localStorage.info = JSON.stringify(info);
    for(i=0;i<arr.length;i++)
    {
        if(num==arr[i].id)
        {
            console.log("stop")
            arr.splice(i,1);
            localStorage.arr = JSON.stringify(arr);
        }
    }
}


// set the obj in arrey
function arrPush(ele,num)
{

    info[num].toggle1 = ele;

//   obj={};
//   obj.togle = ele;
//   obj.id = num;
//   obj.name = info[num].name;
//   obj.symbol = info[num].symbol;
//   obj.image = info[num].image;
  
//   arr.push(obj);
//   console.log("fat 3la alm3ra5");
//   localStorage.arr = JSON.stringify(arr);
  localStorage.info = JSON.stringify(info);
  
}

// onClick is hide the header and show the header
function hodhod()
{
    $('#hedhed').slideToggle(200);
}
function CloseModelGrafh()
{
    $('#Ggraff').hide();
}



