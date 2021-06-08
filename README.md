# MVF Tech Test - Favourite Programming Language

# The Task

**Github (API) test**

We would like you to build a web or command line application,which should allow users to enter an arbitrary Github username,and be presented with a best guess of the Github user's favourite programming language. This can be computed by using the Github API to fetch all of the user's **public** Github repositories, each of which includes the name of the dominant language for the repository. Documentation for the Github API can be found at https://developer.github.com/v3/

You may use any programming language, framework, or library.

# Technologies Used
- React
- Javascript
- HTML/CSS
- Jest


# Process/Whiteboarding

I whiteboarded all the processes/things to be thinking about for this task. Check the image below for this

<img width="1398" alt="Screenshot 2021-06-08 at 12 13 51" src="https://user-images.githubusercontent.com/57540755/121175506-06642800-c853-11eb-8536-7d87aebbe59c.png">

This included 
- [x] Getting user input for Api Address
- [x] What the data Oject looks like, I used postman for this  
- [x] Filter Methods on requests
- [x] Design
- [x] Testing
- [x] EdgeCases

# User Stories

```
As a user
So I can find someone's Github profile
I'd like to able enter and search for a particular Github username
```

```
As a user 
so I can find out what someones favourite programming language is
I'd like to click a button which returns the selected users favourite programming language(s). Which are displayed to the current screen
```

# Edge Cases 
- [x] Github User has no Repos
- [x] Github User has a join favourite language
- [x] Github user has undetermined language of choice (null)
- [x] User inputs invalid Github Username



# Improvements/Future Features
- Github Avatar
- Mocking of Api
- Overall testing using React
- Pop out card for displaying information with Avatar, Username, favourite Language
- Deploy to Netlify afer completing these improvements

# Design Idea
I decided to take inspiration from the Github Login in page(darkmode) as if was a Github feature. https://github.com/login


# Running locally and Setup
1. Clone this repository

2. type git clone "https://github.com/Ovy95/MFV.git" in the terminal

3. cd into 'MFV' (Change directory's)

4. Install node.js and run npm install in command line to install dependencies

# How To Run (Locally)

1. Open up a terminal in your text editor and type "npm start".

2. This should then automatically open the app on your browser, however if it doesn't just open up any browser of your choosing and type in the url "http://localhost:3000/".

3. Once loaded, type in an arbitrary Github user in the input box and click submit when you're ready.

