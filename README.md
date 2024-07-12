## Description
Visits is a multi-container Docker application that tracks the number of visits to a Node.js web application. One container runs the Redis server to store the visit count, while the other container hosts the Node.js web application


## How To Build & Run Locally
Make sure that you have Docker installed on your local machine   
First, clone the repo to your local machine:
```
git clone https://github.com/mohamedzeina/visits.git
```
Then move into the project's directory:
```
cd visits
```
Then, build and run the project using the following docker-compose command:
```
docker-compose up --build
```
Then, open http://localhost:4001 with your browser to see the result




