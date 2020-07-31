# space-walk-time
Hello ground control agents, do you have a whole bunch of astronauts in space, but just can't seem to keep all of their schedules straight? 
Well this application is for you. Schedule some time for your astronauts to get their space walk on.

## Requirements
[node.js](https://nodejs.org/en/download/)

## Here's how to get up and running
```sh
From root directory
npm start

```

## Things and such for TMP
### My next steps
* Make the default selection in the dropdown be the first item.
* Add an input for ground control to suggest a different time.
* Expand on the API to schedule multiple astronauts. ex: `/astronauts/:id/time_slots`
* Setup a database model to save time_slots for astronauts. Would be happy to expand more on how I would set that up. 
* Make it look way more fly. Maybe use bootstrap or something like that to add some styling to the selection.

### Summary of things I learned.
* I re-learned how to set up a simple single page app with react and node.js. It was time to dust off those skills. 

### Things I struggled with.
* I struggled a little bit with props and state in React within the 2 hour time frame. When I was approaching the end of the two hour window, I was in the process of setting the state of the selected time frame window to equal the first item of the list. Therefore, I needed to wait for the list to be returned from the backend. 

### Things I'm proud of.
* I'm proud that I was able to produce an MVP in the two hour window.
* Also proud of my sweet background image. :)

### Ways I might test my code, given more time.
* Given more time, I would use the following libraries to test my code.
  * [Chai](https://www.chaijs.com/) and [Mocha](https://mochajs.org/) for unit testing
  * [Supertest](https://github.com/visionmedia/supertest) or [chai-http](https://www.chaijs.com/plugins/chai-http/) for integration testing
  * [Jest](https://jestjs.io/) for testing in React


