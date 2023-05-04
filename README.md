# Micro Service Challenge 1

## Description

In this challenge, you will create a new microservice to moderate new comments. Instead of automatically showing new comments, the moderation microservice will check if the comment contains the word "orange". If it does, the microservice will reject the comment and return "This comment is not authorized" while still saving the comment. If the comment does not contain the word "orange", the microservice will approve the comment for publishing.

## Setup

1. Fork this repository.
1. Clone it to your local machine.
1. Run `npm run install_all` to install all the necessary microservices.
1. Run `npm run dev` to start all the microservices.
   Challenge

Your challenge is to build a microservice that is notified when a new comment is created and can approve or reject it. The approval or rejection should notify the query service, not the comment service. While waiting for approval or rejection, the comment's status should be "pending".

Here are some hints:

1. Receive an event from the event bus.
1. Check if the comment contains the word "orange".
1. If the comment contains "orange", update the query service with the status "rejected".
1. If the comment does not contain "orange", update the query service with the status "approved".

## Bonus Challenge 🌶

What happens if the query service breaks and a new post or comment is added? In this case, the new post or comment won't show because it was not saved to the query database. How can we solve this?

One solution is to create a database to hold all events and their creation time. We can also create a database for the query service to save all events or the last event received. When the query service starts up, it should look for the last event received and ask the event service for all events from that point forward. Then, the query service will be able to save all data from these events and be aligned with the other microservices.

Build this functionality by:

1. Saving all events in the event bus.
1. Saving the last event time in the query service.
1. On startup, asking for all events and updating the database
   according to all events not received when the service was down.
