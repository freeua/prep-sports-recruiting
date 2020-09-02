@extends('admin.index')

@section('content')

    <div>Admin-blog</div>
    <a href="{{url('/admin/admin-blog/create')}}">Add</a>

    <table>
        <thead>
            <tr>
                <th>Categories</th>
                <th>Title</th>
                <th>Content</th>
                <th>Images</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($articls as $articl)
                <tr>
                    <td>{{ $articl->categories }}</td>
                    <td>{{ $articl->title }}</td>
                    <td>{{ $articl->content }}</td>
                </tr>
{{--            <tr><td>{{ $articls->image }}</td></tr>--}}
            @endforeach
        </tbody>
    </table>
@endsection
