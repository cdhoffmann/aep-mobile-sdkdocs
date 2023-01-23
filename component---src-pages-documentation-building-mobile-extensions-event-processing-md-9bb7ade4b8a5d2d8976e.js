"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3481],{30163:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return m}});var s,n=a(87462),i=a(63366),d=(a(15007),a(64983)),o=a(91515),l=["components"],r={},p=(s="InlineAlert",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),c={_frontmatter:r},h=o.Z;function m(e){var t=e.components,a=(0,i.Z)(e,l);return(0,d.mdx)(h,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"event-processing"},"Event processing"),(0,d.mdx)("p",null,"An event is composed of the following components:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"A name, which is used for debugging"),(0,d.mdx)("li",{parentName:"ul"},"An event type, which defines what kind of event this is and determines who is notified when this event occurs"),(0,d.mdx)("li",{parentName:"ul"},"An event source, which is where the event originated and is used to determine who is notified when this event occurs"),(0,d.mdx)("li",{parentName:"ul"},"Event data, which is the structured data that is associated with this particular event. This data is retrievable as a JSON blob"),(0,d.mdx)("li",{parentName:"ul"},"Versioning information, which is used to synchronize a group of events with the associated shared data, is not directly exposed to extensions. This information is implicitly used when getting shared states")),(0,d.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"Extensions use the ",(0,d.mdx)("inlineCode",{parentName:"p"},"ACPExtensionEvent")," (iOS) / ",(0,d.mdx)("inlineCode",{parentName:"p"},"Event")," (Android) class to create events and dispatch them to the Mobile SDK event hub to trigger the extension business logic or to retrieve data."),(0,d.mdx)("p",null,"The event type and event source that are associated with the received event can be in lower case because the Mobile SDK compares the type and the source as case insensitive values. When you check the event type and event source of the event, you should use the ignore case string comparison."),(0,d.mdx)("p",null,"The following list shows some examples of potential events:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"The Experience Platform SDK configuration changed"),(0,d.mdx)("li",{parentName:"ul"},"Data was requested by the application"),(0,d.mdx)("li",{parentName:"ul"},"Data was collected by the application"),(0,d.mdx)("li",{parentName:"ul"},"An action was requested by the application"),(0,d.mdx)("li",{parentName:"ul"},"Data was requested by an extension or internal module in response to another event")),(0,d.mdx)("p",null,"Events are closely tied to shared states, which also have versions. This is why events can be passed when requesting a shared state. This process ensures that the state that is retrieved matches the event that is associated with this state. This also means that events can be associated with each other, and as a result, these events share the same versioning information."),(0,d.mdx)("h2",{id:"event-hub"},"Event hub"),(0,d.mdx)("p",null,"The event hub is the core data structure to which the SDK extensions and other components are tied, and it maintains the following data:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"A list of registered extensions and internal modules"),(0,d.mdx)("li",{parentName:"ul"},"A list of registered event listeners"),(0,d.mdx)("li",{parentName:"ul"},"A shared state database")),(0,d.mdx)("p",null,"The event hub is responsible for receiving events that are dispatched by the application, by the extensions, and processing events and dispatching these events to registered listeners. The event hub is accessed from the application and from the extensions by using the ",(0,d.mdx)("inlineCode",{parentName:"p"},"MobileCore")," API that is exposed in the SDK. The application dispatches events indirectly, by calling API methods that cause events to be dispatched in the Experience Platform SDKs. The extensions and internal modules dispatch events directly by calling into the event hub."),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75.84905660377358%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/233c7d5ed8824136de88e50da8ff352d/dda86/dispatch-flow.webp 265w","/aep-mobile-sdkdocs/static/233c7d5ed8824136de88e50da8ff352d/010e6/dispatch-flow.webp 530w","/aep-mobile-sdkdocs/static/233c7d5ed8824136de88e50da8ff352d/668f0/dispatch-flow.webp 1060w","/aep-mobile-sdkdocs/static/233c7d5ed8824136de88e50da8ff352d/89d57/dispatch-flow.webp 1590w","/aep-mobile-sdkdocs/static/233c7d5ed8824136de88e50da8ff352d/4b981/dispatch-flow.webp 1716w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/233c7d5ed8824136de88e50da8ff352d/28773/dispatch-flow.png 265w","/aep-mobile-sdkdocs/static/233c7d5ed8824136de88e50da8ff352d/a0177/dispatch-flow.png 530w","/aep-mobile-sdkdocs/static/233c7d5ed8824136de88e50da8ff352d/ea60f/dispatch-flow.png 1060w","/aep-mobile-sdkdocs/static/233c7d5ed8824136de88e50da8ff352d/684d5/dispatch-flow.png 1590w","/aep-mobile-sdkdocs/static/233c7d5ed8824136de88e50da8ff352d/010a2/dispatch-flow.png 1716w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/233c7d5ed8824136de88e50da8ff352d/ea60f/dispatch-flow.png",alt:"dispatch flow",title:"dispatch flow",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,d.mdx)("h2",{id:"order-of-event-processing"},"Order of event processing"),(0,d.mdx)("p",null,"The lifecycle of an event is as follows:"),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},"The event is created and dispatched by the extension or application."),(0,d.mdx)("li",{parentName:"ol"},"The event is received by the event hub."),(0,d.mdx)("li",{parentName:"ol"},"The event is compared against the registered event listeners.  "),(0,d.mdx)("li",{parentName:"ol"},"In parallel, the event is passed to every listener that matches.")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-building-mobile-extensions-event-processing-md-9bb7ade4b8a5d2d8976e.js.map