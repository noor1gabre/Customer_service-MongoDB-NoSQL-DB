from tkinter import *
from tkinter import ttk
from pymongo import MongoClient
from bson.objectid import ObjectId
from datetime import datetime
from ttkthemes import ThemedTk

client = MongoClient('mongodb://localhost:27017')
db = client['Technical_Support_Company_V2']

ticket_win = ThemedTk(theme="radiance")
ticket_win.geometry("400x400")
ticket_win.title("Add Ticket")

name_label = Label(ticket_win, text="Name")
name_label.place(relx=0.5, rely=0.2, anchor=CENTER)
name_entry = Entry(ticket_win)
name_entry.place(relx=0.5, rely=0.3, anchor=CENTER)

Priority_label = Label(ticket_win, text="Priority")
Priority_label.place(relx=0.5, rely=0.4, anchor=CENTER)
Priority_entry = Entry(ticket_win)
Priority_entry.place(relx=0.5, rely=0.5, anchor=CENTER)

Description_label = Label(ticket_win, text="Description")
Description_label.place(relx=0.5, rely=0.6, anchor=CENTER)
Description_entry = Entry(ticket_win)
Description_entry.place(relx=0.5, rely=0.7, anchor=CENTER)


def add_ticket():
    Description = Description_entry.get()
    Priority = Priority_entry.get()
    agent = db.Agents.find_one({"Name": name_entry.get()})
    agent_id = agent['_id']
    ticket = {
        "Agent_Id": ObjectId(agent_id),
        "Description": Description,
        "Priority": Priority,
        "State": "Open",
        "Date": datetime.now(),
        "Chat": ObjectId()
    }
    try:
        db.Tickets.insert_one(ticket)
        ticket_id = ticket['_id']
        print("ticket Added")
        update_agent(name_entry.get(), ticket_id)

        print("Agent updated")
    except Exception as e:
        print(e)


def update_agent(agent_name, Ticket_id):
    agent = db.Agents.find_one({"Name": agent_name})
    ticket = ObjectId(Ticket_id)
    if agent:
        db.Agents.update_one(
            {"Name": agent_name},
            {'$push': {'Tickets': ticket}}
        )


Button(ticket_win, text="Submit", command=add_ticket).place(
    relx=0.5, rely=0.8, anchor=CENTER)
ticket_win.mainloop()
