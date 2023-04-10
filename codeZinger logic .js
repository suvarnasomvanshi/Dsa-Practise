//.get method - 
//.set method - 
//.has method - return true if value will be exist.

/*hashMap -convert into key value pair.*/
let str ="sdqghgbh";
let arr =str.split("");    //covert string into array.
let hashMap={};

//how use hashMap.
for(let i=0; i<arr.length; i++){
  if(!hashMap[arr[i]]){
    hashMap[arr[i]] = 1;
  }else{
    hashMap[arr[i]] +=1 }
}
  console.log(hashMap)

    //or
for(let i=0;i<arr.length;i++){
  if(){

  }else{}
}

//while loop
let i=0;
let j=arr.length;
while(i<j){
  if(){
    }else{}
}

//for of loop
//for each loop
//for 

// To convert string into array
   string ="safsf";
   string.split("").map(Number); -->[s,a,f,s,f];
   

//time complexity of split method

//if we compare a<e it compare ascii/sky value; a=97(value of is 97);

//contiguous subString-
//anagram-
//panagram-





// to remove empty spaces from string
const string = "hello world";
string = string.replace(/\s+/g,""); --->"helloworld"


//to convert object into array
const object1 = {id:1, name:"suvarna", lname:"somvanshi"};
let array = Object.entries(object1)
let res=""
for(let i=0;i<array.length;i++){
   res = res +arr[i][0]+ " "+arr[i][1]+"\n"
}
return res




/* find string inside String.*/
s1= "this is codeziger";
s2 = "is";


// wheather the string exist in string.
   var result = s1.includes(s2);
   return result =>true

  
//find index of string where it Present .
  var result = s1.indexOf(s2);
  return result => 5

//exists how many times
  var result = s1.split(s2).length-1;
  return result =>1

/*array balanced */
const length = 5;
const arr = [1,1,1,2,1];

//if we have only given array element use -->.split(" ").map(Number)  to convert into array.

//tocheck array is balanced or not


function checkBalanced(){
   
  let midTerm = Math.round(length/2);
  let sumOfFirstHalf = 0;
  let sumOfSecondHalf =0;


  for(let i=0;i<=midTerm-1;i++){
    sumOfFirstHalf +=arr[i]
  }

  for(let j=mid; j<length;j++){
    sumOfFirstHalf += arr[j]
  }


  if(sumOfFirstHalf == sumOfSecondHalf){
      return 1
  }else
      return 0
  
}



/*ckeck it is panagram or not */

// panagram --> it is a string which contain all 26 alphabetes.
//make toLowerCase() if not in lowercase.

const string ="A quick brown fox jumps over the little lazy dog";

function checkPanagram (string){
   const charArr = Array(26).fill(false);

   for(let i=0;i<string.length; i++){
    const value = string[i].toLowerCase().charAtcode(0)-97;

    charArr[value] = true;
   }

   return charArr.reduce((result,value)=>{
          return result && value
   },true)

}
return (checkPanagram(string));



//day3---->


//frequency of characters in string

var string ="fvfgbujnjhjijewuiuiffiig"
let obj={};

for(let i=0;i<string.length;i++){
    if(obj[string[i]]==undefined){
        obj[string[i]]=1;
    }else{obj[string[i]]+=1}
}

console.log(obj);



/* kadane algorithm-------------  */
let nums = [-2,1,-3,4,-1,2,1,-5,4,10]
function maximumSubarry(nums){
    let min=0;
    let max=0
    for(let i=0; i<nums.length; i++){
    //   min= Math.max(min, min+nums[i])
        min=min+nums[i]
        max=Math.max(min,max)
        if(min<0){
            min=0
        }
        
    }
return max 
}
console.log(maximumSubarry(nums))


//Q1  242. Valid Anagram
 //https://leetcode.com/problems/valid-anagram/
  
 s= cat;   t=act;

 var isAnagram = function(s, t) {
 
   if(s.length!==t.length){
       return false
   }
 
   s= s.split('').sort().join('')
   t= t.split('').sort().join('')
   
   return s === t
 };


 //or

function IsAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const frequency = new Map();

  for (let char of s) {
    frequency.set(char, (frequency.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!frequency.has(char) || frequency.get(char) === 0) {
      return false;
    }

    frequency.set(char, frequency.get(char) - 1);

    // If the frequency count is greater than 0, this means that we have found a matching character in s, so we decrement the frequency count of char in the frequency Map by 1. This ensures that we are keeping track of how many times each character appears in t and that we are not double-counting any characters.
  }

  return true;
}
console.log(IsAnagram("listen", "silent"));


//Q-2-347. Top K Frequent Elements
//https://leetcode.com/problems/top-k-frequent-elements/

/*Given an integer array nums and an integer k,
 return the k most frequent elements. You may return the answer in any order.*/

var topKFrequent = function(nums, k) {
  let hashmap={};
  let result=[];
    
    //frequency counter map
    for(let num of nums){
        if(hashmap[num]){
            hashmap[num]++;
        }else{hashmap[num]=1; }
    }
    
    //sort by most frequent one(desc)
    let arr=Object.entries(hashmap);//Object.entries convertobject to array for sort
    
    arr.sort((a,b)=>{return b[1]-a[1] });      //a[1]or b[1] is the frequency value

    
    //get the k most frequent ones,and push it to the final result
    arr.slice(0,k).forEach(ele=>result.push(+ele[0]));
    
    return result;
}
    
//Q-3  451. Sort Characters By Frequency 
//https://leetcode.com/problems/sort-characters-by-frequency/
  
var frequencySort = function(s) {
  var map = {};
  var result = '';
  var stringArray = s.split('');
//put the character count into a map
for(var i=0;i<stringArray.length;i++){
  map[stringArray[i]] = map[stringArray[i]] + 1 || 1;
}
//sort the map first, then push into the result
Object.keys(map).sort((a,b)=>map[b]-map[a]).forEach(function(v){
for(var j=0;j<map[v];j++){
  result += v;
}
});

return result;
};


//Q-4)
//https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1?utm_source=geeksforgeeks&utm_medium=article_practice_tab&utm_campaign=article_practice_tab


//Q-5)Word Frequency Count Problem
//Calculate the frequency of each word in the given string.




// day4 -----> ** MULTIPLE POINTER METHOD **

//Q-1) 26. Remove Duplicates from Sorted Array

 var removeDuplicates = function(nums) {
  let count = 1;
  for (let i=0;i<nums.length-1;i++){
      if(nums[i]!==nums[i+1]){
          nums[count]=nums[i+1]
          count++;
      }
  }
 return count
};

//or
var removeDuplicates = function(nums) {
  let i=1,j=1,n=nums.length
  
  while(i<n){
      if(nums[i]==nums[i-1]){ //duplicate ele
          i++
      }
      else{
          nums[j]=nums[i]
          j++
          i++
      }
  }
    return j

  };


//Q-2) two sum  input array is sorted  
  //* target given * => find indexOf target

var twoSum = function(numbers, target){
  let left = 0;
  let right = numbers.length-1
  
  while(left < right){
      const cur =numbers[left]+numbers[right];
      if(cur==target)return[left+1,right+1];
      cur >target ? right--:left++
  }
 }


//Q-3) Given an integer array nums, rotate the array to the right by k steps
  var rotate = function(nums, k) {
  for(let i=1;i<=k;i+=1){
      const toDeleteFirstNum= nums.pop();
      nums.unshift(toDeleteFirstNum); //<-- add num at first position
  }
   return nums
  };

  //Q-4)
   //11. Container With Most Water
   //leetcode.com/problems/container-with-most-water/

   var maxArea = function(height) {
    
    let n=height.length;
    let i=0, j=n-1
    let ans=0
    
    while(i<j){
        
        let w =(j-i)
        let h=Math.min(height[i],height[j])
        let area=w*h
        ans=Math.max(area,ans)
        
        if(height[i]<height[j]){i++} 
        else{j--}
    }
    return ans
};

//Q-5) Product of Array Except Self
var productExceptSelf = function(nums) {
  const res = [];
let product = 1;

for (let i = 0; i < nums.length; i++) {
  res.push(product);
  product *= nums[i];
}

product = 1;

for (let j = nums.length - 1; j >= 0; j--) {
  res[j] *= product;
  product *= nums[j];
}

return res;
};





 /**  DAY - 05  Sliding Window  **/

 //https://cs.slides.com/colt_steele/problem-solving-patterns#/40

