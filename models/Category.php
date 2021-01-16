<?php

require_once('DBAbstractModel.php');

class Category extends DBAbstractModel {
	public $id_category;
	public $name;


	function __construct() {
		$this->db_name = "a16joeigljim_pr";
	}

	function __toString() {
		return "(" . $this->id_category . ", " . $this->name . ")";
	}

	public function select() {
		$this->query = "SELECT * FROM Category";
		$this->get_results_from_query();
		return $this->rows;
	}
	public function selectById($id_category = "") {
		$this->query = "SELECT * FROM Category WHERE id_category='$id_category'";
		$this->get_results_from_query();
		return $this->rows;
	}

	//FUNCIONA
	public function insert($name = "") {
		$this->query = "INSERT INTO Category (name)
                VALUES ('$name')";
		$this->execute_single_query();
	}



	public function update($name = "", $id_category = "") {
		$this->query = "UPDATE Category name='$name' WHERE id_category='$id_category'";
		$this->execute_single_query($this->query);
	}

	public function delete($id_category = "") {
		$this->query = "DELETE FROM Category WHERE id_category ='$id_category'";
		$this->execute_single_query($this->query);
	}

	public function selectExistsCategory($id_category = "") {
		$this->query = "SELECT EXISTS(SELECT * FROM Category WHERE id_category ='$id_category') ";
		$this->get_results_from_query();
		return $this->rows[0];
	}
}
