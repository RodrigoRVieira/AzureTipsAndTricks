(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{416:function(e,t,n){"use strict";n.r(t);var o=n(43),a=Object(o.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h4",{attrs:{id:"test-web-apps-in-production-with-azure-app-service"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#test-web-apps-in-production-with-azure-app-service","aria-hidden":"true"}},[e._v("#")]),e._v(" Test Web Apps in Production with Azure App Service")]),e._v(" "),n("p",[e._v("We've recently created a "),n("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks19/",target:"_blank",rel:"noopener noreferrer"}},[e._v("web app"),n("OutboundLink")],1),e._v(" and uploaded it to Azure App Service. We also took a look at "),n("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks20/",target:"_blank",rel:"noopener noreferrer"}},[e._v("multiple ways"),n("OutboundLink")],1),e._v(" to examine those files through the Azure portal interface and how we'd add "),n("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks21/",target:"_blank",rel:"noopener noreferrer"}},[e._v("extensions"),n("OutboundLink")],1),e._v(" to our web apps. In this post, we'll take a look at using deployment slots for web apps.")]),e._v(" "),n("h5",{attrs:{id:"creating-deployment-slot"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-deployment-slot","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating Deployment Slot")]),e._v(" "),n("p",[n("strong",[e._v("Hold Up. What's a Deployment Slot?")]),e._v(" Deployment slots let you deploy different versions of your web app to different URLs. You can test a certain version and then swap content and configuration between slots.")]),e._v(" "),n("p",[e._v("Go to the Azure Portal and select my App Service and click on "),n("strong",[e._v("Deployment Slots")]),e._v(" under "),n("strong",[e._v("Deployment")]),e._v(" to get started. Then click on the "),n("strong",[e._v("Add Slots")]),e._v(" button. Give it a name such as "),n("code",[e._v("staging")]),e._v(' then use an existing configuration source. We\'ll use our "production" web app. You know, the cool '),n("a",{attrs:{href:"http://myquizapplication.azurewebsites.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("quiz application"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/testinprodazure3.png")}}),e._v(" "),n("p",[e._v("Great, now if we go back to Deployment Slots, we should see it running.")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/testinprodazure4.png")}}),e._v(" "),n("p",[e._v("Click on the new staging site that we just created and you'll notice that it has appended the word "),n("code",[e._v("staging")]),e._v(" then you'll notice we have a "),n("a",{attrs:{href:"http://myquizapplication-staging.azurewebsites.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("new site"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("We need to push a new version of our existing quiz application to this staging slot. Go to "),n("code",[e._v("Deployment Options")]),e._v(" and select "),n("code",[e._v("External Repository")]),e._v(" and give it the following url "),n("code",[e._v("https://github.com/mbcrump/jsQuizEngine.git")]),e._v(" and hit OK. You might have to hit Sync, and you'll eventually see the following:")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/testinprodazure5.png")}}),e._v(" "),n("p",[e._v("Give it a couple of minutes until you see that it has completed pulling down your code from Git and then go to the new URL of your site. You can find the URL on your overview page. In my case it is, "),n("a",{attrs:{href:"http://myquizapplication-staging.azurewebsites.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/testinprodazure6.png")}}),e._v(" "),n("p",[e._v("Success! This is our new site as indicated by the awesome large font that says "),n("code",[e._v("jsQuizEngine version 2")]),e._v(".")]),e._v(" "),n("p",[e._v("We could now return to the original app service that we created and swap between the two sites that we have. For example, you might want to move the "),n("code",[e._v("staging")]),e._v(" site over to the "),n("code",[e._v("production")]),e._v(" site and vice versa. The power of this is that your users don't experience a downtime and you can continue working in your preferred space until ready to move to production.")])])},[],!1,null,null,null);t.default=a.exports}}]);