/* SLIDING WINDOW
 This pattern involves creating a window which can either be an array or number from one position to another
 Depending on a certain condition, the window either increases or closes (and a new window is created)
 Very useful for keeping track of a subset of data in an array/string etc.*/


//Q-1) g of g



//Q2) 1839. Longest Substring Of All Vowels in Order
//if we compare a<e it compare ascii/sky value; a=97(value of is 97);
https://leetcode.com/problems/longest-substring-of-all-vowels-in-order

var longestBeautifulSubstring = function(word) {
  var n=word.length;
  var len=1;         //count length of selected letters
  var count=1;       //count distnct letters
  var ans=0;
     
     for(let i=1;i<n;i++){
         if(word[i-1]<=word[i]){
              len++;
              if(word[i-1]!=word[i]){
                 count++
             }
         }
             else{
                 len=1
                 count=1
             }
         
         if(count==5){
             ans =Math.max(ans,len)
          }
     }
         return ans;
 }


//Q-3.1876. Substrings of Size Three with Distinct Characters
 
var countGoodSubstrings = function(s) {
  let n=s.length
  let ans=0
  
  for(let i=0;i<n-2;i++){
      
      let a=s[i]
      let b=s[i+1]
      let c=s[i+2]
      
      if(a!=b && b!=c && c!=a){
          ans++
      }
  }
  return ans
  
}

         
 
//Q-4) 1763.Longest substring

var longestNiceSubstring = function(s) {
  
  s = s.split("")
  const N = s.length
  let max = ""

  for (let i = 0; i < N - 1; i++) {
    let substr = [s[i]]

    for (let j = i + 1; j < N; j++) {
      substr.push(s[j])
      let isNice = true

      for (const c of substr) {
        if (
          !substr.includes(c.toLowerCase()) ||
          !substr.includes(c.toUpperCase())
        ) {
          isNice = false
        }
      }

      if (isNice && substr.join("").length > max.length) {
        max = substr.join("")
      }
    }
  }

  return max

};



 //Q-5.  219. Contains Duplicate II

 /*Given an integer array nums and an integer k, 
 return true if there are two distinct indices i and j
 in the array such that nums[i] == nums[j] and abs(i - j) <= k.*/

 var containsNearbyDuplicate = function(nums,k) {
  const mp =new Map();
  for(let i=0;i<nums.length;i++){
      if(i-mp.get(nums[i])<=k){
          return true;
      }
      mp.set(nums[i],i)
  }
  return false
};

//or
var containsNearbyDuplicate = function(nums, k) {
for(let i=0;i<nums.length;i++){
  for(let j=i+1;j<nums.length;i++){
    if(nums[i] == nums[j] && Math.abs(i-j))
    return true
  }
}
}


// Q-7) 1493.Longest Subarray of 1’s After deleting one element

var longestSubarray = function(nums) {
    
  let ans=0
  let n=nums.length
  let i=0,j=0,count=0
  var zero=false
  
  while(j<n){
      if(nums[j]==0){
          count++
          zero=true
      }
      
      if(count<1){
          j++
      }
      else if(count==1){
          let l=(j-i+1)
          ans=Math.max(ans,l)
          j++
      }
      else{
          if(nums[i]==0)
              count--;
          i++;
          j++;
      }
  }
  if(zero==false)ans=n
  return ans-1;
};



/** 53. Maximum Subarray */
    var maxSubArray = function(nums) {
    var sum=nums[0]
    var ans=nums[0]
    let n=nums.length
    
    for(let i=1;i<n;i++){
        if(sum<0)
            sum=0
            sum+=nums[i]
            ans=Math.max(ans,sum)
        }
    
    return ans
};



/** recursion **/ - function call itself again and again.

//eg 1).
function rec(i,n){
  //base case
  if(i>n)return;

  //recursive case
  rec(i+1,n);
}


//eg 2) find factorial using recursion.
//n!=n*(n-1)*(n-2)*.....1

/*iterative method */
function factorial (n){
  let result = 1;      
  for(let i=n;i>0;i--){
      result = result*i  
    }
    return result
}
 //or
