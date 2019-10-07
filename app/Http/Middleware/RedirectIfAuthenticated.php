<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
//        if (Auth::guard($guard)->check()) {
//            return redirect('/home');
//        }

        $allow_origin = [
            'http://localhost',
            'http://localhost:3000',
            'http://localhost:8000',
            'http://localhost:8080',
        ];

        if(isset($_SERVER['HTTP_ORIGIN']) &&
            in_array($_SERVER['HTTP_ORIGIN'], $allow_origin)) {
            header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Secret');
            header('Access-Control-Max-Age: 120');
        }

        return $next($request);
    }
}
