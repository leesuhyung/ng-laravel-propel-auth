<?php

namespace App\Models\Base;

use \Exception;
use \PDO;
use App\Models\Board as ChildBoard;
use App\Models\BoardQuery as ChildBoardQuery;
use App\Models\Map\BoardTableMap;
use Propel\Runtime\Propel;
use Propel\Runtime\ActiveQuery\Criteria;
use Propel\Runtime\ActiveQuery\ModelCriteria;
use Propel\Runtime\ActiveQuery\ModelJoin;
use Propel\Runtime\Collection\ObjectCollection;
use Propel\Runtime\Connection\ConnectionInterface;
use Propel\Runtime\Exception\PropelException;

/**
 * Base class that represents a query for the 'board' table.
 *
 *
 *
 * @method     ChildBoardQuery orderById($order = Criteria::ASC) Order by the id column
 * @method     ChildBoardQuery orderByUserId($order = Criteria::ASC) Order by the user_id column
 * @method     ChildBoardQuery orderByEntity($order = Criteria::ASC) Order by the entity column
 * @method     ChildBoardQuery orderByTitle($order = Criteria::ASC) Order by the title column
 * @method     ChildBoardQuery orderByContents($order = Criteria::ASC) Order by the contents column
 * @method     ChildBoardQuery orderByCreatedAt($order = Criteria::ASC) Order by the created_at column
 * @method     ChildBoardQuery orderByUpdatedAt($order = Criteria::ASC) Order by the updated_at column
 *
 * @method     ChildBoardQuery groupById() Group by the id column
 * @method     ChildBoardQuery groupByUserId() Group by the user_id column
 * @method     ChildBoardQuery groupByEntity() Group by the entity column
 * @method     ChildBoardQuery groupByTitle() Group by the title column
 * @method     ChildBoardQuery groupByContents() Group by the contents column
 * @method     ChildBoardQuery groupByCreatedAt() Group by the created_at column
 * @method     ChildBoardQuery groupByUpdatedAt() Group by the updated_at column
 *
 * @method     ChildBoardQuery leftJoin($relation) Adds a LEFT JOIN clause to the query
 * @method     ChildBoardQuery rightJoin($relation) Adds a RIGHT JOIN clause to the query
 * @method     ChildBoardQuery innerJoin($relation) Adds a INNER JOIN clause to the query
 *
 * @method     ChildBoardQuery leftJoinWith($relation) Adds a LEFT JOIN clause and with to the query
 * @method     ChildBoardQuery rightJoinWith($relation) Adds a RIGHT JOIN clause and with to the query
 * @method     ChildBoardQuery innerJoinWith($relation) Adds a INNER JOIN clause and with to the query
 *
 * @method     ChildBoardQuery leftJoinUser($relationAlias = null) Adds a LEFT JOIN clause to the query using the User relation
 * @method     ChildBoardQuery rightJoinUser($relationAlias = null) Adds a RIGHT JOIN clause to the query using the User relation
 * @method     ChildBoardQuery innerJoinUser($relationAlias = null) Adds a INNER JOIN clause to the query using the User relation
 *
 * @method     ChildBoardQuery joinWithUser($joinType = Criteria::INNER_JOIN) Adds a join clause and with to the query using the User relation
 *
 * @method     ChildBoardQuery leftJoinWithUser() Adds a LEFT JOIN clause and with to the query using the User relation
 * @method     ChildBoardQuery rightJoinWithUser() Adds a RIGHT JOIN clause and with to the query using the User relation
 * @method     ChildBoardQuery innerJoinWithUser() Adds a INNER JOIN clause and with to the query using the User relation
 *
 * @method     \App\Models\UserQuery endUse() Finalizes a secondary criteria and merges it with its primary Criteria
 *
 * @method     ChildBoard findOne(ConnectionInterface $con = null) Return the first ChildBoard matching the query
 * @method     ChildBoard findOneOrCreate(ConnectionInterface $con = null) Return the first ChildBoard matching the query, or a new ChildBoard object populated from the query conditions when no match is found
 *
 * @method     ChildBoard findOneById(int $id) Return the first ChildBoard filtered by the id column
 * @method     ChildBoard findOneByUserId(int $user_id) Return the first ChildBoard filtered by the user_id column
 * @method     ChildBoard findOneByEntity(string $entity) Return the first ChildBoard filtered by the entity column
 * @method     ChildBoard findOneByTitle(string $title) Return the first ChildBoard filtered by the title column
 * @method     ChildBoard findOneByContents(string $contents) Return the first ChildBoard filtered by the contents column
 * @method     ChildBoard findOneByCreatedAt(string $created_at) Return the first ChildBoard filtered by the created_at column
 * @method     ChildBoard findOneByUpdatedAt(string $updated_at) Return the first ChildBoard filtered by the updated_at column *

 * @method     ChildBoard requirePk($key, ConnectionInterface $con = null) Return the ChildBoard by primary key and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 * @method     ChildBoard requireOne(ConnectionInterface $con = null) Return the first ChildBoard matching the query and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 *
 * @method     ChildBoard requireOneById(int $id) Return the first ChildBoard filtered by the id column and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 * @method     ChildBoard requireOneByUserId(int $user_id) Return the first ChildBoard filtered by the user_id column and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 * @method     ChildBoard requireOneByEntity(string $entity) Return the first ChildBoard filtered by the entity column and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 * @method     ChildBoard requireOneByTitle(string $title) Return the first ChildBoard filtered by the title column and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 * @method     ChildBoard requireOneByContents(string $contents) Return the first ChildBoard filtered by the contents column and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 * @method     ChildBoard requireOneByCreatedAt(string $created_at) Return the first ChildBoard filtered by the created_at column and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 * @method     ChildBoard requireOneByUpdatedAt(string $updated_at) Return the first ChildBoard filtered by the updated_at column and throws \Propel\Runtime\Exception\EntityNotFoundException when not found
 *
 * @method     ChildBoard[]|ObjectCollection find(ConnectionInterface $con = null) Return ChildBoard objects based on current ModelCriteria
 * @method     ChildBoard[]|ObjectCollection findById(int $id) Return ChildBoard objects filtered by the id column
 * @method     ChildBoard[]|ObjectCollection findByUserId(int $user_id) Return ChildBoard objects filtered by the user_id column
 * @method     ChildBoard[]|ObjectCollection findByEntity(string $entity) Return ChildBoard objects filtered by the entity column
 * @method     ChildBoard[]|ObjectCollection findByTitle(string $title) Return ChildBoard objects filtered by the title column
 * @method     ChildBoard[]|ObjectCollection findByContents(string $contents) Return ChildBoard objects filtered by the contents column
 * @method     ChildBoard[]|ObjectCollection findByCreatedAt(string $created_at) Return ChildBoard objects filtered by the created_at column
 * @method     ChildBoard[]|ObjectCollection findByUpdatedAt(string $updated_at) Return ChildBoard objects filtered by the updated_at column
 * @method     ChildBoard[]|\Propel\Runtime\Util\PropelModelPager paginate($page = 1, $maxPerPage = 10, ConnectionInterface $con = null) Issue a SELECT query based on the current ModelCriteria and uses a page and a maximum number of results per page to compute an offset and a limit
 *
 */
