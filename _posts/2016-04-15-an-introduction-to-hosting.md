---
layout: post
title:  "An introduction to hosting"
date:   2016-04-15 09:00:00 -0700
categories: hosting
---

Hosting is the physical place where "content" (web sites, images, files, etc) lives at. Basically, this is just another person's computer. When you hear people talking about "the cloud", they're talking about hosting.

You can use your own computer to host content or you can purchase hosting from a company like GoDaddy. The computer providing the hosting is typically accessible by anyone with internet access.
## Examples of hosting
**Dropbox, OneDrive, and Google Drive** are examples of _**storage hosting**_. You setup an account, install their app, and can start storing your content (documents, music, photos, etc) on their servers.

**GoDaddy, HostGator, and DreamHost** are examples of _**website hosting**_. You purchase/setup an account and use software to upload your content (images, web pages, etc). Each website host is running a piece of software such as Apache, NGINX, or IIS which can be customized for your hosting needs (more about this later).

**Office 365, Gmail, and iCloud Mail** are examples of _**email hosting**_. You purchase and/or setup an account and either use a website to access the mail or configure your phone or an app on your computer, like Microsoft Outlook, to send and receive the mail. Your phone might download a copy of the emails, but the actual emails themselves are stored by the email host.

**Facebook and Twitter** are examples of _**content hosting**_. Everything you share or post is stored on their servers, including all the data you punch in (your friends list, your location, photos, etc).
## How do people interact with a hosting account?
Let's start off by talking about what happens when you load up a website on your phone or your computer. _Please keep in mind, this is a high level overview focusing on the most important parts._
### <a name="step1"></a>1) You load a bookmark or type a domain name into your browser

This happens in Safari, Chrome, Edge, Firefox, or whichever web browser you use. In the address bar at the top, you type in "google.com" or something similar.

### <a name="step2"></a>2) The browser uses DNS to convert the domain to an IP address

DNS stands for "**D**omain **N**ame **S**ervice". Its sole purpose is to take a domain name (ex: `google.com`) and convert that to an IP address (ex: `216.58.216.14`). While each website is exposed on the internet using an IP address, using a domain name is much easier for folks to remember (and sometimes required, if multiple web sites are using the same IP address). It's worth noting that if you own a domain, you can control what IP address that DNS will return to folks.

### <a name="step3"></a>3) The browser makes a request to the host
When you type a domain name and hit enter, your computer makes a connection to the IP address returned by DNS. This process is called making a request and the computer you are sending the request to is called the server or the host (ex: your hosting account). The browser's request to the hosting account is simply _"Hey, send me whatever I typed in the address bar"_.

The request itself is made up of a few parts:
**http://example.com/over/there?name=ferret**

| Example part | Part name | Notes |
|--------------|-----------|-------|
| example.com  | Domain name / Host name | Resolves to an IP address |
| /over/there  | Path | Which folder and/or file you want to access |
| name=ferret  | Query string (part after the ?) | Usually used by code that runs on the server |


### <a name="step4"></a>4) The host processes the request
This step depends on how your hosting is configured. Processing could be as simple as just loading a file (an image for example), or it could be executing code that you wrote. You can also configure security on your files, forcing someone to provide a username and password in order to reach the file.

In the example request above, the host would look for a folder "over" and then look either for a file or folder called "there". If it finds a folder, it will look for a default document (like index.html).

### <a name="step5"></a>5) The host returns a response back to your browser
The response includes:
A number (the response code; ex: 200, 301, etc)
The data (the image, the web page, etc)

Below are a few sample response codes. <a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes" target="_blank" rel="nofollow">You can view the full list here</a>.

| HTTP code | What this means (short) | What this means (more details) |
|-----------|-------------------------|--------------------------------|
| 200       | Everything is great     | If the response is HTML, the browser will process it and you'll be shown a web page |
| 301       | The response is a redirect | The browser will be told to go back to step 2 (but using the new domain name / host name / path) |
| 404       | Page was not found      | The host will either return a "not found page" or your browser will show its generic 404 page |

