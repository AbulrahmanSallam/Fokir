import{CountUp as t}from"./countUp.min.js";export class Counter{constructor(t,e,s){this.targetVals=t,this.section=document.getElementById(e),this.counterElements=s.map(t=>document.getElementById(t)),this.initCounters()}initCounters(){this.counterElements.forEach((t,e)=>{this.startCounter(t,this.targetVals[e])})}startCounter(e,s){let n=new t(e,s,{duration:3,useEasing:!0,useGrouping:!1,enableScrollSpy:!0});n.start()}}