/*recursive method */

 function fac(n){
    if(n<=0) return 1     //base condition
    return  n*fac(n-1)    //recursive method tail
 }
 factorial(6)

//eg 3) product of array element
 
 function product(arr){
  if(arr.length==0) return 1              //base
  return arr[0] * product(arr.splice(1))  // recursion tail
 }
 product([3,5,2,8,1,2,3,2])

 //eg 4)  sum of first n numbers
   
 function sumOfN(n){
  if(n<=0) return 0 //base
  return n+sumOfN(n-1);
 }

 //eg 5) nth fibonacci numbers
  
 function fib(n){
   if(n=0)return 0;             //base cond
   if(n=1) return 1;            //base cond

   return fib(n-1)+ fib(n-2)    //recursive cond tail
  }
 console.log(fib(7));

 //eg 6) find power(a,b) i.e.(a**b)
   
 function pow(a,b){
   if(b==0) return 1;       //base cond
   return  a*pow(a,b-1)     //recusive tail
  }
 console.log(2,3)




 //recursive part I

  //Q1) 509. Fibonacci Number

 var fib = function(n) {
  if(n<2)return n;              //base condition
    return fib(n-2)+fib(n-1);  //recurision (it call fun again for fib(n-1) & fib(n-2) time O(n)-->(2**n)
};


//Q2) 342. Power of Four

var isPowerOfFour = function(n) {
  if(n===1 || n===4) return true;
  if(n<4) return false;
  return isPowerOfFour(n/4)
};


//recursive part II

//Q1) 231. Power of Two

var isPowerOfTwo = function(n) {
  if(n===1 ||n===2) return true
  if(n<2) return false
   return isPowerOfTwo(n/2)
}; 

//Q2) 326. Power of Three
  var isPowerOfTwo = function(n) {
    if(n==1 ||n==2) return true
    if(n<2) return false
    else   isPowerTwo(n/2)
};

//Q3) palindrome

var isPalindrome = function(s) {
  
  if(s.length==0)return true
  
  s=s.toLowerCase()
  
  let i=0,j=s.length-1
  while(i<j){
      if( (s[i]>"a" || s[i]<"z") &&  (s[i]<"9"||s[i]>"0")){
         i++
         continue;}
     if(  (s[j]>"a" || s[j]<"z") &&   (s[j]<"9" || s[j]>"0") ){
         j--
         continue;} 
     
      if(s[i]!==s[j]){return false} 
  }
  return true
};



/* Bubble sort */   --> it swaps the ele of array


//29-03-2022  --> swap,reverse,rotate-k times

//swap
let a=1
let b=2
//swap
a=a+b
b=a-b
a=a-b

console.log(a,b);


//344. Reverse String without any third variable.
var reverseString = function(s) {
  var n= s.length
  let i=0,j=n-1
  while(i<j){
      s[i]=s[i].concat(s[j])                         //swapping oftwo ele in Bubble sort
      s[j]=s[i].slice(0,s[i].length-s[j].length)
      s[i]=s[i].slice(s[j].length)
      i++
      j--
  }
  return s
};

/*Reverse array without extra array*/
 let arr=[2,3,5,6,8,9]

 //broutforce app
  let reverse=[]
  for(let i=arr.length-1;i>=0;i--){
  reverse.push(arr[i])
 }

 //or
 function reverse(arr){
 let i=0                         //first ele
 let j=arr.length-1               //last ele
 
 while(i<j){
  //keep swapping
  arr[i]=arr[i]+arr[j]
  arr[j]=arr[i]-arr[j]
  arr[i]=arr[i]-arr[j]
   i++
   j--
}
 return arr
 }


 /*rotate array -rotate(arr,k) rotate array by k element*/
 let arr=[2,4,5,11,12] , k=3
 rotate(arr,3)  //=>[11,12,2,4,5]

 //broutforse
for(let i=0;i<k;i++){
  let x=arr.pop()
  arr.unshift(x)    //arr.unshift(arr.pop())
}

//or 


