# Backend for URL Shortener
Simple backend for my URL Shortener project.

Run `npm install`

Run `npx prisma generate`

Copy the environment example files in the prisma folder, removing the 'example' part 

- cp .env.development.example .env.development
- cp .env.example .env
- cp .env.test.example .env.test

Configurations in these files may not work depending on your setup, e.g. if you are running Windows.
Check which IP does the databases run at and adjust accordingly.

Run the project with: `docker compose up` 
- This will create and run two databases, one for testing and one for development. It will also run the backend.

Run the tests with `npm test` while the test database is up and running.
