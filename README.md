# HOME HORIZON `Coders4Chanage`
![](image-1.png)

gravitar - website where people add images, what email is used depeds on the lgin, the wedsite pulls 

Deployment Link: https://shelterapp-homehorizon.onrender.com

## CREDITS AND CONTACTS
This mobile first application was made by Sara Thampi, James Diffey, Alexander Carr, Victoria Eyres, Jasim Chowdhury and Matthew Kirke as a part of School of Code 15th Bootcamp (Final Project)

## PROBLEM STATEMENT
Homeless shelter staff report communication issues, lack of organisation, and inefficient record-keeping resulting in wasted time, duplication of efforts, and challenges in accessing and sharing data about service users. They need a way to record service user details easily on hardware  accessible to them, and reduce any trauma during the documentation process.

## SOLUTION OVERVIEW
A mobile app that allows staff members to access service user information from an easily accessible database. A checklist to improve the onboarding process for both staff members and potential service users and a list of relevant  referral services in one place.

## HOW TO INSTALL 
Step by step guide to runnning on local host
- Clone the repo link and load into VS Code 
- cd into Final Project 
- Open the terminal and run 'npm i'. This will install the required modules
- Once these have installed, run 'npm run dev' this will locally run the application

## SUPABASE 
Supabase is an open source databsase aservice alternative to firebase. Is a web service that manages and stores user data efficiently. By combining PostgreSQL and realtime capabilities [Supabase](https://supabase.io/) provides a scalable and performant solution for building applications with robust backend support.

## APP FEATURES
Current app features:
- Staff can successfully login after being provided with login credentials from upper management
- Staff can see all the service users on the database by tapping on the "View or Edit database"
- 
## BUGS BUGS BUGS




## Setup

Create Next App
Authentication
- Every page on the site is Auth-guarded so there is no way to bypass the login.
Folder structure
- Public folder
  - Contains all images for the site. No images are fetched from the web due to load times.
- AuthRouter.jsx file
  - This Auth Router checks that the client is logged in before returning the request page component[Title](https://ca.slack-edge.com/T6L933W4X-U05NQKY5NP5-g406ffaf1f78-512)
- Page components folder
  - These page component files represent entire web pages. They correspond to the page.js files which request them via a prop sent to the Auth Router. 
- Baby components folder
  - These ‘baby components’ are differentiated from the page components because they are used within pages rather than being whole pages in thmeelves.
  - They often help to make the code cleaner by providing reusability, perhaps most notably the “header.jsx” file, the “footer.jsx” file and the “editablePair.jsx” file
 - Src/app folder contains….
  -  Folders for each page of the website (e.g. “displayallsu” folder, with corresponding “page.js” file)
  - Dynamic routing within the “displayallsu” folder with the folder name “[id]”
  -These “/displayallsu/id” pages are populated using the generateStaticParams function
Folders for the page components each page loads (if the Auth Router approves the session)

## STYLING
- Every page component has the same structure that incorporate some “global styles” to ensure consistency throughout the webpages. The basic structure is a welcome container at the top for the heading, and a content container with a white glowing box.
- In this project, stylesheets are set up for every individual page component and baby component. There is also one “globals.css”. These files tidy the code and ensure no file gets too long.
- Every stylesheet file applies to all pages on the project by default, so class names are vital and we must avoid overlap. For this reason, stylesheets often have class names that are clearly specific to the component they are targeting (e.g. the Dashboard component has class names such as “dash-grid”, instead of “grid”, or the AddSu component has classnames such as “addsu-inputfield” instead of addsu) .



## TESTING
- Cypress installed, capable of E2E and Component Tests.
Only one component test is currently setup
- The latest version of cypress (13.6.1) is unstable, .0 seems better. Next must be 13.0.0 originally to setup tests.


## PACKAGES
Next, for scaffolding
Cypress, for testing
Sonnen Toaster, for pop-up notifications(toasts)

## CACHING
To minimise the problematic effects of caching (such as edited service user data not updating), workarounds have been used.
-  the display of service user information is fetched initially then set to a locally stored context variable which updates instantly, even before you press the ‘update’ button. There is a consequence here that if data is edited but the update button is not pressed the new data will show until the page is reloaded (at which point the database’s data will be fetched again)
-  manually clearing the cache on the Render site (our free deployment), which uses a software called Cloudflare to cache everything possible by default 
-  clear cache in browser inspect, hold refresh button, empty cache and hard reload

## FUNCTIONALITY ADDED
- Viewing service users in the database
- Viewing specific user
- Editing specific service users' information
- Adding new service users
- Functionality to add or fix data
- Editing the information of newly added service users (only - works for existing data tables)
- Improved data validation and error handling (currently the popup confirming an update appears regardless of whether there was an error)

TO DO: 
- Delete users (shelter manager accounts only)
- Checklist for staff to work through with service users
- Intelligent searching database users
- Automatically input age when date of birth added
- Audit trails tables (to show how the data has been updated)
- Improve responsiveness to web and mobile display (e.g., center the display on web pages)
- Add photo to profiles.

## HIGH LEVEL CODE EXPLANATION
- Displaying service users list
  - Fetching service users table data from supabase and mapping it
- Dynamic routing
  - Generate static params to populate pages
- Display one SU
  - Reusable displayonesuComp that works for all service users, and overcomes display issues through optional chaining when data hasn’t been displayed yet
  - Box Toggles to manipulate display, using state and “on Click” functions.
  - Editable Pair component replaced the SU Data Value Pair component which has a state prop called “editMode” that determines whether to return input boxes or standard ‘divs’
  - Note, the editable pair component is reusable because it takes in a lot of props! 
- Adding data
  - A simple supabase insert function tied to the input fields. 
- Editing data
  - Setting a state (called “suData”) equal to the context (which equals AllFetchedData…) and providing it to all the EditablePairs and Update Button enable us to have just one Update. Button that sends the request to the database with all the values from each individual Editable Pair
The input boxes require a lot of code.
  - This code is scattered between the displayOneSu file and the editablePair Component files.
Whenever you type in the input boxes, it updates the columns of its respective data table (eg Strengths) with the new value within the suData state.
  - When the update button is pressed, it takes the new value of suData and sends the respective data table’s portion of it (e.g. Strengths) to the database


