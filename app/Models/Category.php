<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    // Define the relationship to the subcategories (children categories)
    public function subcategories()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }
    public static function getNestedCategories()
    {
        // Eager load subcategories to avoid lazy loading issues
        $categories = Category::with('subcategories')->whereNull('parent_id')->get();
        return self::buildCategoryTree($categories);
    }

    // Recursively build the tree of categories
    private static function buildCategoryTree($categories)
    {
        foreach ($categories as $category) {
            // Recursively load subcategories
            $category->subcategories = self::buildCategoryTree($category->subcategories);
        }
        return $categories;
    }
}

