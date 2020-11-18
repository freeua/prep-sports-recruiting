@extends('admin.index')

@section('content')

    <div class="col-12">
        <div class="col-12 title-and-add-link-container">
            <div class="page-title">Articl Show Page</div>
            <a href="{{url('/admin/blog')}}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Back</a>
        </div>
        <div class="d-flex my-5 table-body-container align-content-center">
            <ul class="col-10 column-box">
                <li class="card border-left-primary shadow py-2 my-3"><div class="d-flex justify-content-between px-5"><div>Categories</div><div class="text-dark">{{ $articl->categories }}</div></div></li>
                <li class="card border-left-primary shadow py-2 my-3"><div class="d-flex justify-content-between px-5"><div>Title</div><div class="text-dark">{{ $articl->title }}</div></div></li>
                <li class="card border-left-primary shadow py-2 my-3"><div class="d-flex justify-content-between px-5"><div>Content</div><div class="text-dark mx-2">{{ $articl->content }}</div></div></li>
                <li class="card border-left-primary shadow py-2 my-3"><div class="d-flex justify-content-between px-5"><div>Images</div><div class="text-dark">@if( !empty($articl->image_link) )
                                <div class="col-3"><div class="img-container"><img src="{{ asset('/storage/' . $articl->image_link ) }}"/></div></div>
                            @else
                                <div class="">No image</div>
                            @endif</div></div></li>
            </ul>
            <div class="py-2 my-3 mx-5 d-flex">
                <div class=""><div><a href="{{ url('/admin/blog/edit/' . $articl->id) }}" class="btn btn-primary btn-sm mr-2 action-button">Edit</a></div></div>
                <div class=""><div><a href="{{ url('/admin/blog/delete/' . $articl->id) }}" class="btn btn-danger btn-sm mr-2 action-button">Delete</a></div></div>
            </div>
        </div>
    </div>
@endsection
