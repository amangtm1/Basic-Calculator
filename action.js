window.onload=function (){
   var input;

   // Function for basic mathematical operations
    function  operation(val1,val2,opr){
        var result=0.0;
        switch (opr) {
            case '+':
                result=val1+val2
                break;
                case '-':
                    result=val1-val2
                break;
                case '*':
                    result=val1*val2
                break;
                case '/':
                    result=val1/val2
                break;
            default:
                break;
        }
        return result;
    }

    // Evaluating string mathematical expression
    function evaluate(str){
        const len=str.length;
        let tmp='',symbol='+';
        let x=0,invalidInput=0;
        let res;
        for(i=0;i<len;i++){
            if(str[i]=='+' || str[i]=='-' || str[i]=='*' || str[i]=='/'){
                if(tmp==''){ // repetitive operator or invalid input
                    invalidInput=1;
                    break;
                }
                x=operation(x,parseFloat(tmp),symbol);
                res=String(x);
                symbol=str[i];
                tmp='';
                continue;
            }
            tmp+=str[i];

        }
        res=operation(x,parseFloat(tmp),symbol);
        if(invalidInput){
            res='Error';
        }
        return res;
    }

   document.getElementById('btn_+').addEventListener('click',function (){
        document.getElementById('disp1').innerHTML+='+';
       

    })
    document.getElementById('btn_-').addEventListener('click',function (){
        document.getElementById('disp1').innerHTML+='-';
    })
    document.getElementById('btn_*').addEventListener('click',function (){
        document.getElementById('disp1').innerHTML+='*';
    })
    document.getElementById('btn_/').addEventListener('click',function (){
        document.getElementById('disp1').innerHTML+='/';
    })
    document.getElementById('btn_.').addEventListener('click',function (){
        document.getElementById('disp1').innerHTML+='.';
    })

    // Equal
    document.getElementById('btn_=').addEventListener('click',function (){
        input=document.getElementById('disp1').innerHTML;
        //console.log(typeof(input),input);
        document.getElementById('disp2').innerHTML=evaluate(input);
    })
    
    // digit
    document.getElementById('btn_1').addEventListener('click',function (){
        document.getElementById('disp1').innerHTML+=1;
    })
    document.getElementById('btn_2').addEventListener('click',function (){
        document.getElementById('disp1').innerHTML+=2;
    })
    document.getElementById('btn_3').addEventListener('click',function (){
        document.getElementById('disp1').innerHTML+=3;
    })
    document.getElementById('btn_4').addEventListener('click',function (){
        document.getElementById('disp1').innerHTML+=4;
    })
    document.getElementById('btn_5').addEventListener('click',function (){
        document.getElementById('disp1').innerHTML+=5;
    })
    document.getElementById('btn_6').addEventListener('click',function (){
        document.getElementById('disp1').innerHTML+=6;
    })
    document.getElementById('btn_7').addEventListener('click',function (){
        document.getElementById('disp1').innerHTML+=7;
    })
    document.getElementById('btn_8').addEventListener('click',function (){
        document.getElementById('disp1').innerHTML+=8;
    })
    document.getElementById('btn_9').addEventListener('click',function (){
        document.getElementById('disp1').innerHTML+=9;
    })
    document.getElementById('btn_0').addEventListener('click',function (){
        document.getElementById('disp1').innerHTML+=0;
    })
   
    

}