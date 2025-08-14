import { useState } from "react"
import type { FormEvent } from "react"
import type { Task } from '../types/task.ts'

export default function TasksPage() {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: 'Buy groceries', completed: false},
        { id: 2, title: 'Workout', completed: false},
        { id: 3, title: 'Finish React project', completed: false}
    ])

    //handles state for new task
    const [newTaskTitle, setNewTaskTitle] = useState('')

    // Creates new task when form is submitted
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (newTaskTitle.trim() === '') return

        const newTask: Task = {
            id: Date.now(),
            title: newTaskTitle,
            completed: false,
        }

        setTasks([newTask, ...tasks]) // Adds tot op of list
        setNewTaskTitle('') //Reset input
    }

    // Will toggle task and put line through it when completed
    const toggleTask = (id: number) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? {...task, completed: !task.completed} : task
        )
        setTasks(updatedTasks)
    }

    return (
        <div>
            <h1 className="text-xl font-bold mb-4 ">My Tasks</h1>
            <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
                <input
                    type="text"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    placeholder="Add a new task..."
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Add
                </button>
            </form>
            <ul className="space-y-2">
                {tasks.map((task) => (
                    <li 
                    key={task.id} 
                    onClick={() => toggleTask(task.id)}
                    className={`p-3 rounded shadow cursor-pointer transition-colors duration-200${task.completed ? 'bg-green-100 line-through' : 'bg-white'}`}
                    >
                        {task.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}