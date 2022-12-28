function checkprime(N){


    let count=0;

    if( N<=1|| N==undefined){
        return false 
    }

for(let i=2; i<=Math.sqrt(N); i++){
        if(N%i==0){
             return false
            
            }
}
return true


}

let n=50;
let sum=0;

for(let i=1; i<=n; i++){
    if(checkprime(i)){
        sum+=i;
    }
    

}
console.log(sum)

//  ($$$)
 let arr=[4, 5, 9, 7, 11, 21]


function checkprime(N){

  if( N<=1|| N==undefined){
    return false
  }

for(let i=2; i<=Math.sqrt(N); i++){
    if(N%i==0){
        return false
    }
}
return true

}


let arr=[4, 5, 9, 7, 11, 21]

let count=0;

for(let i=0; i<arr.length; i++){
    if(checkprime(i-1)||checkprime(i+1)){
        console.log(i-1, i+1);
    }
}
console.log(count)


// count such pair

// given an arr find out how many  such pair exist where their sum is equal to an integer K?


let arr=[   3, 7, 2, 6, 10, 1 ]
let K=9

let count=0; 

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]+arr[j]==K){
            count++
        }
    }
}
console.log(count)

// Given an array of integers of integers find out the number of pairs which has a difference of less than or equal to a given integer K??

let arr=[7, 5, 10, 20, 14]
let k=4
let count=0;
for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<=i+1; j++){
        // console.log(arr[i]-arr[j])
        if(arr[i]-arr[j]<=k){
            count++
        }
    }
}
console.log(count)



let str= "rhythm"
let bag=""
let vowel="aeiou"
for(let i=0; i<str.length; i++){
    for(let j=i+1; j<=i+1; j++){
        if(str[j]=='a'|| str[j]=='e'||str[j]=='i'|| str[j]== 'o'|| str[j]=='u'){
            bag+=str[i]
        }
    }
  }

    
console.log(bag)

        //  *           *
        //  * *       * *
        //  *   *   *   *
        //  *     *     *
        //  *           *

let vowels={a:1, e:1, i:1, o:1, u:1}

let str="nature"

for(let i=0; i<str.length; i++){
    delete vowels[str[i]]
}
let bag=""
for(let key in vowels){
   bag+=key
}
console.log(bag)



    
let N=123
    console.log(N.toString())


let n=123
let str= n.toString();
let bag=""

for(let i=str.length-1; i>=0; i--){
    bag+=str[i]
}

console.log(bag)

for(let i=0;i<5; i++){
    for(let j=0; j<5; j++){
        if(i==0){
            console.log("*")         
        }
        else if(j==4){
            console.log("*")
        }
            
        }
       

let price=[100,20,40]
let quantity=[2,1,2]

let sum=0;
for(let i=0;i<price.length;i++){
    for(let j=i;j<=i;j++){
        sum+=price[i]*quantity[j]
    }
}
console.log(sum)
        

let arr=[-2,0,8,4]
       
let min=Infinity
let max=-Infinity
for(let i=0; i<arr.length; i++){
    if(arr[i]<min){
        min=arr[i];
    }
    if(arr[i]>max){
        max=arr[i]
    }
}
       console.log(min)
       console.log(max)

let N=100;
let M=15;

let dairy=5;
let shots=2;
let eclairs=1;


if(M*dairy<=N){
    console.log("dairy")
}
else if(M*shots<=N){
    console.log("shots")
}
else if(M*eclairs<=N){
    console.log("eclairs")
}


for(let initialisation; 100;  increment ya decrement )

for(let i=2; i<=10;i+2){
        console.log(i)
        i+2
}
console.log("aman")

let arr=[2, 4, 6, 8, 10, 12, 14, 16]
arr.length

let sum=1;

for(let i=0; i<arr.length; i++){
  sum=sum*arr[i]

}

console.log(sum)
console.log(arr.length)


let a=10
let b=a++
console.log(b)


// you are given an array which has N integers write a program to print the sale of average of integer present in the array ?
// note- the ceil value is given whole no. K is the smallest integer value greater or equals to K?


//  you are given an array whose size is store in a variable in size N, the array is store in variable is the name array you have to traversed the array 
// and print each element on a new line 


let array=[1,10,5,3,5]
let N=5;
// 1 
// 2
// 3
// 4
// 5
for(i=0;i<=array.length-1;i++){
        console.log(i)
}

let arr="aman"
let bag="";
for(let i=arr.length-1;i>=0; i--){
        bag=bag+arr[i]+" "
       
}
console.log(bag)

using namespace std;
 
string reverse_words(string s)
{
    int left = 0, i = 0, n = s.size();
 
    while (s[i] == ' ')
        i++;
 
    left = i;
 
    while (i < n) {
        if (i + 1 == n || s[i] == ' ') {
            int j = i - 1;
            if (i + 1 == n)
                j++;
 
            while (left < j)
                swap(s[left++], s[j--]);
 
            left = i + 1;
        }
        if (i > left && s[left] == ' ')
            left = i;
 
        i++;
    }
    reverse(s.begin(), s.end());
    return s;
}
 
int main()
{
 
    string str = "Be a game changer the world is already "
                 "full of players";
 
    str = reverse_words(str);
 
    cout << str;
 
    return 0;
}


let str = "5, 7, 4, 6, 7, 4, 5, 4, 6, 4, 7, 6"
let arr=[5, 7, 4, 6, 7, 4, 5, 4, 6, 4, 7, 6]

//  7 7 7 6 5 5 4 4 3 2 1 1




for(let i=0; i<str.length;i++){
        let count=0
    
   for(let j=i;j<str.length;j++){
        if(str[j]%2==0){
                count++        
        }   
        
   }
console.log(count)
} 

let str="5 7 4 6 7 4 5 4 6 4 7 6"

for(let i=0; i<str.length;i++){
        let count=0;
        for(let j=i;j<str.length; j++){
                if(str[j]%2==0){
                        count++
                      
                }
               
        } console.log(count)
       
}   

for(let i=0; i<=5;i++){
        let bag=""
        for(let j=0;j<=5;j++){
               if(j==0|| j==5){
                bag+="*"+" "
               }
              
        //        else{
        //         bag+="  "
        //        }
               
        }
        console.log(bag)
}

