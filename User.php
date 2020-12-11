<?php

require_once('DBAbstractModel.php');
//require_once('enums/type.php');

class User extends DBAbstractModel {
  private $id_user;
  private $name;
  private $password;
  private $type;
  
  function __construct() {
    $this->db_name = "a16joeigljim_pr";
    }
  
  function __toString() {
    return "(" . $this->id_user . ", " . $this->name . ", " . $this->password . ", " . $this->type . ")";
  }
  
  /*function __destruct() {
    unset ($this);
  }*/
  
  public function select() {
    $this->query = "SELECT * FROM User";
    $this->get_results_from_query();
    for($i=0; $i<count($this->rows); $i++){
      $resultSet[] = $this->rows[$i];
      //json_encode($this->get_results_from_query());
    }

    foreach($resultSet as $property => $value){
      echo $value["name"] . "<br>";
    }
  }

  public function selectByUserName($id_user=""){
    if($id_user!=""){
      $this->query = "SELECT * FROM User WHERE id_user='$id_user'";
      $this->get_results_from_query();
      for($i=0; $i<count($this->rows); $i++){
        $resultSet[] = $this->rows[$i];
        //json_encode($this->get_results_from_query());
        return $this->rows;
      }       
    }
  }
  
  //FUNCIONA
  public function insert($userData = array()) {
    if (array_key_exists("name", $userData)) {
      $this->select($userData["name"]);
      echo $userData["name"];
      echo $this->name;
      if ($userData["name"]!= $this->name) {
        foreach ($userData as $property => $value)
          $$property = $value;
        $this->query="INSERT INTO User (name, password, type)
                      VALUES ('$name', '$password', '$type')";
        $this->execute_single_query();
      }else
        echo "Este usuario ya ha sido introducido"; 
    }
  }
  
  public function update ($edituser = array()) {
    //$type = new type(type::$userData["type"]);
    foreach ($editUser as $property => $value)
      $$property = $value;
    $this->query = "UPDATE User SET name='$name', password= '$password', type = '$type' WHERE id_user='$id_user'";
    $this->execute_single_query($this->query);
  }
  
  public function delete ($id_user="") {
    $this->query = "DELETE FROM User WHERE id_user ='$id_user'";
    $this->execute_single_query($this->query);
  }
 
    
}

?>