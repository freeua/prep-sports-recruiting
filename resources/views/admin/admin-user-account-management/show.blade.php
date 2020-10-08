@extends('admin.index')

@section('content')

    <div class="col-12 ">
        <div class="col-12 title-and-add-link-container">
            <div class="page-title">User Show Page</div>
            <a href="{{url('/admin/user-account-management')}}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Back</a>
        </div>
        <div class="my-5">
            <ul class="col-6 column-box ">
                <li class="card border-left-primary shadow py-2 my-3"><div class="d-flex justify-content-between px-5"><div>Name</div><div class="text-dark">{{ $user->name }}</div></div></li>
                <li class="card border-left-primary shadow py-2 my-3"><div class="d-flex justify-content-between px-5"><div>Email</div><div class="text-dark">{{ $user->email }}</div></div></li>
                <li class="card border-left-primary shadow py-2 my-3"><div class="d-flex justify-content-between px-5"><div>Birthday</div><div class="text-dark">{{ $user->birthday }}</div></div></li>
                <li class="card border-left-primary shadow py-2 my-3"><div class="d-flex justify-content-between px-5"><div>Country</div><div class="text-dark">{{ $user->country }}</div></div></li>
                <li class="card border-left-primary shadow py-2 my-3"><div class="d-flex justify-content-between px-5"><div>Plans</div><div class="  text-dark  justify-content-end">
                            @if( !empty($user->paid_plans) )
                                @foreach($user->paid_plans as $plan)
                                    <div class="d-flex justify-content-end  mb-1"><a href="" class="text-right border-bottom-primary">{{ $plan['name'] }}</a></div>
                                @endforeach
                            @else
                                <div class="">No plans</div>
                            @endif</div></div></li>
                <li class="card border-left-primary shadow py-2 my-3"><div class="d-flex justify-content-between px-5"><div>Role</div><div>
                            @if( $user->is_admin !=  1)
                                <div class="">User</div>
                            @else
                                <div class="">Admin</div>
                            @endif</div></div></li>
            </ul>
        </div>
    </div>

@endsection
