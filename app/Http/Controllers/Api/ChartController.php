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
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

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
     * @throws \Exception
     */
    public function data(Request $request)
    {
        $table = $request->get('table');

        if ($table == 'user') {
            $data = UserQuery::create();
        } else if ($table == 'board') {
            $data = BoardQuery::create();
        } else {
            throw new \Exception('차트 파라미터 값이 유효하지 않습니다.');
        }

        $data = $data->withColumn('count(' . $table . '.id)', 'count')
            ->withColumn('DATE_FORMAT(created_at, "%Y-%m-%d")', 'dates')
            ->groupBy('dates')
            ->select(array('dates', 'count'))
            ->orderBy('dates', 'asc')
            ->limit($request->get('limit'))
            ->find();

        return $this->successToJson(
            $request,
            $data->toArray()
        );

    }
}