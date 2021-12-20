// 1. Write a program using JavaScript that will print all the numbers from 1 to 135.
// console.log('Print all numbers from 1 to 135.');
// for (let i=1; i<=135;i++){
//     console.log(i);
// }

//2. Print Odd Numbers 1 - 135
// console.log('Print Odd Numbers 1 - 135');
// for (let i=1;i<=135; i++){
//     if(i%2 !=0) {
//         console.log(`Odd number: ${i}`);
//     }
// }

//3. Sum of Printed Numbers
// let sum=0;
// let num=0;
// for(num=1;num<=135; num++){
//     sum+=num;
//     console.log(`Number: ${num} and sum of all numbers so far is ${sum}`);    
    
// }


const x=[1,4,2,12];
let y=[-12, -4,0,7,8];
let z=[-3,-5,0,8,9];
printArray(x); // Print values of an array
findMax(x); //Find max value of x array
findMax(y); //Find max value of y array
getAvrg(x);//Print average value of an array
removeNegative(y);//Remove negative values
negativeToString(z);//Turn negative values to string

//4. Print values of an array
function printArray(arrName){
    console.log('Values in given array:');
    for(let i=0;i<arrName.length;i++){
        console.log(arrName[i]);
    }
}

//5. Find max value in an array
function findMax(arrName){
    let maxVal=arrName[0];
    for(let i=0;i<arrName.length;i++){
        if(arrName[i]>maxVal){
            maxVal=arrName[i];
        }
    }
    console.log(`Max value of array ${arrName} is: ${maxVal}`);
}

//6. Get Average
function getAvrg(arrName){
    let sum=0;
    let arrLength=arrName.length;
    for(let i=0;i<arrLength;i++){
        sum+=arrName[i];
    }
    let avrVal=sum/arrLength;

    console.log(`Average value of array ${arrName} is: ${avrVal}`);
}

//7. Eliminate the Negatives
function removeNegative(arrName){

    console.log(`Array before elimination: ${arrName}`);
    for (let i=0;i<arrName.length;i++){
        if (arrName[i]<0) {
            arrName[i]=0;
        }
    }
    console.log(`Array after elimination: ${arrName}`);

}

//8. Turning negative number to String
function negativeToString(arrName){
    console.log(`Array before action: ${arrName}`);
    for (let i=0;i<arrName.length;i++){
        if (arrName[i]<0) {
            arrName[i]='Negative';
            console.log(arrName[i]);
        }
    }
    console.log(`Array after action: ${arrName}`);
}