# The Kat & KaPoodle 

## Description
Pet Care and adoption App
### Project Links
- [Back end repo](https://github.com/youngjerald239/Petcareapp-backend) 
- [Front end repo](https://github.com/youngjerald239/Petcareapp-frontend)
- [Live Project Link](https://pet-care2.netlify.app/)
### Wireframes and Architecture

- [Notion](https://www.notion.so/UNIT-4-PROJECT-Capstone-3cef03caa4d0491b83d03c81f177afa5)

### Time/Priority Matrix
| Component | Priority | Estimated Time | Time Invested | Actual Time |Completed|
| --- | :---: |  :---: | :---: | :---: |:---:|
| Git management | H | 8hrs | 10hrs | 8hrs| X | 
| Q&A and bug fixes | H | 8hrs | 10hrs | 8hrs | X |
| Connection | H | 1hr | 1hr | 1hr | X |
| Express  | H | 1hr | 1hrs | 1hr | X |
| Routes | H | 2hrs | 2hrs | 2hrs | X|
| Controllers | H | 3hrs | 1hrs | 1hr | X |
| Seed | H | 4hrs | 1hrs | 1hr | X |
| Deployment | H | 2hrs | 1hrs | 1hrs |X|
| Install and set up react router | H | 0.5hrs | 0.5hrs |0.5hrs |X|
| Switch, Links, Routes | H | 2hrs | 1hrs | 1hr | X |
| Header (Footer)| H | 2hrs | 2hrs | 2hrs | X |
| Pet Display List from Backend | H | 4hrs | 1hrs | 1hrs | X |
| CRUD options | H | 6hrs | 3hrs | 3hrs | X |
| Create Form | H | 5hrs | 3hrs | 3hrs | X |
| Connecting Form to backend | H | 2hrs| 2hrs | 2hrs | X |
| Presentation Outline | H | 4hrs | 1hrs | 0.5hr | X |
| Responsiveness | H | 5hrs | 1hr | 1hr | X | 
| Extra Styling | L | 2hrs | 4hrs |  4hrs | X |
| Total | H | 86.5hrs| 45.5hrs | 41hrs |X|

## MVP/Post-MVP
### MVP
- The app is deployed fully deployed (Front-end and the Back-end).
- CRUD Functionality
- repo has a README.md that adequately documents the project

### Post-MVP
- JWT Authentication
- Edit Pets
- My Pets page
- Profile page
- Adoption button

## Components - Descriptions

- App - contains routes to all components
- SignUp/Login - Splash page component that displays SignUp and Login buttons
- Footer/Nav - allows user to navigate between components

## Additional Libraries
- Materialize css

# Code Snippets

```
//Function for message widget

    useEffect(() => {
    addResponseMessage('Welcome to The Kat & KaPoodle chat section!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
     
  };
```  