abstract class BoardQuery extends ModelCriteria
{
    protected $entityNotFoundExceptionClass = '\\Propel\\Runtime\\Exception\\EntityNotFoundException';

    /**
     * Initializes internal state of \App\Models\Base\BoardQuery object.
     *
     * @param     string $dbName The database name
     * @param     string $modelName The phpName of a model, e.g. 'Book'
     * @param     string $modelAlias The alias for the model in this query, e.g. 'b'
     */
    public function __construct($dbName = 'scv', $modelName = '\\App\\Models\\Board', $modelAlias = null)
    {
        parent::__construct($dbName, $modelName, $modelAlias);
    }

    /**
     * Returns a new ChildBoardQuery object.
     *
     * @param     string $modelAlias The alias of a model in the query
     * @param     Criteria $criteria Optional Criteria to build the query from
     *
     * @return ChildBoardQuery
     */
    public static function create($modelAlias = null, Criteria $criteria = null)
    {
        if ($criteria instanceof ChildBoardQuery) {
            return $criteria;
        }
        $query = new ChildBoardQuery();
        if (null !== $modelAlias) {
            $query->setModelAlias($modelAlias);
        }
        if ($criteria instanceof Criteria) {
            $query->mergeWith($criteria);
        }

        return $query;
    }

    /**
     * Find object by primary key.
     * Propel uses the instance pool to skip the database if the object exists.
     * Go fast if the query is untouched.
     *
     * <code>
     * $obj  = $c->findPk(12, $con);
     * </code>
     *
     * @param mixed $key Primary key to use for the query
     * @param ConnectionInterface $con an optional connection object
     *
     * @return ChildBoard|array|mixed the result, formatted by the current formatter
     */
    public function findPk($key, ConnectionInterface $con = null)
    {
        if ($key === null) {
            return null;
        }

        if ($con === null) {
            $con = Propel::getServiceContainer()->getReadConnection(BoardTableMap::DATABASE_NAME);
        }

        $this->basePreSelect($con);

        if (
            $this->formatter || $this->modelAlias || $this->with || $this->select
            || $this->selectColumns || $this->asColumns || $this->selectModifiers
            || $this->map || $this->having || $this->joins
        ) {
            return $this->findPkComplex($key, $con);
        }

        if ((null !== ($obj = BoardTableMap::getInstanceFromPool(null === $key || is_scalar($key) || is_callable([$key, '__toString']) ? (string) $key : $key)))) {
            // the object is already in the instance pool
            return $obj;
        }

        return $this->findPkSimple($key, $con);
    }

