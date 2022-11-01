"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[713],{7631:function(e,t,i){i.r(t),i.d(t,{_frontmatter:function(){return p},default:function(){return c}});var a,n=i(87462),d=i(63366),o=(i(15007),i(64983)),l=i(91515),r=i(30102),m=["components"],p={},s=(a="TabsBlock",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),x={_frontmatter:p},u=l.Z;function c(e){var t=e.components,i=(0,d.Z)(e,m);return(0,o.mdx)(u,(0,n.Z)({},x,i,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"migrating-to-aepanalytics"},"Migrating to AEPAnalytics"),(0,o.mdx)("p",null,"This document is a reference comparison of AEPAnalytics (3.x) APIs against their equivalent ACPAnalytics (2.x) APIs."),(0,o.mdx)("p",null,"The AEPAnalytics extension is implemented purely in Swift and is compatible with the AEPCore Swift SDK. To ensure a smooth transition from the ACPAnalytics SDK, there are no major changes on the API names or definition. For more details, follow the migration guide below for your Swift or Objective-C mobile application. If explanation beyond showing API differences is necessary, it will be captured as an info hint within that API's section."),(0,o.mdx)("h2",{id:"aepanalytics-classes"},"AEPAnalytics classes"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,o.mdx)("th",{parentName:"tr",align:"left"},"AEP 3.x (Swift)"),(0,o.mdx)("th",{parentName:"tr",align:"left"},"AEP 3.x (Objective-C)"),(0,o.mdx)("th",{parentName:"tr",align:"left"},"ACP 2.x (Objective-C)"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},"Primary Class"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"Analytics"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"AEPMobileAnalytics"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"ACPAnalytics")))),(0,o.mdx)("h2",{id:"aepanalytics-apis"},"AEPAnalytics APIs"),(0,o.mdx)("h3",{id:"clearqueue"},"clearQueue"),(0,o.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"3",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"AEP 3.x (Swift)"),(0,o.mdx)(r.default,{query:"platform=aep-swift&api=clear-queue",mdxType:"Tabs"}),(0,o.mdx)("p",null,"AEP 3.x (Objective-C)"),(0,o.mdx)(r.default,{query:"platform=aep-objc&api=clear-queue",mdxType:"Tabs"}),(0,o.mdx)("p",null,"ACP 2.x (Objective-C)"),(0,o.mdx)(r.default,{query:"platform=acp-objc&api=clear-queue",mdxType:"Tabs"}),(0,o.mdx)("h3",{id:"extensionversion"},"extensionVersion"),(0,o.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"3",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"AEP 3.x (Swift)"),(0,o.mdx)(r.default,{query:"platform=aep-swift&api=extension-version",mdxType:"Tabs"}),(0,o.mdx)("p",null,"AEP 3.x (Objective-C)"),(0,o.mdx)(r.default,{query:"platform=aep-objc&api=extension-version",mdxType:"Tabs"}),(0,o.mdx)("p",null,"ACP 2.x (Objective-C)"),(0,o.mdx)(r.default,{query:"platform=acp-objc&api=extension-version",mdxType:"Tabs"}),(0,o.mdx)("h3",{id:"getqueuesize"},"getQueueSize"),(0,o.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"3",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"AEP 3.x (Swift)"),(0,o.mdx)(r.default,{query:"platform=aep-swift&api=get-queue-size",mdxType:"Tabs"}),(0,o.mdx)("p",null,"AEP 3.x (Objective-C)"),(0,o.mdx)(r.default,{query:"platform=aep-objc&api=get-queue-size",mdxType:"Tabs"}),(0,o.mdx)("p",null,"ACP 2.x (Objective-C)"),(0,o.mdx)(r.default,{query:"platform=acp-objc&api=get-queue-size",mdxType:"Tabs"}),(0,o.mdx)("h3",{id:"gettrackingidentifier"},"getTrackingIdentifier"),(0,o.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"3",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"AEP 3.x (Swift)"),(0,o.mdx)(r.default,{query:"platform=aep-swift&api=get-tracking-identifier",mdxType:"Tabs"}),(0,o.mdx)("p",null,"AEP 3.x (Objective-C)"),(0,o.mdx)(r.default,{query:"platform=aep-objc&api=get-tracking-identifier",mdxType:"Tabs"}),(0,o.mdx)("p",null,"ACP 2.x (Objective-C)"),(0,o.mdx)(r.default,{query:"platform=acp-objc&api=get-tracking-identifier",mdxType:"Tabs"}),(0,o.mdx)("h3",{id:"getvisitoridentifier"},"getVisitorIdentifier"),(0,o.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"3",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"AEP 3.x (Swift)"),(0,o.mdx)(r.default,{query:"platform=aep-swift&api=get-visitor-identifier",mdxType:"Tabs"}),(0,o.mdx)("p",null,"AEP 3.x (Objective-C)"),(0,o.mdx)(r.default,{query:"platform=aep-objc&api=get-visitor-identifier",mdxType:"Tabs"}),(0,o.mdx)("p",null,"ACP 2.x (Objective-C)"),(0,o.mdx)(r.default,{query:"platform=acp-objc&api=get-visitor-identifier",mdxType:"Tabs"}),(0,o.mdx)("h3",{id:"sendqueuedhits"},"sendQueuedHits"),(0,o.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"3",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"AEP 3.x (Swift)"),(0,o.mdx)(r.default,{query:"platform=aep-swift&api=send-queued-hits",mdxType:"Tabs"}),(0,o.mdx)("p",null,"AEP 3.x (Objective-C)"),(0,o.mdx)(r.default,{query:"platform=aep-objc&api=send-queued-hits",mdxType:"Tabs"}),(0,o.mdx)("p",null,"ACP 2.x (Objective-C)"),(0,o.mdx)(r.default,{query:"platform=acp-objc&api=send-queued-hits",mdxType:"Tabs"}),(0,o.mdx)("h3",{id:"setvisitoridentifier"},"setVisitorIdentifier"),(0,o.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"3",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"AEP 3.x (Swift)"),(0,o.mdx)(r.default,{query:"platform=aep-swift&api=set-visitor-identifier",mdxType:"Tabs"}),(0,o.mdx)("p",null,"AEP 3.x (Objective-C)"),(0,o.mdx)(r.default,{query:"platform=aep-objc&api=set-visitor-identifier",mdxType:"Tabs"}),(0,o.mdx)("p",null,"ACP 2.x (Objective-C)"),(0,o.mdx)(r.default,{query:"platform=acp-objc&api=set-visitor-identifier",mdxType:"Tabs"}))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-adobe-analytics-migration-md-b34ecbe93bad0127da82.js.map