package org.project.servergame;

import org.project.servergame.tables.CurrentGame;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.Optional;

@Repository
public interface ICurrentGameRepository extends CrudRepository<CurrentGame,Integer> {

    CurrentGame findBySessionIdAndEndDateIsNull(String sessionId);

    Optional<CurrentGame> findBySessionId(String userId);


}
