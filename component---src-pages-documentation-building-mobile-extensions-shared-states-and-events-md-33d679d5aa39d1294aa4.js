"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4678],{81758:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return x}});var n=a(87462),s=a(63366),i=(a(15007),a(64983)),o=a(91515),d=a(43622),r=["components"],l={},m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",t)}},p=m("InlineAlert"),h=m("TabsBlock"),u={_frontmatter:l},c=o.Z;function x(e){var t=e.components,a=(0,s.Z)(e,r);return(0,i.mdx)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"shared-states-and-events"},"Shared states and events"),(0,i.mdx)("p",null,"A shared state is composed of the following:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"A name, which is the name of the extension or module that owns this shared state."),(0,i.mdx)("li",{parentName:"ul"},"An event, which is an event that contains data that an extension wants to expose to other extensions or modules.")),(0,i.mdx)(p,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Not every event results in an updated shared state. Shared states have to be specifically set, which causes events to be sent that the extensions and internal modules can listen for to be updated."),(0,i.mdx)("h2",{id:"using-a-shared-state"},"Using a shared state"),(0,i.mdx)("p",null,"Modules and extensions use events and shared states to communicate with each other. The events allow modules to be relatively decoupled, but shared states are necessary when you have a dependency on a module’s information."),(0,i.mdx)("p",null,"A module that receives an event for which it is listening, for example, when Adobe Analytics listens for configuration changes, may trigger asynchronous work in response to that event. Examples of asynchronous work include network requests, processing the event data received, or persisting some data on the disk. When the results of that work results in another event being dispatched, the second event that was dispatched is tied to the original event that started the cycle. This process allows downstream listeners to retrieve the same shared state with the same event data that caused the additional work to occur."),(0,i.mdx)(p,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"An event can be received under some circumstances when the shared state that it represents has not yet become available. In this case, calling ",(0,i.mdx)("inlineCode",{parentName:"p"},"getSharedEventState")," returns a null value, which indicates the pending status. In this case, you should ignore the state change event and continue listening."),(0,i.mdx)("p",null,"An illustration of the workflow can be seen below:"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1050px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.9811320754717%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/23f9325abe1eb512862bc19f880016a3/dda86/lifecycle.webp 265w","/aep-mobile-sdkdocs/static/23f9325abe1eb512862bc19f880016a3/010e6/lifecycle.webp 530w","/aep-mobile-sdkdocs/static/23f9325abe1eb512862bc19f880016a3/5e9fb/lifecycle.webp 1050w"],sizes:"(max-width: 1050px) 100vw, 1050px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/23f9325abe1eb512862bc19f880016a3/28773/lifecycle.png 265w","/aep-mobile-sdkdocs/static/23f9325abe1eb512862bc19f880016a3/a0177/lifecycle.png 530w","/aep-mobile-sdkdocs/static/23f9325abe1eb512862bc19f880016a3/dd14e/lifecycle.png 1050w"],sizes:"(max-width: 1050px) 100vw, 1050px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/23f9325abe1eb512862bc19f880016a3/dd14e/lifecycle.png",alt:"lifecycle",title:"lifecycle",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h2",{id:"clearing-a-shared-state"},"Clearing a shared state"),(0,i.mdx)("p",null,"Shared states persist for the life of the application context, which results in the following potential concerns:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Since data accumulates over time, you must manage the amount of data that you are saving. Currently, a rough guideline is that a maximum of 1000 shared state versions be saved, with each instance being a maximum of 10MB, and overall, a maximum of 1GB of memory consumed. These limits are evaluated over time and might change. To prevent poor app performance, if you exceed these limits, a violation may result in your extension being unregistered."),(0,i.mdx)("li",{parentName:"ul"},"If you are storing volatile or sensitive identifiers, you should ensure that the identifiers are cleaned up at certain stages, such as when you unregister yourself.    ")),(0,i.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"You cannot store a user’s personally identifiable information in the shared state."),(0,i.mdx)("p",null,"To manage identifiers, an API is available that clears the existing shared state for your extension without impacting other extensions. The following examples show you how to call this API in your ",(0,i.mdx)("inlineCode",{parentName:"p"},"onUnregister")," (iOS) / ",(0,i.mdx)("inlineCode",{parentName:"p"},"onUnregistered")," (Android) method."),(0,i.mdx)(h,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,i.mdx)("p",null,"Android"),(0,i.mdx)(d.default,{query:"platform=android&task=clear",mdxType:"Tabs"}),(0,i.mdx)("p",null,"iOS"),(0,i.mdx)(d.default,{query:"platform=ios&task=clear",mdxType:"Tabs"}),(0,i.mdx)("h2",{id:"monitoring-shared-states"},"Monitoring shared states"),(0,i.mdx)("p",null,"To monitor changes to a shared state, register an event listener by using ",(0,i.mdx)("inlineCode",{parentName:"p"},"registerListener")," API. You need to pass a ",(0,i.mdx)("inlineCode",{parentName:"p"},"com.adobe.eventType.hub")," event type and a ",(0,i.mdx)("inlineCode",{parentName:"p"},"com.adobe.eventSource.sharedState")," event source. This listener is now be called when the shared state changes for any extension. To check an extension’s or an internal module’s shared state, check the ",(0,i.mdx)("inlineCode",{parentName:"p"},"stateowner")," key in the event data."),(0,i.mdx)("p",null,"In the example below, you can find the listener that is being registered in the extension’s ",(0,i.mdx)("inlineCode",{parentName:"p"},"init")," method and the listener implementation where the shared state check is happening. The extension is checking for changes to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"com.adobe.module.configuration")," shared state."),(0,i.mdx)(h,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,i.mdx)("p",null,"Android"),(0,i.mdx)(d.default,{query:"platform=android&task=monitor",mdxType:"Tabs"}),(0,i.mdx)("p",null,"iOS"),(0,i.mdx)(d.default,{query:"platform=ios&task=monitor",mdxType:"Tabs"}),(0,i.mdx)("h2",{id:"requesting-a-shared-state"},"Requesting a shared state"),(0,i.mdx)("p",null,"Extensions request shared states by using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ACPExtensionApi")," (iOS) / ",(0,i.mdx)("inlineCode",{parentName:"p"},"ExtensionApi")," (Android) interface that is available in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ACPExtension")," (iOS) / ",(0,i.mdx)("inlineCode",{parentName:"p"},"Extension")," (Android) parent class. Extensions can request any of the publicly documented shared states, noting any prerequisites on timing. Generally, a shared state request occurs when an event listener and the event that was heard are passed when responding to an event listener callback. This ensures that the state that is returned is synchronized with other events in flight at the same time. When your extension dispatches its own events or updates, or its shared data in response to an event, this synchronization is becomes extremely important."),(0,i.mdx)("p",null,"The following example shows a typical scenario where shared state is requested. A previously registered event listener is called, and the implementation gets the latest configuration shared state by passing the current event as context."),(0,i.mdx)(h,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,i.mdx)("p",null,"Android"),(0,i.mdx)(d.default,{query:"platform=android&task=request",mdxType:"Tabs"}),(0,i.mdx)("p",null,"iOS"),(0,i.mdx)(d.default,{query:"platform=ios&task=request",mdxType:"Tabs"}),(0,i.mdx)("h3",{id:"public-shared-state-constants"},"Public shared state constants"),(0,i.mdx)("p",null,"An example of a shared state constant is ",(0,i.mdx)("inlineCode",{parentName:"p"},"com.adobe.module.configuration"),", which is available any time after start up."),(0,i.mdx)("h3",{id:"example-structure"},"Example structure"),(0,i.mdx)("p",null,"To see a sample configuration event data, please refer to the sample JSON file in the ",(0,i.mdx)("a",{parentName:"p",href:"../mobile-core/configuration/index.md#sample-configuration"},"Mobile Core extension configuration document"),"."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"com.adobe.module.identity")," is available after receiving a shared state update event where ",(0,i.mdx)("inlineCode",{parentName:"p"},'eventData["stateowner"]=com.adobe.module.identity'),"."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"com.adobe.module.target")," is available after receiving a shared state update event where ",(0,i.mdx)("inlineCode",{parentName:"p"},'eventData["stateowner"]=com.adobe.module.target'),"."),(0,i.mdx)("p",null,"A shared state can be ",(0,i.mdx)("inlineCode",{parentName:"p"},"nil")," at some point in time, which means that it is in a pending state. When this occurs, a new shared state update event is sent when the shared state is updated with valid information. An example of this would be when a network request is sent, and you are waiting for the server response. To notify other extensions that the operation is not complete, an extension sets a ",(0,i.mdx)("inlineCode",{parentName:"p"},"nil")," shared state and then updates the state when the server response is received."),(0,i.mdx)(p,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Do not request and rely on shared states that are not documented, because their implementation may change."),(0,i.mdx)("h2",{id:"requesting-a-shared-state-that-is-not-tied-to-an-event"},"Requesting a shared state that is not tied to an event"),(0,i.mdx)("p",null,"Extensions can skip passing the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ACPExtensionEvent")," (iOS) / ",(0,i.mdx)("inlineCode",{parentName:"p"},"Event")," (Android) parameter to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"getSharedEventState")," method. If no state is available, the SDK returns the latest available shared state or a null value."),(0,i.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"The caller must be careful to account for null values being passed back."),(0,i.mdx)(h,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,i.mdx)("p",null,"Android"),(0,i.mdx)(d.default,{query:"platform=android&task=request-not-tied",mdxType:"Tabs"}),(0,i.mdx)("p",null,"iOS"),(0,i.mdx)(d.default,{query:"platform=ios&task=request-not-tied",mdxType:"Tabs"}),(0,i.mdx)("h2",{id:"updating-the-shared-state"},"Updating the shared state"),(0,i.mdx)("p",null,"Extensions set a shared state by creating an event data that the extensions save by calling ",(0,i.mdx)("inlineCode",{parentName:"p"},"setSharedEventState")," from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ACPExtensionApi")," (iOS) / ",(0,i.mdx)("inlineCode",{parentName:"p"},"ExtensionApi")," (Android) interface. This interface is available through the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ACPExtension")," (iOS) / ",(0,i.mdx)("inlineCode",{parentName:"p"},"Extension")," (Android) parent class. Extensions can only set their own state, so the name that is used is the same as your extension (for example, ",(0,i.mdx)("inlineCode",{parentName:"p"},"com.exampleCompany.extension"),"). This name is also the name that other extensions need to use when requesting your shared state."),(0,i.mdx)(h,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,i.mdx)("p",null,"Android"),(0,i.mdx)(d.default,{query:"platform=android&task=update",mdxType:"Tabs"}),(0,i.mdx)("p",null,"iOS"),(0,i.mdx)(d.default,{query:"platform=ios&task=update",mdxType:"Tabs"}),(0,i.mdx)("h2",{id:"updating-a-shared-state-that-is-not-tied-to-an-event"},"Updating a shared state that is not tied to an event"),(0,i.mdx)("p",null,"Here, extensions can skip passing the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ACPExtensionEvent")," (iOS) / ",(0,i.mdx)("inlineCode",{parentName:"p"},"Event")," (Android) parameter to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"setSharedEventState")," method. The Adobe Experience Platform SDKs set the state to be the latest available state for this extension. This process ensures that new events see this state, but events that are in flight can access the older state if necessary."),(0,i.mdx)(h,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,i.mdx)("p",null,"Android"),(0,i.mdx)(d.default,{query:"platform=android&task=update-not-tied",mdxType:"Tabs"}),(0,i.mdx)("p",null,"iOS"),(0,i.mdx)(d.default,{query:"platform=ios&task=update-not-tied",mdxType:"Tabs"}))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-building-mobile-extensions-shared-states-and-events-md-33d679d5aa39d1294aa4.js.map