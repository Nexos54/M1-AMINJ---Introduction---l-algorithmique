	//TEMP : déclaration des accesseurs aux items de la page HTML
  const p_mot_trouve = document.getElementById("mot_trouve");		//on utilise l'attribut ID de l'élément
  const p_mot_erreur = document.getElementById("mot_erreur");
  const p_conclusion = document.getElementById("conclusion");
  const p_complement = document.getElementById("complement");
  
  let firstWordInput = document.getElementById("firstWordInput");
  let secondWordInput = document.getElementById("secondWordInput");

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

    let firstWordInputValue = firstWordInput.value;
    let secondWordInputValue = secondWordInput.value;
    

    let firstWordSearch = mots.filter(mot => mot.includes(firstWordInputValue));
    let secondWordSearch = mots.filter(mot => mot.includes(secondWordInputValue));

    let conditionLength = [4,5,6];
    let aleatoireArray = [];
 
    const arrayLength4 = mots.filter(element => element.length === 4);
    const arrayLength4Random = arrayLength4.sort(() => Math.random() - 0.5);
    aleatoireArray.push(...arrayLength4Random.slice(0, 2));

    const arrayLength5 = mots.filter(element => element.length === 5);
    const arrayLength5Random = arrayLength5.sort(() => Math.random() - 0.5);
    aleatoireArray.push(...arrayLength5Random.slice(0, 6));

    const arrayLength6 = mots.filter(element => element.length === 6);
    const arrayLength6Random = arrayLength6.sort(() => Math.random() - 0.5);
    aleatoireArray.push(...arrayLength6Random.slice(0, 2));

    mots = mots.filter(element => !aleatoireArray.includes(element));



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