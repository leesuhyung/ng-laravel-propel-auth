<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Propel\Runtime\Util\PropelModelPager;

trait ApiResponse
{

    /**
     * @param Request $request
     * @param array $data
     * @param PropelModelPager|null $paginate
     * @param array $offsets
     * @return \Illuminate\Http\JsonResponse
     * @internal param null $offset
     */
    public function successToJson(Request $request, $data = [], PropelModelPager $paginate = null, $offsets = null)
    {
        $output = [
            'status' => 200,
            'statusText' => 'OK',
//            'headers' => $request->headers,
//            'config' => [
//                'requestData' => $request->all()
//            ],
            'data' => $data,
        ];

        if (!is_null($paginate)) {
            $output['paginate'] = [
                'count' => $paginate->count(),
                'firstIndex' => $paginate->getFirstIndex(),
                'firstPage' => $paginate->getFirstPage(),
                'lastIndex' => $paginate->getLastIndex(),
                'lastPage' => $paginate->getLastPage(),
                'links' => $paginate->getLinks(),
                'nbResults' => $paginate->getNbResults(),
                'nextPage' => $paginate->getNextPage(),
                'maxPerPage' => $paginate->getMaxPerPage(),
                'page' => $paginate->getPage(),
                'previousPage' => $paginate->getPreviousPage(),
            ];
        }

        if (!is_null($offsets)) {
            $output['offsets'] = [
                'more' => $offsets['more'],
                'offset' => $offsets['offset']
            ];
        }

        return response()->json($output, 200);
    }

    /**
     * @param Request $request
     * @param array $error
     * @return void
     * @throws \Exception
     */
    public function failToJson(Request $request, $error = [])
    {
        throw new \Exception($error);
    }

}