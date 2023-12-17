from tkinter import *
from tkinter import ttk
from pymongo import *
from bson.objectid import ObjectId
from ttkthemes import ThemedTk

client = MongoClient('mongodb://localhost:27017')
db = client['Technical_Support_Company_V2']

products_win = ThemedTk(theme="radiance")
products_win.geometry("400x400")
products_win.title("Add Product")

Label(products_win, text="Name").place(relx=0.5, rely=0.2, anchor=CENTER)
pname_entry = Entry(products_win)
pname_entry.place(relx=0.5, rely=0.3, anchor=CENTER)

Label(products_win, text="Description").place(
    relx=0.5, rely=0.4, anchor=CENTER)
pdesc_entry = Entry(products_win)
pdesc_entry.place(relx=0.5, rely=0.5, anchor=CENTER)

Label(products_win, text="Assigned staff").place(
    relx=0.5, rely=0.6, anchor=CENTER)
pAssigned_entry = Entry(products_win)
pAssigned_entry.place(relx=0.5, rely=0.7, anchor=CENTER)
Label(products_win, text="Agents").place(
    relx=0.5, rely=0.8, anchor=CENTER)
Agent_entry = Entry(products_win)
Agent_entry.place(relx=0.5, rely=0.9, anchor=CENTER)


def add_product():
    product = {}
    product["Name"] = pname_entry.get()
    product["Description"] = pdesc_entry.get()
    product["Assigned_Staff"] = [x for x in (pAssigned_entry.get()).split(",")]
    product["Agents"] = [ObjectId(x) for x in (Agent_entry.get()).split(",")]
    try:
        db.Products.insert_one(product)
        success_label.config(text="Product added successfully!")
    except Exception as e:
        error_label.config(text=f"Error: {e}")
        print(e)


success_label = Label(products_win, text="", fg="green")
success_label.grid(row=6, column=1, pady=10)

error_label = Label(products_win, text="", fg="red")
error_label.grid(row=7, column=1, pady=10)

Button(products_win, text="Submit", command=add_product).place(
    relx=0.8, rely=0.9, anchor=CENTER)
products_win.mainloop()
