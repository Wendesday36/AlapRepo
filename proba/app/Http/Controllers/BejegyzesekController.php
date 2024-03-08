<?php

namespace App\Http\Controllers;

use App\Models\Bejegyzesek;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BejegyzesekController extends Controller
{
    public function index(){
       /*  $bejegyzesek = DB::select(
            'SELECTosztaly_id,tevekenysegeks.tevekenyseg_nev,tevekenysegeks.pontszam,allapot
            from bejegyzeseks
            inner join tevekenysegeks on bejegyzeseksz.tevekenyseg_id = tevekenysegeks.id
            order by 
            '
        ); */
        $bejegyzesek = Bejegyzesek::all();
        return response()->json($bejegyzesek);
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
