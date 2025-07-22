from fastapi import FastAPI
from database import init_db
from database import Base, engine
from routes import router

app = FastAPI()

Base.metadata.create_all(bind=engine)

init_db()

# Routes
app.include_router(router)

@app.get("/")
def read_root():
    return {"message": "API is running"}