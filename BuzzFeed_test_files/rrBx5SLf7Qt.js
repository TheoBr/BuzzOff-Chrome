/*!CK:3667060330!*//*1414988018,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["GDcPV"]); }

__d("EntStreamGroupMall",["DOM","$","ge"],function(a,b,c,d,e,f,g,h,i){var j={replacePager:function(k){g.setContent(h('pagelet_group_pager'),k);},replaceFilesPager:function(k,l){g.setContent(h('group_files_pager_'+l),k);},replacePostApprovalSection:function(k){var l=i('pagelet_consolidate_posts');if(l!==null)g.setContent(l,k);}};e.exports=j;},null);
__d("DoublyLinkedListMap",[],function(a,b,c,d,e,f){function g(){"use strict";this._head=null;this._tail=null;this._nodes={};this._nodeCount=0;}g.prototype.get=function(h){"use strict";return this._nodes[h]?this._nodes[h].data:null;};g.prototype.getIndex=function(h){"use strict";for(var i=this._head,j=0;i;i=i.next,j++)if(i.key===h)return j;return null;};g.prototype._insert=function(h,i,j,k){"use strict";j&&!this._nodes[j]&&(j=null);var l=(j&&this._nodes[j])||(k?this._head:this._tail),m={data:i,key:h,next:null,prev:null};if(l){this.remove(h);if(k){m.prev=l.prev;l.prev&&(l.prev.next=m);l.prev=m;m.next=l;}else{m.next=l.next;l.next&&(l.next.prev=m);l.next=m;m.prev=l;}}m.prev===null&&(this._head=m);m.next===null&&(this._tail=m);this._nodes[h]=m;this._nodeCount++;return this;};g.prototype.insertBefore=function(h,i,j){"use strict";return this._insert(h,i,j,true);};g.prototype.insertAfter=function(h,i,j){"use strict";return this._insert(h,i,j,false);};g.prototype.prepend=function(h,i){"use strict";return this.insertBefore(h,i,this._head&&this._head.key);};g.prototype.append=function(h,i){"use strict";return this.insertAfter(h,i,this._tail&&this._tail.key);};g.prototype.remove=function(h){"use strict";var i=this._nodes[h];if(i){var j=i.next,k=i.prev;j&&(j.prev=k);k&&(k.next=j);this._head===i&&(this._head=j);this._tail===i&&(this._tail=k);delete this._nodes[h];this._nodeCount--;}return this;};g.prototype.find=function(h){"use strict";for(var i=this._head;i;i=i.next)if(h(i.data))return i.key;return null;};g.prototype.reduce=function(h,i){"use strict";for(var j=this._head;j;j=j.next)i=h(j.data,i);return i;};g.prototype.exists=function(h){"use strict";return !!this._nodes[h];};g.prototype.isEmpty=function(){"use strict";return !this._head;};g.prototype.reset=function(){"use strict";this._head=null;this._tail=null;this._nodes={};this._nodeCount=0;};g.prototype.map=function(h){"use strict";for(var i=this._head;i;i=i.next)h(i.data);};g.prototype.getCount=function(){"use strict";return this._nodeCount;};g.prototype.getHead=function(){"use strict";return this._head&&this._head.data;};g.prototype.getTail=function(){"use strict";return this._tail&&this._tail.data;};g.prototype.getNext=function(h){"use strict";var i=this._nodes[h];if(i&&i.next)return i.next.data;return null;};g.prototype.getPrev=function(h){"use strict";var i=this._nodes[h];if(i&&i.prev)return i.prev.data;return null;};e.exports=g;},null);
__d("ScrollingPager",["Arbiter","CSS","DOM","OnVisible","UIPagelet","$","copyProperties","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o={};function p(q,r,s,t){"use strict";this.scroll_loader_id=q;this.pagelet_src=r;this.data=s;this.options=t||{};if(this.options.target_id){this.target_id=this.options.target_id;this.options.append=true;}else this.target_id=q;this.scroll_area_id=this.options.scroll_area_id;this.handler=null;}p.prototype.setBuffer=function(q){"use strict";this.options.buffer=q;this.onvisible&&this.onvisible.setBuffer(q);};p.prototype.getBuffer=function(){"use strict";return this.options.buffer;};p.prototype.register=function(){"use strict";this.onvisible=new j(l(this.scroll_loader_id),this.getHandler(),false,this.options.buffer,false,n(this.scroll_area_id));o[this.scroll_loader_id]=this;g.inform(p.REGISTERED,{id:this.scroll_loader_id});};p.prototype.getInstance=function(q){"use strict";return o[q];};p.prototype.getHandler=function(){"use strict";if(this.handler)return this.handler;function q(r){var s=n(this.scroll_loader_id);if(!s){this.onvisible.remove();return;}h.addClass(s.firstChild,'async_saving');var t=this.options.handler,u=this.options.force_remove_pager&&(this.scroll_loader_id!==this.target_id);this.options.handler=function(){g.inform('ScrollingPager/loadingComplete');t&&t.apply(null,arguments);if(u)i.remove(s);};if(r)this.data.pager_fired_on_init=true;k.loadFromEndpoint(this.pagelet_src,this.target_id,this.data,this.options);}return q.bind(this);};p.prototype.setHandler=function(q){"use strict";this.handler=q;};p.prototype.removeOnVisible=function(){"use strict";this.onvisible.remove();};p.prototype.checkBuffer=function(){"use strict";this.onvisible&&this.onvisible.checkBuffer();};p.getInstance=function(q){"use strict";return o[q];};m(p,{REGISTERED:'ScrollingPager/registered'});e.exports=p;},null);
__d("ProfileNavRef",["LinkController","Parent","URI"],function(a,b,c,d,e,f,g,h,i){var j='pnref',k='data-'+j,l=false;function m(n){var o=[];n=h.byAttribute(n,k);while(n){o.unshift(n.getAttribute(k));n=h.byAttribute(n.parentNode,k);}return o.join('.');}f.track=function(){if(l)return;l=true;g.registerHandler(function(n){var o=m(n);if(o)n.href=new i(n.href).addQueryData(j,o).toString();});};},null);
__d("TimelineConstants",[],function(a,b,c,d,e,f){var g={DS_HEIGHT:'timeline-unit-height',DS_LOADED:'timeline-capsule-loaded',DS_SIDEORG:'timeline-unit-sideorg',DS_TAILBALANCE:'timeline-capsule-tailbalance',DS_COLUMN_HEIGHT_DIFFERENTIAL:'timeline-column-diff-height',FIXED_SIDE_LEFT:'left',FIXED_SIDE_RIGHT:'right',FIXED_SIDE_BOTH:'both',FIXED_SIDE_NONE:'none',SCROLL_TO_OFFSET:100,SCRUBBER_DEFAULT_OFFSET:38,SECTION_LOADING:'TimelineConstants/sectionLoading',SECTION_LOADED:'TimelineConstants/sectionLoaded',SECTION_FULLY_LOADED:'TimelineConstants/sectionFullyLoaded',SECTION_REGISTERED:'TimelineConstants/sectionRegistered'};e.exports=g;},null);
__d("TimelineLegacySections",[],function(a,b,c,d,e,f){var g={},h={get:function(i){return g[i]||{};},getAll:function(){return g;},remove:function(i){delete g[i];},removeAll:function(){g={};},set:function(i,j){g[i]=j;}};e.exports=h;},null);
__d("TimelineURI",["URI","goURI"],function(a,b,c,d,e,f,g,h){var i={TIMELINE_KEY:'timeline',WALL_KEY:'wall',parseURI:function(j){j=g(j);var k=j.getQueryData(),l=j.getPath(),m=l.split('/').slice(1);if(m[0]=='people'||m[0]=='pages')m=m.slice(2);var n=k.sk||m[1]||i.TIMELINE_KEY;if(n==i.WALL_KEY)n=i.TIMELINE_KEY;var o=null,p=null;if(n==i.TIMELINE_KEY){p=parseInt(m[2],10)||null;o=parseInt(m[3],10)||null;}return {path:l,id:k.id||m[0],key:n,viewas:k.viewas?k.viewas:0,filter:k.filter?k.filter:null,year:p,month:o,friendship:!!k.and};},goToProfileID:function(j){h(g('/'+j),true);}};e.exports=i;},null);
__d("TimelineController",["Event","Arbiter","CSS","DataStore","DOM","DOMQuery","ProfileNavRef","Run","ScrollingPager","TidyArbiter","TimelineConstants","TimelineLegacySections","TimelineURI","Vector","ViewportBounds","$","copyProperties","csx","forEachObject","ge","tidyEvent","queryThenMutateDOM"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba){var ca=358,da=48,ea=740,fa=1285,ga='top',ha='paddingTop',ia='paddingTop',ja=null,ka=false,la,ma,na,oa={},pa={},qa=[],ra=null,sa=false,ta=false,ua=false,va=0,wa=false,xa=false,ya=false,za={},ab=false;function bb(nb,ob,pb){pb=pb||[];if(oa[nb])return oa[nb][ob].apply(oa[nb],pb);pa[nb]=pa[nb]||{};pa[nb][ob]=pb;return false;}function cb(){if(!(wa||xa||ya))return;wa=wa&&gb(z('rightCol'),ia,mb.getCurrentScrubber());xa=xa&&gb(v('pagelet_above_header_timeline'),ga);ya=ya&&gb(k.find(document,"div._4f7n"),ha);}var db=0;function eb(){db=t.getScrollPosition();}function fb(){ba(eb,function(){var nb=va===0||db.y>=va;cb();bb(mb.STICKY_HEADER,'toggle',[nb]);bb(mb.CONTENT,'checkCurrentSectionChange');},'TimelineController/scrollListener');}function gb(nb,ob,pb){if(!nb)return false;if(db.y<=0){hb(nb,ob);return false;}else if(pb&&i.hasClass(pb.getRoot(),'fixed_elem')){hb(nb,ob);return false;}else{var qb=parseInt(nb.style[ob],10)||0;if(db.y<qb){i.addClass(nb,'timeline_fixed');nb.style[ob]=db.y+'px';}else i.removeClass(nb,'timeline_fixed');}return true;}function hb(nb,ob){nb.style[ob]='0px';i.removeClass(nb,'timeline_fixed');}function ib(){ba(mb.shouldShowWideAds,function(){bb(mb.ADS,'adjustAdsType',[sa]);bb(mb.ADS,'adjustAdsToFit');bb(mb.CONTENT,'adjustContentPadding');bb(mb.STICKY_HEADER_NAV,'adjustMenuHeights');},'TimelineController/resize');}function jb(nb,ob){if(nb=='sidebar/initialized')ab=true;bb(mb.ADS,'adjustAdsType',[mb.shouldShowWideAds()]);}function kb(nb,ob){var pb=t.getScrollPosition();ob=Math.min(ob,pb.y);var qb=z('rightCol');if(qb){qb.style[ia]=ob+'px';wa=true;}var rb=v('pagelet_above_header_timeline');if(rb.firstChild){var sb=v('above_header_timeline_placeholder');sb.style.height=rb.offsetHeight+'px';rb.style[ga]=ob+'px';xa=true;}var tb=document.documentElement;ya=tb.clientHeight<400||tb.clientWidth<tb.scrollWidth;if(ya)k.find(document,"div._4f7n").style[ha]=ob+'px';h.inform('reflow');}function lb(){while(qa.length)qa.pop().remove();y(oa,function(pb,qb){pb.reset&&pb.reset();});na.unsubscribe();na=null;ja=null;la=null;oa={};pa={};ra=null;ta=false;va=0;xa=false;if(wa){var nb=z('rightCol');if(nb)hb(nb,ia);}wa=false;if(ya){var ob=k.find(document,"div._4f7n");hb(ob,ha);ya=false;}ab=false;ka=false;j.purge(q.DS_HEIGHT);j.purge(q.DS_LOADED);j.purge(q.DS_SIDEORG);j.purge(q.DS_TAILBALANCE);j.purge(q.DS_COLUMN_HEIGHT_DIFFERENTIAL);}var mb={NAV:'nav',STICKY_HEADER:'sticky_header',STICKY_HEADER_NAV:'sticky_header_nav',SCRUBBER:'scrubber',CONTENT:'content',ADS:'ads',LOGGING:'logging',init:function(nb,ob,pb){if(ka)return;if(ob==s.WALL_KEY)ob=s.TIMELINE_KEY;ka=true;la=nb;ma=pb.has_fixed_ads;ta=pb.one_column_minimal;ua=pb.is_rhc_redesign;za={allactivity:true,approve:true};if(!ta)w(za,{games:true,map:true,music:true,video:true});za[s.TIMELINE_KEY]=true;bb(mb.CONTENT,'adjustContentPadding');qa.push(g.listen(window,'scroll',fb),g.listen(window,'resize',ib));na=h.subscribe(['sidebar/initialized','sidebar/show','sidebar/hide','minisidebar/show'],jb);aa(p.subscribe('TimelineCover/coverCollapsed',kb));if(pb.track_profile_nav_ref)m.track();n.onLeave(lb);mb.registerCurrentKey(ob);},setAdsTracking:function(nb){bb(mb.ADS,'start',[nb]);},pageHasScrubber:function(nb){return !nb||(!ta&&nb.match(/^(og_)?app_/))||(nb in za);},fixedAds:function(){return ma;},registerCurrentKey:function(nb){ja=nb;ra=nb!=='map'&&t.getViewportDimensions().y<ea&&mb.pageHasScrubber(nb);var ob=k.find(document,"div._4f7n");ra=ra||ob.offsetTop;bb(mb.ADS,'setShortMode',[ra]);bb(mb.ADS,'updateCurrentKey',[nb]);va=nb==s.TIMELINE_KEY?ca-da:0;},getCurrentKey:function(){return ja;},getCurrentScrubber:function(){return oa[mb.SCRUBBER];},getCurrentStickyHeaderNav:function(){return oa[mb.STICKY_HEADER_NAV];},scrubberHasLoaded:function(nb){i.conditionClass(nb.getRoot(),'fixed_elem',!ra);bb(mb.ADS,'registerScrubber',[nb]);},scrubberHasChangedState:function(){bb(mb.ADS,'adjustAdsToFit');},scrubberWasClicked:function(nb){bb(mb.LOGGING,'logScrubberClick',[nb]);},stickyHeaderNavWasClicked:function(nb){bb(mb.LOGGING,'logStickyHeaderNavClick',[nb]);},sectionHasChanged:function(nb,ob){bb(mb.STICKY_HEADER_NAV,'updateSection',[nb,ob]);bb(mb.SCRUBBER,'updateSection',[nb,ob]);bb(mb.ADS,'loadAdsIfEnoughTimePassed');bb(mb.LOGGING,'logSectionChange',[nb,ob]);},navigateToSection:function(nb){bb(mb.CONTENT,'navigateToSection',[nb]);},shouldShowWideAds:function(){if(!ab||ua){sa=false;}else{var nb=fa+u.getRight()+u.getLeft();sa=t.getViewportDimensions().x>=nb;}return sa;},sidebarInitialized:function(){return ab;},adjustStickyHeaderWidth:function(){bb(mb.STICKY_HEADER,'adjustWidth');},isOneColumnMinimal:function(){return ta;},hideStickyHeaderNavSectionMenu:function(){bb(mb.STICKY_HEADER_NAV,'hideSectionMenu');},register:function(nb,ob){oa[nb]=ob;if(pa[nb]){y(pa[nb],function(pb,qb){bb(nb,qb,pb);});delete pa[nb];}},adjustScrollingPagerBuffer:function(nb,ob){var pb=j.get(q.DS_COLUMN_HEIGHT_DIFFERENTIAL,ob);if(!pb)return;var qb=o.getInstance(nb);qb&&qb.setBuffer(qb.getBuffer()+Math.abs(pb));},runOnceWhenSectionFullyLoaded:function(nb,ob,pb){var qb=r.get(ob);if(qb){var rb=false;l.scry(qb.node,'.fbTimelineCapsule').forEach(function(tb){if(!rb&&parseInt(j.get(q.DS_LOADED,tb.id),10)>=parseInt(pb,10)){nb();rb=true;}});if(rb)return;}var sb=h.subscribe(q.SECTION_FULLY_LOADED,function(tb,ub){if(ub.scrubberKey===ob&&ub.pageIndex===pb){nb();sb.unsubscribe();}});}};e.exports=mb;},null);
__d("TimelineSection",["Arbiter","DOMScroll","DoublyLinkedListMap","Run","TidyArbiterMixin","copyProperties","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=null;function o(){n=null;}function p(q,r,s){"use strict";this.id=q;this.label=s;this.nodeID=r;this._parentSection=null;this.childSections=new i();this._isLoaded=false;setTimeout(p.inform.bind(p,'sectionInitialized/'+q,{section:this},g.BEHAVIOR_STATE),0);}p.prototype.appendSection=function(q){"use strict";this.childSections.append(q.id,q);q._parentSection=this;};p.prototype.freeze=function(){"use strict";this.freezeChildren();};p.prototype.freezeChildren=function(){"use strict";var q=this.childSections.getHead();while(q){!q.isActive()&&q.freeze();q=q.getNext();}};p.prototype.getNext=function(){"use strict";return this._parentSection&&this._parentSection.childSections.getNext(this.id);};p.prototype.getPrev=function(){"use strict";return this._parentSection&&this._parentSection.childSections.getPrev(this.id);};p.prototype.isActive=function(){"use strict";var q=this;while(q){if(q.id===n)return true;q=q._parentSection;}return false;};p.prototype.isLoaded=function(){"use strict";return this._isLoaded;};p.prototype.setIsLoaded=function(q){"use strict";this._isLoaded=q;return this;};p.prototype.scrollTo=function(){"use strict";if(!m(this.nodeID))return;h.scrollTo(this.getNode(),true,false,false,0,h.scrollTo.bind(this).bind(null,this.getNode(),0));};p.prototype.thaw=function(){"use strict";this.thawChildren();};p.prototype.thawChildren=function(){"use strict";var q=this.childSections.getHead();while(q){q.thaw();q=q.getNext();}};p.prototype.getNode=function(){"use strict";throw new Error('This function needs to be implemented in children.');};p.callWithSection=function(q,r){"use strict";this.subscribe('sectionInitialized/'+q,function(s,t){r(t.section);});};p.setActiveSectionID=function(q){"use strict";!n&&j.onLeave(o);n=q;};l(p,k);e.exports=p;},null);
__d("TimelineCapsule",["Arbiter","CSS","DataStore","DOM","DOMQuery","DOMScroll","Parent","TimelineConstants","TimelineLegacySections","UserAgent_DEPRECATED","Vector","$","createArrayFrom","csx","isEmpty","queryThenMutateDOM"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var w=(function(){var x=45,y=15,z={},aa={};function ba(oa){return h.hasClass(oa,'fbTimelineBalancer');}function ca(oa){return oa.getAttribute('data-spine');}function da(oa){return h.hasClass(oa,'placeholderUnit');}function ea(oa,pa){if(pa)return (i.get(n.DS_SIDEORG,oa.id)||oa.getAttribute('data-side'));return oa.getAttribute('data-side');}function fa(oa,pa){i.set(n.DS_SIDEORG,oa.id,ea(oa,true));oa.setAttribute('data-side',pa);}function ga(oa){return oa.getAttribute('data-size');}function ha(oa){if(h.hasClass(oa,'fbTimelineOneColumn')&&oa.prevSibling&&h.hasClass(oa.prevSibling,'fbTimelineOneColumn'))return y*2;if(h.hasClass(oa,'fbTimelineIndeterminateContent'))return 0;return y;}function ia(oa,pa){var qa=0;if(h.shown(oa)&&!h.hasClass(oa,'placeholderUnit'))qa=oa.offsetHeight+ha(oa);i.set(n.DS_HEIGHT,oa.id,parseInt(qa,10));}function ja(oa){var pa=i.get(n.DS_HEIGHT,oa.id,null);return pa;}function ka(oa,pa){if(ga(pa)=='2'){return 0;}else if(ea(pa)=='r'){return oa+ja(pa);}else return oa-ja(pa);}function la(oa){k.scry(oa,"._3ram").forEach(function(pa){var qa=pa.getAttribute('data-endmarker'),ra=pa.getAttribute('data-pageindex'),sa=function(){if(!pa.parentNode)return;i.set(n.DS_LOADED,oa.id,ra);j.remove(pa);g.inform(n.SECTION_FULLY_LOADED,{scrubberKey:qa,pageIndex:ra,capsuleID:oa.id,childCount:oa.childNodes.length});};if(o.get(qa)){sa();}else var ta=g.subscribe(n.SECTION_REGISTERED,function(ua,va){if(va.scrubberKey===qa){sa();ta.unsubscribe();}});});g.inform('TimelineCapsule/balanced',{capsule:oa});}function ma(oa){if(u(z[oa.id]))return;var pa=ba(oa)?oa.firstChild:oa,qa=pa.childNodes.length,ra={},sa={},ta,ua=y,va=y,wa,xa=[];for(var ya=0;ya<qa;ya++){ta=pa.childNodes[ya];if(h.hasClass(ta,'fbTimelineUnit')){wa=k.scry(ta,'div.timelineUnitContainer')[0];if(wa)sa[ta.id]=wa.getAttribute('data-time');if(!da(ta)&&h.shown(ta)){if(ga(ta)=='2'){ra[ta.id]=Math.max(ua,va);ua=va=ra[ta.id]+ja(ta);}else if(ea(ta)=='r'){ra[ta.id]=va;va+=ja(ta);}else{ra[ta.id]=ua;ua+=ja(ta);}if(ea(ta,true)=='l'||ga(ta)=='2')xa.push(ta.id);}}}for(ya=0;ya<xa.length-1;++ya){var za=xa[ya],ab=xa[ya+1],bb=ra[za]+x,cb=ra[ab];for(var db in z[oa.id]){if(bb>cb)break;var eb=z[oa.id][db];if(h.shown(eb))continue;if(sa[db]<=sa[za]&&sa[db]>sa[ab]){eb.style.top=bb+"px";bb+=x;h.show(eb);}}}}function na(oa,pa){var qa=m.byAttribute(oa,'data-size');if(qa){if(h.hasClass(oa.parentNode,'timelineReportContent')){pa(oa);}else pa(qa);w.balanceCapsule(m.byClass(qa,'fbTimelineCapsule'));}}return {removeUnit:function(oa){na(oa,function(pa){j.remove(pa);});},removeUnitWithID:function(oa){w.removeUnit(r(oa));},hideUnit:function(oa){na(oa,function(pa){h.addClass(pa,'fbTimelineColumnHidden');});},undoHideUnit:function(oa,pa){j.remove(m.byClass(pa,'hiddenText'));na(oa,function(qa){h.removeClass(qa,'fbTimelineColumnHidden');});},unplacehold:function(oa){var pa=r(oa);pa.style.top=null;h.removeClass(pa,'visiblePlaceholder');h.removeClass(pa,'placeholder');var qa=m.byClass(pa,'fbTimelineCapsule');delete z[qa.id][oa];w.balanceCapsule(qa);},scrollToCapsule:function(oa){if(!aa.hasOwnProperty(oa.id)){var pa=q.getElementPosition(oa.parentNode);l.scrollTo(new q(q.getScrollPosition().x,pa.y-n.SCROLL_TO_OFFSET,'document'));aa[oa.id]=true;}},balanceCapsuleFromChild:function(oa,pa){w.balanceCapsule(m.byClass(oa,'fbTimelineCapsule'),pa);},balanceCapsuleDeferred:function(oa,pa){setTimeout(w.balanceCapsule.bind(null,oa,pa),0);},balanceCapsule:function(oa,pa){if(!oa||!oa.childNodes)return;var qa=0,ra,sa=document.createDocumentFragment(),ta=[],ua=[],va=[],wa=false,xa=pa&&pa.heights_action;if(pa&&pa.tail_balance)i.set(n.DS_TAILBALANCE,oa.id,pa.tail_balance);if(p.chrome()||p.webkit())h.toggleClass(oa,'webkitFix');for(var ya=0;ya<oa.childNodes.length;ya++){ra=oa.childNodes[ya];if(ca(ra)){continue;}else if(ba(ra)){s(ra.firstChild.childNodes).forEach(function(gb){ia(gb,xa);});continue;}ia(ra,xa);if(ea(ra,true)=='r'){ua.push(ra);}else ta.push(ra);va.push(ra);if(ga(ra)!='2')if((qa>0&&ea(ra)=='r')||(qa<0&&ea(ra)=='l'))wa=true;qa=ka(qa,ra);}var za=[],ab=[],bb=[];k.scry(oa,'li.fbTimelineBalancer').forEach(function(gb){var hb=s(gb.firstChild.childNodes);if(gb.getAttribute('data-nonunits')){bb=bb.concat(hb);}else if(ea(gb)=='left'){za=za.concat(hb);}else if(ea(gb)=='right')ab=ab.concat(hb);});if(wa){oa.style.minHeight=oa.offsetHeight;ta.forEach(function(gb){if(ga(gb)!='2')fa(gb,'l');});ua.forEach(function(gb){if(ga(gb)!='2')fa(gb,'r');});var cb=j.create('li',{className:'fbTimelineBalancer'},j.create('ol',null,ta));cb.setAttribute('data-side','left');j.prependContent(oa,cb);za=ta.concat(za);var db=j.create('li',{className:'fbTimelineBalancer'},j.create('ol',null,ua));db.setAttribute('data-side','right');j.prependContent(oa,db);ab=ua.concat(ab);qa=0;}while(bb.length)sa.appendChild(bb.shift());while((qa>=0&&za.length)||(qa<0&&ab.length)){if(qa>=0){ra=za.shift();}else ra=ab.shift();sa.appendChild(ra);qa=ka(qa,ra);}oa.appendChild(sa);k.scry(oa,'li.fbTimelineBalancer').forEach(function(gb){if(!gb.firstChild.childNodes.length)j.remove(gb);});var eb=(pa&&pa.tail_balance)||i.get(n.DS_TAILBALANCE,oa.id);if(eb)qa=w.tailBalance(oa,qa,eb);if(wa){va.forEach(function(gb){if(gb.parentNode!==oa){oa.appendChild(gb);qa=ka(qa,gb);}});oa.style.minHeight=null;}var fb=m.byClass(oa,'fbTimelineSection');if(fb)i.set(n.DS_COLUMN_HEIGHT_DIFFERENTIAL,fb.id,qa);z[oa.id]={};k.scry(oa,'li.placeholderUnit').forEach(function(gb){z[oa.id][gb.id]=gb;});ma(oa);la(oa);},tailBalance:function(oa,pa,qa){if(!oa)return pa;var ra=[],sa=[],ta=[],ua=[];k.scry(oa,'li.fbTimelineBalancer').forEach(function(wa){var xa=s(wa.firstChild.childNodes);if(wa.getAttribute('data-nonunits')){ua=ua.concat(xa);}else if(ea(wa)=='left'){sa=sa.concat(xa);}else if(ea(wa)=='right')ta=ta.concat(xa);ra=ra.concat(xa);});if((qa==n.FIXED_SIDE_RIGHT&&sa.length)||(qa==n.FIXED_SIDE_LEFT&&ta.length))return pa;var va=document.createDocumentFragment();if(ra)while(ra.length){if(qa!=n.FIXED_SIDE_NONE)if(ga(ra[0])!='2')if(pa>=0){fa(ra[0],'l');}else fa(ra[0],'r');pa=ka(pa,ra[0]);va.appendChild(ra.shift());}oa.appendChild(va);k.scry(oa,'li.fbTimelineBalancer').forEach(function(wa){if(!wa.firstChild.childNodes.length)j.remove(wa);});return pa;},loadTwoColumnUnits:function(oa){var pa=r(oa);v(function(){var qa=m.byClass(pa,'fbTimelineSection');if(qa){var ra=k.find(pa,"._3rbf"),sa=k.find(pa,"._3rbh"),ta=sa.offsetHeight-ra.offsetHeight;i.set(n.DS_COLUMN_HEIGHT_DIFFERENTIAL,qa.id,ta);}},la.bind(null,pa));}};})();e.exports=a.TimelineCapsule||w;},null);
__d("TimelineSmartInsert",["Run","UserAgent_DEPRECATED","Vector"],function(a,b,c,d,e,f,g,h,i){var j=100;function k(q){if(q==='viewport')return i.getViewportDimensions().y;return q;}var l=false,m=false;function n(){if(m)return;g.onLeave(o);m=true;}function o(){l=false;m=false;}var p={run:function(q,r,s){n();if(!l||h.ie()<=8){r();return;}var t=q.offsetHeight;r();var u=q.offsetHeight,v=i.getScrollPosition().y,w=i.getElementPosition(q).y;if(u!==t&&w<v&&w+t<v+k(s||j))window.scrollBy(0,u-t);},enable:function(){l=true;}};e.exports=p;},null);
__d("TimelineMainScrubber",["Arbiter","CSS","DOMQuery","TimelineConstants","TimelineController","TimelineScrubber"],function(a,b,c,d,e,f,g,h,i,j,k,l){for(var m in l)if(l.hasOwnProperty(m))o[m]=l[m];var n=l===null?null:l.prototype;o.prototype=Object.create(n);o.prototype.constructor=o;o.__superConstructor__=l;function o(p){"use strict";l.call(this,p);this._subscribe=g.subscribe(j.SECTION_LOADED,function(q,r){var s=this._navKeys[r.key],t=s&&i.scry(s,'ul')[0];if(t){h.addClass(t,'loaded');k.scrubberHasChangedState();if(r.hideSubSections)h.hide(t);}}.bind(this));}o.prototype.reset=function(){"use strict";n.reset.call(this);this._subscribe&&this._subscribe.unsubscribe();};e.exports=o;},null);
__d("legacy:ui-scrolling-pager-js",["ScrollingPager"],function(a,b,c,d){a.ScrollingPager=b('ScrollingPager');},3);
__d("ContextualLayerAsyncRelative",["Event","Parent","copyProperties"],function(a,b,c,d,e,f,g,h,i){function j(k){"use strict";this._layer=k;}j.prototype.enable=function(){"use strict";this._layerSubscription=this._layer.subscribe('show',this._attachListener.bind(this));if(this._layer.isShown())this._attachListener();};j.prototype.disable=function(){"use strict";this._layerSubscription.unsubscribe();this._layerSubscription=null;if(this._listener){this._listener.remove();this._listener=null;}};j.prototype._attachListener=function(){"use strict";this._listener=g.listen(this._layer.getRoot(),'click',this._onclick.bind(this));};j.prototype._onclick=function(k){"use strict";var l=h.byTag(k.getTarget(),'A');if(!l)return;var m=l.getAttribute('ajaxify'),n=l.href,o=m||n;if(l.rel==='async'||l.rel==='async-post'){d(['AsyncRequest'],function(p){p.bootstrap(o,this._layer.getContext(),l.rel==='async-post');}.bind(this));return false;}};i(j.prototype,{_layerSubscription:null,_listener:null});e.exports=j;},null);