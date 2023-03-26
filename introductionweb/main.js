
const obserever=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenele=document.querySelectorAll('.hidden');
hiddenele.forEach((el)=>obserever.observe(el));