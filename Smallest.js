let nums=[1,3,4,5,11,44,9,7];
let smallest= Infinity;
for(let i=0; i<nums.length; i++){
    if(smallest > nums[i]){
        smallest= nums[i];
    }

    
}

console.log(smallest);