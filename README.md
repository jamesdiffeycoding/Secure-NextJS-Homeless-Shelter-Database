# Recent Projects
### [Awesun: Solar Energy Visualiser (Vercel)](https://awesun-solar-visualiser.vercel.app/)

This application visualises the solar energy currently being produced in the UK, connecting to a dataset from University of Sheffield. The project was inspired by Winderful, which does the same for wind energy in the UK. Because of CORS fetch errors, server-side rendering in Next JS was used.

![AwesunShotBanner](https://github.com/jamesdiffeycoding/jamesdiffeycoding/assets/139918141/b0f83f28-72a7-41ea-9eff-57a968f0b2e4)


### [Secure homeless shelter user database (Vercel)](https://secure-nextjs-homeless-shelter-database.vercel.app/dashboard)

The application helps staff quickly record information about their service users while out in the streets or back in the shelter. It aims to help improve both service staff and service user experiences. This has project has already involved...
- user interviews, surveys, feedback cycles, wireframes, stakeholder meetings,project demos (this project was initially conceived and worked amongst other passionate coders)....
- authorisation and authentication with SupaBase, auth-guarding, dynamic routing, caching prevention, React Hooks, prop-drilling, context... and more! 

![Images from my application to support homeless shelter staff](https://github.com/jamesdiffeycoding/jamesdiffeycoding/assets/139918141/969e4146-8cbd-4bc4-a5bb-72f34f24deca)



### [A simple Ruby On Rails Pokedex App (Render)](https://rubyonrails-pokedex.onrender.com/pokemonsters)
A simple CRUD-functionality Pokedex App, which was my first project in Ruby on Rails, having worked primarily in React/Next JS thus far.

![RubyDexShotBannerShort](https://github.com/jamesdiffeycoding/jamesdiffeycoding/assets/139918141/87d429f5-eaca-46e4-a655-b28c06d4a2b1)



### [Live Deployment Dashboard (Vercel)](https://jamesdiffeycoding-pythonlivedashboard.vercel.app/)

This application allows me to check all of my deployments statuses (and prevent any from spinning down with activity) by visiting a single site. Python, Flask and Beautiful Soup were used to scrape my sites for their html content, and the site itself displays whether the url request was valid, and whether the html response to the request was as expected.

![DeploymentsDashboardShot2](https://github.com/jamesdiffeycoding/jamesdiffeycoding/assets/139918141/a1dae188-5b51-4978-ab78-0617aa2372e1)



### [A simple Python and Django Learning App (Vercel)](https://django-learning-project.vercel.app/)
A simple App, which was my first project in Python and Django, having worked primarily in React/Next JS thus far.

![DjangoShotBanner](https://github.com/jamesdiffeycoding/jamesdiffeycoding/assets/139918141/f92fd5e0-21ea-43be-8b55-ee703a9f08bc)



### [A React Application for recording learnings as a developer, following React best-practices (Vercel)](https://developer-lessons-react.vercel.app/)
The application allows adding, viewing, deleting and updating (via favouriting) of learnings I record on my journey to become a great developer. It was fun to create the favourites filter option, and to experiment with a colour theme toggle in the settings. It was a great opportunity to practice setting up my code in a clear, modular way in React, as well as to practice working with local storage.

![LearningShotsBanner](https://github.com/jamesdiffeycoding/jamesdiffeycoding/assets/139918141/a9bdd1d7-6432-40ca-b995-568d863e0eaf)



### [A relaxing site featuring an animated Studio Ghibli video (GH Pages)](https://jamesdiffeycoding.github.io/Animated-Wallpaper-StudioGhibli/)
A simple for-practice video and audio site with a responsive header. Autoplay prevents videos playing with audio by default, so I had to feature an audio player on the site itself.

![GhibliShotBanner](https://github.com/jamesdiffeycoding/jamesdiffeycoding/assets/139918141/8e15b17c-d630-41f1-aeb0-815fad921f90)



### [A colourful responsive Tailwind grid (GH Pages)](https://jamesdiffeycoding.github.io/Tailwind-Responsive-Grid-Experiments/)

A simple for-practice responsive grid layout, something I had not had time to practice on other projects thus far.

![GridResponseBanner](https://github.com/jamesdiffeycoding/jamesdiffeycoding/assets/139918141/6a50cfc3-1266-47db-8e70-dbd8e3fcf61b)


### Timed code challenges ⏰ 
Sometimes I like to set myself smaller challenges to test my learning.
- 30 minute challenge: build a React widget using at least one hook. This ended up cute!
- 60 minute challenge: display a grid of colours, including their hexcodes in html. This did not end up so cute...
- 120 minute challenge: make a front-end Noughts and Cross app. The game logic for this was the toughest part by far!
  
![ChallengesShotBanner](https://github.com/jamesdiffeycoding/jamesdiffeycoding/assets/139918141/be1d4e60-dfd6-4f49-81bb-589c4373da23)


- 150 minute challenge: make a front-end maze game. I called mine [Banana and Ivy](https://jamesdiffeycoding.github.io/JS-Banana-and-Ivy-Game/)

<img width="1000" alt="BananaGameShotBanner" src="https://github.com/jamesdiffeycoding/jamesdiffeycoding/assets/139918141/b70182d1-170a-4d44-8641-a7d87b622b99">




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
