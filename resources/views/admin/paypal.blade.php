<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Payment</title>
</head>
<body>

<div class="container">
@foreach($plans as $plan)
    <form action="{{ route('create-payment') }}" method="post">
        @csrf
        <input type="hidden" value="{{$plan->id}}" name="id">
        <input type="submit" value="Pay Now">
    </form>
    @endforeach
{{--    <form action="{{ route('create-agreement','P-92B316452S094591V5E5CDZQ') }}" method="post">--}}
{{--        @csrf--}}
{{--        <input type="submit" value="Subscribe Now">--}}
{{--    </form>--}}
</div>

</body>
</html>
