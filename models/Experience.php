<?php

require_once('DBAbstractModel.php');
//require_once('enums/type.php');

class Experience extends DBAbstractModel {
	public $id_experience;
	public $title;
	public $description;
	public $reported;
	public $created;
	public $id_category;
	public $id_user;
	public $state;
	public $image;
	public $location;
	public $rate_p;
	public $rate_n;

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
		$this->query = "SELECT * FROM Experience";
		$this->get_results_from_query();
		for ($i = 0; $i < count($this->rows); $i++)
			$resultSet[] = $this->rows[$i];

		return $resultSet;
	}

	public function selectByUser($id_user = "") {
		if ($id_user != "") {
			$this->query = "SELECT * FROM Experience WHERE id_user='$id_user'";
			$this->get_results_from_query();
			return $this->rows;
		}
	}

	//FUNCIONA
	public function insert($experience = array()) {
		$title = $experience['title'];
		$description = $experience['description'];
		$id_category = $experience['id_category'];
		$id_user = $experience['id_user'];
		$state = $experience['state'];
		$location = $experience['location'];
		$image = $experience['image'];

		$this->query = "INSERT INTO Experience (title, description, created, id_category, id_user, state, location, image)
                VALUES ('$title','$description', CURRENT_TIMESTAMP(), $id_category, '$id_user', '$state', '$location' , '$image')";
		$this->execute_single_query();
	}



	public function update($experience = array()) {
		$id_experience = $experience['id_experience'];
		$title = $experience['title'];
		$description = $experience['description'];
		// $id_category = $experience['id_category'];
		// $location = $experience['location'];
		// $image = $experience['image'];

		// $this->query = "UPDATE Experience SET id_category='$id_category', title='$title' ,description='$description', id_category = '$id_category', location = '$location', image = '$image' WHERE id_experience='$id_experience'";
		$this->query = "UPDATE Experience SET title='$title' ,description='$description' WHERE id_experience='$id_experience'";
		$this->execute_single_query($this->query);

		// $this->query = "SELECT EXISTS(SELECT * FROM Experience WHERE id_experience ='$id_experience' AND title ='$title' AND description='$description' AND id_category='$id_category' AND location='$location' AND image='$image') ";
		// $this->get_results_from_query();
		// return $this->rows[0];
	}

	public function updateState($experience = array()) {
		$id_experience = $experience['id_experience'];
		$state = $experience['state'];

		$this->query = "UPDATE Experience SET state = '$state' WHERE id_experience='$id_experience'";
		$this->execute_single_query($this->query);

		$this->query = "SELECT EXISTS(SELECT * FROM Experience WHERE id_experience ='$id_experience' AND state ='$state') ";
		$this->get_results_from_query();

		return $this->rows[0];
	}

	public function updateRate($experience = array()) {
		$id_experience = $experience['id_experience'];
		$rate_n = $experience['rate_n'];
		$rate_p = $experience['rate_p'];

		$this->query = "UPDATE Experience SET rate_n='$rate_n', rate_p='$rate_p' WHERE id_experience='$id_experience'";
		$this->execute_single_query($this->query);

		$this->query = "SELECT EXISTS(SELECT * FROM Experience WHERE id_experience ='$id_experience' AND rate_n ='$rate_n' AND rate_p ='$rate_p') ";
		$this->get_results_from_query();

		return $this->rows[0];
	}

	public function updateReport($experience = array()) {
		$id_experience = $experience['id_experience'];
		$reported = $experience['reported'];

		$this->query = "UPDATE Experience SET reported='$reported' WHERE id_experience='$id_experience'";
		$this->execute_single_query($this->query);

		$this->query = "SELECT EXISTS(SELECT * FROM Experience WHERE id_experience ='$id_experience' AND reported ='$reported') ";
		$this->get_results_from_query();

		return $this->rows[0];
	}

	public function delete($id_experience = "") {
		$this->query = "DELETE FROM Experience WHERE id_experience ='$id_experience'";
		$this->execute_single_query($this->query);
	}

	public function selectExistsExperience($experience = array()) {

		$title = $experience['title'];
		$description = $experience['description'];
		$id_category = $experience['id_category'];
		$id_user = $experience['id_user'];
		$state = $experience['state'];
		$location = $experience['location'];

		if ($experience['query'] == 2) {
			$this->query = "SELECT EXISTS(SELECT * FROM Experience WHERE id_user ='$id_user' AND state ='$state' AND title='$title' AND description='$description' AND id_category='$id_category' AND location='$location') ";
			$this->get_results_from_query();
		}
		return $this->rows[0];
	}

	public function selectById($id_Experience = "") {
		// $this->query = "SELECT EXISTS(SELECT * FROM Experience WHERE id_experience ='$id_Experience') ";
		$this->query = "SELECT * FROM Experience WHERE id_experience ='$id_Experience'";
		$this->get_results_from_query();
		return $this->rows[0];
	}
	public function selectById2($id_Experience = "") {
		$this->query = "SELECT EXISTS(SELECT * FROM Experience WHERE id_experience ='$id_Experience') ";
		// $this->query = "SELECT * FROM Experience WHERE id_experience ='$id_Experience'";
		$this->get_results_from_query();
		return $this->rows[0];
	}
}
