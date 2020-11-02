<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Articl;
use Illuminate\Support\Facades\DB;

class BlogPageController extends Controller
{
    public function getArticles()
    {
        $articls = Articl::all();

        return response()->json(['msg' => 'Articls', 'data' => $articls, 'status' => 'Successeful']);
    }

    public function getArticle(Request $request)
    {
        $articl = Articl::where('id', '=', $request->id)->first();

        return response()->json(['msg' => 'Articl', 'data' => $articl, 'status' => 'Successeful']);
    }

    public function articlesPagination(Request $request)
    {
        $curent_page_articls = empty($request->prev_next) ?
            DB::table('articls')->whereBetween('id', [$request->id - 11, $request->id - 1])->get() :
            DB::table('articls')->whereBetween('id', [$request->id + 1, $request->id + 11])->get();
        return response()->json(['msg' => 'Curent Page Articls', 'data' => $curent_page_articls, 'status' => 'Successeful']);
    }
}
