import type { Task } from '../types/task';

type TaskListProps = {
    tasks: Task[];
    onToggleTask: (id: number) => void;
    onDeleteTask: (id: number) => void;
};

export default function TaskList ({tasks, onToggleTask, onDeleteTask}: TaskListProps) {
    return (
        <ul>
            {tasks.map((task) => (
                <li 
                key={task.id}
                className={`p-3 rounded shadow cursor-pointer ${
                    task.completed ? 'bg-green-100 line-through' : 'bg-white'
                }`}
                >
                    <div
                    onClick={() => onToggleTask(task.id)}
                    className='cursor-pointer flex-1/2'
                    >
                        {task.title}
                    </div>
                    <button
                        onClick={() => onDeleteTask(task.id)}
                        className='ml-4 bg-red-500 text-white px-2 py-1 rounded'
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )
}