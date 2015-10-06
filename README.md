# Answer to the question 5


### What server framework did you choose and why?
##### Server Frameork - Ruby on rails.

Reason- It has a wide range of Gems and flexibility to create web applications and it has huge a developers community to discuss and resolve our issue. Node js is typically not a web framework it is a platform for building applications. So, i decided to go with ruby on rails as it is a complete package.

### Which client did you choose and why?
  I chose Jquery because it has a large libraries and plugins. the ajax and Jquery go hand in hand. Jquery is designed mainly for augmentation.Jquery makes Javascript easier.
  
### Which aspect of implementation did you find it easy and why?
  
  I found installing and working with ruby on rails easy and interesting. It has lot of gems and getting our work done becomes easy. The bootstrap makes our UI attractive.
  
### What aspect of implementation did you find it hard and why?
 
 Deploying to heroku and syncing the database in development and the same as the production was difficult and took a lot of time. 
 
### What components other than server side and client framework did you install and why ?
 
 1) Git in my local machine to add and commit and push it to the github cloud repository.
 2) Third party gems such as "bootstrap-sass" - for UI decoration stuff, "gmaps4rails" for google maps in View , "geocoder" for geolocation coordinated, "pg" for postgres database in Heroku.
 3) Heroku- for pushing and deploying our web application on cloud.
 
### What Ubuntu commands are needed to deploy and run server.? 

 rails new <project name>  -to start a new rails project.
 rails generate controller <controller name> <controller Actions> - to create a controller with actions.
 bundle install - to install the gems in the development
 bundle update - to update the gems version
 rails generate model <model name> <colums value with their field type> - to create a model
 rake task <task name> -to create job at rails 
 rake db:migrate - sync db with rails
 rake db:seed - sync the db data
 rails s - to start the server at local host.
 
 git init
 git remote add <github repo >
 git add . - to add the files at git locally
 git commit -m "message" save files at initial stage.
 git push origin master - to push files on github repo.
 
 heroku create - to create heroku repo.
 heroku login - to login
 heroku git:remote -a <repo name> to add to heroku repo
 heroku push origin master - to push to heroku server
 heroku run db:migrate - to migrate to production db.
 heroku open - to open the website at heroku
 
 
 
  
 
 
 
 
 
 
 
 
 
 