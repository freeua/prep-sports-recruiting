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
    public function index(Request $request)
    {
        $header = $request->header();
        if(empty($header['param'])){
            $users = User::latest()->paginate(5);
            foreach ($users as $user) {
                $paid_plans = $user->plans()->get();
                foreach ((array)$paid_plans as $paid_plan){
                    $user->paid_plans = $paid_plan;
                }
            }
            return view('admin.admin-user-account-management.index')->with('users', $users);
        }
         else {
             if(!empty($header['lastid'])){
                 if(!empty($header['prev-next'])) {
                     $users = $header['prev-next'][0] == 0 ?
                         User::where('name', 'LIKE', "%{$header['param'][0]}%")->whereBetween('id', [$header['lastid'][0] + 6, $header['lastid'][0] + 11])->take(5)->latest()->get() :
                         User::where('name', 'LIKE', "%{$header['param'][0]}%")->whereBetween('id', [$header['lastid'][0] - 6, $header['lastid'][0] - 1])->take(5)->latest()->get();
                 } elseif (!empty($header['current-page']) && $header['current-page'][0] > 5) {
                     $users = User::where('name', 'LIKE', "%{$header['param'][0]}%")->whereBetween('id', [$header['current-page'][0] - 6, $header['current-page'][0] - 1])->take(5)->latest()->get();
                 } else {
                     $users = User::where('name', 'LIKE', "%{$header['param'][0]}%")->take(5)->latest()->get();
                 }
            foreach ($users as $user) {
                $paid_plans = $user->plans()->get();
                foreach ((array)$paid_plans as $paid_plan){
                    $user->paid_plans = $paid_plan;
                }
            }
            return response()->json(['msg' => 'Users', 'data' => $users, 'status' => 'Successeful'], 200);
             }
             else {
                 $users = User::where('name', 'LIKE', "%{$header['param'][0]}%")->take(5)->latest()->get();
                 $count = User::where('name', 'LIKE', "%{$header['param'][0]}%")->count();

                 foreach ($users as $user) {
                     $paid_plans = $user->plans()->get();
                     foreach ((array)$paid_plans as $paid_plan){
                         $user->paid_plans = $paid_plan;
                     }
                 }
                 return response()->json(['count' => $count, 'data' => $users, 'status' => 'Successeful'], 200);
             }
         }

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
