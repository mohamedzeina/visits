## Description
Visits is a simple multi-container application made with Docker. It tracks the number of visits made to a node.js web application. 
One container is used to run the redis server that stores the number of visits while the other container runs the node.js web application.


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
Then, open http://localhost:3000 with your browser to see the result




