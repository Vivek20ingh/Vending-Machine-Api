fetch("./obj1.json")
    .then((res)=> 
    {
       return res.json();
        console.log(res);
    })
    .then((result)=>{
        console.log(result);
        var count=Object.keys(result)
        console.log(count.length)
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
    


 
    

   
    