### <a name="step6"></a>6) Your browser processes the response
This is where you see the web page
![The website after the browser renders it](https://blog.clifton.io/wp-content/uploads/2016/04/website.png){:class="img-responsive"}

## Real world example
Let's see a real hosting account which uses a real domain and see what it looks like. Below is a screenshot of my GoDaddy hosting account which uses cPanel. Let's walk through each of the six steps in more detail.
![Hosting made easy at GoDaddy with cPanel](https://blog.clifton.io/wp-content/uploads/2016/04/godaddy-cpanel.png){:class="img-responsive"}



| Step | What happens | What this means |
|------|--------------|-----------------|
| [Step 1](#step1) | The domain name is in the top left of the screenshot:<br><img src="https://blog.clifton.io/wp-content/uploads/2016/04/domain.png" alt="domain" width="174" height="39" class="alignnone size-full wp-image-360" /> | This is what the user types in their browser (<a href="http://123tochina.info" target="_blank">go ahead and try it out</a>) |
| [Step 2](#step2) | The IP Address is also in the screenshot, below the domain name:<br><img src="https://blog.clifton.io/wp-content/uploads/2016/04/ip.png" alt="ip" width="108" height="35" class="alignnone size-full wp-image-361" /> | This is what DNS will convert the domain name into |
| [Step 3](#step3) | Your browser makes a request to the host (107.180.48.242)<br><img src="https://blog.clifton.io/wp-content/uploads/2016/04/waiting.png" alt="waiting" width="148" height="34" class="alignnone size-full wp-image-365" /> | This is your computer asking the host to send the web page |
| [Step 4](#step4) | The host is loading a file and/or executing code | The host's computer processes the request |
| [Step 5](#step5) | Your browser gets a response from the host:<br><img src="https://blog.clifton.io/wp-content/uploads/2016/04/response.png" alt="response" width="250" height="82" class="alignnone size-full wp-image-363" /> | The 200 response means everything went perfect!<br><br>You can view this yourself if you open the developer tools:<br><kbd class="kbd">F12</kbd> on Windows<br> or<br><kbd class="kbd">Cmd</kbd> + <kbd class="kbd">Opt</kbd> + <kbd class="kbd">I</kbd> on Mac/Linux<br>(then go to the network tab) |
| [Step 6](#step6) | Done! | The browser is now showing you my cat blog |


## Why pay for hosting?

### You need an IP address
In order for DNS to work, you need an IP address. If you have internet at your house, you do have an IP address. The problem is, home internet providers typically **won't guarantee that you'll have the same IP address... _unless you upgrade to their business plan_**. I use Cox Communications at home and they usually reset my IP address once a week; sometimes once a day. Each time the address changes, you are responsible for updating the IP address associated with your DNS record, otherwise folks can't get to your website.

### Fast internet access
Hosting companies usually have great connections to the internet, even for their cheaper accounts. Your content will likely be sent out much faster than if you hosted it out of your own house. You could also pick a server that is physically on another continent, like Europe, if that's where your target audience is.

### Easy to use
Many times, hosting providers will provide a control panel. cPanel is an example of a great and easy to use interface which makes it easy to add and configure domains that you own and you'll have tools which help organize your content. If you don't use a panel, you'll have to dig in and understand how to use software like Apache, nginx, or IIS. These pieces of software are well documented, but they aren't trivial to understand for someone who is just starting out.

### Someone else supports it
Unfortunately, computers require maintenance. The computer hosting your content will _eventually_:
- have a piece of hardware die (hard drive, RAM, fan, motherboard)
- run out of disk space
- have a network outage (network equipment failure, failure by your internet provider, etc)

When you have a paid hosting account, a 24/7 staff is monitoring the computers and network and will do their best job to fix problems that do come up, hopefully before an issue ever happens. Their staff is also available for phone support when an issue comes up and to help answer any questions. If you choose to host the content yourself, you are going to be responsible for all of that.

## Conclusion
My goal with this article was to help explain what hosting is to non-technical folks and in that regard, I hope this article has made sense. If you have any questions, comments, or critiques, please leave them below and I'll be sure to answer them :)