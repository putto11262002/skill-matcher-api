# Skill Matcher

___

## About Our Project

Our project is to develop an app that could assist members of the university to exchange skills and knowledge. The app
would match users based on their desired skills to learn and skills they possess. With this app, users could connect
with other users who possess the knowledge they seek to acquire, while also sharing their own skills with others.

## Stakeholders

- **User**: A university student or staff could sign up to use the application as a user. Within the application a user
  could be a learner and/or a tutor. It’s important to consider their needs as high priority when designing the user
  interface and features for the app.
    - **Learner**: a user that seeks to learn skills from other users tutors
    - **Tutor**: a user that offers to share their knowledge to other users.
- **University Staff**: They would be interested in using the application and providing input on security concerns and
  data privacy revolved around student information.
- **App administrator**: would be responsible for managing the app’s backend ensuring its smooth operation. They may
  handle tasks such as user management, maintenance, and troubleshooting.
- **Developers**: Would be responsible for building and maintaining the app. There may be a need for collaboration with
  other stakeholders to ensure the app meets their needs.

## Functional Requirements

- **Sign-up and log-in**: User shall be able to signup and login with username/email
- **Profile creation**: Users shall be able to create a profile with information about their skills, interests, and
  skills
  they hope to acquire.
- **Privacy settings**: Users shall be allowed to control what information is visible on their profile and who can
  contact
  them in their privacy or profile settings.
- **Search and filter options**: Learner shall be able to search/browse/filter tutors by skills, location etc..
- **Matching**: A User should be able to match with other users based on the skill they possess and the skill they want
  to
  acquire.
- **Skill verification**: Users shall be able to upload certificates, completing assessments, or indications related to
  their skills for verification purposes.
- **Messaging**: User shall be able to message each other when they are matched.
- **Contact details**: A user contact details shall only be visible to other matched users.
- **Unmatching**: Users should be able to unmatch with people they’ve matched with.
- **Match history**: Users should be able to view their match history and interact with those users.
- **Feedback system**: Allow users to rate and comment on their experiences/interactions with users they’ve
  matched with. It can help with improving the matching algorithm and ensure that users are matched with the most
  suitable partners.
- **Notification system**: The system shall send notification emails to users when they match with someone, receive a
  message, or if there’s a change to their profile.
- **Reporting system**: Allow users to report inappropriate behaviour or content. Also, we have to ensure that we have a
  plan in place to handle user reports and how we enforce community guidelines.
- **Scheduling meeting**:  Users shall be able to schedule sessions with their matches.

## Non-Functional Requirement

- **Availability**: The system should be available 90% of the time, apart from scheduled system maintenance and updates.
- **Performance**: The system should be handle high traffic of up to 25k+
  users ([21000+ students and up to 25,000+](https://www.otago.ac.nz/about/quickstats.html#6)). Initial page loading
  times should be roughly two seconds.
- **Scalability**: The system should be designed to automatically scale as the user base grows. The current university
  student and staff population is roughly at 25,000+. The application should be able to handle a large number of
  concurrent users without compromising performance.
- **Usability**: The design of the user interface to be intuitive enough for user to navigate around without any
  previous training. The user interface should be responsive - being able to adjust to support laptop, tablet and mobile
  screen.
- **Security**: User personal information should be encrypted at rest and in transit.

## User Stories

1. **Signup and Login**: As a user, I want to be able to easily create an account and sign in with my university email address or username so I can start teaching or learning a skill.
2. **Create Profile**: As a user, I want to be able to input my details and upload my profile image.
3. **Adding qualifications/skills**: As a tutor, I want to be able to add the skill/s and qualifications to my profile so that learners can find me based on my experience and expertise.
4. **Adding skills**: As a learner, I want to be able to add the skills that I want to learn on my profile so tutors can find me and also have an idea of my preferences, interests and needs.
5. **Matching**: As a tutor/leaner, I want to be able to match with a leaner/tutor who posses the skill I want to learn and desire to learn the skill that I possess. 
6. **Search skills**: As a learner, I want to be able to easily search for a tutor by the skills I want to learn so that I can find the best match for my needs efficiently.
7. **Viewing Profile**: As a learner, I want to be able to see detailed information about each tutor I'm matched with, including their qualifications, experience, and availability, so I can choose who's more suitable based on my needs.
8. **Matching history**: As a user, I want to be able to view a record of my past matches so I can keep track of my progress and plan future sessions more effectively.

## Feasibility Study

## High-level Class diagram

## Architecture Diagram
