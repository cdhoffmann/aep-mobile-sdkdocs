"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6356],{91074:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return c}});var a,d=t(87462),i=t(63366),o=(t(15007),t(64983)),s=t(91515),m=t(45605),r=["components"],l={},p=(a="TabsBlock",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),u={_frontmatter:l},x=s.Z;function c(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.mdx)(x,(0,d.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"class---message"},"Class - Message"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"Message")," class contains the definition of an in-app message and controls its tracking via Experience Edge events."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"Message")," objects are only created by the AEPMessaging extension, and passed as the ",(0,o.mdx)("inlineCode",{parentName:"p"},"message")," parameter in ",(0,o.mdx)("inlineCode",{parentName:"p"},"MessagingDelegate")," protocol methods."),(0,o.mdx)("h2",{id:"public-variables"},"Public variables"),(0,o.mdx)("h3",{id:"id"},"id"),(0,o.mdx)("p",null,"Identifier of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Message"),". This value matches the Message Execution ID assigned by Adobe Journey Optimizer (AJO) Campaign."),(0,o.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(m.default,{query:"platform=android&function=id",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(m.default,{query:"platform=ios&function=id",mdxType:"Tabs"}),(0,o.mdx)("h3",{id:"autotrack"},"autoTrack"),(0,o.mdx)("p",null,"If set to ",(0,o.mdx)("inlineCode",{parentName:"p"},"true")," (default), Experience Edge events will automatically be generated when this ",(0,o.mdx)("inlineCode",{parentName:"p"},"Message")," is triggered, displayed, and dismissed."),(0,o.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(m.default,{query:"platform=android&function=auto-track",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(m.default,{query:"platform=ios&function=auto-track",mdxType:"Tabs"}),(0,o.mdx)("h3",{id:"view"},"view"),(0,o.mdx)("p",null,"Holds a reference to the message's ",(0,o.mdx)("inlineCode",{parentName:"p"},"WKWebView")," (iOS) or ",(0,o.mdx)("inlineCode",{parentName:"p"},"WebView")," (Android) instance, if it exists."),(0,o.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(m.default,{query:"platform=android&function=view",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(m.default,{query:"platform=ios&function=view",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"public-functions"},"Public functions"),(0,o.mdx)("h3",{id:"show"},"show"),(0,o.mdx)("p",null,"Signals to the UIService (in ",(0,o.mdx)("inlineCode",{parentName:"p"},"AEPServices"),") that the message should be shown."),(0,o.mdx)("p",null,"If ",(0,o.mdx)("inlineCode",{parentName:"p"},"autoTrack")," is true, calling this method will result in an ",(0,o.mdx)("inlineCode",{parentName:"p"},"decisioning.propositionTrigger")," Edge Event being dispatched."),(0,o.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(m.default,{query:"platform=android&function=show",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(m.default,{query:"platform=ios&function=show",mdxType:"Tabs"}),(0,o.mdx)("h3",{id:"dismisssuppressautotrack"},"dismiss(suppressAutoTrack:)"),(0,o.mdx)("p",null,"Signals to the UIService that the message should be removed from the UI."),(0,o.mdx)("p",null,"If ",(0,o.mdx)("inlineCode",{parentName:"p"},"autoTrack")," is true, calling this method will result in an ",(0,o.mdx)("inlineCode",{parentName:"p"},"decisioning.propositionDismiss")," Edge Event being dispatched."),(0,o.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(m.default,{query:"platform=android&function=dismiss",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(m.default,{query:"platform=ios&function=dismiss",mdxType:"Tabs"}),(0,o.mdx)("h3",{id:"track_withedgeeventtype"},"track(_:withEdgeEventType:)"),(0,o.mdx)("p",null,"Generates and dispatches an Edge Event for the provided ",(0,o.mdx)("inlineCode",{parentName:"p"},"interaction")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"eventType"),"."),(0,o.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(m.default,{query:"platform=android&function=track",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(m.default,{query:"platform=ios&function=track",mdxType:"Tabs"}),(0,o.mdx)("h3",{id:"handlejavascriptmessage_withhandler"},"handleJavascriptMessage(_:withHandler:)"),(0,o.mdx)("p",null,"Adds a handler for named JavaScript messages sent from the message's ",(0,o.mdx)("inlineCode",{parentName:"p"},"WKWebView"),"."),(0,o.mdx)("p",null,"The parameter passed to ",(0,o.mdx)("inlineCode",{parentName:"p"},"handler")," will contain the body of the message passed from the ",(0,o.mdx)("inlineCode",{parentName:"p"},"WKWebView"),"'s JavaScript."),(0,o.mdx)("p",null,"For a full guide on how to use ",(0,o.mdx)("inlineCode",{parentName:"p"},"handleJavascriptMessage"),", read ",(0,o.mdx)("a",{parentName:"p",href:"./tutorials/native-from-javascript.md"},"Call native code from the Javascript of an in-app message"),"."),(0,o.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(m.default,{query:"platform=android&function=handle-javascript-message",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(m.default,{query:"platform=ios&function=handle-javascript-message",mdxType:"Tabs"}),(0,o.mdx)("h1",{id:"enum---messagingedgeeventtype"},"Enum - MessagingEdgeEventType"),(0,o.mdx)("p",null,"Provides mapping to XDM EventType strings needed for Experience Event requests."),(0,o.mdx)("p",null,"This enum is used in conjunction with the ",(0,o.mdx)("a",{parentName:"p",href:"#track_withedgeeventtype"},(0,o.mdx)("inlineCode",{parentName:"a"},"track(_:withEdgeEventType:)"))," method of a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Message")," object."),(0,o.mdx)("h3",{id:"definition"},"Definition"),(0,o.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(m.default,{query:"platform=android&function=enum",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(m.default,{query:"platform=ios&function=enum",mdxType:"Tabs"}),(0,o.mdx)("h3",{id:"string-values"},"String values"),(0,o.mdx)("p",null,"Below is the table of values returned by calling the ",(0,o.mdx)("inlineCode",{parentName:"p"},"toString")," method for each case, which are used as the XDM ",(0,o.mdx)("inlineCode",{parentName:"p"},"eventType")," in outgoing experience events:"),(0,o.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(m.default,{query:"platform=android&function=string-values",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(m.default,{query:"platform=ios&function=string-values",mdxType:"Tabs"}))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-iam-public-classes-md-3f576b79a03b671300fb.js.map