function surligne(champ, erreur)
{
   if(erreur)
   {
      champ.style.border-color = "#fba";
      champ.style.outline = 0;
      champ.style.-webkit-box-shadow = inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(247, 35, 12, 0.6);
      champ.style.box-shadow = inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(247, 35, 12, 0.6);
   }
}

function verifNumber(champ)
{
   var age = parseInt(champ.value);
   if isNaN(age){
      surligne(champ, true);
      return false;
   }
   else{
      alert("Ce champ doit contenir des nombres");
      return true;
   }
}

function verifMdp(champ)
{
   var mdp = parseInt(champ.value);
   if champ.value.length < 8{
      surligne(champ, true);
      return false;
   }
   else{
      alert("Votre mot de passe doit contenir au moins 8 caractères");
      return true;
   }
}

function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      alert("Adresse email invalide");
      return true;
   }
}