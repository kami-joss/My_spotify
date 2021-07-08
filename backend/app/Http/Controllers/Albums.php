<?php

namespace App\Http\Controllers;

class Albums extends Controller
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

    public function getAllAlbums() {
        $results = app('db')->select("SELECT * FROM albums");
        return $results;
    }

    public function getAlbum ($id) {
        $result = app('db')->select("SELECT * FROM albums WHERE id = $id");
        return $result;
    }

    public function getTracks ($id) {
        $results = app('db')->select("SELECT * FROM tracks WHERE album_id = $id");
        return $results;
    }

    // public function getRandomTrack () {
    //     $results = app('db')->select("SELECT ") 
    // }

    //
}
