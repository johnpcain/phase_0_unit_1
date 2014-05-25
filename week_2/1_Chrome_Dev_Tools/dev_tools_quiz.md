#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

<img src="http://i.imgur.com/X8IErWp.jpg?1" alt="">

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
    The elements and sources tabs supports realtime editing of HTML and CSS. The elements tab allows you to inspect and edit html and the associated stylesheets, but only saves the changes to the local browser. The sources tab allows you to make the same modifications but in addition allows you to make changes to the source files. 
  * Javascript Debugging
    PageSpeed, a google chrome extension, analyzes a web page to run several automated checks. It grades the website and makes prioritized recommendations for speeding up the webpage. 
  * Performance Optimization 
    The network tab shows a timeline of files uploaded for a given webpage. Its purpose is to identify any bottlenecks that might be causing the webpage to load more slowly than it should. Some of these bottlenecks might include removing unnecessary requests, timing requests logically (e.g. loading css before javascript), adding an async atrribute to a javascript link, or simply adjusting the file types or sizes to speed things up. 
    

* What's the quick key for your OS to spawn the Dev Tools inspector? Cmd - Option - I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!) 0b0f11
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the imgs directory in the `1_Chrome_Dev_Tools` directory.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

add explanation

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? the share tool bar
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.

  access the network tab --> reload the webpage --> click "images"--> sort by size --> preview file

  http://s7.addthis.com/static/btn/v2/lg-share-en.gif 
  size: 1.6 KB

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the easiest thing to change to optimize the website?  Optimizing images to reduce file size
How many kilobytes of data can be eliminated? 885KB
