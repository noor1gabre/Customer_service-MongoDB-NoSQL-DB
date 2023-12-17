use Technical_Support_Company_V2
db.Employees.find({
    $or:[{
        "Incentives":{"$gt":5000}
    },
    {
        "Name.First":"yahia"
        }
    ]
})
findAgentInfo = (agentId,agentId1) => {
  const ticket = db.Tickets.findOne({ Agent_Id: agentId1 })
  const agent = db.Agents.findOne({ _id: agentId })
  
  return {
    ticket: {
      Description: ticket.Description,
      Priority: ticket.Priority,
      State: ticket.State,
      Assigned_Staff: ticket.Assigned_Staff,
      Date: ticket.Date,
      Feedback: ticket.Feedback,    
      Chat: ticket.Chat,
      Attachments: ticket.Attachments,
      Solution: ticket.Solution   
    },
    agent: {
      Name: agent.Name,
      Email: agent.Email,  
      Phone: agent.Phone,
      Products: agent.Products,
      Tickets: agent.Tickets,
      Feedback: agent.Feedback    
    }
  }
} 
const result = findAgentInfo(ObjectId("647767c3cb784d2623cd5097"),ObjectId("62a4a77f70d6c91f98ce37d3"))

console.log(result.agent) 