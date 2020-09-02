@extends('admin.index')

@section('content')

    <div>Admin-blog-add</div>
    {!! Form::open(['route' => 'admin-blog-store', 'method' => 'POST', 'files' => true]) !!}
        {!! Form::label('categories', 'Categories', ['class' => '']);!!}
        {!! Form::text('categories'); !!}
        {!! Form::label('title', 'Title', ['class' => '']);!!}
        {!! Form::text('title'); !!}
        {!! Form::label('content', 'Content', ['class' => '']);!!}
        {!! Form::text('content'); !!}
        {!! Form::label('image', 'Image', ['class' => '']);!!}
        {!! Form::file('image'); !!}

        {!! Form::submit('SEND') !!}
    {!! Form::close() !!}
    @endsection
