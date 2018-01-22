<?php

namespace App\Models;

use App\Models\Base\BoardQuery as BaseBoardQuery;

/**
 * Skeleton subclass for performing query and update operations on the 'board' table.
 *
 *
 *
 * You should add additional methods to this class to meet the
 * application requirements.  This class will only be generated as
 * long as it does not already exist in the output directory.
 *
 */
class BoardQuery extends BaseBoardQuery
{
    public function filters($filters)
    {
        if (empty($filters)) {
            return $this;
        }

        $filters = json_decode($filters);

        if (!is_object($filters) || count($filters) < 1) {
            return $this;
        }

        foreach ($filters as $name => $value) {
            if ($name == 'entity' && !empty($value)) {
                $this->filterByEntity($value);
            }
        }

        return $this;
    }
}
