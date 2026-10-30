(function(){
  var ids=['escuela','teatro','libro','entrevistas','contacto'];
  var links={};document.querySelectorAll('[data-nav]').forEach(function(a){links[a.getAttribute('data-nav')]=a;});
  var cur=null;
  function update(){
    var n='';ids.forEach(function(id){var el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<=120)n=id;});
    var de=document.documentElement;if(window.innerHeight+window.scrollY>=de.scrollHeight-4)n='contacto';
    if(n===cur)return;cur=n;ids.forEach(function(id){if(links[id])links[id].classList.toggle('is-active',id===n);});
  }
  window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);update();
})();