//or  without using any third variable     //rotate
 function reverse(arr){
  let i=0, j=arr.length-1;
  while(i<j){
   //keep swapping
   arr[i]=arr[i]+arr[j]
   arr[j]=arr[i]-arr[j]
   arr[i]=arr[i]-arr[j]
    i++
    j--
  }
  return arr
  }

  arr=reverse(arr,0,arr.length-1)   //complete arr     rotate
  arr= reverse(arr,0,arr.length)    //first k ele      rotate
  arr= reverse(arr,k,arr.length)    //last n-k ele     rotate

  console.log(arr)



/*largest pair */

let arr = [12,3410,16,40]  
//broutforce approch
arr.sort(function(a,b){return a-b})
sum=arr[arr[length-1]+ arr[length-2]]
console.log(sum);

//or
let  sum=0, max=0, sMax=0.
for(let i=0;i<arr.length;i++){       //0(N)
     if(arr[i]>max){
        sMax =max
        max =arr[i]}
     else if(arr[i]>max){
      sMax = arr[i]}
  }

  sum= max+sMax
  console.log(sum)

// 29-3-2023
//Q-1) take input & check wheather it is integer or not

//using regex
let inputNo =567
function checkInput(inputNo){
let pattern = / -?[0-9]+$/;
let result = pattern.test(inputNo)
return result
}

// check no. is integer or float
let x=5;
if(typrOf x=='number'&& !isNaN(x)){
  //check if it is integer
 if(Number.isInteger){
  console.log("it is integer");}
  else{console.log("it is float value")}}
else{console.log("it is not number")}

//
var input =34;

if(!isNaN(input)){console.log('it is number')}
else{console.log("it is not number")}

!isNaN(34) //return true
!isNaN('34') //return true
!isNaN('hello') //return false
!isNaN(true) //return true
!isNaN(false) //return true
!isNaN('undefined') //return false

// Q 412) Fizz Buzz

var fizzBuzz = function(n) {
  let ans =[]
  
  for(let i=1;i<=n;i++){
      if(i%3==0 && i%5==0){ans.push('FizzBuzz') }
      else if(i%3==0){ans.push('Fizz')}
      else if(i%5==0){ans.push('Buzz')}
      else{ans.push(i+'')}
  }
  
  return ans
};

//541. Reverse String II

var reverseStr = function(str, k) {
  let i=0
  var s=str.split("")
  var n=s.length
  while(i<n){
      let l=i
      let r=i+k-1
      if(r>=n)r=n-1
      while(l<r){
          s[l]=s[l].concat(s[r])
          s[r]=s[l].slice(0,s[l].length-s[r].length)
          s[l]=s[l].slice(s[r].length)
          l++
          r--
      }
      i+=2*k
  }
  return s.join("")
};



//30-3-2023

//Binary search

//35. Search Insert Position
function(nums, x) {
  var n=nums.length

  if(x<nums[0]){         //x is less than first arr ele then return first index
      return 0
  }
  if(x>nums[n-1]){      //x is greater than last arr ele then return last index
      return n
  }
  
  var l=0
  var r=n-1
  var ans=-1
  while(l<=r){
      var mid=Math.floor((l+r)/2)
      if(x==nums[mid]){
          ans=mid
           break  }
      else if(nums[mid]<x){
          ans=mid+1
          l=mid+1}
      else{r=mid-1}
  }
  return ans
  
};


//2-4-2023

//670. Maximum Swap
var maximumSwap = function(num) {
   let s=num.toString();                                //toString()
   let sorted=s.split('').sort((a,b)=>b-a).join('');    //sorting
   
   if(num<10) return num                                //base case
   if(s==sorted) return num                             //for already sorted num
   
  let ans=null
  for(let i=0;i<s.length;i++){                          //string
    if(s[i]==sorted[i]){                                //if some number are soretd & some no. are not sorted
          continue}
    else{
        ans=s.split('')                                //array
        let index = ans.lastIndexOf(sorted[i])
        ans[index]=s[i]
        ans[i]=sorted[i]                               // swap
        break}
  }
    return ans.join('')
}



//20. Valid Parentheses

