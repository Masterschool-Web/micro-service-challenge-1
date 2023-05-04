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
4. run `npm run dev` to see all services running

## Challenge

Build a micro-service that is being notified when a new comment is created, and is able to approve or reject it.

The approval or rejection notifies the query service (and not the comment service.)

Hints (you can try first on your own)

1.  Receive event from event bus
1.  Check if comment contains the word 'orange'
1.  If it does, update the the query service with the status of `rejected`
1.  If it doesn't, update the the query service with the status of `approved`

In the meantime, until the message is either approved or rejected, its status should be `pending`.

## Bonus Challenge 🌶

What happens if the query service breaks and a new post or comment are being added?

In that case,
