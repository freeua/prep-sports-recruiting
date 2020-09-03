<?php

namespace App\Http\Controllers\Admin;

use App\Articl;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdminBlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articls = Articl::paginate(5);
        return view('admin.admin-blog.index')->with('articls', $articls);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.admin-blog.add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $image = $request->file('image');

        $articl = new Articl();

        $articl->categories = $request->input('categories');
        $articl->title = $request->input('title');
        $articl->content = $request->input('content');
        $articl->image_link = !empty($image) ? $request->file('image')->store('uploads', 'public') : '';

        $articl->save();

        return redirect()->route('admin-blog');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id = null, $articl = null)
    {
        if(isset($id)) {
            $articl = Articl::where('id', '=', $id)->first();
        }

        return view('admin.admin-blog.show', compact('articl'));

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $articl = Articl::where('id', '=', $id)->first();

        return view('admin.admin-blog.edit', compact('articl'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $image = $request->file('image');

        $articl = Articl::where('id', '=', $request->input('id'))->first();

        $articl->categories = $request->input('categories');
        $articl->title = $request->input('title');
        $articl->content = $request->input('content');
        if(!empty($image)) {
            $articl->image_link = $request->file('image')->store('uploads', 'public');
        }

        $articl->save();

        return redirect()->route('admin-blog-show', ['articl' => $articl]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $articl = Articl::where('id', '=', $id)->first()->delete();
        return redirect()->route('admin-blog');
    }
}
