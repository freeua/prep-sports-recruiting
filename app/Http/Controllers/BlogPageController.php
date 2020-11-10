<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Articl;
use Illuminate\Support\Facades\DB;

class BlogPageController extends Controller
{
    public function getArticles()
    {
        $articls = Articl::orderBy('created_at', 'desc')->take(10)->get();

        return response()->json(['msg' => 'Articls', 'data' => $articls, 'status' => 'Successeful']);
    }

    public function getArticle(Request $request)
    {
        $articl = Articl::where('id', '=', $request->id)->first();

        return response()->json(['msg' => 'Articl', 'data' => $articl, 'status' => 'Successeful']);
    }

    public function articlesPagination(Request $request)
    {
        $data = new \stdClass();
        $data->curent_page_articls = empty($request->prev_next) ?
            DB::table('articls')->whereBetween('id', [$request->id - 5, $request->id - 1])->get() :
            DB::table('articls')->whereBetween('id', [$request->id + 1, $request->id + 5])->get();
        $last_raw  = DB::table('articls')->orderBy('created_at', 'desc')->first();
        $data->next = 1;
        foreach ($data->curent_page_articls as &$curent_page_articl) {
            if ($curent_page_articl->id >= $last_raw->id) {
                $data->next = 0;
            }
        }

        return response()->json(['msg' => 'Curent Page Articls', 'data' => $data, 'status' => 'Successeful']);
    }
}
