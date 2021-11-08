This was a simple tutorial I followed at:

https://fauna.com/blog/how-to-build-microservices-with-node-js

But after playing around for a few days with it, I realized, it didn't work right! Also, Request, one of the principal package dependencies in the tutorial, is being deprecated. So, I decided to switch out for Axios. (I may branch this out to Got and/or another HTTP request handler package at some point.)

This was supposed to be a basic microservice API that I could launch into a local sandbox, after which I would develop a really simple single-page app as a front end, push them all into Docker containers, and launch them using Gitlab. So I can learn how to do all this!