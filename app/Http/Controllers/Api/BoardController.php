<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiResponse;
use App\Models\Board;
use App\Models\BoardQuery;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Propel\Runtime\ActiveQuery\Criteria;

class BoardController extends Controller
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
        $boards = BoardQuery::create()
            ->filters($request->get('filters'))
            ->orderById(Criteria::DESC)
            ->paginate($request->get('page', 1), $request->get('limit', env('DEFAULT_LIMIT')));

        return $this->successToJson(
            $request,
            $boards->toArray(),
            $boards
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Propel\Runtime\Exception\PropelException
     */
    public function store(Request $request)
    {
        $board = new Board();
        $board->setUser(Auth::user());
        $board->setEntity($request->get('entity'));
        $board->setTitle($request->get('title'));
        $board->setContents($request->get('contents'));
        $board->save();

        return $this->successToJson(
            $request,
            $board->toArray()
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, $id)
    {
        $board = BoardQuery::create()
            ->findOneById($id);

        if (is_null($board)) {
            return abort(404);
        }

        return $this->successToJson(
            $request,
            $board->toArray()
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\JsonResponse
     * @throws \Propel\Runtime\Exception\PropelException
     */
    public function update(Request $request, $id)
    {
        $board = BoardQuery::create()
            ->findOneById($id);

        if (is_null($board)) {
            return abort(404);
        }

        $board->setEntity($request->get('entity'));
        $board->setTitle($request->get('title'));
        $board->setContents($request->get('contents'));
        $board->save();

        return $this->successToJson(
            $request,
            $board->toArray()
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\JsonResponse
     * @throws \Propel\Runtime\Exception\PropelException
     */
    public function destroy(Request $request, $id)
    {
        $board = BoardQuery::create()
            ->findOneById($id);

        if (is_null($board)) {
            return abort(404);
        }

        $board->delete();

        return $this->successToJson(
            $request,
            $board->toArray()
        );
    }
}
