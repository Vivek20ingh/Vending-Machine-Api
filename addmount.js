var count = 0;
const vec=[1,2,5,10,20,50,100,200,500]
  
for(let a=1;a<=9;a++)
{
    var btn1=document.getElementById(a);
    btn1.onclick = function () {

        count+=vec[a-1];
        if(count>500)
        {
           console.log(err);
        }
        else document.getElementById("display").innerHTML=count;
    }

}
