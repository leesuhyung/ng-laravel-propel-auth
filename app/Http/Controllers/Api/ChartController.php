<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Models\BoardQuery;
use App\Models\UserQuery;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Propel\Runtime\ActiveQuery\Criteria;

class ChartController extends Controller
{
    use ApiResponse;

    /**
     * Display a counting of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $users = UserQuery::create()
            ->count();

        $boards = BoardQuery::create()
            ->count();

        $data = [
            'Users' => $users,
            'Boards' => $boards
        ];

        return $this->successToJson(
            $request,
            $data
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Propel\Runtime\Exception\PropelException
     */
    public function data(Request $request)
    {
        $data = [];

        $min_date = Carbon::now();
        $min_date->subDays($request->get('subday'))->setToStringFormat('Y-m-d');

        $max_date = Carbon::now();

        $users = UserQuery::create()
            ->filterByCreatedAt(array("min" => $min_date." 00:00:00", "max" => $max_date." 23:59:59"))
            ->withColumn('count(user.id)', 'user_count')
            ->withColumn('substring(created_at, 1, 10)', 'dates')
            ->groupBy('dates')
            ->select(array('dates', 'user_count'))
            ->find();

        $data['Users'] = $users;

        $boards = BoardQuery::create()
            ->filterByCreatedAt(array("min" => $min_date." 00:00:00", "max" => $max_date." 23:59:59"))
            ->withColumn('count(board.id)', 'board_count', Criteria::CONTAINS_ALL)
            ->withColumn('substring(created_at, 1, 10)', 'dates')
            ->groupBy('dates')
            ->select(array('dates', 'board_count'))
            ->find();

        $data['Boards'] = $boards;

        return $users."/".$boards;

        // TODO : https://okky.kr/article/350544 참고. row 가 없는 컬럼값은 0 으로 치환할 수 없다.

        /*return $this->successToJson(
            $request,
            $data
        );*/
    }
}