console.log("Agenda Web");

        const contactes = ["Jose", "Saida", "Ruben"];
        const llista = document.createElement('ul');
	contactes.forEach(nom => {
  	  const li = document.createElement('li');
  	  li.textContent = nom;
 	  llista.appendChild(li);
});
document.body.appendChild(llista);
