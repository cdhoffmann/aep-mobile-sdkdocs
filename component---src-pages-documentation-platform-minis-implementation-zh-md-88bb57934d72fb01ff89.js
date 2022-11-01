"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7509],{55570:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return p},default:function(){return u}});var t,d=n(87462),l=n(63366),m=(n(15007),n(64983)),r=n(91515),i=["components"],p={},o=(t="InlineAlert",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),x={_frontmatter:p},s=r.Z;function u(e){var a=e.components,n=(0,l.Z)(e,i);return(0,m.mdx)(s,(0,d.Z)({},x,n,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"implementation---中文简体"},"Implementation - 中文–简体"),(0,m.mdx)("p",null,"本文旨在介绍如何在微信小程序中使用Adobe Experience Platform SDK."),(0,m.mdx)("h2",{id:"添加小程序sdk到项目中"},"添加小程序SDK到项目中"),(0,m.mdx)("p",null,"小程序SDK可以从如下地址进行下载：",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/adobe/wechat/tree/master/dist"},"https://github.com/adobe/wechat/tree/master/dist")),(0,m.mdx)("p",null,"小程序SDK下载到本地之后，可以将该SDK添加到项目路径下。然后在小程序项目的",(0,m.mdx)("inlineCode",{parentName:"p"},"app.js"),"文件中，引用下载到本地的SDK。例如："),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre"},"const AdobeSDK = require('AdobeSDK.js');\n")),(0,m.mdx)("h2",{id:"初始化sdk"},"初始化SDK"),(0,m.mdx)("p",null,"在",(0,m.mdx)("inlineCode",{parentName:"p"},"app.js"),"文件中的",(0,m.mdx)("inlineCode",{parentName:"p"},"onLaunch"),"方法中，调用",(0,m.mdx)("inlineCode",{parentName:"p"},"AdobeSDK.init()"),"，并且注意配置上正确的参数值，例如："),(0,m.mdx)(o,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"请联系贵公司的Adobe Analytics管理员或者Adobe咨询顾问来确定这些配置参数。"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre"},'// App({\n//   onLaunch: function () {\n//     // 展示本地存储能力\n//     var logs = wx.getStorageSync(\'logs\') || []\n//     logs.unshift(Date.now())\n//     wx.setStorageSync(\'logs\', logs)\n    AdobeSDK.init({\n       "analytics.server": "example.sc.adobedc.cn",      //必填\n       "analytics.rsids": "example.reportsuite",    //必填\n       "app.id": "adobe-demo",                        //必填 \n       "app.version": "0.0.0.1",           //选填, default value = \'\'\n      "analytics.offlineEnabled": true,   //选填, default value = false\n       "session.timeout": 30               //选填, default value = 30\n     });\n// })   \n')),(0,m.mdx)(o,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"如果在上述配置中将",(0,m.mdx)("inlineCode",{parentName:"p"},"analytics.offlineEnabled"),"配置为",(0,m.mdx)("inlineCode",{parentName:"p"},"True"),"，那么向Analytics发出的请求中会包含",(0,m.mdx)("inlineCode",{parentName:"p"},"timestamps(ts)"),".",(0,m.mdx)("br",null),(0,m.mdx)("inlineCode",{parentName:"p"},"session.timeout"),"这个配置的单位是秒，指的是从",(0,m.mdx)("inlineCode",{parentName:"p"},"App"),"初始化完成开始，到一个新的",(0,m.mdx)("inlineCode",{parentName:"p"},"session"),"之间所经过的时间。这个",(0,m.mdx)("inlineCode",{parentName:"p"},"timeout"),"时间在小程序进入后台，之后被重新激活进入前台运行的场景下同样适用。该配置的缺省值是",(0,m.mdx)("inlineCode",{parentName:"p"},"30"),"秒"),(0,m.mdx)(o,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"如果需要将数据发送给多个报表包，可以在相应配置中用逗号分割RSID。例如：",(0,m.mdx)("br",null),(0,m.mdx)("inlineCode",{parentName:"p"},'"analytics.rsids": "example.rsid1,example.rsid2"'),"。这个写法会把数据发送给",(0,m.mdx)("inlineCode",{parentName:"p"},"example.rsid1"),"和",(0,m.mdx)("inlineCode",{parentName:"p"},"example.rsid2"),"这两个报表包。"),(0,m.mdx)("p",null,"SDK初始化完成之后，会自动开始收集数据，并向Adobe Analytics发送生命周期指标。请在 ",(0,m.mdx)("a",{parentName:"p",href:"#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E6%8C%87%E6%A0%87"},"生命周期指标"),"查看完整的生命周期指标。"),(0,m.mdx)("h2",{id:"启用调试日志功能"},"启用调试日志功能"),(0,m.mdx)("h3",{id:"adobesdksetdebugloggingenabledflag"},"AdobeSDK.setDebugLoggingEnabled(flag)"),(0,m.mdx)("p",null,"用如下代码可以启用调试日志功能"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre"},"AdobeSDK.setDebugLoggingEnabled(true)\n")),(0,m.mdx)("h3",{id:"adobesdksetdebugmodeenabledflag"},"AdobeSDK.setDebugModeEnabled(flag)"),(0,m.mdx)("p",null,"确实设置下，本SDK会隐藏异常错误信息。在调试模式下，会将异常错误信息打印在控制台中。用如下代码可以打开调试模式："),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre"},"AdobeSDK.setDebugModeEnabled(true)\n")),(0,m.mdx)("h2",{id:"追踪用户行为"},"追踪用户行为"),(0,m.mdx)("p",null,"下面介绍在小程序中用来追踪和监测用户行为的API。"),(0,m.mdx)("h3",{id:"adobesdktrackactionactionname-contextdata"},"AdobeSDK.trackAction(actionName, contextData)"),(0,m.mdx)("p",null,"可以使用这个API来追踪和监测用户行为。每一次用户行为会触发事件，进而增加一个或多个相应指标的值。例如，可以用这个API来追踪用户订阅，用户浏览了一篇文章，或者用户升级到新级别。"),(0,m.mdx)(o,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"发送给Analytics的trackAction请求会被当做一个事件(event)来处理，这个请求不会增加page view。在发送给Analytics中，会用action这个变量来传送值。"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre"},'AdobeSDK.trackAction("action", { "example.key": "value" });\n')),(0,m.mdx)("h3",{id:"adobesdktrackstatestatename-contextdata"},"AdobeSDK.trackState(stateName, contextData)"),(0,m.mdx)(o,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"Analytics会把",(0,m.mdx)("inlineCode",{parentName:"p"},"trackState"),"请求当做Page View来处理。",(0,m.mdx)("inlineCode",{parentName:"p"},"stateName"),"参数的值会作为Page Name。在发送给Analytics中，会用page name变量来传送值。"),(0,m.mdx)(o,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"可以在小程序的onShow方法中调用该API来追踪用户在不同页面间切换的行为。"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre"},'AdobeSDK.trackState("state", { "example.key": "value" });\n')),(0,m.mdx)("h2",{id:"生命周期指标"},"生命周期指标"),(0,m.mdx)("p",null,"在SDK初始化完成之后，生命周期指标会被自动发送给Analytics。下表是收集以及发送给Analytics的生命周期指标的完整列表："),(0,m.mdx)("h3",{id:"小程序安装"},"小程序安装"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"指标名称"),(0,m.mdx)("th",{parentName:"tr",align:null},"标识符"),(0,m.mdx)("th",{parentName:"tr",align:null},"描述"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"首次打开",(0,m.mdx)("br",null),"(First Launches)"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"a.InstallEvent")),(0,m.mdx)("td",{parentName:"tr",align:null},"首次加载并打开小程序，或者小程序被卸载后重新加载打开小程序时触发。")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"安装日期",(0,m.mdx)("br",null),"(Install Date)"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"a.InstallDate")),(0,m.mdx)("td",{parentName:"tr",align:null},"首次打开小程序的日期")))),(0,m.mdx)("h3",{id:"小程序升级"},"小程序升级"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"指标名称"),(0,m.mdx)("th",{parentName:"tr",align:null},"标识符"),(0,m.mdx)("th",{parentName:"tr",align:null},"描述"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"升级",(0,m.mdx)("br",null),"(Upgrades)"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"a.UpgradeEvent")),(0,m.mdx)("td",{parentName:"tr",align:null},"小程序版本号改变后，用户首次运行小程序时触发")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"距上次升级天数",(0,m.mdx)("br",null),"(Days since last upgrade)"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"a.DaysSinceLastUpgrade")),(0,m.mdx)("td",{parentName:"tr",align:null},"距上次小程序版本号变更后经过的天数")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"自上次升级后打开次数",(0,m.mdx)("br",null),"(Launches since last upgrade)"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"a.LaunchesSinceUpgrade")),(0,m.mdx)("td",{parentName:"tr",align:null},"自上次小程序版本变更后，打开次数。(注：小程序App的",(0,m.mdx)("inlineCode",{parentName:"td"},"onLaunch"),"函数调用次数）")))),(0,m.mdx)("h3",{id:"小程序打开"},"小程序打开"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"指标名称"),(0,m.mdx)("th",{parentName:"tr",align:null},"标识符"),(0,m.mdx)("th",{parentName:"tr",align:null},"描述"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"日用户数",(0,m.mdx)("br",null),"(Daily Engaged Users)"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"a.DailyEngUserEvent")),(0,m.mdx)("td",{parentName:"tr",align:null},"当用户在当日有使用小程序时触发。重要：Analytics不会自动存储该指标。如果需要使用该指标，必须用处理规则来配置自定义事件，才能记录该指标。")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"月用户数(Monthly Engaged Users)"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"a.MonthlyEngUserEvent")),(0,m.mdx)("td",{parentName:"tr",align:null},"当用户在当月有使用小程序时触发。重要：Analytics不会自动存储该指标。如果需要使用该指标，必须用处理规则来配置自定义事件，才能记录该指标。")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"打开次数(Launches)"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"a.LaunchEvent")),(0,m.mdx)("td",{parentName:"tr",align:null},"每次打开小程序运行时触发，包括小程序崩溃后重启及小程序首次打开运行。另外，在小程序被从后台唤醒到前台，且距本次打开时间超过了设置的session timeout时间时，该时间会被触发。")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"上次访问时长(Previous Session Length)"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"a.PrevSessionLength")),(0,m.mdx)("td",{parentName:"tr",align:null},"上次小程序打开，且在前台运行的总时长。以秒为单位。")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"打开次数(Launch Number)"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"a.Launches")),(0,m.mdx)("td",{parentName:"tr",align:null},"小程序打开，或者从后台被唤醒至前台的次数。")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"距首次打开天数(Days since first use)"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"a.DaysSinceFirstUse")),(0,m.mdx)("td",{parentName:"tr",align:null},"距第一次运行该小程序的天数。")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"距上次打开天数(Days since last use)"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"a.DaysSinceLastUse")),(0,m.mdx)("td",{parentName:"tr",align:null},"距上一次运行该小程序的天数。")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"打开时点 (Hour of Day)"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"a.HourOfDay")),(0,m.mdx)("td",{parentName:"tr",align:null},"记录小程序打开时的整点值，以24小时形式计时。可用该指标来测算小程序的高峰使用时点。")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"打开日 (Day of Week)"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"a.DayOfWeek")),(0,m.mdx)("td",{parentName:"tr",align:null},"记录小程序在一周中的哪一天打开。")))),(0,m.mdx)("h3",{id:"device-information"},"Device information"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"指标名称"),(0,m.mdx)("th",{parentName:"tr",align:null},"标识符"),(0,m.mdx)("th",{parentName:"tr",align:null},"描述"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"AppID"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"a.AppID")),(0,m.mdx)("td",{parentName:"tr",align:null},"用于保存小程序名称及版本。格式为：",(0,m.mdx)("inlineCode",{parentName:"td"},"AppName BundleVersion (app version code)"),"。例如：",(0,m.mdx)("inlineCode",{parentName:"td"},"MyAppName 1.1(1)"),"。该值来自于SDK初始化设置中的",(0,m.mdx)("inlineCode",{parentName:"td"},"app.id"),"。")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"设备名称(Device Name)"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"a.DeviceName")),(0,m.mdx)("td",{parentName:"tr",align:null},"用于保存设备名称。例如：iphone 5")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"操作系统及版本(Operation system version)"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"a.OSVersion")),(0,m.mdx)("td",{parentName:"tr",align:null},"用于保存操作系统名称以及版本信息。")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"分辨率 (Resolution)"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"a.Resolution")),(0,m.mdx)("td",{parentName:"tr",align:null},"屏幕的分辨率，单位是像素。例如：456 x 320")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"运行模式 (Run mode)"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"a.RunMode")),(0,m.mdx)("td",{parentName:"tr",align:null},'运行模式。该值为"Application"。')))),(0,m.mdx)("h2",{id:"验证发送给analytics的请求"},"验证发送给Analytics的请求"),(0,m.mdx)("p",null,"以下为向Analytics发送请求的示例。"),(0,m.mdx)("h3",{id:"生命周期指标---小程序安装"},"生命周期指标 - 小程序安装"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre"},"ndh=1&c.&a.&OSVersion=iOS%2010.0.1&DeviceName=iPhone%207&Resolution=555x375&RunMode=Application&PlatformVersion=wechat-6.6.3&AppId=adobe-demo%20(0.0.0.2)&InstallEvent=InstallEvent&InstallDate=6%2F17%2F2019&LaunchEvent=LaunchEvent&PrevSessionLength=0&Launches=1&DaysSinceFirstUse=0&DaysSinceLastUse=0&MonthlyEngUserEvent=MonthlyEngUserEvent&DailyEngUserEvent=DailyEngUserEvent&HourOfDay=14&DayOfWeek=2&action=Lifecycle&TimeSinceLaunch=0&.a&.c&pe=lnk_o&pev2=ADBINTERNAL%3ALifecycle&pageName=adobe-demo%20(0.0.0.2)&aid=56025F971A9133B0-064362B2442D266E&ce=UTF-8&t=00%2F00%2F0000%2000%3A00%3A00%200%20360&ts=1560802302&cp=foreground\n")),(0,m.mdx)("h3",{id:"生命周期指标---小程序打开"},"生命周期指标 - 小程序打开"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre"},"ndh=1&c.&a.&OSVersion=iOS%2010.0.1&DeviceName=iPhone%207&Resolution=555x375&RunMode=Application&PlatformVersion=wechat-6.6.3&AppId=adobe-demo%20(0.0.0.1)&LaunchEvent=LaunchEvent&PrevSessionLength=8&Launches=4&DaysSinceFirstUse=0&DaysSinceLastUse=0&HourOfDay=11&DayOfWeek=2&action=Lifecycle&TimeSinceLaunch=0&.a&.c&pe=lnk_o&pev2=ADBINTERNAL%3ALifecycle&pageName=adobe-demo%20(0.0.0.1)&aid=5B2BF542EAE66678-0E94474822B39961&ce=UTF-8&t=00%2F00%2F0000%2000%3A00%3A00%200%20360&ts=1560792653&cp=foreground\n")),(0,m.mdx)("h3",{id:"生命周期指标---小程序升级"},"生命周期指标 - 小程序升级"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre"},"ndh=1&c.&a.&OSVersion=iOS%2010.0.1&DeviceName=iPhone%207&Resolution=555x375&RunMode=Application&PlatformVersion=wechat-6.6.3&AppId=adobe-demo%20(0.0.0.2)&UpgradeEvent=UpgradeEvent&DaysSinceLastUpgrade=0&LaunchesSinceUpgrade=1&LaunchEvent=LaunchEvent&PrevSessionLength=3&Launches=2&DaysSinceFirstUse=0&DaysSinceLastUse=0&HourOfDay=11&DayOfWeek=2&action=Lifecycle&TimeSinceLaunch=0&.a&.c&pe=lnk_o&pev2=ADBINTERNAL%3ALifecycle&pageName=adobe-demo%20(0.0.0.2)&aid=230EDCDE65A436D6-05BCD5A3D1105CA4&ce=UTF-8&t=00%2F00%2F0000%2000%3A00%3A00%200%20360&ts=1560792765&cp=foreground\n")),(0,m.mdx)("h3",{id:"trackaction"},"TrackAction"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre"},"ndh=1&c.&a.&OSVersion=Android%205.0&DeviceName=Nexus%206&Resolution=610x412&RunMode=Application&PlatformVersion=wechat-6.6.3&AppId=adobe-demo%20(0.0.0.2)&action=Start&.a&example.&key=value&.example&.c&pe=lnk_o&pev2=AMACTION%3AStart&pageName=adobe-demo%20(0.0.0.2)&aid=2E85DEB17FFF8000-52245FFFDDC6DB5D&ce=UTF-8&t=00%2F00%2F0000%2000%3A00%3A00%200%20360&ts=1561063668&cp=foreground\n")),(0,m.mdx)("h3",{id:"trackstate"},"TrackState"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre"},"ndh=1&c.&a.&OSVersion=Android%205.0&DeviceName=Nexus%206&Resolution=610x412&RunMode=Application&PlatformVersion=wechat-6.6.3&AppId=adobe-demo%20(0.0.0.2)&action=&TimeSinceLaunch=0&.a&.c&pageName=HomePage&aid=2E85DEB17FFF8000-52245FFFDDC6DB5D&ce=UTF-8&t=00%2F00%2F0000%2000%3A00%3A00%200%20360&ts=1561063668&cp=foreground\n")),(0,m.mdx)("h3",{id:"观看视频"},"观看视频"),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"https://video.tv.adobe.com/v/28355t1/?quality=9"},"观看视频")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-platform-minis-implementation-zh-md-88bb57934d72fb01ff89.js.map