    /**
     * Find object by primary key using raw SQL to go fast.
     * Bypass doSelect() and the object formatter by using generated code.
     *
     * @param     mixed $key Primary key to use for the query
     * @param     ConnectionInterface $con A connection object
     *
     * @throws \Propel\Runtime\Exception\PropelException
     *
     * @return ChildBoard A model object, or null if the key is not found
     */
    protected function findPkSimple($key, ConnectionInterface $con)
    {
        $sql = 'SELECT id, user_id, entity, title, contents, created_at, updated_at FROM board WHERE id = :p0';
        try {
            $stmt = $con->prepare($sql);
            $stmt->bindValue(':p0', $key, PDO::PARAM_INT);
            $stmt->execute();
        } catch (Exception $e) {
            Propel::log($e->getMessage(), Propel::LOG_ERR);
            throw new PropelException(sprintf('Unable to execute SELECT statement [%s]', $sql), 0, $e);
        }
        $obj = null;
        if ($row = $stmt->fetch(\PDO::FETCH_NUM)) {
            /** @var ChildBoard $obj */
            $obj = new ChildBoard();
            $obj->hydrate($row);
            BoardTableMap::addInstanceToPool($obj, null === $key || is_scalar($key) || is_callable([$key, '__toString']) ? (string) $key : $key);
        }
        $stmt->closeCursor();

        return $obj;
    }

    /**
     * Find object by primary key.
     *
     * @param     mixed $key Primary key to use for the query
     * @param     ConnectionInterface $con A connection object
     *
     * @return ChildBoard|array|mixed the result, formatted by the current formatter
     */
    protected function findPkComplex($key, ConnectionInterface $con)
    {
        // As the query uses a PK condition, no limit(1) is necessary.
        $criteria = $this->isKeepQuery() ? clone $this : $this;
        $dataFetcher = $criteria
            ->filterByPrimaryKey($key)
            ->doSelect($con);

        return $criteria->getFormatter()->init($criteria)->formatOne($dataFetcher);
    }

    /**
     * Find objects by primary key
     * <code>
     * $objs = $c->findPks(array(12, 56, 832), $con);
     * </code>
     * @param     array $keys Primary keys to use for the query
     * @param     ConnectionInterface $con an optional connection object
     *
     * @return ObjectCollection|array|mixed the list of results, formatted by the current formatter
     */
    public function findPks($keys, ConnectionInterface $con = null)
    {
        if (null === $con) {
            $con = Propel::getServiceContainer()->getReadConnection($this->getDbName());
        }
        $this->basePreSelect($con);
        $criteria = $this->isKeepQuery() ? clone $this : $this;
        $dataFetcher = $criteria
            ->filterByPrimaryKeys($keys)
            ->doSelect($con);

        return $criteria->getFormatter()->init($criteria)->format($dataFetcher);
    }

