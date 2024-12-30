
# Homeless Shelter Service User Database

## Inspiration
Homeless shelter staff report communication issues, lack of organisation, and inefficient record*keeping resulting in wasted time, duplication of efforts, and challenges in accessing and sharing data about service users. They need a way to record service user details easily on hardware  accessible to them, and reduce any trauma during the documentation process.

## What it does
An app for homeless shelter staff to view, record, and update information about their homeless shelter guests. Priorities included ease of use, accessibility to staff with limited technical experience and training time, auth*guarding (to protect guests' data), and ability to access the App from a mobile or computer device. We also prioritised the promotion of homeless shelter guests' strengths and wellbeing by highlighting their interests and strengths prominently on their profiles.

## List of app features 
* Staff can login after being provided with login credentials from upper management
* Staff can see all the service users on the database by tapping on the "View or Edit database"
* Editing specific service user information
* Adding new service users
* Editing the information of newly added service users (currently only works for existing data tables)
* Improved data validation and error handling (currently the popup confirming an update appears regardless of whether there was an error)
* Dummy logins so that anyone can view and edit the data

## How we built it
Next JS, React, Supabase, Sonnet Toaster Popups, Cypress Testing

## Challenges we ran into
Our deployment site by default used Cloudflare caching that sometimes led to old data being displayed on the page. 

## Accomplishments that I'm particularly proud of
Writing the edit functions for so many different data points and data tables in an online sequel-like database.

## What I learned
A lot! React state, context providers, optional chaining, authorisation and authentication, route guarding, caching, branching, merging, version control, stakeholder engagement, continuous deployment, teamwork and more! 

## What's next?
There are a few features we'd like to work on including AES256 encryption, creating more logins with different authorisation tiers, and other useful features like onboarding checklists and data completion trackers. I'd also like to learn more about GDPR and data retentionpolicies.

## Try it out
[Homeless Shelter Database Application](https://secure-nextjs-homeless-shelter-database.vercel.app//)
