<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Root categories (Level 1)
        $electronics = Category::create(['name' => 'Electronics']);
        $clothing = Category::create(['name' => 'Clothing']);

        // Subcategories of Electronics (Level 2)
        $mobile = Category::create(['name' => 'Mobile Phones', 'parent_id' => $electronics->id]);
        $laptop = Category::create(['name' => 'Laptops', 'parent_id' => $electronics->id]);

        // Subcategories of Clothing (Level 2)
        $menClothing = Category::create(['name' => 'Men’s Clothing', 'parent_id' => $clothing->id]);
        $womenClothing = Category::create(['name' => 'Women’s Clothing', 'parent_id' => $clothing->id]);

        // Subcategories of Mobile Phones (Level 3)
        Category::create(['name' => 'Phone Accessories', 'parent_id' => $mobile->id]);
        Category::create(['name' => 'Phone Cases', 'parent_id' => $mobile->id]);
    }
}
