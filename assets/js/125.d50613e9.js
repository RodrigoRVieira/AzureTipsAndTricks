(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{431:function(t,e,a){"use strict";a.r(e);var s=a(43),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h4",{attrs:{id:"my-scenario-tracking-run-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#my-scenario-tracking-run-data","aria-hidden":"true"}},[t._v("#")]),t._v(" My Scenario - Tracking Run Data")]),t._v(" "),a("p",[t._v("I thought I'd use this week's Tip and Tricks series to show a practical example of how I am using Azure. I've started running outdoors and would like to extract several links that my app generates via email and send them to my OneDrive account automatically vs doing it manually after each run. I'm also concerned that the app that generates my data may be abandoned one day. In order to secure my data, I used a combination of "),a("a",{attrs:{href:"http://www.zapier.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zappier.com"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"http://www.azure.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure"),a("OutboundLink")],1),t._v(" to solve my problem and over the course of this week, we'll cover the following sections needed in order to implement this:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks37/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parse Emails to be used in a Azure Logic Apps"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks38/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create JSON Schema to be used in a Azure Logic Apps"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks39/",target:"_blank",rel:"noopener noreferrer"}},[t._v("This post - Setup an HTTP Request Trigger that is used in an Azure Logic Apps"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks40/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Upload Files from a URL with Azure Logic Apps"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"setup-an-http-request-trigger-that-is-used-in-an-azure-logic-apps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-an-http-request-trigger-that-is-used-in-an-azure-logic-apps","aria-hidden":"true"}},[t._v("#")]),t._v(" Setup an HTTP Request Trigger that is used in an Azure Logic Apps")]),t._v(" "),a("p",[t._v("In the "),a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks38/",target:"_blank",rel:"noopener noreferrer"}},[t._v("last post"),a("OutboundLink")],1),t._v(", we used Zappier to setup a web hook that calls a POST method that provides the filename, csv, gpx and kml url that it parsed from our email.")]),t._v(" "),a("p",[t._v("We'll pick up by creating a new Azure Logic App. Go to the Azure Portal and create a new Logic App.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/logicappblog1.png")}}),t._v(" "),a("p",[t._v("After the resource is ready, we're are going to need to trigger an action when an HTTP request comes in. Thankfully, this is one of the "),a("strong",[t._v("Common Triggers")]),t._v(" and we can select it to begin.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/logicappblog2.png")}}),t._v(" "),a("p",[t._v("Note that the URL isn't generated until we provide the parameters.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/logicappblog3.png")}}),t._v(" "),a("p",[t._v("Go ahead and press "),a("strong",[t._v("Edit")]),t._v(" and remember the JSON Schema from the "),a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks38/",target:"_blank",rel:"noopener noreferrer"}},[t._v("last post"),a("OutboundLink")],1),t._v("? Well, now is the time to paste it in. I'll also include it below:")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"$schema"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://json-schema.org/draft-06/schema#"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"definitions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://example.com/example.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"properties"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"csv"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/properties/csv"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"filename"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/properties/filename"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gpx"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/properties/gpx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"kml"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/properties/kml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br")])]),a("p",[a("strong",[t._v("Note:")]),t._v(' You can use the "Use sample payload to generate schema" option, but I prefer the additional meta data that '),a("a",{attrs:{href:"https://jsonschema.net/#/editor",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON Schema"),a("OutboundLink")],1),t._v(" can provide.")]),t._v(" "),a("p",[t._v("You'll now have a GET URL that you can put in Zappier and replace the "),a("a",{attrs:{href:"https://requestb.in/",target:"_blank",rel:"noopener noreferrer"}},[t._v("requestb.in"),a("OutboundLink")],1),t._v(" that we stubbed out earlier.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/logicappblog4.png")}}),t._v(" "),a("p",[t._v("Head back over to "),a("a",{attrs:{href:"https://zapier.com/app/editor",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zappier Editor"),a("OutboundLink")],1),t._v(" and modify your Zap by editing the template and replacing the requestb.in URL with your live Azure Logic Apps ones.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/logicappblog5.png")}})])},[],!1,null,null,null);e.default=r.exports}}]);