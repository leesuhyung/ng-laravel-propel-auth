<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Propel\Runtime\Exception\PropelException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        TokenExpiredException::class,
        TokenInvalidException::class,
        JWTException::class,
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        if ($request->ajax()) {
            $status = method_exists($exception, 'getStatusCode')
                ? $exception->getStatusCode()
                : $exception->getCode();

            $message = '';

            if ($exception instanceof TokenExpiredException) {
                $message = 'token_expired';
            } else if ($exception instanceof TokenInvalidException) {
                $message = 'token_invalid';
            } else if ($exception instanceof JWTException) {
                $message = $exception->getMessage() ?: 'could_not_create_token';
            } else if ($exception instanceof NotFoundHttpException) {
                $message = $exception->getMessage() ?: 'not_found';
            } else if ($exception instanceof PropelException) {
                $message = 'bad_request';
            } else if ($exception instanceof ValidationException) {
                $messageList = [];
                foreach ($exception->validator->getMessageBag()->keys() as $key) {
                    $messageList = array_merge($messageList, $exception->validator->getMessageBag()->get($key));
                }
                $message = implode('<br>', $messageList);
            } else if ($exception instanceof Exception){
                $message = $exception->getMessage() ?: 'Something broken :(';
            }

            return response()->json([
                'status' => $status ?: 400,
                'error' => $message,
            ], $status ?: 400);
        }

        if ($exception instanceof NotFoundHttpException) {
            return response()->view('index');
        }

        return parent::render($request, $exception);
    }
}
