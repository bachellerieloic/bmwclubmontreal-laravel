<?php

namespace App\Http\Controllers;

use App\Sorties;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SortiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sorties = \App\Sorties::whereNotNull('id');

        if(request()->has('title'))
            $sorties->where('title','like','%'.request('title').'%');

        $sorties->orderBy(request('sortBy'),request('order'));

        return $sorties->paginate(request('pageLength'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Sorties  $sorties
     * @return \Illuminate\Http\Response
     */
    public function show(Sorties $sorties)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Sorties  $sorties
     * @return \Illuminate\Http\Response
     */
    public function edit(Sorties $sorties)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Sorties  $sorties
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sorties $sorties)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Sorties  $sorties
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sorties $sorties)
    {
        //
    }
}
