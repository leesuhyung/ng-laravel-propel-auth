<?php

namespace App\Models;

use App\Models\Base\Board as BaseBoard;
use Propel\Runtime\Exception\PropelException;
use Propel\Runtime\Map\TableMap;

/**
 * Skeleton subclass for representing a row from the 'board' table.
 *
 *
 *
 * You should add additional methods to this class to meet the
 * application requirements.  This class will only be generated as
 * long as it does not already exist in the output directory.
 *
 */
class Board extends BaseBoard
{
    public function toArray($keyType = TableMap::TYPE_PHPNAME, $includeLazyLoadColumns = true, $alreadyDumpedObjects = array(), $includeForeignObjects = false)
    {
        $data = parent::toArray($keyType, $includeLazyLoadColumns, $alreadyDumpedObjects, $includeForeignObjects);
        if (is_array($data)) {
            try {
                if ($this->getUser()) {
                    $data['User'] = $this->getUser()->toArray();
                }
            } catch (PropelException $e) {
            }
        }

        return $data;
    }
}