var isValid = function(s) {
  var  n=s.length
  
 if(s.length%2==1){return false}       //number of brackets are odd. i.e.one bracket not has closing/opening.
    
 if(s.length==2){
         if(s[0]=='(' && s[1]==')') return true
         if(s[0]=='{' && s[1]=='}') return true
         if(s[0]=='[' && s[1]==']') return true
         return false }
    
 for(leti=0;i<n-1;i++){
     
        if(s[i]=='(' && s[i+1]==')'){
           var ss=s.substring(0,i)+s.substring(i+2)
           return isValid(ss)}
     
        if(s[i]=='{'&& s[i+1]=='}'){
           var ss=s.sbstring(0,i)+s.substring(i+2)
           return isValid(ss)}
     
         if(s[i]=='['&& s[i+1]==']'){
           var ss=s.sbstring(0,i)+s.substring(i+2)
           return isValid(ss)}
            
     
 }
    return false
    
};



//1047. Remove All Adjacent Duplicates In String  ==>wrong

var rec = function(s) {
    if(s.length<2) return s
    
    for(let i=0;i<s.length-1;i++){
         if(s[i]==s[i+1]){
           let news=s.substring(0,i)+s.substring(i+2)
           return rec(news) }
      }
           return s
 }

var removeDuplicates = function(s){return rec(s)}





//39. Combination Sum

var combinationSum = function(arr, target) {
  let ans =[]
var combination = function(i,arr,target,c){
    //base case
   if(target==0){           
      ans.push([...c])
      return  }
   
   if(i==arr.length)return     
   
   //recursive
   if(arr[i]<=target){
      c.push(arr[i])
      combination(i,arr,target-arr[i],c)
      c.pop()
   }
   combination(i+1,arr,target,c)   //not take
}

   combination(0,arr,target,[])
    return ans
   
};


//680. Valid Palindrome II

var isPal = function(s){
  var n=s.length
  let i=0
  let j=n-1
  while(i<j){
      if(s[i]!=s[j]){
          return false
      }
      i++
      j--
  }
  return true
}
var validPalindrome = function(s) {
  var n=s.length
  if(isPal(s)==true){
      return true
  }
  let i=0
  let j=n-1
  while(i<j){
      if(s[i]==s[j]){
          i++
          j--
      }
      else{
          var a=""
          var b=""
          for(let k=0;k<n;k++){
              if(k!=i){
                  a+=s[k]
              }
              if(k!=j){
                  b+=s[k]
              }
          }
          if(isPal(a)==true||isPal(b)==true){
              return true
          }
          return false
      }
  }
  return false
}

//2423. Remove Letter To Equalize Frequency
var equalFrequency = function(s) {
  var map=new Map()
  var n=s.length
  for(let i=0;i<n;i++){
      if(map.has(s[i])){
          map.set(s[i],map.get(s[i])+1)
      }
      else{
          map.set(s[i],1)
      }
  }
  var str="abcdefghijklmnopqrstuvwxyz"
  for(let i=0;i<26;i++){
      if(map.has(str[i])){
          if(map.get(str[i])==1){
              map.delete(str[i])
          }
          else{
              map.set(str[i],map.get(str[i])-1)
          }
          var arr=[]
          map.forEach((value,key)=>{
              arr.push(value)
          })
          arr.sort((a,b)=>a-b)
          if(arr[0]==arr[arr.length-1])return true
          if(map.has(str[i])){
              map.set(str[i],map.get(str[i])+1)
          }
          else{
              map.set(str[i],1)
          }
      }
  }
  return false
}

//643. Maximum Average Subarray I

var findMaxAverage = function(arr, k) {
  var n=arr.length
  var sum=0
  for(let i=0;i<k;i++){
      sum+=arr[i]
  }
  let l=0
  let r=k-1
  let avg=sum/k
  let ans=avg
  while(r<n-1){
      r++
      sum+=arr[r]
      sum-=arr[l]
      l++
      avg=sum/k
      ans=Math.max(ans,avg)
  }
  return ans
};


/*gog --> Count pairs with given sum */
//array, no. of integer n, sum equal to k
//find no. of pairs which gives sum
 
//broutForce Approach
function getPairsCount(arr,n,k){
     let ans=0
    for(let i=0;i<n;i++){
      for(let j=i+1;j<n;j++){
        let sum=arr[i]+arr[j]
        if(k==sum){ans++}
      }
    }
    return ans
}

