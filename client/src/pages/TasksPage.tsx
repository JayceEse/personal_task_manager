import { useState } from "react"
import type { Task } from '../types/task.ts'
import TaskList from "../components/TaskList.tsx"

export default function TasksPage() {
    const [tasks, setTasks] = useState<Task[]>([
        {id: 1, title: 'Learn React Routing', completed: false},
        {id: 2, title: 'Build Task Manager', completed: false}
    ])

    const [newTask, SetNewTask] = useState('');

    // Will toggle task and put line through it when completed
    const toggleTask = (id: number) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? {...task, completed: !task.completed} : task
            )
        );
    };

    const addTask = () => {
        if (!newTask.trim()) return;
        const newTaskObj : Task = {
            id: Date.now(),
            title: newTask,
            completed: false,
        };
        setTasks((prev) => [...prev, newTaskObj])
        SetNewTask('');
    }

    const deleteTask = (id: number) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    }

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Tasks</h1>
            {/* New Task Input */}
            <div className="flex gap-2 mb-4">
                <input 
                    type="text" 
                    value={newTask} 
                    onChange={(e) => SetNewTask(e.target.value)}
                    className="border p-2 rounded w-full"
                    placeholder="Enter a new task..."
                    />
                    <button
                        onClick={addTask}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                        Add
                    </button>
            </div>

            <TaskList tasks={tasks} onToggleTask={toggleTask} onDeleteTask={deleteTask}/>
        </div>
    );
}