<?php
  $fichier = file_get_contents("./fontaines-a-boire.json");

  /*-----------------
    Faire le traitement pour écrire un fichier JSon avec uniquement les 
    fontaines du 3ème arrondissement
   */

  $json = json_decode($fichier,true);
  $json3 = array();

  foreach ($json as $i => &$value) {
    foreach ($json[$i] as $key => $valfields) {
     if ($key=="fields") {
      if (isset($valfields['commune'])) {
       $code = $valfields['commune'];
 
       if ($code=="PARIS 3EME ARRONDISSEMENT") {
        $json3[] = $json[$i]; 
       }
      }
     }
    }
   } 

  print_r($json3);
  ?>
