
fetch("./obj1.json")
    .then((res)=> 
    {
       return res.json();
        // console.log(res);
    })
    .then((result)=>{
        // console.log(result);
        var count=Object.keys(result)
        // console.log(count.length)
        for(let i=0;i<count.length;i++)
        {
            let div = document.createElement('div');
             div.classList.add('row');

             let div1 = document.createElement('div');
             div1.classList.add('col-sm');
             let text = document.createTextNode(count[i]);
             div1.appendChild(text);
             div.append(div1);

             div1 = document.createElement('div');
             div1.classList.add('col-sm');
             text = document.createTextNode(result[count[i]]);
             div1.appendChild(text);
             div.append(div1);

             div1 = document.createElement('div');
             div1.classList.add('col-sm');
              text = document.createTextNode(`0${i}`);
             div1.appendChild(text);
             div.append(div1);

            //  console.log(div)
             div.className ="row";
            document.getElementById("item").appendChild(div);
        }
    })
    .catch(err =>{
        console.log('server error')
    })
    let r;

var count1 = 0;
const vec=[1,2,5,10,20,50,100,200,500]
let check=0;

fetch("./obj2.json")
    .then((res)=> 
    {
       return res.json();
        // console.log(res);
    })
    .then((result)=>{

        

        for(let a=1;a<=9;a++)
        {
            var btn1=document.getElementById(a);
            btn1.onclick = function () {
                let z1= document.getElementById("collect1").style.display;
                if(z1=="flex")
                {
                    document.getElementById("display1").innerHTML="Collect You item";
                    document.getElementById("flex").style.display="flex"
                }
                else if(count1+vec[a-1]>500)
                {
                    document.getElementById("display1").innerHTML="You can't add more than 500";
                    document.getElementById("flex").style.display="flex"
                }
                else 
                {
                    if(check==1)
                    {
                        result=r;
                    }
                    const x=vec[a-1];
                    result[x]++;
                    r=result;
                    check=1;
                    // console.log(result[x]);
                    document.getElementById("flex").style.display="none"
                    count1+=vec[a-1];
                    document.getElementById("display").innerHTML=count1;
                }
                

            }
            
        }
    })
    .catch((err)=>{
        console.log("error");
    })


fetch("./obj1.json")
    .then((res)=> 
    {
       return res.json();
    })
    .then((result)=>{
        var count=Object.keys(result)
        // console.log(count[0])

        document.getElementById("add").onclick = function()
        {
            var inputVal = document.getElementById("text2").value;
            // console.log(inputVal);
            let x=Number(inputVal);
            let p=String(inputVal);
            // console.log(result)

            
         
            if(!inputVal)x=-1;
            if(x>=0 && x<=9 && p.length==2)
            {
               if(result[count[x]]<=count1)
               {
                let z=result[count[x]];
                // console.log(count[x]);
                console.log(r);
                let p1=count1-z;
                let r1=Object.keys(r);
                console.log(r1.length)
                console.log(r1)
                let res=0;
                for (let i=r1.length-1;i>=0;i--)
                {
                    console.log(r1[i]);
                    let y=r1[i];
                    while(p1>=y && r[y]>0 )
                    {
                        p1-=y;
                        r[y]--;
                        if(y=="50")
                        {
                            res=1;
                        }
                    }
                    console.log(r[r1[i]]);
                }
            
                console.log(r);
                console.log(result)
                console.log(p1);
                

                document.getElementById("col2").innerHTML=`Collect your: ${count[x]} and amount: ${count1-z}`;
                document.getElementById("collect1").style.display="flex"
                count1=0;
                document.getElementById("display").innerHTML=count1;
                document.getElementById("flex").style.display="none"
               }
               else{
                document.getElementById("text2").value='';
                document.getElementById("display1").innerHTML="Transaction fail due to insufficient amount";
                document.getElementById("flex").style.display="flex"
               }
            }
            else
            {
                document.getElementById("text2").value='';
                document.getElementById("display1").innerHTML="Please enter correct code";
                document.getElementById("flex").style.display="flex"
            }
        }
    })
    var hide=document.getElementById("hide");
    // console.log (hide);
    hide.onclick = function(){
        document.getElementById("collect1").style.display="none"
        document.getElementById("flex").style.display="none"
        document.getElementById("text2").value='';
    }

 

   

    