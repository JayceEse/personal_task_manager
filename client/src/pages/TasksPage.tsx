import { useState } from "react"
import type { Task } from '../types/task.ts'

export default function TasksPage() {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: 'Buy groceries', completed: false},
        { id: 2, title: 'Workout', completed: false},
        { id: 3, title: 'Finish React project', completed: false}
    ])

    return (
        <div>
            <h1 className="text-xl font-bold mb-4 ">My Tasks</h1>
            <ul>
                {tasks.map((task) => (
                    <li 
                    key={task.id} 
                    className={`p-3 rounded shadow ${task.completed ? 'bg-green-100 line-through' : 'bg-white'}`}
                    >
                        {task.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}