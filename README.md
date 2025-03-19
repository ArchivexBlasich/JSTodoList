# JS Todo List

## Description
This is a simple JavaScript Todo List application that allows users to create, edit, delete, and mark todos as completed. The application uses Bootstrap 5 for styling and stores data in the browser's localStorage.

## Features
- **Create** new todos with a title and description.
- **Read** todos from localStorage and display them in a table.
- **Update** existing todos using a Bootstrap modal.
- **Delete** todos from the list.
- **Mark** todos as completed.
- **Filter** todos based on their status (All, Completed, Uncompleted).
- **Search** for specific todos.
- **Data Persistence** using localStorage.

## Technologies Used
- **JavaScript (ES6+)**
- **Bootstrap 5** (for UI components)
- **localStorage** (to store data)

## Installation & Setup
1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/js-todo-list.git
   ```
2. Navigate into the project directory:
   ```sh
   cd js-todo-list
   ```
3. Install a simple HTTP server (if not installed):
   ```sh
   npm install -g serve
   ```
4. Run the project locally:
   ```sh
   serve -l 3000
   ```
5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Usage
- Click the "Add" button to create a new todo.
- Click the "Edit" button (pencil icon) to update a todo.
- Click the "Trash" button (trash icon) to remove a todo.
- Use the checkboxes to mark todos as completed.
- Use the search bar and filters to find specific todos.

## File Structure
```
JSTodoList/
|-- favicon.ico
│-- index.html        # Main HTML file
│-- js/
│   │-- index.js      # Handles application logic
│   │-- model.js      # Manages data storage
│   │-- view.js       # Updates UI elements
|   |-- components/
	|-- addTodo.js
	|-- alert.js
	|-- filter.js
	|-- modal.js
```

## Author
Fabricio Blasich
