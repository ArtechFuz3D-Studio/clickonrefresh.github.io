import{S as t,P as o,W as n,T as i,M as e,a as s,b as a,c as r,A as p,O as c,d,e as w,f as l,g as h,h as u,i as m}from"./vendor.ee5b2892.js";const f=new t,g=new o(75,window.innerWidth/window.innerHeight,.1,1e3),x=new n({canvas:document.querySelector("#bg")});x.setPixelRatio(window.devicePixelRatio),x.setSize(window.innerWidth,window.innerHeight),g.position.setZ(30),x.render(f,g);const y=(new i).load("https://clickonrefresh.github.io/static/textures/dan.jpg"),z=(new i).load("https://clickonrefresh.github.io/static/textures/daftpunktocat-thomas.gif"),b=new e(new s(53,5,2,100),new a({map:y,normalMap:z}));f.add(b);const k=new r(16777215);k.position.set(20,10,20),k.intensity=.7;const M=new r(16777215);M.position.set(-1125,10,20),M.intensity=.6;const j=new p(16777215);f.add(k,M,j);const X=new c(g,x.domElement);Array(2e3).fill().forEach((function(){const t=new d(.2,24,24),o=new a({color:16777215}),n=new e(t,o),[i,s,r]=Array(3).fill().map((()=>m.randFloatSpread(1e3)));n.position.set(i,s,r),f.add(n)}));const S=(new i).load("https://clickonrefresh.github.io/static/textures/irin.jpg");f.background=S;const A=(new i).load("https://clickonrefresh.github.io/static/textures/clickonrefresh.jpg"),W=(new i).load("https://clickonrefresh.github.io/textures/NormalMap.png"),v=new e(new d(33,24,24),new w({map:A,normalMap:W}));f.add(v);const H=(new i).load("https://clickonrefresh.github.io/static/textures/alex.jpg"),P=new e(new d(5,32,32),new a({map:H,normalMap:W}));f.add(P);const R=(new i).load("https://clickonrefresh.github.io/static/textures/ral.jpg"),q=new e(new d(5,32,32),new a({map:R,normalMap:W}));f.add(q);const B=(new i).load("https://clickonrefresh.github.io/static/textures/daftpunktocat-thomas.gif"),E=new e(new d(5,32,32),new a({map:B,normalMap:W}));f.add(E);const F=(new i).load("https://clickonrefresh.github.io/static/textures/alex.jpg"),C=new e(new d(7,32,32),new a({map:F,normalMap:W}));f.add(C);const G=(new i).load("https://clickonrefresh.github.io/static/textures/daftpunktocat-thomas.gif"),L=new e(new d(74,32,32),new a({map:G,normalMap:W}));f.add(L);const N=new l;g.add(N);const O=new h(N);(new u).load("https://clickonrefresh.github.io/static/sounds/SWHG.mp3",(function(t){O.setBuffer(t),O.setLoop(!0),O.setVolume(.5),O.play()})),P.position.z=-100,P.position.setX(-24),q.position.z=-173,q.position.setX(-54),E.position.z=13,E.position.setX(-154),E.position.y=50,C.position.z=-13,C.position.setX(154),C.position.y=-65,b.position.z=10,b.position.setX(-24),b.position.y=15,v.position.z=10,v.position.setX(-24),v.position.y=15,L.position.z=813,L.position.setX(354),L.position.y=75,document.body.onscroll=function(){const t=document.body.getBoundingClientRect().top;b.rotation.x+=.1,b.rotation.y+=.2,q.position.y+=.1,E.position.x+=.1,P.position.y+=.1,v.rotation.y+=.01,v.rotation.z+=.01,g.position.z=.2*t,g.rotation.x=-.02*t,g.rotation.y=-.02*t,C.position.y+=.1,C.position.x+=.1,C.rotation.z+=.05,C.rotation.x+=.05,L.rotation.z+=.005,L.rotation.x+=.005},function t(){requestAnimationFrame(t),b.rotation.x+=.001,b.rotation.y+=.001,b.rotation.z+=-1.1,v.rotation.x+=1e-4,v.rotation.y+=-.01,v.rotation.z+=1e-4,P.rotation.x+=1e-5,P.rotation.y+=-.09,P.rotation.z+=1e-4,q.rotation.x+=.001,q.rotation.y+=.07,q.rotation.z+=.03,E.rotation.x+=.001,E.rotation.y+=-.07,E.rotation.z+=4e-4,C.rotation.x+=.01,C.rotation.y+=.07,C.rotation.z+=.0034,L.rotation.x+=1e-5,L.rotation.y+=7e-4,L.rotation.z+=314e-6,X.update(),x.render(f,g)}();
