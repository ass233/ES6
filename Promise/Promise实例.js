const promsie = new Promise(function(resolve,reject){
    if(/* 异步操作成功 */){
        resolve(value);
    }else{
        reject(Error);
    }
});