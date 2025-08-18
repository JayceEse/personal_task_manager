import type { Task } from '../types/task';

type TaskListProps = {
    tasks: Task[];
    onToggleTask: (id: number) => void;
};

export default function TaskList ({tasks, onToggleTask}: TaskListProps) {
    return (
        <ul>
            {tasks.map((task) => (
                <li 
                key={task.id}
                className={`p-3 rounded shadow cursor-pointer ${
                    task.completed ? 'bg-green-100 line-through' : 'bg-white'
                }`}
                onClick={() => onToggleTask(task.id)}
                >
                    {task.title}
                </li>
            ))}
        </ul>
    )
}