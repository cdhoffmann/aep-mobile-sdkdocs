"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[125],{34972:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return s},default:function(){return r}});var t=a(87462),i=a(63366),d=(a(15007),a(64983)),m=a(91515),l=["components"],s={},p={_frontmatter:s},o=m.Z;function r(e){var n=e.components,a=(0,i.Z)(e,l);return(0,d.mdx)(o,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"handle-url-clicks-from-an-in-app-message"},"Handle URL clicks from an in-app message"),(0,d.mdx)("p",null,"When a link is clicked in an in-app message, the ",(0,d.mdx)("inlineCode",{parentName:"p"},"FullscreenMessageDelegate")," is responsible for handling behavior."),(0,d.mdx)("p",null,"If the scheme used in the link ",(0,d.mdx)("strong",{parentName:"p"},"is not")," ",(0,d.mdx)("inlineCode",{parentName:"p"},"adbinapp://"),", the link will open in the containing WKWebView (iOS) or WebView (Android) - this is default behavior."),(0,d.mdx)("p",null,"If the scheme used in the link ",(0,d.mdx)("strong",{parentName:"p"},"is")," ",(0,d.mdx)("inlineCode",{parentName:"p"},"adbinapp://"),", the following behavior may occur:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"The in-app message is dismissed"),(0,d.mdx)("li",{parentName:"ul"},"An interaction event is sent to Experience Edge"),(0,d.mdx)("li",{parentName:"ul"},"The default animation is overridden"),(0,d.mdx)("li",{parentName:"ul"},"The URL will be opened by the OS, potentially resulting in:",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"The link being opened by the device's default web browser"),(0,d.mdx)("li",{parentName:"ul"},"Opening of a deeplink")))),(0,d.mdx)("h2",{id:"dismiss-the-in-app-message"},"Dismiss the in-app message"),(0,d.mdx)("p",null,"In order for the SDK to remove the view containing an in-app message from the UI, the clicked link must have a host of ",(0,d.mdx)("inlineCode",{parentName:"p"},"dismiss"),"."),(0,d.mdx)("p",null,"The example below is a link that will dismiss the current in-app message:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre"},"adbinapp://dismiss\n")),(0,d.mdx)("h2",{id:"send-a-message-interaction-event-to-experience-edge"},"Send a message interaction event to Experience Edge"),(0,d.mdx)("p",null,"Adding a URL variable named ",(0,d.mdx)("inlineCode",{parentName:"p"},"interaction")," will cause the SDK to send an Experience Event to the Adobe Experience Edge."),(0,d.mdx)("p",null,"The example below will dismiss the current in-app message and send a ",(0,d.mdx)("inlineCode",{parentName:"p"},"decisioning.propositionInteract")," event to edge with an action of ",(0,d.mdx)("inlineCode",{parentName:"p"},"imageLiked"),":"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre"},"adbinapp://dismiss?interaction=imageLiked\n")),(0,d.mdx)("h2",{id:"override-the-default-dismiss-animation"},"Override the default dismiss animation"),(0,d.mdx)("p",null,"Adding a URL variable named ",(0,d.mdx)("inlineCode",{parentName:"p"},"animate")," will cause the SDK to override the dismiss animation for the message."),(0,d.mdx)("p",null,"The example below will dismiss the current in-app message, and override the animation so the message exits to the right side of the screen:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre"},"adbinapp://dismiss?animate=right\n")),(0,d.mdx)("p",null,"Below is a list of valid values for ",(0,d.mdx)("inlineCode",{parentName:"p"},"animate"),":"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Value"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"none"),(0,d.mdx)("td",{parentName:"tr",align:null},"Message is removed with no animation")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"left"),(0,d.mdx)("td",{parentName:"tr",align:null},"Message animates off the screen to the ",(0,d.mdx)("strong",{parentName:"td"},"left")," when dismissed")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"right"),(0,d.mdx)("td",{parentName:"tr",align:null},"Message animates off the screen to the ",(0,d.mdx)("strong",{parentName:"td"},"right")," when dismissed")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"top"),(0,d.mdx)("td",{parentName:"tr",align:null},"Message animates off the screen to the ",(0,d.mdx)("strong",{parentName:"td"},"top")," when dismissed")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"bottom"),(0,d.mdx)("td",{parentName:"tr",align:null},"Message animates off the screen to the ",(0,d.mdx)("strong",{parentName:"td"},"bottom")," when dismissed")))),(0,d.mdx)("p",null,"If the value for ",(0,d.mdx)("inlineCode",{parentName:"p"},"animate")," is empty, or if it doesn't match one of the above valid values, an animation of ",(0,d.mdx)("inlineCode",{parentName:"p"},"none")," will be used."),(0,d.mdx)("h2",{id:"open-a-link-from-the-url"},"Open a link from the URL"),(0,d.mdx)("p",null,"If the value for a URL variable named ",(0,d.mdx)("inlineCode",{parentName:"p"},"link")," contains a valid URL, the SDK will open the link using the OS-defined API."),(0,d.mdx)("h3",{id:"open-location-in-the-default-web-browser"},"Open location in the default web browser"),(0,d.mdx)("p",null,"If the provided URL does not contain a custom scheme, the URL will be loaded in the device's default web browser.  "),(0,d.mdx)("p",null,"The example below will dismiss the current in-app message, send a ",(0,d.mdx)("inlineCode",{parentName:"p"},"decisioning.propositionInteract")," event to edge with an action of ",(0,d.mdx)("inlineCode",{parentName:"p"},"adobe"),", and open the adobe.com website in the default web browser for the user's device:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre"},"adbinapp://dismiss?interaction=adobe&link=https://adobe.com\n")),(0,d.mdx)("h3",{id:"open-a-deeplink"},"Open a deeplink"),(0,d.mdx)("p",null,"If the provided URL contains a custom scheme, the app that handles the custom scheme will be launched."),(0,d.mdx)("p",null,"The example below will dismiss the current in-app message, then launch an app owned by the same developer which handles the scheme ",(0,d.mdx)("inlineCode",{parentName:"p"},"myAppScheme"),":"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre"},"adbinapp://dismiss?link=myAppScheme://deeplinked\n")))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-iam-tutorials-handle-clicks-md-42e1c182ee2622bc1b7f.js.map