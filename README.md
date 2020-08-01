# SpaceX API

## Setup

Make sure that you have Yarn installed

`yarn` to install dependencies
`yarn start` to run the development server at localhost:3000
`yarn build` to create a build directory

## Overview

This application was created in about two hours using React, Bulma and Axios to access the SpaceX API.

The purpose of the app is to allow users to see all results for SpaceX's fleet of Dragons or Rockets, depending on user selection. Results are displayed in a grid with the option to see more details about a particular capsule through an individual show page for each.

Overall, I am quite happy with where I was abe to get within the given time constraints.

## Table of contents

* [Brief](#Brief)
* [Build](#Build)
* [Wins and challenges](#Wins-and-challenges)
* [Bugs and improvements](#Bugs-and-improvements)
* [Conclusion](#In-summary)

## Brief

* Create a JavaScript application that provides a brief overview of SpaceX's rockets and dragons.
* Build a React app with the functionality that meets the following requirements:
1. Fetch and render a list of rockets or dragons from SpaceX's API
2. Show extended information about a selected list item in a separate box, modal or page
* The task shouldn't take longer than 2-3 hours to complete
* Use the [SpaceX API](https://docs.spacexdata.com/?version=latest)

## Build

I started by determining the required components for the application to work:
* Fetch and render rockets and dragons
* Show details for item through separate page
* Ability to switch between rockets and dragons
* Grid representation of results

Next, I tested the endpoints that I would need: `/rockets` and `/dragons` along with the endpoints for fetching a single rocket or dragon. I used Insomnia to test and display the data, so I would know its content and how it would be structured.

As these were all GET requests, it was all quite straightforward, so I was able to move on to writing the components quite quickly.

Throughout my software engineering course, we built numerous apps that fetched and displayed data through index pages which linked to show pages for the individual items. I felt that it would be best to follow this approach in order to complete the task within the two to three hour time limit.

## Wins and challenges

### Win

I've also recently been working with React hooks, so thought I would continue to use those for this application. I really like hooks, as I feel that they create cleaner looking and readable code.

### Challenge

The time constraint was the biggest challenge. I tried to mitigate this by using Bulma, a CSS framework that is really handy when bootstrapping a UI. In the end, I was just short of creating the DragonShow component which would have shown the details for a selected dragon. Currently, when you click on a DragonCard, the URL will change to reflect the URL for what would have been that show page. This would have been very similar to how I implemented the RocketShow component.

## Bugs and improvements

### Bugs

I was unable to do any testing on this, so am unaware of any bugs beyond a quick look over.

### Improvements

There are a number of improvements I would make, given more time.
* Complete the DragonShow component
* Create a lib/api to handle all calls to the SpaceX API - there is quite a bit of repetition in those Axios calls.
* Improve layout - I was hoping to be able to create a PageWrapper/PageContainer component to help with margins on all of the pages, which feel rather uncomfortable at the moment

## In summary

This was certainly a challenge with the time limit. I kept myself to two hours and a bit (including writing this ReadMe).


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

