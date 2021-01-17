<?php

require_once('DBAbstractModel.php');
//require_once('enums/type.php');

class User extends DBAbstractModel {
	public $id_user;
	public $name;
	public $password;
	public $type;
	public $email;

	function __construct() {
		$this->db_name = "a16joeigljim_pr";
	}

	function __toString() {
		return "(" . $this->id_user . ", " . $this->name . ", " . $this->password . ", " . $this->type . ", " . $this->email . ")";
	}

	/*function __destruct() {
    unset ($this);
    }*/

	public function select() {
		$this->query = "SELECT * FROM User";
		$this->get_results_from_query();
		for ($i = 0; $i < count($this->rows); $i++) {
			$resultSet[] = $this->rows[$i];
			json_encode($this->get_results_from_query());
		}

		return $resultSet;
	}

	public function selectByUserName($id_user = "") {
		if ($id_user != "") {
			$this->query = "SELECT * FROM User WHERE id_user='$id_user'";
			$this->get_results_from_query();
			for ($i = 0; $i < count($this->rows); $i++) {
				$resultSet[] = $this->rows[$i];
				//json_encode($this->get_results_from_query());
				return $this->rows;
			}
		}
	}

	//FUNCIONA
	public function insert($userData = array()) {
		$id_user = $userData['id_user'];
		$password = $userData['password'];
		$password = hash('sha512', $password);
		$type = $userData['type'];
		$name = $userData['name'];
		$email = $userData['email'];
		$this->query = "INSERT INTO User (id_user, name, password, type, email)
                VALUES ('$id_user','$name', '$password', $type, '$email')";
		$this->execute_single_query();
		if($this){
			echo'
			<script>
			 alert("Se ha registrado correctamente");
			 window.location="../index.html";
			</script> 
			 ';
		}else {
			echo'
			<script>
			 alert("Inténtalo de nuevo, usuario no almacenado");
			 window.location="../index.html";
			</script> 
			 ';
		}
	}



	public function update($edituser = array()) {
		// print_r($edituser);

		$id_user = $edituser['id_user'];
		$password = $edituser['password'];
		$type = $edituser['type'];
		$name = $edituser['name'];
		$oldIdUser = $edituser['oldIdUser'];
		$email = $edituser['email'];


		$this->query = "UPDATE User SET id_user='$id_user', name='$name' ,password='$password', type = $type, email = '$email' WHERE id_user='$oldIdUser'";
		$this->execute_single_query($this->query);
	}

	public function delete($id_user = "") {
		$this->query = "DELETE FROM User WHERE id_user ='$id_user'";
		$this->execute_single_query($this->query);
	}

	public function selectExistsUsers($edituser = array()) {

		$id_user = $edituser['id_user'];

		if ($edituser['query'] == 2) {
			$password = $edituser['password'];
			$type = $edituser['type'];
			$name = $edituser['name'];
			$email = $edituser['email'];
			$this->query = "SELECT EXISTS(SELECT * FROM User WHERE id_user ='$id_user' AND password='$password' AND type=$type AND email='$email' AND name='$name') ";
			$this->get_results_from_query();
			return $this->rows[0];
		} else {
			$this->query = "SELECT EXISTS(SELECT * FROM User WHERE id_user ='$id_user') ";
			$this->get_results_from_query();
			return $this->rows[0];
		}
	}
}
