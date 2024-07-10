To-Do List Application

Overview

This project is a single-page application (SPA) developed using React. It serves as a to-do list manager, allowing users to create, view, delete, and mark to-dos as completed. The application interacts with a JSON server to store and manage the to-do data, ensuring persistence across sessions.

Features

Create To-Do: Add new tasks with a title and description.
View To-Do List: Display all tasks.
Mark as Completed: Mark tasks as completed, moving them to a separate completed list.
Delete To-Do: Remove tasks from the list.
Clear Completed Tasks: Remove all completed tasks from the list.
Components

The application is composed of the following components:

1. App
The main component that sets up the routes and state management.
Fetches initial to-do data from the JSON server.
Defines functions to handle adding, deleting, and marking to-dos as completed.
2. NavBar
Provides navigation links to different parts of the application (Home, Create To-Do, Completed To-Dos).
3. ToDoList
Displays the list of all to-dos.
Allows users to mark tasks as completed and delete tasks.
4. CreateToDo
Contains a form to create a new to-do.
Submits the form data to the JSON server and updates the to-do list.
5. CompletedToDoList
Displays the list of completed to-dos.
Provides a button to clear all completed tasks.
6. CardToDo
Represents a single to-do item with options to complete or delete it.
