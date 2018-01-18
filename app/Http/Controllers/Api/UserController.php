<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiResponse;
use App\Models\User;
use App\Models\UserQuery;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Propel\Runtime\ActiveQuery\Criteria;

class UserController extends Controller
{
    use ApiResponse;

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $users = UserQuery::create()
            ->orderById(Criteria::DESC)
            ->paginate($request->get('page', 1), 10);

        return $this->successToJson(
            $request,
            $users->toArray(),
            $users
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request $request
     * @return void
     * @throws \Exception
     * @throws \Propel\Runtime\Exception\PropelException
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $count = UserQuery::create()
            ->filterByEmail($request->get('email'))
            ->count();

        if ($count > 0) {
            throw new \Exception('already exist email address.');
        }

        $user = new User();
        $user->setName($request->get('name'));
        $user->setEmail($request->get('email'));
        $user->setPassword(bcrypt($request->get('password')));
        $user->save();

        $this->successToJson(
            $request,
            $user->toArray()
        );

    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param  int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, $id)
    {
        $user = UserQuery::create()
            ->findOneById($id);

        if (is_null($user)) {
            return abort(404);
        }

        return $this->successToJson(
            $request,
            $user->toArray()
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @param  int $id
     * @return \Illuminate\Http\JsonResponse
     * @throws \Propel\Runtime\Exception\PropelException
     */
    public function destroy(Request $request, $id)
    {
        $user = UserQuery::create()
            ->findOneById($id);

        if (is_null($user)) {
            return abort(404);
        }

        $user->delete();

        return $this->successToJson(
            $request,
            $user->toArray()
        );
    }
}
