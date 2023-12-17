use Technical_Support_Company_V2
db.Attachments.deleteMany(
    {
        Ticket_Id:{
            $in:db.Tickets.find({
                State:"Closed"
            }).map(function(ticket){
                return ticket._id
            })
        }
    }
)