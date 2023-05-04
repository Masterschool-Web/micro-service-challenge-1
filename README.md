# Micro Service Challenge 1

## Description

In this challenge we are going to create a new micro service.

This micro service should moderate new comments. That means, that when a new comment is created, it is not automatically showed.

Instead, the moderation micro service will check if there is the word "orange" in it.

If not, it will allow to publish the comment, if there is "orange", it should publish "This comment is not authorized". The comment it self should be saved.

So if the user wants to edit it, the user can see the entire comment.

## Setup

1. Fork this repository.
2. clone it to your local
3. run `npm run install_all` to install all micro-services
