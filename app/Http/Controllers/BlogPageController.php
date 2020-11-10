<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Articl;
use Illuminate\Support\Facades\DB;

class BlogPageController extends Controller
{
    public function getArticles()
    {
        $articles = Articl::orderBy('created_at', 'desc')->take(10)->get();
        foreach ($articles as &$article) {
            $sports = $article->sport()->get();
            foreach ($sports as $sport) {
                $article->categories = $sport->name;
            }
        }

        return response()->json(['msg' => 'Articls', 'data' => $articles, 'status' => 'Successeful']);
    }

    public function getArticle(Request $request)
    {
        $articl = Articl::where('id', '=', $request->id)->first();

        return response()->json(['msg' => 'Articl', 'data' => $articl, 'status' => 'Successeful']);
    }

    public function articlesPagination(Request $request)
    {
        $data = new \stdClass();
        $data->curent_page_articles = empty($request->prev_next) ?
            Articl::whereBetween('id', [$request->id - 5, $request->id - 1])->get() :
            Articl::whereBetween('id', [$request->id + 1, $request->id + 5])->get();
        $last_raw  = DB::table('articls')->orderBy('created_at', 'desc')->first();
        $data->next = 1;
        foreach ($data->curent_page_articles as &$curent_page_article) {
                $sports = $curent_page_article->sport()->get();
                foreach ($sports as $sport) {
                    $curent_page_article->categories = $sport->name;
                }
            if ($curent_page_article->id >= $last_raw->id) {
                $data->next = 0;
            }
        }

        return response()->json(['msg' => 'Curent Page Articls', 'data' => $data, 'status' => 'Successeful']);
    }

    public function articlesSidebar(Request $request)
    {
        $data = new \stdClass();
        $data->first_sport = Articl::where('categories', '=', '1')->take(3)->get();
        foreach ($data->first_sport as &$article) {
            $sports = $article->sport()->get();
            foreach ($sports as $sport) {
                $article->categories = $sport->name;
            }
        }
        $data->second_sport = Articl::where('categories', '=', '8')->take(3)->get();
        foreach ($data->second_sport as &$article) {
            $sports = $article->sport()->get();
            foreach ($sports as $sport) {
                $article->categories = $sport->name;
            }
        }
        $data->third_sport = Articl::where('categories', '=', '24')->take(3)->get();
        foreach ($data->third_sport as &$article) {
            $sports = $article->sport()->get();
            foreach ($sports as $sport) {
                $article->categories = $sport->name;
            }
        }

        return response()->json(['msg' => 'Articls', 'data' => $data, 'status' => 'Successeful']);
    }
}
