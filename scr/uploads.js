function uploadFile(catNumber, fileInput) {
    var storage = firebase.storage();

    

    //In Einzelliste
    var fileRef = storage.ref('Kategorie '+ catNumber + '/' +fileInput);
    var file = document.getElementById('fileInput').files[0];
    var uploadTask = fileRef.put(file);
    
    //In Gesamtliste
    var fileRef = storage.ref('Alle Bilder/fileInput');
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