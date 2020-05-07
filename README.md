Giphy-Party! 

Link to Project:
https://druserkes.github.io/Giphy-party/
(I don't think it works on github hosting)

**
What this project is about:

The purpose of this project was to get me working with API's for the first time.
I had to build an app that would 
1. Allow user to search for gifs based on their search input
2. Allow user to remove all gifs from the page. 

**
What I did: 

First I had to spend some time with the docs for the giphy api. 
Once I had an api key and an understanding of how to work with their API I got started on my project.  

I put together an html form with a text input field and 2 buttons: search and remove. 

Then I wrote an anonymous asynchronous function to handle the form submit. The function grabbed user input, used that and my 
api key to make a get request to the Giphy API for a gif search. I had it asynchronously await the response, then pass the
data off to a helper function. 

Since the data returned an array of different gifs, I had the helper function first create a random number between 0 and the
length of the array, then accessed the element in the data at that random index for the original image URL. 
The helper function then created container and the image elements, appended the image to the container, and the container 
to the DOM. 

Lastly, I had an event listener cause a click on the remove button to empty the gif container. 

I used jQuery, Bootstrap, and Axios for this project. 

** 
What I learned: 

I learned that in order to work with an API, I'd better be very familiar with their documentation (since I'll be constantly 
using them for reference). I also got more comfortable working with different frameworks all together. 

Sometimes I still get mixed up a bit with syntax for vanilla JS vs jQuery, so this was a valuable exercise. 

I'm also realizing how even the tiniest details in both syntax and logic can completely break a program.


**
Looking Forward: 

I'll be referencing docs for every API and framework I interact with before writing any code... also while writing code. 
I also plan to be much more intentional with my writing of code logic, so as to minimize frustration and the need for 
backtracking while I work. 
