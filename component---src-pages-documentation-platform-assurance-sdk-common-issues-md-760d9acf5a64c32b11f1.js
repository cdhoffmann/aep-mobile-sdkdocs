"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9314],{69995:function(e,a,o){o.r(a),o.d(a,{_frontmatter:function(){return p},default:function(){return g}});var n,i=o(87462),t=o(63366),s=(o(15007),o(64983)),r=o(91515),c=o(62406),d=["components"],p={},l=(n="TabsBlock",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),m={_frontmatter:p},u=r.Z;function g(e){var a=e.components,o=(0,t.Z)(e,d);return(0,s.mdx)(u,(0,i.Z)({},m,o,{components:a,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"resolving-common-issues"},"Resolving common issues"),(0,s.mdx)("h2",{id:"unable-to-open-app-with-qr-code-or-generated-link"},"Unable to open app with QR code or generated link"),(0,s.mdx)("p",null,"If scanning the QR code or opening the deep link in Adobe Experience Platform Assurance does not open your app, deep linking may not be correctly configured in your mobile application."),(0,s.mdx)("p",null,"Please follow OS developer documentation to learn more on setting up deep linking."),(0,s.mdx)(l,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,s.mdx)("p",null,"Android"),(0,s.mdx)(c.default,{query:"platform=android&task=unable-to-open-app",mdxType:"Tabs"}),(0,s.mdx)("p",null,"iOS"),(0,s.mdx)(c.default,{query:"platform=ios&task=unable-to-open-app",mdxType:"Tabs"}),(0,s.mdx)("h2",{id:"pin-screen-does-not-appear"},"PIN screen does not appear"),(0,s.mdx)("p",null,"When the generated link or QR code from Adobe Experience Platform Assurance is opened on device, it should launch your app and show a PIN screen to establish a Assurance session (as shown below). If this screen does not appear, ensure the following:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"906px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"179.99999999999997%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/45282f8b53606be4a83e14af8787e592/dda86/assurance-pin.webp 265w","/aep-mobile-sdkdocs/static/45282f8b53606be4a83e14af8787e592/010e6/assurance-pin.webp 530w","/aep-mobile-sdkdocs/static/45282f8b53606be4a83e14af8787e592/76c93/assurance-pin.webp 906w"],sizes:"(max-width: 906px) 100vw, 906px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/45282f8b53606be4a83e14af8787e592/28773/assurance-pin.png 265w","/aep-mobile-sdkdocs/static/45282f8b53606be4a83e14af8787e592/a0177/assurance-pin.png 530w","/aep-mobile-sdkdocs/static/45282f8b53606be4a83e14af8787e592/8cb5d/assurance-pin.png 906w"],sizes:"(max-width: 906px) 100vw, 906px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/45282f8b53606be4a83e14af8787e592/8cb5d/assurance-pin.png",alt:"Connection error",title:"Connection error",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("h3",{id:"register-assurance-sdk-extension-with-mobile-core"},"Register Assurance SDK extension with Mobile Core"),(0,s.mdx)(l,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,s.mdx)("p",null,"Android"),(0,s.mdx)(c.default,{query:"platform=android&task=register-assurance",mdxType:"Tabs"}),(0,s.mdx)("p",null,"iOS"),(0,s.mdx)(c.default,{query:"platform=ios&task=register-assurance",mdxType:"Tabs"}),(0,s.mdx)("h3",{id:"copy-link-or-open-qr-code-from-adobe-experience-platform-assurance"},"Copy link or open QR code from Adobe Experience Platform Assurance"),(0,s.mdx)("p",null,"The PIN screen may not show if the link or QR code is incorrect (or doesn't contain the query parameter ",(0,s.mdx)("inlineCode",{parentName:"p"},"adb_validation_sessionid"),"). You may detect this error by seeing console logs with the following strings:"),(0,s.mdx)(l,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,s.mdx)("p",null,"Android"),(0,s.mdx)(c.default,{query:"platform=android&task=copy-link",mdxType:"Tabs"}),(0,s.mdx)("p",null,"iOS"),(0,s.mdx)(c.default,{query:"platform=ios&task=copy-link",mdxType:"Tabs"}),(0,s.mdx)("p",null,"This issue may be resolved by scanning the right QR code or correctly copying the link generated in Assurance."),(0,s.mdx)("h2",{id:"connection-error"},"Connection error"),(0,s.mdx)("p",null,"After you enter the PIN, if you see the following Connection Error:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"187.54716981132074%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/fc18c3961c11fef7ff77a70761e29ed5/dda86/assurance-connection-error.webp 265w","/aep-mobile-sdkdocs/static/fc18c3961c11fef7ff77a70761e29ed5/010e6/assurance-connection-error.webp 530w","/aep-mobile-sdkdocs/static/fc18c3961c11fef7ff77a70761e29ed5/80c60/assurance-connection-error.webp 1000w"],sizes:"(max-width: 1000px) 100vw, 1000px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/fc18c3961c11fef7ff77a70761e29ed5/28773/assurance-connection-error.png 265w","/aep-mobile-sdkdocs/static/fc18c3961c11fef7ff77a70761e29ed5/a0177/assurance-connection-error.png 530w","/aep-mobile-sdkdocs/static/fc18c3961c11fef7ff77a70761e29ed5/1263b/assurance-connection-error.png 1000w"],sizes:"(max-width: 1000px) 100vw, 1000px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/fc18c3961c11fef7ff77a70761e29ed5/1263b/assurance-connection-error.png",alt:"Connection error",title:"Connection error",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"You may resolve it by double-checking the PIN is entered correctly from the session associated link or QR code:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"914px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"154.33962264150944%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/c32d5dde61cf58928c9a5122eaf333a7/dda86/assurance-pincode.webp 265w","/aep-mobile-sdkdocs/static/c32d5dde61cf58928c9a5122eaf333a7/010e6/assurance-pincode.webp 530w","/aep-mobile-sdkdocs/static/c32d5dde61cf58928c9a5122eaf333a7/366a2/assurance-pincode.webp 914w"],sizes:"(max-width: 914px) 100vw, 914px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/c32d5dde61cf58928c9a5122eaf333a7/28773/assurance-pincode.png 265w","/aep-mobile-sdkdocs/static/c32d5dde61cf58928c9a5122eaf333a7/a0177/assurance-pincode.png 530w","/aep-mobile-sdkdocs/static/c32d5dde61cf58928c9a5122eaf333a7/3fcec/assurance-pincode.png 914w"],sizes:"(max-width: 914px) 100vw, 914px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/c32d5dde61cf58928c9a5122eaf333a7/3fcec/assurance-pincode.png",alt:"assurance pincode",title:"assurance pincode",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"Or ensuring internet connectivity on the device/simulator."),(0,s.mdx)("h2",{id:"invalid-mobile-sdk-configuration"},"Invalid Mobile SDK configuration"),(0,s.mdx)("p",null,"If you see an Invalid Mobile SDK Configuration error (see screenshot below), verify the following:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"Mobile Core is ",(0,s.mdx)("a",{parentName:"li",href:"../mobile-core/configuration/api-reference.md"},"configured")),(0,s.mdx)("li",{parentName:"ol"},"Configuration in the Data Collection UI is ",(0,s.mdx)("a",{parentName:"li",href:"../getting-started/create-a-mobile-property.md#publish-the-configuration"},"published")),(0,s.mdx)("li",{parentName:"ol"},"Ensure the device/simulator has internet connectivity")),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"883px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"202.64150943396228%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/27c3b799023a535a4ee068c8e7a9c344/dda86/assurance-invalid-configuration-error.webp 265w","/aep-mobile-sdkdocs/static/27c3b799023a535a4ee068c8e7a9c344/010e6/assurance-invalid-configuration-error.webp 530w","/aep-mobile-sdkdocs/static/27c3b799023a535a4ee068c8e7a9c344/8c45b/assurance-invalid-configuration-error.webp 883w"],sizes:"(max-width: 883px) 100vw, 883px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/27c3b799023a535a4ee068c8e7a9c344/28773/assurance-invalid-configuration-error.png 265w","/aep-mobile-sdkdocs/static/27c3b799023a535a4ee068c8e7a9c344/a0177/assurance-invalid-configuration-error.png 530w","/aep-mobile-sdkdocs/static/27c3b799023a535a4ee068c8e7a9c344/31459/assurance-invalid-configuration-error.png 883w"],sizes:"(max-width: 883px) 100vw, 883px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/27c3b799023a535a4ee068c8e7a9c344/31459/assurance-invalid-configuration-error.png",alt:"Invalid Mobile SDK configuration",title:"Invalid Mobile SDK configuration",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("h4",{id:"sample-logs"},"Sample logs"),(0,s.mdx)(l,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,s.mdx)("p",null,"Android"),(0,s.mdx)(c.default,{query:"platform=android&task=invalid-configuration-sample-logs",mdxType:"Tabs"}),(0,s.mdx)("p",null,"iOS"),(0,s.mdx)(c.default,{query:"platform=ios&task=invalid-configuration-sample-logs",mdxType:"Tabs"}),(0,s.mdx)("h2",{id:"unauthorized-access"},"Unauthorized access"),(0,s.mdx)("p",null,"This error may happen when you have access to multiple organizations in your Adobe Experience Cloud interface. To resolve, ensure the organization which houses the mobile property is the same one as that where you are using Adobe Experience Platform Assurance."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"886px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"202.26415094339623%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/c55279f320033084f24e04b1dd9c1456/dda86/assurance-unauthorized-access-error.webp 265w","/aep-mobile-sdkdocs/static/c55279f320033084f24e04b1dd9c1456/010e6/assurance-unauthorized-access-error.webp 530w","/aep-mobile-sdkdocs/static/c55279f320033084f24e04b1dd9c1456/e4516/assurance-unauthorized-access-error.webp 886w"],sizes:"(max-width: 886px) 100vw, 886px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/c55279f320033084f24e04b1dd9c1456/28773/assurance-unauthorized-access-error.png 265w","/aep-mobile-sdkdocs/static/c55279f320033084f24e04b1dd9c1456/a0177/assurance-unauthorized-access-error.png 530w","/aep-mobile-sdkdocs/static/c55279f320033084f24e04b1dd9c1456/6f18b/assurance-unauthorized-access-error.png 886w"],sizes:"(max-width: 886px) 100vw, 886px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/c55279f320033084f24e04b1dd9c1456/6f18b/assurance-unauthorized-access-error.png",alt:"Unauthorized access",title:"Unauthorized access",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("h4",{id:"sample-logs-1"},"Sample logs"),(0,s.mdx)(l,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,s.mdx)("p",null,"Android"),(0,s.mdx)(c.default,{query:"platform=android&task=unauthorized-access-sample-logs",mdxType:"Tabs"}),(0,s.mdx)("p",null,"iOS"),(0,s.mdx)(c.default,{query:"platform=ios&task=unauthorized-access-sample-logs",mdxType:"Tabs"}),(0,s.mdx)("h2",{id:"timeout"},"Timeout"),(0,s.mdx)("p",null,"This SDK log message is not an error and is displayed during the routine course of SDK initialization. This message is expected if the app was not launched with an Adobe Experience Platform Assurance deep link. You may ignore this message if Assurance works as expected."),(0,s.mdx)("h4",{id:"sample-logs-2"},"Sample logs"),(0,s.mdx)(l,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,s.mdx)("p",null,"Android"),(0,s.mdx)(c.default,{query:"platform=android&task=timeout-sample-logs",mdxType:"Tabs"}),(0,s.mdx)("p",null,"iOS"),(0,s.mdx)(c.default,{query:"platform=ios&task=timeout-sample-logs",mdxType:"Tabs"}),(0,s.mdx)("h2",{id:"failed-to-show-fullscreen-takeover"},"Failed to show fullscreen takeover"),(0,s.mdx)("p",null,"This log message is not an error and will appear with routine usage on Android devices & simulators. You may ignore this log if Assurance works as expected."),(0,s.mdx)("h4",{id:"sample-log"},"Sample log"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-text"},"W/AdobeExperienceSDK: Assurance - Failed to show fullscreen takeover, could not get fullScreenTakeover object.\n")))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-platform-assurance-sdk-common-issues-md-760d9acf5a64c32b11f1.js.map