    /**
     * Filter the query by primary key
     *
     * @param     mixed $key Primary key to use for the query
     *
     * @return $this|ChildBoardQuery The current query, for fluid interface
     */
    public function filterByPrimaryKey($key)
    {

        return $this->addUsingAlias(BoardTableMap::COL_ID, $key, Criteria::EQUAL);
    }

    /**
     * Filter the query by a list of primary keys
     *
     * @param     array $keys The list of primary key to use for the query
     *
     * @return $this|ChildBoardQuery The current query, for fluid interface
     */
    public function filterByPrimaryKeys($keys)
    {

        return $this->addUsingAlias(BoardTableMap::COL_ID, $keys, Criteria::IN);
    }

    /**
     * Filter the query on the id column
     *
     * Example usage:
     * <code>
     * $query->filterById(1234); // WHERE id = 1234
     * $query->filterById(array(12, 34)); // WHERE id IN (12, 34)
     * $query->filterById(array('min' => 12)); // WHERE id > 12
     * </code>
     *
     * @param     mixed $id The value to use as filter.
     *              Use scalar values for equality.
     *              Use array values for in_array() equivalent.
     *              Use associative array('min' => $minValue, 'max' => $maxValue) for intervals.
     * @param     string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @return $this|ChildBoardQuery The current query, for fluid interface
     */
    public function filterById($id = null, $comparison = null)
    {
        if (is_array($id)) {
            $useMinMax = false;
            if (isset($id['min'])) {
                $this->addUsingAlias(BoardTableMap::COL_ID, $id['min'], Criteria::GREATER_EQUAL);
                $useMinMax = true;
            }
            if (isset($id['max'])) {
                $this->addUsingAlias(BoardTableMap::COL_ID, $id['max'], Criteria::LESS_EQUAL);
                $useMinMax = true;
            }
            if ($useMinMax) {
                return $this;
            }
            if (null === $comparison) {
                $comparison = Criteria::IN;
            }
        }

        return $this->addUsingAlias(BoardTableMap::COL_ID, $id, $comparison);
    }

    /**
     * Filter the query on the user_id column
     *
     * Example usage:
     * <code>
     * $query->filterByUserId(1234); // WHERE user_id = 1234
     * $query->filterByUserId(array(12, 34)); // WHERE user_id IN (12, 34)
     * $query->filterByUserId(array('min' => 12)); // WHERE user_id > 12
     * </code>
     *
     * @see       filterByUser()
     *
     * @param     mixed $userId The value to use as filter.
     *              Use scalar values for equality.
     *              Use array values for in_array() equivalent.
     *              Use associative array('min' => $minValue, 'max' => $maxValue) for intervals.
     * @param     string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @return $this|ChildBoardQuery The current query, for fluid interface
     */
    public function filterByUserId($userId = null, $comparison = null)
    {
        if (is_array($userId)) {
            $useMinMax = false;
            if (isset($userId['min'])) {
                $this->addUsingAlias(BoardTableMap::COL_USER_ID, $userId['min'], Criteria::GREATER_EQUAL);
                $useMinMax = true;
            }
            if (isset($userId['max'])) {
                $this->addUsingAlias(BoardTableMap::COL_USER_ID, $userId['max'], Criteria::LESS_EQUAL);
                $useMinMax = true;
            }
            if ($useMinMax) {
                return $this;
            }
            if (null === $comparison) {
                $comparison = Criteria::IN;
            }
        }

        return $this->addUsingAlias(BoardTableMap::COL_USER_ID, $userId, $comparison);
    }

    /**
     * Filter the query on the entity column
     *
     * Example usage:
     * <code>
     * $query->filterByEntity('fooValue');   // WHERE entity = 'fooValue'
     * $query->filterByEntity('%fooValue%', Criteria::LIKE); // WHERE entity LIKE '%fooValue%'
     * </code>
     *
     * @param     string $entity The value to use as filter.
     * @param     string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @return $this|ChildBoardQuery The current query, for fluid interface
     */
    public function filterByEntity($entity = null, $comparison = null)
    {
        if (null === $comparison) {
            if (is_array($entity)) {
                $comparison = Criteria::IN;
            }
        }

        return $this->addUsingAlias(BoardTableMap::COL_ENTITY, $entity, $comparison);
    }

