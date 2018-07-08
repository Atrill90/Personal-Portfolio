document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.materialboxed');
    let instances = M.Materialbox.init(elems);
  });

//collapsible
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.collapsible');
    let instances = M.Collapsible.init(elems);
});

//tool tip
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth >= 769){
    let elems = document.querySelectorAll('.tooltipped');
    let instances = M.Tooltip.init(elems);
    }
});