//Using freq counter  //using new Map() 

function getPairsCount(arr,n,k){
    let ans=0;
    let mp=new Map()
    
    for(let i=0;i<n;i++){
        let x=arr[i]
        let y=k-x
        if(mp.has(y)){
            ans+=mp.get(y)   //to add in ans
        }
        if(mp.has(x)){       //if ele is already present to add freq
            mp.set(x,mp.get(x)+1)
        }
        else{
            mp.set(x,1);
        }
    }
    return ans
}

  let arr=[1,5,1,4,2,7],  n=6, sum=6;
 console.log(getPairsCount(arr,n,sum))


 //find freq using new Map()
 function countFreq(arr){
  let mp=new Map()
  for(let i=0;i<arr.length;i++){
      let x=arr[i]
      if(mp.has(x)){
          mp.set(x,mp.get(x)+1)
          }
      else{
          mp.set(x,1);
           }
    }
    mp.forEach((value,key)=>{
        console.log(key,value)
      //console.log('key=',key,'and value=',value);
    })
}

let arr=[1,5,1,4,2,7],  n=6, sum=6;
console.log(countFreq(arr,n,sum))


/* sorting --> arraangement  */
//which is in ascending order or descending order



///*binary search*//

//given arr must be sort
//take mid term sorting  

//find given number x in array
 function FindNum(arr,x){
    let l=0                      //left
    let r=arr.length-1           //right
    let ans=-1
  
  while(l<=r){
      let mid=parseInt((l+r)/2)
      if(x==arr[mid]){         //mid
          ans=mid
          break   
      }
      else if(x>arr[mid]){     //right
          l=mid+1
      }
      else{
          r=mid-1             //left
      }
   }
   
     if(ans!=-1){console.log(x,"is present at index",ans)}
     else{console.log(x,"is not present")}
  }
  

  //704. Binary Search
    //find index of given number
  function(nums, target) {
      let l=0                               //left
      let r=nums.length-1                   //right
    
    while(l<=r){                           //if only one ele is present in arr then l=r cond
        let mid=Math.floor((l+r)/2)        //mid term in binary
        
        if(nums[mid]==target){             //mid term= target
            return mid
        }
        else if(nums[mid]<target){         //mid term <target
            l=mid+1
        }
        else{                              //mid term >target
            r=mid-1
        }
    }
    return -1                              //if terget ele not present then -1
};

  // Find given number x in array 
  //using binary search  &  recursive method

   function binary_search(arr,n,x,l,r){
    //base
    if(l>r) return false
    
    //recursive case
   let mid=parseInt((l+r)/2)
    if(x==arr[mid]){
        return mid
    }
    else if(x>arr[mid]){                    //right
          binary_search(arr,n,x,mid+1,r)
    }
    else{                                   //left
        binary_search(arr,n,x,l,mid-1)
    }
}

  let arr=[1,2,3,8,9,12,40,50]
  let n=9
  let x=12
  let l=0
  let r=arr.length-1
  console.log(binary_search(arr,n,x,l,r))
  

  //69. Sqrt(x)
  function(x) {
    var l=1;                                //In sq take l=1
    var r=x
    var ans=0
    
    while(l<=r){                           //In binary take l<=r
        var mid=Math.floor((l+r)/2)      
        if(mid*mid==x){                    //if x is square of mid term
            ans=mid
            break;
            }
        else if(mid*mid<x){                //sq of mid < x
            ans=mid
            l=mid+1
        }
        else{                              //sq mid > x
            r=mid-1
        }
    }
    return ans
};
 
//81. Search in Rotated Sorted Array II --> find target --> i.e use ofsearchin algorithm

function(nums, target) {
  let l = 0;
  let r = nums.length - 1
  while(l<=r){                                        //In binary l<=r
      let mid = Math.floor((l+r)/2)                    
      if(nums[mid] === target)                         //1st cond ckeck mid=target
          return true
      
      // duplicate case
      if(nums[l] === nums[mid] && nums[r] === nums[mid]){
          l += 1
          r -= 1
      }
      // left sorted portion
      else if(nums[l] <= nums[mid]){
          if(nums[l] <= target && target < nums[mid]){
              r = mid - 1
          } else {
              l = mid + 1
          }
      } 
      // right sorted portion
      else {
          if(nums[mid] < target && target <= nums[r]) {
              l = mid + 1
          } else {
              r = mid - 1
          }
      }
  }

  return false
};



