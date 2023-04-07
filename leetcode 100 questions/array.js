//27. Remove Element

var removeElement = function(nums, val) {
    let count=0;
   
   for(i=0;i<nums.length;i++){
       if(nums[i]!=val){
         nums[count++]=nums[i]
       }
   }
   return count
};
