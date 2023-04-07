import { inputA,inputB,inputC } from "./input.js";
import { OutputA,OutputB,OutputC } from "./output.js";
import { deepEqual } from 'assert';

function moduleByGroup(inputData){
  let outputData=[];
  for(let i =0; i<inputData.length;i++){
      let CurrentObj = outputData.find( moduleEle => moduleEle.module === inputData[i].module);
      if(CurrentObj){
          let viewDefaults = CurrentObj.viewDefaults?CurrentObj.viewDefaults:null;
          if(viewDefaults){
              viewDefaults[inputData[i].context]=inputData[i].userId;
              CurrentObj.viewDefaults =viewDefaults;
          }else{
              CurrentObj.viewDefaults = {'viewDefaults':{[inputData[i].context]:inputData[i].userId}};
          }
      }else{
          let freshObj = {'module':inputData[i].module,'viewDefaults':{[inputData[i].context]:inputData[i].userId}};
          outputData.push(freshObj);        
      }
  }
  return outputData;
}
  
  describe('moduleByGroup()', function () {
    const tests = [
      {args: inputA, expected: OutputA},
      {args: inputB, expected: OutputB},
      {args: inputC, expected: OutputC}
    ];
  
    tests.forEach(({args, expected}) => {
      it(`correctly adds ${args.length} args`, function () {
        const res = moduleByGroup(args);
        deepEqual(res, expected);
      });
    });
  });