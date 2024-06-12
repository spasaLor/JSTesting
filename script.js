function capitalize(str){
    let lower=str.charCodeAt(0);
    let upper = lower -32;
    let newString = String.fromCharCode(upper)+str.slice(1);
    return newString;
}

function reverseString(str){
    let newString="";
    for(let i =str.length-1;i>=0;i--){
        newString+=str[i];
    }
        
    return newString;
}

calculator={
    add(a,b){
        return (a+b);
    },
    subtract(a,b){
        if (b>a)
            return "Impossible";
        else
            return (a-b);
    },
    divide(a,b){
        if(b===0)
            return "Impossible";
        else
            return(a/b);
    },
    multiply(a,b){
        return (a*b);
    }
}

function caesarCipher(str,shiftFactor){
    let newString="";

    for(let i=0;i<str.length;i++){
        let ascii=str.charCodeAt(i);
        if((ascii >=32 && ascii <=47) || (ascii >=58 && ascii <=64) || (ascii >=91 && ascii <=96))
            newString+=String.fromCharCode(ascii);
        else{
            ascii+=shiftFactor;
            if ((ascii > 90 && str.charAt(i) <= 'Z') || ascii > 122)
                ascii-=26;
        }
        newString+=String.fromCharCode(ascii);
    }
    return newString;
}

function analyzeArray(arr){
    let obj={};
    let sum=0;
    let minIdx=0;
    let maxIdx=0;
    for(let i =0;i<arr.length;i++){
        sum+=arr[i];
        if(arr[i]<arr[minIdx])
            minIdx=i;
        if(arr[i]>arr[maxIdx])
            maxIdx=i;
    }
    obj.average=sum/arr.length;
    obj.min=arr[minIdx];
    obj.max=arr[maxIdx];
    obj.length=arr.length;
    return obj;
}

module.exports={capitalize,reverseString,calculator,caesarCipher,analyzeArray};