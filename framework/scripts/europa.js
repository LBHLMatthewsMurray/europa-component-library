!function(e){"use strict";function t(){console.error("This script needs to be rewritten without jQuery")}function r(){console.error("This script needs to be rewritten without jQuery")}function o(){console.error("This script needs to be rewritten without jQuery")}function l(){console.error("This script needs to be rewritten without jQuery")}function i(){console.error("This script needs to be rewritten without jQuery")}function n(){console.error("This script needs to be rewritten without jQuery")}function c(){var e=document.getElementsByClassName("ecl-table");[].forEach.call(e,function(e){for(var t=[],r="",o=0,l=[],i=e.querySelectorAll("tbody tr"),n=e.querySelectorAll("thead tr th"),c=e.querySelectorAll("thead tr")[0].querySelectorAll("th").length-1,s=e.querySelectorAll("tbody tr")[0].querySelectorAll("td").length,u=-1,a=0;a<n.length;a+=1)n[a].getAttribute("colspan")&&(u=a),t[a]=[],t[a]=n[a].textContent;if(-1!==u){r=t.splice(u,1),o=u,l=e.querySelectorAll("th[colspan]")[0].getAttribute("colspan");for(var h=0;h<l;h+=1)t.splice(o+h,0,t[c+h]),t.splice(c+1+h,1)}[].forEach.call(i,function(e){for(var o=0;o<s;o+=1)if(""===t[o]||" "===t[o]?e.querySelectorAll("td")[o].setAttribute("class","ecl-table__heading"):e.querySelectorAll("td")[o].setAttribute("data-th",t[o]),-1!==u){var i=e.querySelectorAll("td")[u];i.setAttribute("class","ecl-table__group-label"),i.setAttribute("data-th-group",r);for(var n=1;n<l;n+=1)e.querySelectorAll("td")[u+n].setAttribute("class","ecl-table__group_element")}})})}function s(){console.error("This script needs to be rewritten without jQuery")}function u(){console.error("This script needs to be rewritten without jQuery")}function a(){console.error("This script needs to be rewritten without jQuery")}document.querySelectorAll(".file__translations-control").forEach(function(e){return e.addEventListener("click",function(e){e.target.classList.toggle("is-collapsed")})}),e.breadcrumbs=t,e.contextualNav=r,e.datepicker=o,e.filters=l,e.fileUpload=i,e.inpageNav=n,e.eclTables=c,e.timeline=s,e.profileTopbars=u,e.navTabs=a}(this.Europa=this.Europa||{});
