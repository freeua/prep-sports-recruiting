@extends('admin.index')

@section('content')
<div class="add-edit-page-container">
    <div class="title-and-back-link-container">
        <div class="page-title">Edit Articl</div>
        <a href="{{url('/admin/blog')}}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Back</a>
    </div>
    <div class="articl-form-container">
        {!! Form::open(['url' => 'admin/blog/update/', 'method' => 'POST', 'files' => true]) !!}
        {!! Form::hidden('id', $articl->id); !!}
        {!! Form::label('categories', 'Categories', ['class' => 'form-label']);!!}
        {!! Form::text('categories', $articl->categories, ['class' => 'form-categories card border-left-primary shadow py-2']); !!}
        {!! Form::label('title', 'Title', ['class' => 'form-label']);!!}
        {!! Form::text('title', $articl->title, ['class' => 'form-title card border-left-primary shadow py-2']); !!}
        {!! Form::label('content', 'Content', ['class' => 'form-label']);!!}
        {!! Form::textarea('content', $articl->content, ['class' => 'form-content card border-left-primary shadow py-2']); !!}

        {!! Form::label('image', 'Image', ['class' => 'form-label custom-label-file card border-left-primary shadow py-2']);!!}

        {!! Form::file('image', ['class' => 'form-image card border-left-primary shadow py-2']); !!}

        <div class="form-send-container">
            {!! Form::submit('SEND', ['class' => ['form-send d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm']]) !!}
        </div>
        {!! Form::close() !!}
    </div>
</div>
@endsection

