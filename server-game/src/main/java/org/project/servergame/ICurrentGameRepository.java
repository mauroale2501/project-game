package org.project.servergame;

import org.project.servergame.tables.CurrentGame;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface ICurrentGameRepository extends CrudRepository<CurrentGame,Integer> {

    CurrentGame findBySessionIdAndEndDateIsNull(String sessionId);

    Optional<CurrentGame> findBySessionId(String userId);


    List<CurrentGame> findAllBySessionIdAndLevelId(String userId, int levelId);
    List<CurrentGame> findAllBySessionIdAndLevelIdAndEndDateNull(String userId, int levelId);

}
