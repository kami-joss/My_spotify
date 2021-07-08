<?php

namespace App\Http\Controllers;

class Genres extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }
    
    public function getAllgenders() {
        $result = app('db')->select("SELECT * FROM genres");
        return $result;
    }
    public function getAlbumsGender($id_genre) {
        $result = app('db')->select("SELECT * FROM albums WHERE ");
    }
}