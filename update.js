use Technical_Support_Company_V2
db.Employees.updateOne(
  { _id: ObjectId("647767c3cb784d2623cd5095") },
  {
    $set: {
      Incentives: 6000
    }  
  }
)
db.Agents.updateOne(
  { Name: "Ahmed mohammed" },
  {
    $addToSet: {
      Products: ObjectId("62a4a77f70d6c91f98ce37d5") // Add new product 
    }
  } 
)
db.Products.updateOne(
  { _id: ObjectId("647767c3cb784d2623cd5098") },
  { $pull: { Assigned_Staff: "noor gabre" } }
)
db.Tickets.updateMany(
        {
            Assigned_Staff :{
             $size: 1 
            }},
            {
                $set:{
                Priority:"Low"
            }}
    
)
db.Employees_Levels.updateOne(
   { _id: ObjectId("647767c3cb784d2623cd5096") },
   {
     $set: {
       Level_Title: "Intermediate Level",
       Level: 2,
       Main_Salary: 40000
     }
   }
)
db.Tickets.updateOne(
  { _id: ObjectId("647767c3cb784d2623cd5099") },
  {
    $set: {
      Priority: "Low",
      State: "Close"      
    }   
  }
)
db.Feedback.updateOne(
  { _id: ObjectId("647767c3cb784d2623cd509c") },
  {
    $set: {
       Feedback_Comment: "Ok, thanks."
     }   
  }
)
collection = db.getCollection("Tickets") //EDIT COLLECTION OF TICKET REMOVE SOLUTION FROM REQUIRED
db.runCommand({
      collMod: "Tickets",
   validationLevel: "moderate",
   validationAction: "warn",  
    validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["Agent_Id", "Description", "Priority","State","Chat"],
      properties: {
        Agent_Id: { bsonType: "objectId" },
        Description: { bsonType: "string" },
        Priority: { bsonType: "string", enum: ["Low", "Medium", "High"] },
        State: { bsonType: "string", enum: ["Close", "Open", "Solved"] },
        Assigned_Staff: { bsonType: "array" },
        Date: { bsonType: "date"},
        Feedback: {bsonType: "objectId"},
        Chat: {bsonType: "objectId"},
        Attachments: {
        bsonType: "array",   
        items: {
          bsonType: "objectId"
        }
      },
      Solution: {
        bsonType: "objectId",   
      }    
      }
    }
  }
})