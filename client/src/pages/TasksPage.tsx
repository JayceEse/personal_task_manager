import { useState } from "react"
import type { Task } from '../types/task.ts'
import TaskList from "../components/TaskList.tsx"

export default function TasksPage() {
    const [tasks, setTasks] = useState<Task[]>([
        {id: 1, title: 'Learn React Routing', completed: false},
        {id: 2, title: 'Build Task Manager', completed: false}
    ])

    // Will toggle task and put line through it when completed
    const toggleTask = (id: number) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? {...task, completed: !task.completed} : task
            )
        );
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Tasks</h1>
            <TaskList tasks={tasks} onToggleTask={toggleTask}/>
        </div>
    );
}