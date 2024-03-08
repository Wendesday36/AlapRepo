<?php

namespace App\Http\Controllers;

use App\Models\Tevekenyseg;
use Illuminate\Http\Request;

class TevekenysegController extends Controller
{
    public function index(){
        $tevekenysegek= Tevekenyseg::all();
        return response()->json($tevekenysegek);
    
    }
}
