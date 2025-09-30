

let __pushctn = document.getElementById ('__pushctn') ;
fetch ('contact.json').then ((res) => res.json ()).then ((res) => {
    res.contacts.forEach((el) => {
        console.log (el) ;

        let tr = document.createElement ('tr') ;
        let contact_name = document.createElement ('td') ; contact_name.textContent = el.Name ;
        let contact_ville = document.createElement ('td') ; contact_ville.textContent = el.city ;
        let contact_email = document.createElement ('td') ; contact_email.textContent = el.email ;
        let contact_company = document.createElement ('td') ; contact_company.textContent = el.company ;
        let contact_skills = document.createElement ('td') ; 
        contact_skills.append (...el.skills.map ((e) => { let skill_el = document.createElement ('label') ; skill_el.textContent = e ; return skill_el ; }))

        tr.append (contact_name , contact_ville , contact_email , contact_company , contact_skills) ;
        
        __pushctn.append (tr) ;
    }) ;

}) ;



