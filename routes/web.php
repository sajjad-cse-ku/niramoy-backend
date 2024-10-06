<?php

use App\Models\Category;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia; // We are going to use this class to render React components

//Route::get('/', function () {
//    return view('welcome');
//});

Route::get('/test', function () {
    return Inertia::render('Layout/MainLayout'); // This will get component Test.jsx from the resources/js/Pages/Test.jsx
});
Route::get('/appointment', function () {
    return "appointment"; // This will get component Test.jsx from the resources/js/Pages/Test.jsx
});

Route::get('/category', function () {
    $categories = Category::getNestedCategories();
    return $categories;
});
