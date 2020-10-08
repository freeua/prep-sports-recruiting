<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Plan;

class AdminUserAccountManagementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::latest()->paginate(5);
        foreach ($users as $user) {
            $paid_plans = $user->plans()->get();
            foreach ((array)$paid_plans as $paid_plan){
                $user->paid_plans = $paid_plan;
            }
        }

        return view('admin.admin-user-account-management.index')->with('users', $users);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id = null)
    {
        if(isset($id)) {
            $user = User::where('id', '=', $id)->first();
            $paid_plans = $user->plans()->get();
            foreach ((array)$paid_plans as $paid_plan){
                $user->paid_plans = $paid_plan;
            }

        }

        return view('admin.admin-user-account-management.show', compact('user'));
    }
    public function search(Request $request)
    {
        $users = User::where('name', 'LIKE', "%{$request->input_val}%")->latest()->paginate(5);
        foreach ($users as $user) {
            $paid_plans = $user->plans()->get();
            foreach ((array)$paid_plans as $paid_plan){
                $user->paid_plans = $paid_plan;
            }
        }

        return response()->json(['msg' => 'Users', 'data' => $users, 'status' => 'Successeful'], 200);
    }

}
