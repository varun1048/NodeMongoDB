const log=(inner)=>console.log(inner);

const mongoclient = require('mongodb').MongoClient
let url='mongodb://localhost:27017/'

mongoclient.connect(url,{useUnifiedTopology: true},(err,data)=>{
    if(err) throw err
    // console.log("mongodb : varundb is connected")
    let db = data.db("varundb") //creating db

    // db.createCollection("customers",(err,inner)=>{
    //     if(err) throw err
  
    //     console.log("collection  creatied")
    //     data.close()
    // })

function createdata(){

    
    let myobj = [
                { name: 'John', address: 'Highway 71'},
                { name: 'Peter', address: 'Lowstreet 4'},
                { name: 'Amy', address: 'Apple st 652'},
                { name: 'Hannah', address: 'Mountain 21'},
                { name: 'Michael', address: 'Valley 345'},
                { name: 'Sandy', address: 'Ocean blvd 2'},
                { name: 'Betty', address: 'Green Grass 1'},
                { name: 'Richard', address: 'Sky st 331'},
                { name: 'Susan', address: 'One way 98'},
                { name: 'Vicky', address: 'Yellow Garden 2'},
                { name: 'Ben', address: 'Park Lane 38'},
                { name: 'William', address: 'Central st 954'},
                { name: 'Chuck', address: 'Main Road 989'},
                { name: 'Viola', address: 'Sideway 1633'}
              ];
        
        
            db.collection("customers").insertMany( myobj ,(err,inner)=>{
                    if(err) throw err
                    // log(inner.ops)
            
                    console.log("Number of documents inserted: " + inner);
                    data.close()
                })
            let datas
}
// createdata()
            
            // db.collection('customers').find({},{ projection: { _id:0,name: 1, address: 1 } }).toArray((err,values)=>{
                    // if(err) throw err
                //     log(values)
                //     // datas.push(values)
//     // log(datas)
//     data.close()
// })
// log(datas)

    // db.collection('customers').find({name: 'John'},{projection:{_id:0 ,name:0, addreass:0} }).toArray((err,datas)=>{
    

    // db.collection('customers').find().sort({name:-1}).toArray((err,datas)=>{
    //     if(err) throw err
    //     log(datas)
    //     data.close()
    // })
//     let deleting={}
// db.collection('customers').deleteOne(deleting,(err,inner)=>{
// data.close()
// })

// db.collection('customers').drop((err,obj)=>log(obj))
// 
// db.collection('customers').deleteOne({name: /^Viola/},(err,datas)=>{data.close()})

// let deletingmany={name:/^/}
// db.collection('customers').deleteMany(deletingmany,(err,datas)=>{
    //     log(datas.result.n)
    //     data.close()})
    
    let allfunc=(err,datas)=>{
        if(err) throw err
        data.close()
    }
    let insert  = {name:"varun",addreass:"karapakkam",age:23}
    
    // db.collection('customers').insertOne(insert,allfunc)
    let set = {$set:{addreass:"chennai"}}
    let deleteone={address:/^address/}
    db.collection('customers').deleteOne(deleteone,allfunc)
    // db.collection('customers').updateOne({name:'varun'},set,allfunc)
    
    // createdata()
    db.collection('customers').find({},{projection:{_id:0}}).toArray((err,datas)=>{
        log(datas)
        data.close()
    })


//         if(err) throw err
// data.close()



})