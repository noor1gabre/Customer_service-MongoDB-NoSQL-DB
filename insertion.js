use Technical_Support_Company_V2
    //insertion employees
function Emp_insertion(){
    for(var i = 0;i<2;i++){
        var first = ["yahia","zaid"]
         var last = ["ibrahim","hamed"]
         var type =['Mobile', 'Work']
         var id =['64777fecf453e8ec3144652b', '6478bbe7258a7f49de0513a8']
         var lvl = [1,2]
         var inc = 5000
         inc+=1000
        db.Employees.insertOne({      
      Name: {            
        First: first[i],            
        Last: last[i]       
       },      
      Email: first[i]+"@example.com",
      Phone: [             
        {                
          Number: "+1 234-567-8910",               
          Type: type[i]            
         }       
      ],      
      Employee_level: lvl[i],
      Incentives: inc,       
      product: ObjectId(id[i])
    })

}}

function emp_lvl_insertion(){
    lvl_title = ["Junior","senior"]
    lvl =[1,2]
    main_salary = [30000,20000]
    Emp = ['647b33177921cdbe206d8ea2','647767c3cb784d2623cd5095']
    for(var i =0;i<2;i++){
         db.Employees_Levels.insertOne({   
          Level_Title: lvl_title[i],
          Level: lvl[i],       
          Main_Salary: main_salary[i],     
          Employees: [ObjectId(Emp[i])]
        })
    }
   
}


function Agent_insertion(){
    db.Agents.insertOne({
  Name: "Ahmed mohammed",    
  Email: "Ahmed@example.com",     
  Phone: [     
     {      
      Number: "+1 111-222-3333",             
      Type: "Mobile"         
     }   
  ],        
  Products: [ ObjectId("62a4a77f70d6c91f98ce37d3"), ObjectId("62a4a77f70d6c91f98ce37d4") ],
  Tickets: [ ObjectId("62a4a77f70d6c91f98ce37d5"), ObjectId("62a4a77f70d6c91f98ce37d6") ],  
  Feedback: [ ObjectId("62a4a77f70d6c91f98ce37d7"), ObjectId("62a4a77f70d6c91f98ce37d8") ]     
})
}

function Product_insertion(){
    db.Products.insertOne({  
  Name: "power center",   
  Description: "Etl tool using in data integration",
  Assigned_Staff: ["noor gabre", "yahia ibrahim","zeyad hamed"],     
  Agents: [
    ObjectId("62a4a77f70d6c91f98ce37d3"),           
    ObjectId("62a4a77f70d6c91f98ce37d4")       
  ]         
})
}
function Ticket_insertion(){
    db.Tickets.insertOne({
  Agent_Id: ObjectId("62a4a77f70d6c91f98ce37d3"),  
  Description: "The product is making a weird noise when turned on.",
  Priority: "High",
  State: "Open",  
  Assigned_Staff: [  
    "Noor Gabre", 
  ],   
  Date: new Date(),  
  Feedback: ObjectId("62a4a77f70d6c91f98ce37d5"),  
  Chat: ObjectId("62a4a77f70d6c91f98ce37d6"), 
  Attachments: [  
    ObjectId("62a4a77f70d6c91f98ce37d7"),
    ObjectId("62a4a77f70d6c91f98ce37d8")
  ],   
  Solution: ObjectId("62a4a77f70d6c91f98ce37d9")        
})
}
function Chat_insertion(){
    db.Chat.insertOne({
  Ticket_Id: ObjectId("62a4a77f70d6c91f98ce37d1"),
  Messages: [
    "Hello, how can I help you today?",
    "I'm having an issue with the product making a weird noise."
  ],
  Date: new Date()
})
}

function Attachments_insertion(){
    db.Attachments.insertOne({
      Ticket_Id: ObjectId("62a4a77f70d6c91f98ce37d1"),
      Sender: "Customer",
      File_Name: "noise.mp3",
      File_Type: "audio/mp3",
      Date: new Date()
})
}


function feedback_insertion(){
    comments = ["Great","Fails"]
    rating =[1,2]
    Agent_id = ['6478c032e1e6b2275d74dc96','647b32d17921cdbe206d8e96']
    tic_id = ['6478bface1e6b2275d74dc94','647b32d17921cdbe206d8e98']
    for(var i =0;i<2;i++){
         db.Feedback.insertOne({   
           Ticket_Id: ObjectId(tic_id[i]),
           Agent_Id: ObjectId(Agent_id[i]),
              Rating: rating[i],
              Feedback_Comment:comments[i] ,
              Date: new Date()  
        })
    }
   
}
function Solutions_insertion(){
    solutions = ["Solved by send kb1","Solved by send kb2"]
    tic_id = ['6478bface1e6b2275d74dc94','647b32d17921cdbe206d8e98']
    for(var i =0;i<2;i++){
         db.Solutions.insertOne({   
           Ticket_Id: ObjectId(tic_id[i]),
              Solution:solutions[i] ,
              Date: new Date()  
        })
    }
   
}
Emp_insertion()
emp_lvl_insertion()
Agent_insertion()
Product_insertion()
Ticket_insertion()
Chat_insertion()
Attachments_insertion()
Solutions_insertion()
feedback_insertion()

