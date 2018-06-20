<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CorsMiddleware
{
  public function handle(Request $request, Closure $next)
  {
    if ($request->isMethod('OPTIONS')) {
      $response = response('', 200);

      $response->header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
      ->header('Access-Control-Allow-Headers', 'Token, Content-Type');
    } else {
    $response = $next($request);
    }

    $response->header('Access-Control-Allow-Origin', '*');
    return $response;
  }
}
