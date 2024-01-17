
        const select=document.getElementById('p');
        const list=document.getElementById('ul');
        const detail=document.getElementById('det');
        const m =document.getElementById('m');
        const s=document.getElementById('s');
        const l=document.getElementById('l');
        const xl=document.getElementById('xl');
        const xxl=document.getElementById('xxl');
        const bigimg=document.getElementById('bigimg')
        const img1=document.getElementById('img1');
        const img2=document.getElementById('img2');
        const img3=document.getElementById('img3');
        const img4=document.getElementById('img4');
        select.addEventListener('click',()=>{
            list.style.visibility="visible";
            detail.style.marginTop="20px";  
        });
        m.addEventListener('click',()=>{
            select.innerText=m.innerText;
            list.style.visibility="hidden";
            detail.style.marginTop="-100px"; 
              
        });
        s.addEventListener('click',()=>{
            select.innerText=s.innerText;
            list.style.visibility="hidden";
            detail.style.marginTop="-100px"; 
              
        });
        l.addEventListener('click',()=>{
            select.innerText=l.innerText;
            list.style.visibility="hidden";
            detail.style.marginTop="-100px"; 
              
        });
        xl.addEventListener('click',()=>{
            select.innerText=xl.innerText;
            list.style.visibility="hidden";
            detail.style.marginTop="-100px"; 
              
        });
        xxl.addEventListener('click',()=>{
            select.innerText=xxl.innerText;
            list.style.visibility="hidden";
            detail.style.marginTop="-100px"; 
              
        });
        img1.addEventListener('click',()=>{
            bigimg.src=img1.src;
           
        });
        img2.addEventListener('click',()=>{
            bigimg.src=img2.src;
           
        });
        img3.addEventListener('click',()=>{
            bigimg.src=img3.src;
           
        });
        img4.addEventListener('click',()=>{
            bigimg.src=img4.src;
           
        });