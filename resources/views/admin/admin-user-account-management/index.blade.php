@extends('admin.index')

@section('content')

    <div class="col-12">
        <div class="col-12 title-and-add-link-container">
            <div class="page-title">User Account Management</div>
        </div>
        <table class="col-12 row blog-table">
            <thead class="col-12 row table-header-container">
            <tr class="col-12 row ">
                <th class="col-2">Name</th>
                <th class="col-2">Email</th>
                <th class="col-2">Birthday</th>
                <th class="col-2">Country</th>
                <th class="col-2">Plans</th>
                <th class="col-2">Role</th>
            </tr>
            </thead>
            <tbody class="col-12 row table-body-container" id="table-body-container">
            @foreach ($users as $user)
                <tr class="col-12 row user-container">
                    <td class="col-2"><a href="{{url('/admin/user-account-management/show/' . $user->id)}}" class="user-name">{{ $user->name }}</a></td>
                    <td class="col-2">{{ $user->email }}</td>
                    <td class="col-2">{{ $user->birthday }}</td>
                    <td class="col-2">{{ $user->country }}</td>
                    @if( !empty($user->paid_plans))
                            <td class="col-2"><a href="{{url('/admin/user-account-management/show/' . $user->id)}} ">Show plans</a></td>
                    @else
                        <td class="col-2">No plans</td>
                    @endif
                    @if( $user->is_admin !=  1)
                        <td class="col-2">User</td>
                    @else
                        <td class="col-2">Admin</td>
                    @endif
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
    <div class="pagination-container">
        {{ $users->links() }}
    </div>
@endsection

