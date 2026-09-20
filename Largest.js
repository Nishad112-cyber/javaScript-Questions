let nums=[1,3,4,5,6,7,9];
let largest= -Infinity;
for(let i=0; i<nums.length; i++){
    if(largest <nums[i]){
        largest= nums[i];
    }

    
}

console.log(largest);