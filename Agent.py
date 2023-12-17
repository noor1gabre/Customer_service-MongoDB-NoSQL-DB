from tkinter import *
from tkinter import ttk
from pymongo import *
from bson.objectid import ObjectId
from ttkthemes import ThemedTk

client = MongoClient('mongodb://localhost:27017')
db = client['Technical_Support_Company_V2']

agents_win = ThemedTk(theme="radiance")
agents_win.geometry("500x500")
agents_win.title("Add Agent")

name_label = Label(agents_win, text="Name")
name_label.place(relx=0.5, rely=0.2, anchor=CENTER)
name_entry = Entry(agents_win)
name_entry.place(relx=0.5, rely=0.3, anchor=CENTER)

email_label = Label(agents_win, text="Email")
email_label.place(relx=0.5, rely=0.4, anchor=CENTER)
email_entry = Entry(agents_win)
email_entry.place(relx=0.5, rely=0.5, anchor=CENTER)

phone_label = Label(agents_win, text="Phone")
phone_label.place(relx=0.5, rely=0.6, anchor=CENTER)
phone_entry = Entry(agents_win)
phone_entry.place(relx=0.5, rely=0.7, anchor=CENTER)

type_label = Label(agents_win, text="Type")
type_label.place(relx=0.5, rely=0.8, anchor=CENTER)
type_entry = Entry(agents_win)
type_entry.place(relx=0.5, rely=0.9, anchor=CENTER)
# Insert agent


def add_agent():
    numbers = phone_entry.get()
    types = type_entry.get()
    agent = {
        "Name": name_entry.get(),
        "Email": email_entry.get(),
        "Phone": [{"Number": numbers, "Type": types}]
    }
    try:
        db.Agents.insert_one(agent)
        print("Agent Added")
    except Exception as e:
        print(e)


Button(agents_win, text="Submit", command=add_agent).place(
    relx=0.5, rely=0.97, anchor=CENTER)
agents_win.mainloop()