//Use binary search for sorting two array in increasing order //using iterative method

let a=[2,5,8,9]
let b=[3,4,7]

var n=a.length,m=b.length
let c = new Array(m+n)

let i=0,j=0,k=0
while(i<n&&j<m){
    if(a[i]<b[j]){
        c[k]=a[i]
        i++
        k++
    }
    else{
        c[k]=b[j]
        k++
        j++
    }
}

while(i<n){
    c[k]=a[i]
    i++
    k++
}

while(j<m){
    c[k]=b[j]
    k++
    j++
}

console.log(c);


//use of merge sort to sort given single array  //using recursive method

function mergeSort(arr,l, r){  //O(logN)
       if(l>=r){
            return;//returns recursively
          }
        var m=parseInt((l+r)/2)
          mergeSort(arr,l,m);
          mergeSort(arr,m+1,r);
          merge(arr,l,m,r);//O(N)
  }


//4-4-2023

//Segregate 0s and 1s in an array - GeeksforGeeks

//iterative method
function segrate0and1(arr,n){
    
  let zeros=0;
  
  for(let i=0; i<n;i++){
      if(arr[i]==0){
          zeros++;
      }
  }
  
  for(let i=0;i<zeros;i++){
      arr[i]=0;
  }
  for(let i=zeros;i<n;i++){
      arr[i]=1;
  }
}


//By using swapping method

function segrate0and1(arr,n){
   let l=0
   let r=n-1

   while(l<r){
      if(arr[l]==0){          //getting 0's in order
        l++
        continue
      }
      if(arr[r]==1){          //getting 1's in order
        r--
        continue
      }
    
     //if arr[l]=1, arr[r]=0  then need to swap ele.
     arr[l]=arr[l]+arr[r]
     arr[r]=arr[l]-arr[r]
     arr[l]=arr[l]-arr[r]

   }
}

//164. Maximum Gap

function(nums) {
  let l=0,r=nums.length-1
  
  while(l<=r){
      if(r<2){
          return 0
      }
      else{
         var m=Math.floor((l+r)/2)
          mergeSort(arr,l,m);
          mergeSort(arr,m+1,r);
        var sorted = merge(arr,l,m,r)
      }
  }
};

//find missing and repeated number in array  using map
 let arr=[4,3,1,2,6,2]              //2-is repeated ,5-is missing
 let n=arr.length
 var mp=new Map()
   for(let i=0;i<arr.length;i++){
       let x=arr[i]
       if(mp.has(x)){               //already present
          mp.set(x,mp.get(x)+1)
        }
        else{                        //not present
         mp.set(x,1)
        }
      }
   for(let i=0;i<=n;i++){
      if(mp.has(i)==false){
       console.log("missing",i);
     }
      else if(mp.get(i)==2){
    console.log("repeated",i);
  }
  }


//If one number is missing and one num is repeated in arr without using map
  let arr=[4,3,1,2,6,2]
  let n= arr.length;
  let missing,repeated

    for(let i=0;i<n;i++){
        let x=Math.abs(arr[i])
        let index=x-1
        if(arr[index]<0){
          repeated=x
          }
        else{
          arr[index]*=-1
          }
     }
    for(let i=0;i<n;i++){
        if(arr[i]>0){
        missing =i+1
          }
    }
 console.log("repeated",repeated,"missing",missing);

//74. Search a 2D Matrix
function findEleInMatrix(matrix, target) {
  let n=matrix.length
  let m=matrix[0].length
  let total=m*n                        //total ele in matrix --> 1st row length*matrix arrlength
  let l=0;
  let r=total-1                        //last index = total ele -1
  
  while(l<=r){
      let mid=Math.floor((l+r)/2)
      let row=Math.floor(mid/m)        //row
      let col=mid%m                    //column
      let x=matrix[row][col]
      
      if(x==target){
          return true
      }
      else if(target<x){              //left
           r=mid-1
      }
      else{
          l=mid+1
      }
  }
  return false
  
};








































