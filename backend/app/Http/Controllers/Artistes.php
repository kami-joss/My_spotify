<?php

namespace App\Http\Controllers;

class Artistes extends Controller
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

    public function getAllArtistes () {
        $results = app('db')->select("SELECT * FROM artists");
        return $results;
    }

    public function getArtiste ($id) {
        $result = app('db')->select("SELECT * FROM artists WHERE id = $id");
        return $result;
    }

    public function getAllAlbumsOf ($id) {
        $results = app('db')->select("SELECT * FROM albums WHERE artist_id = $id");
        return $results;
    }

    public function getAlbumOf ($idArtiste, $idAlbum) {
        $result = app('db')->select("SELECT * FROM albums WHERE artist_id = $idArtiste AND id = $idAlbum");
        return $result;
    }
    //
}
