// Define: How our data is going to be saved in out DB.
// schema is created under file:model

const ToDoModel = require('../models/ToDoModel')
// declare our model var, which is the MongoDB Schema we created.

//
module.exports.getToDoSchemaMongo = async (req, res)=>{
    //async(req,res)== async function received userRequest, then 
    //asyn function body returns the response for the request.
    //which the response will be saved into 'getToDoSchemaMongo'

//we created module to export called 'getToDoSchemaMongo'
//1. create async function for asynchronious execution of commands,
//1. we will save response from async funtion into 
//1.module.exports.getToDoSchemaMongo in ToDoRoutes.js

const ToDoSchemaAll= await ToDoModel.find()
// this line will give all the 'ToDoSchemaMongo'
//2.  await keywords, waits until 'ToDoModel.find()' successfully ends and then return the value.
//3. ToDoModel.find(): find all data in the ToDoModel collection(schema)
//4. and then when find() is successfully done, we save the returned data into const ToDoSchemaAll
//5. Note: await function can be declared only in async function.
//ex: Q1. insb컬렉션의 모든 데이터를 조회해라 = db.insb.find();

    res.send(ToDoSchemaAll)
// so we are going to return 'ToDoSchemaMongo' as a response which is a MongoDB schema the function found through find() function
//.send(): means return
}

// declareing module 'saveToDo' and export.
//saveToDo is declared as 'asynchrous's functoin'
module.exports.saveToDo= async(req,res) =>{
    const {text} = req.body
    //save the userRequest's.body into const {text}
    // we use {}, to save object's data into variable.
    // const{varName}= object.data
    //req.body == req. body object allows you to access data in a string or JSON object from the client side. 

    // we are going to send this text to the route
    ToDoModel
        .create({text})
        //Object.create(): method creates a new object,
        //syntax: MongoDBSchemaName.create()

        .then((data)=>{
            //then(callBackFunct(that takes 'data' param))
            console.log("Added Successfully !! ");
            console.log("Here is the data that has been added to ToDoModel Schema ");
            console.log(data);
            res.send(data)

            //sending data to our database
            //send the {text} to the route at 'ToDoRoute.js' as 'router.post('/save', saveToDo)
            // router.post('/save', saveTodo): what does this do? 
        })
}

    //now creating a module that will update the DB 
module.exports.updateToDo = async (req,res) =>{
    // async callback functions that takes two param 'req' and 'res'
    
    //we need to things to updat the DB: _id, text/
    //based on id we are going to update the DB.
    // {} is used to declare an object
    //text is the new 'string' that we are going to insert into DB for the update.
    const{_id, text}= req.body

    ToDoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=>res.send("The DB item  is updated Successfully !"))
    .catch((err)=> console.log(err))

}
   //now creating a module that will delete datas in DB
module.exports.deleteToDo = async (req,res) =>{

    const{_id}= req.body
    ToDoModel
    .findByIdAndDelete(_id,)
    .then(()=>res.send("The DB data is deleted Successfully !"))
    .catch((err)=> console.log(err))

}


