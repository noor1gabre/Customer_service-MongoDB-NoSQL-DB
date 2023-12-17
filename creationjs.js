use Technical_Support_Company_V2
db.createCollection("Employees", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["Name", "Email", "Phone","product"],
      properties: {
        Name: {
          bsonType: "object",
          required: ["First", "Last"],
          properties: {
            First: { bsonType: "string" },
            Last: { bsonType: "string" }
          }
        },
        Email: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        },
        Phone: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["Number", "Type"],
            properties: {
              Number: { bsonType: "string" },
              Type: { 
                bsonType: "string",
                enum: ["Mobile", "Work", "Home"]
              }
            }
          }
        },
        Employee_level: { bsonType: "int" },
        Incentives: { bsonType: "int" },
        product:{bsonType: "objectId"},
      }
    }
  }
});

// Employees_Levels collection
db.createCollection("Employees_Levels", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["Level_Title", "Level", "Main_Salary","Employees"],
      properties: {
        Level_Title: { bsonType: "string" },
        Level: { bsonType: "int" },
        Main_Salary: { bsonType: "int" },
        Employees: {
        bsonType: "array",   
        items: {
          bsonType: "objectId"
        }
      }  
      }
    }
  }
});

// Agents collection
db.createCollection("Agents", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["Name", "Email", "Phone"],
      properties: {
        Name: { bsonType: "string" },
        Email: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        },
        Phone: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["Number", "Type"],
            properties: {
              Number: { bsonType: "string" },
              Type: { 
                bsonType: "string",
                enum: ["Mobile", "Work", "Home"]
              }
            }
          }
        },
        Products: {
        bsonType: "array",   
        items: {
          bsonType: "objectId"
        }
        
      },
      Tickets: {
        bsonType: "array",   
        items: {
          bsonType: "objectId"
        }
      },  
      Feedback: {
        bsonType: "array",   
        items: {
          bsonType: "objectId"
        }
      }  
        
      }
    }
  }
});

// Products collection
db.createCollection("Products", {
  validator: {
    $jsonSchema:{
      bsonType: "object",
      required: ["Name", "Description", "Assigned_Staff","Agents"],
      properties: {
        Name: { bsonType: "string" },
        Description: { bsonType: "string" },
        Assigned_Staff: { bsonType: "array" },
        Agents: {
        bsonType: "array",   
        items: {
          bsonType: "objectId"
        }
      }  
      }
    }
  }
});

// Feedback collection
db.createCollection("Feedback", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["Ticket_Id", "Agent_Id", "Rating"],
      properties: {
        Ticket_Id: { bsonType: "objectId" },
        Agent_Id: { bsonType: "objectId" },
        Rating: { bsonType: "int", minimum: 0, maximum: 5 },
        Feedback_Comment: { bsonType: "string" },
        Date: { bsonType: "date" }
      }
    }
  }
});

// Tickets collection
db.createCollection("Tickets", {
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
});

// Chat collection
db.createCollection("Chat", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["Ticket_Id", "Messages"],
      properties: {
        Ticket_Id: { bsonType: "objectId" },
        Messages: {
          bsonType: "array",
          items: {
            bsonType: "string"  
          }
        },
        Date: { bsonType: "date" },
      }
    }
  }
});

// Attachments collection
db.createCollection("Attachments", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["Ticket_Id","Sender", "File_Name", "File_Type"],
      properties: {
        Ticket_Id: { bsonType: "objectId" },
        Sender: { bsonType: "string" },
        File_Name: { bsonType: "string" },
        File_Type: { bsonType: "string" },
        Date: { bsonType: "date" },
      }
    }
  }
});
db.createCollection("Solutions", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["Ticket_Id", "Solution"],
      properties: {
        Ticket_Id: { bsonType: "objectId" },
        Solution: { bsonType: "string" },
        Date: { bsonType: "date" },
      }
    }
  }
});
