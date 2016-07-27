!function(e){var a={init:function(t){var s=e.extend({items:1,itemsOnPage:1,pages:0,displayedPages:5,edges:2,currentPage:0,hrefTextPrefix:"#page-",hrefTextSuffix:"",prevText:"Prev",nextText:"Next",ellipseText:"&hellip;",ellipsePageSet:!0,cssStyle:"light-theme",listStyle:"",labelMap:[],selectOnClick:!0,nextAtFront:!1,invertPageOrder:!1,useStartEdge:!0,useEndEdge:!0,onPageClick:function(e,a){},onInit:function(){}},t||{}),n=this;return s.pages=s.pages?s.pages:Math.ceil(s.items/s.itemsOnPage)?Math.ceil(s.items/s.itemsOnPage):1,s.currentPage?s.currentPage=s.currentPage-1:s.currentPage=s.invertPageOrder?s.pages-1:0,s.halfDisplayed=s.displayedPages/2,this.each(function(){n.addClass(s.cssStyle+" simple-pagination").data("pagination",s),a._draw.call(n)}),s.onInit(),this},selectPage:function(e){return a._selectPage.call(this,e-1),this},prevPage:function(){var e=this.data("pagination");return e.invertPageOrder?e.currentPage<e.pages-1&&a._selectPage.call(this,e.currentPage+1):e.currentPage>0&&a._selectPage.call(this,e.currentPage-1),this},nextPage:function(){var e=this.data("pagination");return e.invertPageOrder?e.currentPage>0&&a._selectPage.call(this,e.currentPage-1):e.currentPage<e.pages-1&&a._selectPage.call(this,e.currentPage+1),this},getPagesCount:function(){return this.data("pagination").pages},setPagesCount:function(e){this.data("pagination").pages=e},getCurrentPage:function(){return this.data("pagination").currentPage+1},destroy:function(){return this.empty(),this},drawPage:function(e){var t=this.data("pagination");return t.currentPage=e-1,this.data("pagination",t),a._draw.call(this),this},redraw:function(){return a._draw.call(this),this},disable:function(){var e=this.data("pagination");return e.disabled=!0,this.data("pagination",e),a._draw.call(this),this},enable:function(){var e=this.data("pagination");return e.disabled=!1,this.data("pagination",e),a._draw.call(this),this},updateItems:function(e){var t=this.data("pagination");t.items=e,t.pages=a._getPages(t),this.data("pagination",t),a._draw.call(this)},updateItemsOnPage:function(e){var t=this.data("pagination");return t.itemsOnPage=e,t.pages=a._getPages(t),this.data("pagination",t),a._selectPage.call(this,0),this},getItemsOnPage:function(){return this.data("pagination").itemsOnPage},_draw:function(){var t,s,n=this.data("pagination"),i=a._getInterval(n);a.destroy.call(this),s="function"==typeof this.prop?this.prop("tagName"):this.attr("tagName");var l="UL"===s?this:e("<ul"+(n.listStyle?' class="'+n.listStyle+'"':"")+"></ul>").appendTo(this);if(n.prevText&&a._appendItem.call(this,n.invertPageOrder?n.currentPage+1:n.currentPage-1,{text:n.prevText,classes:"prev"}),n.nextText&&n.nextAtFront&&a._appendItem.call(this,n.invertPageOrder?n.currentPage-1:n.currentPage+1,{text:n.nextText,classes:"next"}),n.invertPageOrder){if(i.end<n.pages&&n.edges>0){if(n.useStartEdge){var r=Math.max(n.pages-n.edges,i.end);for(t=n.pages-1;t>=r;t--)a._appendItem.call(this,t)}n.pages-n.edges>i.end&&n.pages-n.edges-i.end!=1?l.append('<li class="disabled"><span class="ellipse">'+n.ellipseText+"</span></li>"):n.pages-n.edges-i.end==1&&a._appendItem.call(this,i.end)}}else if(i.start>0&&n.edges>0){if(n.useStartEdge){var p=Math.min(n.edges,i.start);for(t=0;t<p;t++)a._appendItem.call(this,t)}n.edges<i.start&&i.start-n.edges!=1?l.append('<li class="disabled"><span class="ellipse">'+n.ellipseText+"</span></li>"):i.start-n.edges==1&&a._appendItem.call(this,n.edges)}if(n.invertPageOrder)for(t=i.end-1;t>=i.start;t--)a._appendItem.call(this,t);else for(t=i.start;t<i.end;t++)a._appendItem.call(this,t);if(n.invertPageOrder){if(i.start>0&&n.edges>0&&(n.edges<i.start&&i.start-n.edges!=1?l.append('<li class="disabled"><span class="ellipse">'+n.ellipseText+"</span></li>"):i.start-n.edges==1&&a._appendItem.call(this,n.edges),n.useEndEdge)){var p=Math.min(n.edges,i.start);for(t=p-1;t>=0;t--)a._appendItem.call(this,t)}}else if(i.end<n.pages&&n.edges>0&&(n.pages-n.edges>i.end&&n.pages-n.edges-i.end!=1?l.append('<li class="disabled"><span class="ellipse">'+n.ellipseText+"</span></li>"):n.pages-n.edges-i.end==1&&a._appendItem.call(this,i.end),n.useEndEdge)){var r=Math.max(n.pages-n.edges,i.end);for(t=r;t<n.pages;t++)a._appendItem.call(this,t)}n.nextText&&!n.nextAtFront&&a._appendItem.call(this,n.invertPageOrder?n.currentPage-1:n.currentPage+1,{text:n.nextText,classes:"next"}),n.ellipsePageSet&&!n.disabled&&a._ellipseClick.call(this,l)},_getPages:function(e){var a=Math.ceil(e.items/e.itemsOnPage);return a||1},_getInterval:function(e){return{start:Math.ceil(e.currentPage>e.halfDisplayed?Math.max(Math.min(e.currentPage-e.halfDisplayed,e.pages-e.displayedPages),0):0),end:Math.ceil(e.currentPage>e.halfDisplayed?Math.min(e.currentPage+e.halfDisplayed,e.pages):Math.min(e.displayedPages,e.pages))}},_appendItem:function(t,s){var n,i,l=this,r=l.data("pagination"),p=e("<li></li>"),g=l.find("ul");t=t<0?0:t<r.pages?t:r.pages-1,n={text:t+1,classes:""},r.labelMap.length&&r.labelMap[t]&&(n.text=r.labelMap[t]),n=e.extend(n,s||{}),t==r.currentPage||r.disabled?(r.disabled||"prev"===n.classes||"next"===n.classes?p.addClass("disabled"):p.addClass("active"),i=e('<a class="current">'+n.text+"</a>")):(i=e('<a href="'+r.hrefTextPrefix+(t+1)+r.hrefTextSuffix+'" class="page-link">'+n.text+"</a>"),i.click(function(e){return a._selectPage.call(l,t,e)})),n.classes&&i.addClass(n.classes),p.append(i),g.length?g.append(p):l.append(p)},_selectPage:function(e,t){var s=this.data("pagination");return s.currentPage=e,s.selectOnClick&&a._draw.call(this),s.onPageClick(e+1,t)},_ellipseClick:function(t){var s=this,n=this.data("pagination"),i=t.find(".ellipse");i.addClass("clickable").parent().removeClass("disabled"),i.click(function(t){if(!n.disable){var l=e(this),r=(parseInt(l.parent().prev().text(),10)||0)+1;l.html('<input type="number" min="1" max="'+n.pages+'" step="1" value="'+r+'">').find("input").focus().click(function(e){e.stopPropagation()}).keyup(function(t){var l=e(this).val();13===t.which&&""!==l?l>0&&l<=n.pages&&a._selectPage.call(s,l-1):27===t.which&&i.empty().html(n.ellipseText)}).bind("blur",function(t){var l=e(this).val();return""!==l&&a._selectPage.call(s,l-1),i.empty().html(n.ellipseText),!1})}return!1})}};e.fn.pagination=function(t){return a[t]&&"_"!=t.charAt(0)?a[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist on jQuery.pagination"):a.init.apply(this,arguments)}}(jQuery);