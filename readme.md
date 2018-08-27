# Citizen Wildlife Science

In the field of wildlife biology, often one of the hardest aspects of studying any given species is simply finding it within vast natural landscapes. This issue of detection has been addressed through a variety of techniques from walking transect lines to radio telemetry to use of airplanes for aerial surveys. Each of these methods have their own unique pros and cons which necessitate their use.

One often underutilized method of detection is the ability to survey recreational users and rural landscape owners who often encounter any number of wildlife but are unable to report their discoveries in a manner that is both convenient for them and also useful to researchers. 

The aim of this project is to provide a platform that would allow users to report their wildlife sightings along with key information which could make their sightings both a great experience and a key scientific contribution.

##What it includes

* Sequelize models and migration for creating user accounts and widlife sighting information
* Setting for PostgreSQL
* Passport and Passport-Local for authentication
* The use of OAuth to allow login from other account (i.e. Facebook, Google, etc.)
* Express sessions to keep user loggedin from page to page
* Connect-Flash for error/success messages
* Bcrypt for hashing passwords preventing access to sensitive information
* Google maps API to allow accurate location data

### User Model

| Column Name | SQL Type | Notes							|
|_____________|__________|__________________________________|
|id | Integer | Serial primary key|
|createdAt | Date | Automatically generated |
|updatedAt | Date | Automatically generated |
| firstname | String | - |
| lastname | String | - |
| email | String | usernameField for login |
| password | String | Hashed with bcrypt |
| dob | Date | - |
| admin | Boolean | Admin or regular user |

> NOTE: Change these fields in both the model and migration files before running sequelize db:migrate

### Default Routes Supplied

| Method | Path | Location | Purpose |
|________|________________|______________________|________________________________________|
| GET | / | index.js| Home Page|
| GET | /profile | controllers/profile.js | Profile page (authorization req) |
| GET | /auth/login| controllers/auth.js | Login form page |
| POST | /auth/login | controllers/auth.js | Login submission + Redirect to profile |
| GET | /auth/signup | controllers/auth.js | Signup form page |
| POST | /auth/signup | controllers/auth.js | Signup submission + Redirect to login |
| GET | /auth/logout | controllers/auth.js | Logout + redirect home |

## Steps to use

#### 1. Clone repo, but with a different name!

```
git clone <repo_link> <new_name>
```

#### 2. Install node modules from `package.json`

```
npm install
```

#### 3. Customize with project name

* Title in the layout.ejs
* Logo in the navbar
* Description/Repo link in the package.json
* Remove auth boilerplate readme content

#### 4. Create new database for your new project

```
createdb <new_db_name>
```

#### 5. Open `config.json` and change the following:
 
 * Change database name to what you created in step 2
 * Set username/password for your local environment
 * Make sure the flavor of SQL matches what you're using

> NOTE: If changing from Postgres, you will need different node_modules

#### 6. Check models and migrations for your needs

For example, if you don't need the `Admin` column, you will want to delete it from both the migration and model for the user. Likewise, if you need to add something, add in both files.

#### 7. Run the migrations

```
sequelize db:migrate
```

#### 8. Add a `.env` file with a SESSION_SECRET key

This can be set to anything.


#### 9. Run your server and make sure everything works

If you have nodemon istalled globally:
```
nodemon
```

Otherwise:
```
node index.js
```

#### 9. Create a new repository for the new project to live in!

* Create a new repository on your personal Github account.
* Delete the old remote to origin
* Add new repo as a new location (can also be called origin since we deleted the original origin)
* PUSH!

```
git remote remove origin
git remote add origin <new_repo_link>
git add .
git commit -m "Beginning of new project"
git push origin master

>NOTE: Do NOT make commits from the new project to your auth boilerplate! Keep it pristine!!!

## Next Steps

Assuming that the setup steps went smoothly, now you can add new models/migrations for your new app, and generally just start developing it as if you had started from scratch!