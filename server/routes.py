from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from models import Task, SessionLocal
from pydantic import BaseModel
from typing import List, Optional
from datetime import date

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally: 
        db.close()

# Structure of the data the user sends
class TaskCreate(BaseModel):
    title: str
    description: Optional[str] = None
    due_date: Optional[date] = None
    tags: Optional[str] = None

# Structure of the data the API sends back
class TaskRead(TaskCreate):
    id: int
    completed: bool

    class config:
        orm_mode = True

# GET: fetch all tasks
@router.get("/tasks", response_model=List[TaskRead])
def get_tasks(db: Session = Depends(get_db)):
    return db.query(Task).all()

# POST: Create a new task
@router.post("/tasks", response_model=TaskRead)
def create_task(task: TaskCreate, db: Session = Depends(get_db)):
    db_task = Task(**task.dict())
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task

# PUT: Update an existing task
@router.put("/tasks/{task_id}", response_model=TaskRead)
def update_task(task_id: int, task: TaskCreate, db: Session = Depends(get_db)):
    db_task = db.query(Task).filter(Task.id == task_id).first()
    if not db_task:
        raise HTTPException(status_code=404, detail="Task not found")
    for key, value in task.dict().items():
        setattr(db_task, key, value)
    db.commit()
    db.refresh(db_task)
    return db_task

# DELETE: Delete a task
@router.delete("tasks/{task_id}")
def delete_task(task_id: int, db: Session = Depends(get_db)):
    db_task = db.query(Task).filter(Task.id == task_id).first()
    if not db_task:
        raise HTTPException(status_code=404, detail="Task no found")
    db.delete(db_task)
    db.commit()
    return {"message": "Task deleted"}
