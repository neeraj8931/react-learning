1. What is Emmet?
Emmet is a web-developer’s toolkit that can greatly improve your HTML & CSS workflow.

2.Difference between a Library and Framework?
Frameworks and libraries are both code written by someone else that helps you perform some common tasks in a less verbose way.
A framework inverts the control of the program. It tells the developer what they need. A library doesn’t. The programmer calls the library where and when they need it.
The degree of freedom a library or framework gives the developer will dictate how “opinionated” it is.
Reference: https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/

3. What is cross origin?
The crossorigin attribute sets the mode of the request to an HTTP CORS Request.
Web pages often make requests to load resources on other servers. Here is where CORS comes in.
A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

Specifies the mode of the CORS request:
anonymous - A cross-origin request is performed. No credentials are sent
use-credentials - A cross-origin request is performed. Credentials are sent (e.g. a cookie, a certificate, a HTTP Basic authentication)
Reference : https://www.w3schools.com/tags/att_script_crossorigin.asp#:~:text=The%20crossorigin%20attribute%20sets%20the,or%20scripts)%20from%20another%20domain.

4. What is diference between React and ReactDOM?
When you work with React, it is more than likely that you will build your apps with JSX. The JSX is a tag-based JavaScript syntax like looks familiar with HTML. React element is the atomic and most basic unit that you need to master before JSX and before moving forward with React.

Note: In order to work with React in the browsers, we need to include 2 libraries: React and ReactDOM. React library is responsible for creating views and ReactDOM library is responsible to actually render UI in the browser.

Including Scripts: Following are the CDN links for React and ReactDOM:

React: https://cdnjs.com/libraries/react
ReactDOM: https://cdnjs.com/libraries/react-dom
Include these two libraries before your main JavaScript file. While learning How React works, we’ll build a small application using react and ReactDOM. For the sake of simplicity, It contains only 2 files index.html and main.js in the same folder. You should use the React development version to get error messages and warnings in the browser console.

5. What is async and defer?
Asynchronous: When we use the async attribute the script is downloaded asynchronously with the rest of the page without pausing the HTML parsing and the contents of the page are processed and displayed. Once the script is downloaded, the HTML parsing will be paused and the script’s execution will happen. Once the execution is done, HTML parsing will then resume. The page and other scripts don’t wait for async scripts and async scripts also don’t wait for them. It is great for independent scripts and externally located scripts.

Deferred: The defer attribute tells the browser not to interfere with the HTML parsing and only to execute the script file once the HTML document has been fully parsed. Whenever a script with this attribute is encountered, the downloading of the script starts asynchronously in the background and when the scripts get downloaded, it is executed only after the HTML parsing is finished.