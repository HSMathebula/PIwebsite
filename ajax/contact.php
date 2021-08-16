<?php
if(insset($_POST['name'],$_POST['email'],$_POST['budget'],$_POST['message'])) {
    print_r($_POST);
}