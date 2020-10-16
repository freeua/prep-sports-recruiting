@component('mail::message')
# Introduction

<br>
{{ 'email: ' . $email }}
<br>
{{ 'subject: ' . $subject }}
<br>
{{ 'league: ' . $league }}
<br>
{{ 'question: ' }}
<br>
{{$question }}
<br>

{{-- @component('mail::button', ['url' => '']) --}}
{{-- Button Text --}}
{{-- @endcomponent --}}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
