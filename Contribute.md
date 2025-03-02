## Manual installation
-Install nodejs locally()
-Clone the repo
-Install dedpendencies (npm install)
-Statrt the db locally
  -docker run -e POSTGRES_PASSWORD-mysecrerpassword -d -p 5432:5432 postgres 
  -else go to neon .tech and get yourself a new DB
-Change the .env file and update your DB credentials 
-npx prisma migrate
-npx prisma generate
-npm run build
-npm run start

## Docker installation
  