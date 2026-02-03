## Challenges

Training app with a list of JavaScript challenges: 6 tasks are included by default, you can add your own, check solutions, and easily deploy it as a learning project. Stack: Node.js/Express, MongoDB (Mongoose), and React, all packaged with Docker for convenient setup.

## Core functions

- Topics list: display available challenge topics.
- Tasks list: show tasks for a selected topic or all tasks.
- Task details: view a specific task by topic and title.
- Create task: add a new task via the form and persist it to MongoDB.

## Project structure

```
./
├── docker-compose.yaml
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── seed.js
│   ├── server.js
│   └── task.js
└── frontend/
	 ├── Dockerfile
	 ├── package.json
	 ├── public/
	 └── src/
		  ├── App.js
		  ├── index.js
		  ├── components/
		  └── images/
```

## Quick start

### Docker (recommended)

1. Build and start containers:
   ```bash
   docker compose up --build
   ```
2. Open the app at http://localhost:3500

### Local (without Docker)

1. Ensure MongoDB is running and set `MONGO_URI` in your environment (e.g. in a `.env` file in the project root).
2. Backend:
   ```bash
   cd backend
   npm install
   npm start
   ```
3. Frontend (new terminal):
   ```bash
   cd frontend
   npm install
   PORT=3500 npm start
   ```
4. Open the app at http://localhost:3500

## Usage

- Use the UI to browse topics and tasks.
- Add new tasks using the form on the tasks page.
- Go back to the home page using the navigation link.

## Notes

- Backend entry point: `server.js`.
- Frontend entry point: `src/index.js`.
- Seed data script: `backend/seed.js`.
- Database: MongoDB configured via `MONGO_URI`.
