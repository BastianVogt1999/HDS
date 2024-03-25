function uploadFile(catNumber, fileInput) {
    var storage = firebase.storage();

    

    //In Einzelliste
    var fileRef = storage.ref('Kategorie'+ catNumber + '/' +fileInput);
    var file = document.getElementById('fileInput').files[0];
    var uploadTask = fileRef.put(file);
    
    //In Gesamtliste
    var fileRef = storage.ref('AlleBilder/'+fileInput);
    var file = document.getElementById('fileInput').files[0];
    var uploadTask = fileRef.put(file);
  /*
    uploadTask.on('state_changed', 
      function(snapshot){
        // Fortschritt aktualisieren
      }, 
      function(error) {
        // Fehlerbehandlung
        console.error('Upload-Fehler:', error);
      }, 
      function() {
        // Upload abgeschlossen
        console.log('Upload abgeschlossen!');
      }
    );
    */
  }

  function zeigeBild(){
    document.getElementById('bildAuswahl').addEventListener('change', function(event) {
        const ausgewähltesBild = event.target.files[0];
        const bildAnzeige = document.getElementById('bildAnzeige');
      
        if (ausgewähltesBild) {
          const reader = new FileReader();
      
          reader.onload = function() {
            const bildElement = document.createElement('img');
            bildElement.src = reader.result;
            bildElement.style.maxWidth = '100%';
            bildAnzeige.innerHTML = '';
            bildAnzeige.appendChild(bildElement);
          }
      
          reader.readAsDataURL(ausgewähltesBild);
        }
      });
  }