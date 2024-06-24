#NestJS Messaging Application

This application is built using NestJS and provides functionality to send and receive text messages using sockets. It also incorporates a message queue system using RabbitMQ to handle message delivery. The application is containerized using Docker.

##Features

- Real-time messaging using WebSockets
- Message queue handling with RabbitMQ
- Dockerized setup for easy deployment

##Prerequisites

- Node.js (>= 14.x)
- Docker
- Docker Compose

##Getting Started

##Installation

1. Clone the repository

   ```bash
   git clone https://github.com/MoeThet20/be-code-test.git
   cd be-code-test

   ```

2. Install dependencies:

   ```bash
   npm install
   or
   yarn
   ```

##Running the Application

Using Docker

1. Build and run the Docker containers:

   ```bash
   docker-compose up --build

   ```

2. The application will be available at http://localhost:3000.

Without Docker

1. Ensure RabbitMQ is running on your system. You can use Docker to run RabbitMQ:

   ```bash
   docker run -d --hostname rabbitmq --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management

   ```

2. Run the NestJS application:

   ```bash
   npm run start:dev
   or
   yarn start:dev
   ```
