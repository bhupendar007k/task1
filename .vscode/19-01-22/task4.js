// const array=["red","green","yellow","orange"];
function task4(newArray,n)
{
    const count =newArray.length;
    for(let i=0;i<count;i++)
    {
        if(newArray[i]===n)
        {
            return i;
        }
    
    }
    return -1;
}
console.log(task4(["Harry","Carry","Larry","Marry"],'Larry')); 
        