    /**
     * Filter the query on the title column
     *
     * Example usage:
     * <code>
     * $query->filterByTitle('fooValue');   // WHERE title = 'fooValue'
     * $query->filterByTitle('%fooValue%', Criteria::LIKE); // WHERE title LIKE '%fooValue%'
     * </code>
     *
     * @param     string $title The value to use as filter.
     * @param     string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @return $this|ChildBoardQuery The current query, for fluid interface
     */
    public function filterByTitle($title = null, $comparison = null)
    {
        if (null === $comparison) {
            if (is_array($title)) {
                $comparison = Criteria::IN;
            }
        }

        return $this->addUsingAlias(BoardTableMap::COL_TITLE, $title, $comparison);
    }

    /**
     * Filter the query on the contents column
     *
     * Example usage:
     * <code>
     * $query->filterByContents('fooValue');   // WHERE contents = 'fooValue'
     * $query->filterByContents('%fooValue%', Criteria::LIKE); // WHERE contents LIKE '%fooValue%'
     * </code>
     *
     * @param     string $contents The value to use as filter.
     * @param     string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @return $this|ChildBoardQuery The current query, for fluid interface
     */
    public function filterByContents($contents = null, $comparison = null)
    {
        if (null === $comparison) {
            if (is_array($contents)) {
                $comparison = Criteria::IN;
            }
        }

        return $this->addUsingAlias(BoardTableMap::COL_CONTENTS, $contents, $comparison);
    }

    /**
     * Filter the query on the created_at column
     *
     * Example usage:
     * <code>
     * $query->filterByCreatedAt('2011-03-14'); // WHERE created_at = '2011-03-14'
     * $query->filterByCreatedAt('now'); // WHERE created_at = '2011-03-14'
     * $query->filterByCreatedAt(array('max' => 'yesterday')); // WHERE created_at > '2011-03-13'
     * </code>
     *
     * @param     mixed $createdAt The value to use as filter.
     *              Values can be integers (unix timestamps), DateTime objects, or strings.
     *              Empty strings are treated as NULL.
     *              Use scalar values for equality.
     *              Use array values for in_array() equivalent.
     *              Use associative array('min' => $minValue, 'max' => $maxValue) for intervals.
     * @param     string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @return $this|ChildBoardQuery The current query, for fluid interface
     */
    public function filterByCreatedAt($createdAt = null, $comparison = null)
    {
        if (is_array($createdAt)) {
            $useMinMax = false;
            if (isset($createdAt['min'])) {
                $this->addUsingAlias(BoardTableMap::COL_CREATED_AT, $createdAt['min'], Criteria::GREATER_EQUAL);
                $useMinMax = true;
            }
            if (isset($createdAt['max'])) {
                $this->addUsingAlias(BoardTableMap::COL_CREATED_AT, $createdAt['max'], Criteria::LESS_EQUAL);
                $useMinMax = true;
            }
            if ($useMinMax) {
                return $this;
            }
            if (null === $comparison) {
                $comparison = Criteria::IN;
            }
        }

        return $this->addUsingAlias(BoardTableMap::COL_CREATED_AT, $createdAt, $comparison);
    }

