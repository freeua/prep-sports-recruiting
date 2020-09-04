@extends('admin.index')

@section('content')

    <div class="col-12">
        <div class="col-12 title-and-add-link-container">
            <div class="page-title">Articls Page</div>
            <a href="{{url('/admin/blog/create')}}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Add Articl</a>
        </div>
        <table class="col-12 row blog-table">
            <thead class="col-12 row table-header-container">
                <tr class="col-12 row ">
                    <th class="col-2">Categories</th>
                    <th class="col-2">Title</th>
                    <th class="col-3">Content</th>
                    <th class="col-2">Images</th>
                    <th class="col-1"></th>
                    <th class="col-2">Action</th>
                </tr>
            </thead>
            <tbody class="col-12 row table-body-container">
                @foreach ($articls as $articl)
                    <tr class="col-12 row">
                        <td class="col-2">{{ $articl->categories }}</td>
                        <td class="col-2"><a href="{{url('/admin/blog/show/' . $articl->id)}}">{{ $articl->title }}</a></td>
                        <td class="col-3">{{ $articl->content }}</td>
                        @if( !empty($articl->image_link) )
                            <td class="col-2"><div class="img-container"><img src="{{ asset('/storage/' . $articl->image_link ) }}"/></div></td>
                        @else
                            <td class="col-2">Not image</td>
                        @endif
                        <td class="col-1"></td>
                        <td class="col-1"><div><a href="{{ url('/admin/blog/edit/' . $articl->id) }}" class="btn btn-primary btn-sm mr-2 action-button">Edit</a></div></td>
                        <td class="col-1"><div><a href="{{ url('/admin/blog/delite/' . $articl->id) }}" class="btn btn-danger btn-sm mr-2 action-button">Delite</a></div></td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    <div class="pagination-container">
        {{ $articls->links() }}
    </div>
@endsection
