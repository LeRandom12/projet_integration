

let __pushctn = document.getElementById ('__pushctn') ;
fetch ('posts.json').then ((res) => res.json ()).then ((res) => {
    res.contacts.forEach((el) => {
        console.log (el) ;

        let tr = document.createElement ('tr') ;
        let contact_name = document.createElement ('td') ; contact_name.textContent = el.Name ;
        tr.append (contact_name) ;
        
        __pushctn.append (tr) ;
    }) ;

}) ;



