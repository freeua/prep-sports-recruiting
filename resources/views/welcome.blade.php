<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Prep Sports</title>

        <!-- Fonts -->
{{--        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">--}}
{{--        <link href="/css/app.css" rel="stylesheet" type="text/css">--}}
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    </head>
    <body>
        <div id="root"></div>
        <div assetPath="{{asset ('/storage/')}}"></div>

    <script type="text/javascript" src="/js/index.js"></script>
        <script type="text/javascript">
            window.token = '{{ csrf_token() }}';
            window.assetPath = "{{asset ('/storage/')}}"
        </script>
    </body>
</html>
