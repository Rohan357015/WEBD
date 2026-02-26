const fs=require('fs')
const fs1=require('fs').promises

function writeData(){
    let statusmsg="";
    try{
         fs.writeFileSync("studentdata.txt","Welcome to Node FS Module");
         //console.log("Data is written successfullly")
         statusmsg="Data is written successfullly";
    }catch(e){
        //console.log("Error is:"+e)
        statusmsg="Error is:"+e;
    }
    return statusmsg;
}


function readData(){
       let statusmsg="";
    try{
 const fdata=fs.readFileSync('studentdata.txt',{encoding:'utf-8'})
     statusmsg=fdata
    }catch(e){
        statusmsg=e;
       
    }

    return statusmsg
}


function deleteData(){
    try{
             fs.unlinkSync('studentdata.txt')

    }catch(e){

    }
}

async function readFileAsync(){
     let statusmsg="";
    try{
         const data=await fs1.readFile('studentdata.txt',{encoding:'utf-8'})
            statusmsg=data;
        }catch(e){
       console.log(e)
       statusmsg=e;
    }
return statusmsg
}



const obj={readData,writeData,deleteData,readFileAsync}
module.exports=obj;