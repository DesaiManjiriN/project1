//for importing express module
//import express module
const express=require('express')
const app=express()
app.use(express.json())
let users=[]
    //get all users
app.get('/users',(req,res)=>{
    res.json(users)
})
//post - new user
app.post('/users',(req,res)=>{

    const newUser={id:users.length+1, ...req.body}
    users.push(newUser)
    res.status(201),json(newUser);
})
//upadate--put()
app.put('/user/:id',(req,res)=>{
    const user=users.find(u=>u.id===parseInt(req.params.id))
    if(!user) return res.status(404).json({massage:"user not found"})
        user.name=req.body.name || req.name
    user.email=req.body.email || req.email
    res.json(user)
})

//DELETE
app.delete('/user/:id',(req,res)=>{
    users=users.filter(user=>user.id !==perseInt(req.params.id))
    res.json({message:'user deleted'})
})
app.listen(3000,()=>console.log("server is running in the port 3000"))