    /**
     * Filter the query on the updated_at column
     *
     * Example usage:
     * <code>
     * $query->filterByUpdatedAt('2011-03-14'); // WHERE updated_at = '2011-03-14'
     * $query->filterByUpdatedAt('now'); // WHERE updated_at = '2011-03-14'
     * $query->filterByUpdatedAt(array('max' => 'yesterday')); // WHERE updated_at > '2011-03-13'
     * </code>
     *
     * @param     mixed $updatedAt The value to use as filter.
     *              Values can be integers (unix timestamps), DateTime objects, or strings.
     *              Empty strings are treated as NULL.
     *              Use scalar values for equality.
     *              Use array values for in_array() equivalent.
     *              Use associative array('min' => $minValue, 'max' => $maxValue) for intervals.
     * @param     string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @return $this|ChildBoardQuery The current query, for fluid interface
     */
    public function filterByUpdatedAt($updatedAt = null, $comparison = null)
    {
        if (is_array($updatedAt)) {
            $useMinMax = false;
            if (isset($updatedAt['min'])) {
                $this->addUsingAlias(BoardTableMap::COL_UPDATED_AT, $updatedAt['min'], Criteria::GREATER_EQUAL);
                $useMinMax = true;
            }
            if (isset($updatedAt['max'])) {
                $this->addUsingAlias(BoardTableMap::COL_UPDATED_AT, $updatedAt['max'], Criteria::LESS_EQUAL);
                $useMinMax = true;
            }
            if ($useMinMax) {
                return $this;
            }
            if (null === $comparison) {
                $comparison = Criteria::IN;
            }
        }

        return $this->addUsingAlias(BoardTableMap::COL_UPDATED_AT, $updatedAt, $comparison);
    }

    /**
     * Filter the query by a related \App\Models\User object
     *
     * @param \App\Models\User|ObjectCollection $user The related object(s) to use as filter
     * @param string $comparison Operator to use for the column comparison, defaults to Criteria::EQUAL
     *
     * @throws \Propel\Runtime\Exception\PropelException
     *
     * @return ChildBoardQuery The current query, for fluid interface
     */
    public function filterByUser($user, $comparison = null)
    {
        if ($user instanceof \App\Models\User) {
            return $this
                ->addUsingAlias(BoardTableMap::COL_USER_ID, $user->getId(), $comparison);
        } elseif ($user instanceof ObjectCollection) {
            if (null === $comparison) {
                $comparison = Criteria::IN;
            }

            return $this
                ->addUsingAlias(BoardTableMap::COL_USER_ID, $user->toKeyValue('PrimaryKey', 'Id'), $comparison);
        } else {
            throw new PropelException('filterByUser() only accepts arguments of type \App\Models\User or Collection');
        }
    }

    /**
     * Adds a JOIN clause to the query using the User relation
     *
     * @param     string $relationAlias optional alias for the relation
     * @param     string $joinType Accepted values are null, 'left join', 'right join', 'inner join'
     *
     * @return $this|ChildBoardQuery The current query, for fluid interface
     */
    public function joinUser($relationAlias = null, $joinType = Criteria::INNER_JOIN)
    {
        $tableMap = $this->getTableMap();
        $relationMap = $tableMap->getRelation('User');

        // create a ModelJoin object for this join
        $join = new ModelJoin();
        $join->setJoinType($joinType);
        $join->setRelationMap($relationMap, $this->useAliasInSQL ? $this->getModelAlias() : null, $relationAlias);
        if ($previousJoin = $this->getPreviousJoin()) {
            $join->setPreviousJoin($previousJoin);
        }

        // add the ModelJoin to the current object
        if ($relationAlias) {
            $this->addAlias($relationAlias, $relationMap->getRightTable()->getName());
            $this->addJoinObject($join, $relationAlias);
        } else {
            $this->addJoinObject($join, 'User');
        }

        return $this;
    }

    /**
     * Use the User relation User object
     *
     * @see useQuery()
     *
     * @param     string $relationAlias optional alias for the relation,
     *                                   to be used as main alias in the secondary query
     * @param     string $joinType Accepted values are null, 'left join', 'right join', 'inner join'
     *
     * @return \App\Models\UserQuery A secondary query class using the current class as primary query
     */
    public function useUserQuery($relationAlias = null, $joinType = Criteria::INNER_JOIN)
    {
        return $this
            ->joinUser($relationAlias, $joinType)
            ->useQuery($relationAlias ? $relationAlias : 'User', '\App\Models\UserQuery');
    }

    /**
     * Exclude object from result
     *
     * @param   ChildBoard $board Object to remove from the list of results
     *
     * @return $this|ChildBoardQuery The current query, for fluid interface
     */
    public function prune($board = null)
    {
        if ($board) {
            $this->addUsingAlias(BoardTableMap::COL_ID, $board->getId(), Criteria::NOT_EQUAL);
        }

        return $this;
    }

