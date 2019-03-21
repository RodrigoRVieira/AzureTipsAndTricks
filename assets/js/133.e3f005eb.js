(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{437:function(e,t,a){"use strict";a.r(t);var n=a(43),r=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h4",{attrs:{id:"containers-for-the-rest-of-us"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#containers-for-the-rest-of-us","aria-hidden":"true"}},[e._v("#")]),e._v(" Containers for the rest of us")]),e._v(" "),a("p",[e._v("For some reason, I find containers are confusing and my goal with my "),a("a",{attrs:{href:"https://michaelcrump.net/azure-tips-and-tricks-complete-list/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Tips and Tricks"),a("OutboundLink")],1),e._v(" is to try to make things easier. In this mini-series, I'll walk you through "),a("a",{attrs:{href:"https://www.docker.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),a("OutboundLink")],1),e._v(" and how I use it with Azure. Below is a list of post that you can expect for this week.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks45/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Tips and Tricks Part 45 - Getting Started with Docker and Azure"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks46/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Today - Azure Tips and Tricks Part 46 - Run an app inside a Container Image with Docker"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks47/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Tips and Tricks Part 47 - Creating a Container Image with Docker"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks47/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Tips and Tricks Part 48 - Pushing a Container Image to a Docker Repo"),a("OutboundLink")],1)])]),e._v(" "),a("h4",{attrs:{id:"create-an-app-to-run-inside-a-container-image-with-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-app-to-run-inside-a-container-image-with-docker","aria-hidden":"true"}},[e._v("#")]),e._v(" Create an app to run inside a Container Image with Docker")]),e._v(" "),a("p",[e._v("Let's continue where we "),a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks45/",target:"_blank",rel:"noopener noreferrer"}},[e._v("left off"),a("OutboundLink")],1),e._v(" in our last post, which showed how to get started using Docker. We're specifically looking at how I use Docker with Azure in these posts.")]),e._v(" "),a("p",[e._v("Begin by opening two tabs instances of either command prompt or terminal. In the right tab, enter the following command to see what docker images are available.")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Michaels-MacBook-Pro:~ mbcrump$ docker images\nREPOSITORY                   TAG                 IMAGE ID            CREATED             SIZE\nmicrosoft/aspnetcore-build   latest              c0c285a7a306        39 hours ago        1.85GB\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("Let's run the following command passing the "),a("code",[e._v("run")]),e._v(" parameter, an "),a("code",[e._v("interactive terminal")]),e._v(" and "),a("code",[e._v("naming")]),e._v(" our app and the "),a("code",[e._v("image id")]),e._v(" which the first couple of letters (found with the above command) is good enough.")]),e._v(" "),a("p",[e._v("After this command executes, I'll be inside my container.")]),e._v(" "),a("pre",[a("code",[e._v("docker run -it --name myapp c0\n")])]),e._v(" "),a("p",[e._v("I can validate this by running "),a("code",[e._v("dotnet --info")])]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("root@40bac5113803:/# dotnet --info\n.NET Command Line Tools (2.0.2)\n\nProduct Information:\n Version:            2.0.2\n Commit SHA-1 hash:  a04b4bf512\n\n...\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("I know this because I don't have dotnet core tools installed on my Mac. Very cool! You now have a running container that has the dotnet core tools with just a couple of commands.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/dockerazure6.png")}}),e._v(" "),a("p",[e._v("We could further validate this by running "),a("code",[e._v("uname -r")]),e._v(" or just "),a("code",[e._v("uname")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("root@40bac5113803:/# uname -r\n4.9.49-moby\nroot@40bac5113803:/# uname\nLinux\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("Let's go ahead and create an app. Run through the following commands to create a new "),a("code",[e._v("dotnet core console app")]),e._v(".")]),e._v(" "),a("p",[e._v("root@40bac5113803:~# "),a("code",[e._v("mkdir myapp")])]),e._v(" "),a("p",[e._v("root@40bac5113803:~# "),a("code",[e._v("cd myapp")])]),e._v(" "),a("p",[e._v("root@40bac5113803:~/myapp# "),a("code",[e._v("dotnet new console")])]),e._v(" "),a("p",[e._v("root@40bac5113803:~/myapp# "),a("code",[e._v("dotnet restore")])]),e._v(" "),a("p",[e._v("root@40bac5113803:~/myapp# "),a("code",[e._v("dotnet run")])]),e._v(" "),a("p",[e._v("Hello World!")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/dotnetazure7.png")}})])},[],!1,null,null,null);t.default=r.exports}}]);