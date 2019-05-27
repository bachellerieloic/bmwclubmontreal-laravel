<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="Loic Bachellerie - BmwClubMontreal">
        <title>{{env('APP_NAME')}}</title>
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <link rel="shortcut icon" href="/images/favicon.png">
    </head>
    <body class="fix-header fix-sidebar">
        <img src="/images/logo-bmw.png" /><br>
        <a href="/app/login">Login</a>
        <a href="/app/register">Register</a>
    </body>
</html>