    /**
     * Deletes all rows from the board table.
     *
     * @param ConnectionInterface $con the connection to use
     * @return int The number of affected rows (if supported by underlying database driver).
     */
    public function doDeleteAll(ConnectionInterface $con = null)
    {
        if (null === $con) {
            $con = Propel::getServiceContainer()->getWriteConnection(BoardTableMap::DATABASE_NAME);
        }

        // use transaction because $criteria could contain info
        // for more than one table or we could emulating ON DELETE CASCADE, etc.
        return $con->transaction(function () use ($con) {
            $affectedRows = 0; // initialize var to track total num of affected rows
            $affectedRows += parent::doDeleteAll($con);
            // Because this db requires some delete cascade/set null emulation, we have to
            // clear the cached instance *after* the emulation has happened (since
            // instances get re-added by the select statement contained therein).
            BoardTableMap::clearInstancePool();
            BoardTableMap::clearRelatedInstancePool();

            return $affectedRows;
        });
    }

    /**
     * Performs a DELETE on the database based on the current ModelCriteria
     *
     * @param ConnectionInterface $con the connection to use
     * @return int             The number of affected rows (if supported by underlying database driver).  This includes CASCADE-related rows
     *                         if supported by native driver or if emulated using Propel.
     * @throws PropelException Any exceptions caught during processing will be
     *                         rethrown wrapped into a PropelException.
     */
    public function delete(ConnectionInterface $con = null)
    {
        if (null === $con) {
            $con = Propel::getServiceContainer()->getWriteConnection(BoardTableMap::DATABASE_NAME);
        }

        $criteria = $this;

        // Set the correct dbName
        $criteria->setDbName(BoardTableMap::DATABASE_NAME);

        // use transaction because $criteria could contain info
        // for more than one table or we could emulating ON DELETE CASCADE, etc.
        return $con->transaction(function () use ($con, $criteria) {
            $affectedRows = 0; // initialize var to track total num of affected rows

            BoardTableMap::removeInstanceFromPool($criteria);

            $affectedRows += ModelCriteria::delete($con);
            BoardTableMap::clearRelatedInstancePool();

            return $affectedRows;
        });
    }

    // timestampable behavior

    /**
     * Filter by the latest updated
     *
     * @param      int $nbDays Maximum age of the latest update in days
     *
     * @return     $this|ChildBoardQuery The current query, for fluid interface
     */
    public function recentlyUpdated($nbDays = 7)
    {
        return $this->addUsingAlias(BoardTableMap::COL_UPDATED_AT, time() - $nbDays * 24 * 60 * 60, Criteria::GREATER_EQUAL);
    }

    /**
     * Order by update date desc
     *
     * @return     $this|ChildBoardQuery The current query, for fluid interface
     */
    public function lastUpdatedFirst()
    {
        return $this->addDescendingOrderByColumn(BoardTableMap::COL_UPDATED_AT);
    }

    /**
     * Order by update date asc
     *
     * @return     $this|ChildBoardQuery The current query, for fluid interface
     */
    public function firstUpdatedFirst()
    {
        return $this->addAscendingOrderByColumn(BoardTableMap::COL_UPDATED_AT);
    }

    /**
     * Order by create date desc
     *
     * @return     $this|ChildBoardQuery The current query, for fluid interface
     */
    public function lastCreatedFirst()
    {
        return $this->addDescendingOrderByColumn(BoardTableMap::COL_CREATED_AT);
    }

    /**
     * Filter by the latest created
     *
     * @param      int $nbDays Maximum age of in days
     *
     * @return     $this|ChildBoardQuery The current query, for fluid interface
     */
    public function recentlyCreated($nbDays = 7)
    {
        return $this->addUsingAlias(BoardTableMap::COL_CREATED_AT, time() - $nbDays * 24 * 60 * 60, Criteria::GREATER_EQUAL);
    }

    /**
     * Order by create date asc
     *
     * @return     $this|ChildBoardQuery The current query, for fluid interface
     */
    public function firstCreatedFirst()
    {
        return $this->addAscendingOrderByColumn(BoardTableMap::COL_CREATED_AT);
    }

} // BoardQuery
