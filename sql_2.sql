SELECT `date` AS `day`
FROM `assessments`
WHERE `date` >= '2011-01-01' AND `date` <= '2011-06-30'
GROUP BY `day`
HAVING SUM(CASE WHEN score < 0 THEN 1 ELSE 0 END) = 0
