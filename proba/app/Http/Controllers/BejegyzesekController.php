<?php

namespace App\Http\Controllers;

use App\Models\Bejegyzesek;
use Illuminate\Http\Request;

class BejegyzesekController extends Controller
{
    public function index(){
        return Bejegyzesek::all();
    }
    public function show($osztaly_id){
        $bejegyzes = Bejegyzesek::where('osztaly_id', $osztaly_id)
        
        ->get();
        return response()->json($bejegyzes);
    }
    public function store(Request $request){
        $bejegyzes = new Bejegyzesek();
        $bejegyzes->tevekenyseg_id = $request->tevekenyseg_id;
        $bejegyzes->osztaly_id = $request->osztaly_id;
        $bejegyzes->allapot = $request->allapot;

        
        $bejegyzes->save();
    }
}
