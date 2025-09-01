import axios from "axios";
import { type Task } from "../types/task"

// backend running locally
const API_URL = 'http://127.0.0.1:8000'

// gets tasks
export const getTask = async (): Promise<Task[]> => {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data
};

// creates new task
export const createTask = async (task: Omit<Task, 'id'>): Promise<Task> => {
    const response = await axios.post(`${API_URL}/tasks`, task);
    return response.data
};

// toggles state of task if completed or not
export const toggleTask  = async (id: number, task: Partial<Task>): Promise<void> => {
    const response = await axios.put(`${API_URL}/tasks/${id}`, task);
    return response.data;
};

// deletes tasks
export const deleteTask = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/tasks/${id}`);
};