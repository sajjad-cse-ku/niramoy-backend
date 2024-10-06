<?php


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/dashboard', function () {
    return Inertia::render('Module/Dashboard/Index'); // This will get component Test.jsx from the resources/js/Pages/Test.jsx
});
