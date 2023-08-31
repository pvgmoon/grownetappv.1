<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Provider extends Model
{
    use HasFactory;

    protected $table = 'providers';
    protected $fillable = [
        'id', 
        'name'
    ];
    public $timestamps = false;

    public function scopeProvidersAll($query){
        return $query->select('id', 'name');
    }
}
