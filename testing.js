let a= [{
    "module": "nodejs",
    "context": "login-app",
    "userId": "system"
},
{
    "module": "nodejs",
    "context": "domain-app",
    "userId": "user"
},
{
    "module": "java",
    "context": "cloud-config",
    "userId": "system"
}];

let b=[];
for(let i =0; i<a.length;i++){
    //console.log(b,'---b');
    let CurrentObj = b.find( moduleEle => moduleEle.module === a[i].module);
    //console.log(CurrentObj);
    if(CurrentObj){
        let viewDefaults = CurrentObj.viewDefaults?CurrentObj.viewDefaults:null;
        //console.log('----currentObj',viewDefaults);
        if(viewDefaults){
             viewDefaults[a[i].context]=a[i].userId;
             CurrentObj.viewDefaults =viewDefaults;
             //console.log('---obj--ext',CurrentObj);
        }else{
            CurrentObj.viewDefaults = {'viewDefaults':{[a[i].context]:a[i].userId}};
        }
    }else{
        let freshObj = {'module':a[i].module,'viewDefaults':{[a[i].context]:a[i].userId}};
        b.push(freshObj);        
    }
}

console.log('Output:')
console.dir(b);