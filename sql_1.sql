SELECT
    `date` AS `day`,
    SUM(CASE WHEN score > 0 THEN 1 ELSE 0 END) AS `num_pos_scores`,
    SUM(CASE WHEN score < 0 THEN 1 ELSE 0 END) AS `num_neg_scores`
FROM `assessments`
WHERE `date` >= '2011-03-01' AND `date` <= '2011-04-30'
GROUP BY `day`
