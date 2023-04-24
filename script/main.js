	//TEMP : déclaration des accesseurs aux items de la page HTML
  const p_mot_trouve = document.getElementById("mot_trouve");		//on utilise l'attribut ID de l'élément
  const p_mot_erreur = document.getElementById("mot_erreur");
  const p_conclusion = document.getElementById("conclusion");
  const p_complement = document.getElementById("complement");
  
  const inp_fragment_1 = document.getElementById("fragment_1");
  const inp_fragment_2 = document.getElementById("fragment_2");

  //------------------------------------- PARAGRAPHE
  //TEMP : pour modifier le contenu d'un paragraphe on utilise innerHTML sur l'objet concerné
  p_mot_trouve.innerHTML = "ici la liste des mots trouvés par le joueur";
  p_mot_erreur.innerHTML = "ici la liste des mots erronés proposé par le joueur : ";
  p_conclusion.innerHTML = "Proposez vos fragments";
  
  //TEMP : pour compléter un paragraphe (ajouter du contenu sans écraser celui déjà présent) :
  p_mot_erreur.innerHTML = p_mot_erreur.innerHTML + "<br> - absent ";

  //TEMP : pour vider un paragraphe
  p_complement.innerHTML = '';

  //gère les propositions de l'utilisateur
  function proposer() 
  {

    //------------------------------------- INPUT
    //TEMP : pour récupérer le contenu d'un champ de type input
    let fragment_1 = inp_fragment_1.value;
    console.log(fragment_1);		//affichage au niveau de la console
    let fragment_2 = inp_fragment_2.value;
    console.log(fragment_2);

    //TEMP : pour vider un champ
    inp_fragment_1.value = '';
    //TEMP : pour changer le contenu d'un champ
    inp_fragment_1.value = 'VAL';
    inp_fragment_2.value = 'ISE';


    //TEMP : change le contenu d'un paragraphe
    p_complement.innerHTML = "jeu en cours";

  }
  
  //gère la création d'une nouvelle partie
  function nouvelle_partie() 
  {
    let choix = confirm("Commencer une nouvelle partie ?");
    if (choix)
    {
      window.location = "jeu.html";	//nom du fichier ou page à ouvrir
    }
  }