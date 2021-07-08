<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/albums', "Albums@getAllAlbums");
$router->get('/albums/{id}', "Albums@getAlbum");
$router->get('/artistes', "Artistes@getAllArtistes");
$router->get('/artistes/{id}', "Artistes@getArtiste");
$router->get('/artistes/{id}/albums', "Artistes@getAllAlbumsOf");
$router->get('/artistes/{idArtiste}/albums/{idAlbum}', "Artistes@getAlbumOf");
$router->get('/albums/{id}/tracks', "Albums@getTracks");
$router->get('/accueil', "Albums@getRandomTracks");
$router->get('/genres', "Genres@getAllgenders");
$router->get('/genres/{id_genre}/', "Genres@getAlbumsGender");
