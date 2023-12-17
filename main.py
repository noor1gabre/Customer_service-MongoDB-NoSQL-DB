from tkinter import *
from tkinter import ttk
from pymongo import *
from ttkthemes import ThemedTk

forms = ["Add Product", "Add Ticket", "Add Agent"]

client = MongoClient('mongodb://localhost:27017')
db = client['Technical_Support_Company_V2']

main_win = ThemedTk(theme="yaru")
main_win.title("Main Menu")
main_win.geometry("400x400")

form_var = StringVar()
form_combo = ttk.Combobox(main_win, textvariable=form_var, values=forms)
form_combo.place(relx=0.5, rely=0.4, anchor=CENTER)


def open_form():
    selected_form = form_var.get()
    if selected_form == "Add Product":
        import product
        product.products_win.mainloop()
    elif selected_form == "Add Ticket":
        import Ticket
        Ticket.ticket_win()
    elif selected_form == "Add Agent":
        import Agent
        Agent.chat_window()


label = ttk.Label(main_win, text="Main Menu", font=("Helvetica", 20))
label.place(relx=0.5, rely=0.2, anchor=CENTER)

form_button = ttk.Button(main_win, text="Open Form", command=open_form)
form_button.place(relx=0.5, rely=0.6, anchor=CENTER)

main_win.mainloop()
