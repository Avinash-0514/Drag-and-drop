const list_items=document.querySelectorAll('p');
const division = document.querySelectorAll('.div');

let dragging = null;

for(let i=0;i< list_items.length;i++){
    const item = list_items[i];
    item.addEventListener('dragstart', function(){
        dragging=item;
        setTimeout(function(){

        item.style.display='none';
    },0)
    });
   item.addEventListener('dragend',function(){

setTimeout(function(){
    dragging.style.display='block';
    dragging=null;
   },0);


});

    for (let j=0;j<division.length;j++){

        const list=division[j];
           list.addEventListener('dragover',function(e){
            e.preventDefault();
           });
           list.addEventListener('dragenter',function(e){
            e.preventDefault();
           });
           list.addEventListener('drop',function(e){
         this.append(dragging);   
           }
           )
    }
}